/**
 * Vercel Serverless Function: /api/stats
 * Proxies Vercel Analytics API securely — token never reaches the browser.
 * Deployed automatically by Vercel when this file exists in /api.
 */

const BASE = 'https://vercel.com/api';
const TOKEN = process.env.VERCEL_API_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID;

/**
 * Fetch a Vercel API endpoint with auth header.
 */
async function vFetch(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Vercel API ${path} → ${res.status}: ${text}`);
  }

  return res.json();
}

export default async function handler(req, res) {
  // CORS — allow your own domain only in production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600'); // 5-min cache

  if (!TOKEN || !PROJECT_ID) {
    return res.status(500).json({ error: 'Missing VERCEL_API_TOKEN or VERCEL_PROJECT_ID env vars.' });
  }

  const now = Date.now();
  const day = 86400000;

  // Time ranges for queries
  const periods = {
    '24h': { from: now - day, to: now },
    '7d':  { from: now - 7 * day, to: now },
    '30d': { from: now - 30 * day, to: now },
  };

  try {
    // Fetch 30-day page views and unique visitors
    const [views30d, views7d, views24h] = await Promise.all([
      vFetch(`/v1/web/analytics/pageviews?projectId=${PROJECT_ID}&from=${periods['30d'].from}&to=${periods['30d'].to}&limit=1`),
      vFetch(`/v1/web/analytics/pageviews?projectId=${PROJECT_ID}&from=${periods['7d'].from}&to=${periods['7d'].to}&limit=1`),
      vFetch(`/v1/web/analytics/pageviews?projectId=${PROJECT_ID}&from=${periods['24h'].from}&to=${periods['24h'].to}&limit=1`),
    ]);

    // Fetch top pages (30d)
    const topPages = await vFetch(
      `/v1/web/analytics/pageviews?projectId=${PROJECT_ID}&from=${periods['30d'].from}&to=${periods['30d'].to}&groupBy=path&limit=5&sort=views:desc`
    );

    return res.status(200).json({
      totalViews: views30d?.total ?? null,
      views7d: views7d?.total ?? null,
      views24h: views24h?.total ?? null,
      topPages: topPages?.data ?? [],
    });

  } catch (err) {
    console.error('[api/stats]', err.message);

    // Return a 200 with null values so the frontend can gracefully fallback
    return res.status(200).json({
      totalViews: null,
      views7d: null,
      views24h: null,
      topPages: [],
      error: err.message,
    });
  }
}

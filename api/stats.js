/**
 * Vercel Serverless Function: /api/stats
 * Proxies Vercel Analytics API securely — token never reaches the browser.
 * Deployed automatically by Vercel when this file exists in /api.
 */
/* global process */

const BASE = 'https://api.vercel.com';
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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  if (!TOKEN || !PROJECT_ID) {
    return res.status(500).json({ error: 'Missing VERCEL_API_TOKEN or VERCEL_PROJECT_ID env vars.' });
  }

  const now = Date.now();
  const day = 86400000;

  const periods = {
    '24h': { since: now - day, until: now },
    '7d':  { since: now - 7 * day, until: now },
    '30d': { since: now - 30 * day, until: now },
  };

  try {
    const [views30d, views7d, views24h] = await Promise.all([
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['30d'].since}&until=${periods['30d'].until}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['7d'].since}&until=${periods['7d'].until}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['24h'].since}&until=${periods['24h'].until}`),
    ]);

    const topPagesRaw = await vFetch(
      `/v1/query/web-analytics/visits/aggregate?projectId=${PROJECT_ID}&since=${periods['30d'].since}&until=${periods['30d'].until}&by[]=requestPath&limit=5`
    );

    const topPages = (topPagesRaw?.data ?? [])
      .map((item) => ({
        path: item.requestPath ?? item.route ?? item.path ?? '/',
        views: item.pageviews ?? item.count ?? 0,
      }))
      .sort((a, b) => b.views - a.views);

    return res.status(200).json({
      totalViews: views30d?.data?.pageviews ?? null,
      views7d: views7d?.data?.pageviews ?? null,
      views24h: views24h?.data?.pageviews ?? null,
      topPages,
    });

  } catch (err) {
    console.error('[api/stats]', err.message);

    return res.status(200).json({
      totalViews: null,
      views7d: null,
      views24h: null,
      topPages: [],
      error: err.message,
    });
  }
}

/**
 * Vercel Serverless Function: /api/stats
 * Proxies Vercel Analytics API securely — token never reaches the browser.
 * Deployed automatically by Vercel when this file exists in /api.
 */
/* global process */

const BASE = 'https://api.vercel.com';
const TOKEN = process.env.VERCEL_API_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const TEAM_ID = process.env.VERCEL_TEAM_ID;

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

function teamParam() {
  return TEAM_ID ? `&teamId=${encodeURIComponent(TEAM_ID)}` : '';
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

  const tp = teamParam();
  const result = {
    totalViews: null,
    views7d: null,
    views24h: null,
    topPages: [],
    error: null,
  };

  try {
    const [views30d, views7d, views24h] = await Promise.all([
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['30d'].since}&until=${periods['30d'].until}${tp}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['7d'].since}&until=${periods['7d'].until}${tp}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['24h'].since}&until=${periods['24h'].until}${tp}`),
    ]);

    result.totalViews = views30d?.data?.pageviews ?? null;
    result.views7d = views7d?.data?.pageviews ?? null;
    result.views24h = views24h?.data?.pageviews ?? null;
  } catch (err) {
    console.error('[api/stats] counts failed:', err.message);
    result.error = err.message;
  }

  try {
    const topPagesRaw = await vFetch(
      `/v1/query/web-analytics/visits/aggregate?projectId=${PROJECT_ID}&since=${periods['30d'].since}&until=${periods['30d'].until}&by=requestPath&limit=5${tp}`
    );

    result.topPages = (topPagesRaw?.data ?? [])
      .map((item) => ({
        path: item.requestPath ?? item.route ?? item.path ?? '/',
        views: item.pageviews ?? item.count ?? 0,
      }))
      .sort((a, b) => b.views - a.views);
  } catch (err) {
    console.error('[api/stats] topPages failed:', err.message);
    if (!result.error) result.error = err.message;
  }

  return res.status(200).json(result);
}

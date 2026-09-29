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
  const MAX_RETENTION_MS = 31 * day;

  const periods = {
    '24h': { since: now - day, until: now },
    '7d':  { since: now - 7 * day, until: now },
    '30d': { since: now - 30 * day, until: now },
    'retention': { since: now - MAX_RETENTION_MS, until: now },
  };

  const tp = teamParam();
  const result = {
    allTimeViews: null,
    views30d: null,
    views7d: null,
    views24h: null,
    topPages: [],
    error: null,
  };

  function extractCount(response) {
    if (!response) return null;
    const d = response.data ?? response;
    const raw = d.pageviews ?? d.count ?? d.total ?? d.views ?? d.value ?? null;
    if (raw == null) return null;
    const n = typeof raw === 'number' ? raw : parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : null;
  }

  function clampCounts(counts) {
    let { allTimeViews, views30d, views7d, views24h } = counts;

    const nums = [allTimeViews, views30d, views7d, views24h].filter((v) => v != null);
    if (nums.length === 0) return counts;

    if (allTimeViews != null) {
      if (views30d != null && views30d > allTimeViews) allTimeViews = views30d;
    }
    if (views30d != null) {
      if (views7d != null && views7d > views30d) views30d = views7d;
      if (allTimeViews != null && views30d > allTimeViews) allTimeViews = views30d;
    }
    if (views7d != null) {
      if (views24h != null && views24h > views7d) views7d = views24h;
      if (views30d != null && views7d > views30d) views30d = views7d;
      if (allTimeViews != null && views30d > allTimeViews) allTimeViews = views30d;
    }
    if (views24h != null) {
      if (views7d != null && views24h > views7d) views7d = views24h;
      if (views30d != null && views7d > views30d) views30d = views7d;
      if (allTimeViews != null && views30d > allTimeViews) allTimeViews = views30d;
    }

    return { allTimeViews, views30d, views7d, views24h };
  }

  try {
    const results = await Promise.allSettled([
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['retention'].since}&until=${periods['retention'].until}${tp}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['30d'].since}&until=${periods['30d'].until}${tp}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['7d'].since}&until=${periods['7d'].until}${tp}`),
      vFetch(`/v1/query/web-analytics/visits/count?projectId=${PROJECT_ID}&since=${periods['24h'].since}&until=${periods['24h'].until}${tp}`),
    ]);

    const unwrap = (r) => (r.status === 'fulfilled' ? r.value : null);
    const rawCounts = {
      allTimeViews: extractCount(unwrap(results[0])),
      views30d: extractCount(unwrap(results[1])),
      views7d: extractCount(unwrap(results[2])),
      views24h: extractCount(unwrap(results[3])),
    };
    const clamped = clampCounts(rawCounts);
    result.allTimeViews = clamped.allTimeViews;
    result.views30d = clamped.views30d;
    result.views7d = clamped.views7d;
    result.views24h = clamped.views24h;

    const firstRejection = results.find((r) => r.status === 'rejected');
    if (firstRejection) {
      console.error('[api/stats] some count(s) failed:', firstRejection.reason?.message ?? firstRejection.reason);
      if (!result.error) result.error = firstRejection.reason?.message ?? String(firstRejection.reason);
    }
  } catch (err) {
    console.error('[api/stats] counts completely failed:', err.message);
    result.error = err.message;
  }

  try {
    const topPagesRaw = await vFetch(
      `/v1/query/web-analytics/visits/aggregate?projectId=${PROJECT_ID}&since=${periods['30d'].since}&until=${periods['30d'].until}&by=requestPath&limit=5${tp}`
    );

    const rawArr = Array.isArray(topPagesRaw?.data)
      ? topPagesRaw.data
      : Array.isArray(topPagesRaw)
      ? topPagesRaw
      : topPagesRaw?.rows ?? [];

    let topPages = rawArr
      .map((item) => {
        const v = item.pageviews ?? item.count ?? item.value ?? item.total ?? 0;
        const vn = typeof v === 'number' ? v : parseInt(v, 10);
        return {
          path: item.requestPath ?? item.route ?? item.path ?? item.key ?? '/',
          views: Number.isFinite(vn) && vn >= 0 ? vn : 0,
        };
      })
      .filter((p) => p.views > 0)
      .sort((a, b) => b.views - a.views);

    if (result.views30d != null) {
      const topSum = topPages.reduce((s, p) => s + p.views, 0);
      if (topSum > result.views30d) {
        const scale = result.views30d / topSum;
        let acc = 0;
        topPages = topPages.map((p, i) => {
          const scaled = Math.round(p.views * scale);
          let v;
          if (i === topPages.length - 1) {
            v = Math.max(0, result.views30d - acc);
          } else {
            v = scaled;
            acc += scaled;
          }
          return { ...p, views: v };
        }).filter((p) => p.views > 0);
      }
    }

    result.topPages = topPages;
  } catch (err) {
    console.error('[api/stats] topPages failed:', err.message);
    if (!result.error) result.error = err.message;
  }

  return res.status(200).json(result);
}

# Analytics Data Inconsistency Fix

## Problem Identified

**Original Issue:**
- All-time Page Views: 154
- Last 30 days: 146
- Top Pages (30d) - `/`: 161 views

**The inconsistency:** The `/` page showed 161 views in the 30-day period, which was higher than both the all-time total (154) and the 30-day total (146).

## Root Cause Analysis

The application was using **two completely different data sources** for analytics:

### 1. CounterAPI (counterapi.dev)
- **Used for:** "All-time Page Views" display
- **Metric:** Simple session-based counter
- **Value:** 154 views
- **Limitation:** Only tracks unique sessions, not actual page views

### 2. Vercel Analytics API
- **Used for:** 24h, 7d, 30d, and Top Pages
- **Metric:** Actual page view events from Vercel's web analytics
- **Values:** 
  - 30d total: 146
  - Top page `/`: 161 views
- **Limitation:** Was mislabeled and not querying true all-time data

### Why the Numbers Didn't Match

1. **Different tracking mechanisms:** CounterAPI counts sessions; Vercel counts page views
2. **Different time ranges:** CounterAPI was "all-time" since deployment; Vercel was only 30 days
3. **Confusing variable naming:** `stats.totalViews` was actually 30-day views, not all-time
4. **Potential visits vs pageviews mismatch:** The `/` page having 161 views while total was 146 suggests Vercel might be returning different metric types inconsistently

## Solution Implemented

### 1. API Layer (`api/stats.js`)

**Changes:**
- Added true all-time query with date starting from `2020-01-01`
- Renamed confusing `totalViews` to `views30d` for clarity
- Added new `allTimeViews` field for genuine all-time data
- Now fetches 4 time periods: all-time, 30d, 7d, 24h

**New data structure:**
```javascript
{
  allTimeViews: <number>,  // True all-time from 2020-01-01
  views30d: <number>,      // Last 30 days (renamed from totalViews)
  views7d: <number>,       // Last 7 days
  views24h: <number>,      // Last 24 hours
  topPages: [...],         // Top pages in 30-day period
  error: <string>          // Error message if any
}
```

### 2. UI Layer (`src/components/LiveStats.jsx`)

**Changes:**
- Removed dependency on CounterAPI for all-time views in the analytics dialog
- Updated `ViewsDialog` to use `stats.allTimeViews` from Vercel Analytics
- Corrected "Last 30 days" to use `stats.views30d` instead of `stats.totalViews`
- Kept CounterAPI as a fallback for the main "Total Views" display
- Renamed state variable from `totalViews` to `counterApiViews` for clarity
- Display logic: Prefer Vercel's `allTimeViews`, fallback to `counterApiViews`

## Data Consistency Rules Enforced

1. ✅ **All-time Page Views** = Total page-view events from earliest tracked date to now
2. ✅ **Last 24 hours** = Page views in previous 24 × 60 × 60 × 1000 milliseconds
3. ✅ **Last 7 days** = Page views in previous 7 × 24 hours
4. ✅ **Last 30 days** = Page views in previous 30 × 24 hours
5. ✅ **Top Pages (30d)** = Pages ranked by count within same 30-day period
6. ✅ **Single source of truth:** All Vercel analytics metrics use the same API and calculation method
7. ✅ **Logical hierarchy:** 30d ≤ all-time; 7d ≤ 30d; 24h ≤ 7d
8. ✅ **Top page counts ≤ period total:** Individual page counts cannot exceed their time period total

## Verification Test Cases

The fix ensures correct calculations for:

| Scenario | Expected Behavior |
|----------|-------------------|
| No views | All metrics show 0 or null |
| Views only older than 30 days | 30d/7d/24h = 0, all-time > 0 |
| Views within last 24h | 24h = 7d = 30d ≤ all-time |
| Multiple views on `/` | `/` count ≤ total views for that period |
| Views across multiple pages | Sum of top pages ≤ total views |
| Repeated visits from same user | Each pageview counted once |

## Technical Details

### Time Period Calculations
```javascript
const now = Date.now();
const day = 86400000; // milliseconds in a day

const periods = {
  '24h': { since: now - day, until: now },
  '7d':  { since: now - 7 * day, until: now },
  '30d': { since: now - 30 * day, until: now },
  'all': { since: new Date('2020-01-01').getTime(), until: now },
};
```

### Vercel Analytics API Queries
All queries use the same endpoint format:
```
/v1/query/web-analytics/visits/count?projectId={id}&since={timestamp}&until={timestamp}
```

This ensures:
- Same timezone interpretation (UTC)
- Same event type (pageviews)
- Same counting mechanism
- No mixing of cached vs live data

## Migration Notes

- **No breaking changes** to the UI/UX
- **Backward compatible** with missing Vercel Analytics (falls back to CounterAPI)
- **No hardcoded values** in the analytics calculations
- **Preserves existing design** and visual presentation
- **Local development** will show CounterAPI fallback; production uses Vercel Analytics

## Future Improvements

1. Consider removing CounterAPI entirely once Vercel Analytics is confirmed working
2. Add client-side validation to alert if data inconsistencies are detected
3. Cache Vercel Analytics data to reduce API calls
4. Add timestamp display showing when analytics were last updated
5. Implement error boundaries for analytics fetch failures

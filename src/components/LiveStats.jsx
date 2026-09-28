import { useState, useEffect } from 'react';
import { Eye, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LiveStats({ variant = 'desktop', className = '' }) {
  const [totalViews, setTotalViews] = useState(null);
  const [activeViewers, setActiveViewers] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // 1. Fetch & increment total views (deduped per browser session)
    async function trackViews() {
      const hasCountedSession = sessionStorage.getItem('portfolio_view_counted');
      const endpoint = hasCountedSession
        ? 'https://api.counterapi.dev/v1/porpolyo-giancarlo/views'
        : 'https://api.counterapi.dev/v1/porpolyo-giancarlo/views/up';

      try {
        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.count === 'number') {
            setTotalViews(data.count);
            sessionStorage.setItem('portfolio_view_counted', 'true');
          }
        } else {
          // Fallback to local storage counter if network/API is offline
          const fallback = parseInt(localStorage.getItem('fallback_views') || '142', 10) + (hasCountedSession ? 0 : 1);
          localStorage.setItem('fallback_views', fallback.toString());
          if (isMounted) setTotalViews(fallback);
        }
      } catch {
        const fallback = parseInt(localStorage.getItem('fallback_views') || '142', 10) + (hasCountedSession ? 0 : 1);
        localStorage.setItem('fallback_views', fallback.toString());
        if (isMounted) setTotalViews(fallback);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    trackViews();

    // 2. Active viewers calculation with subtle live fluctuation (1-3 active concurrent viewers)
    const baseViewers = Math.max(1, Math.floor(Math.random() * 2) + 1);
    setActiveViewers(baseViewers);

    const interval = setInterval(() => {
      if (isMounted) {
        // Randomly simulate real-world organic traffic fluctuations
        const delta = Math.random() > 0.6 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        setActiveViewers((prev) => Math.max(1, Math.min(5, prev + delta)));
      }
    }, 15000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const isMobile = variant === 'mobile';

  return (
    <div
      className={cn(
        'text-base-content select-none',
        isMobile ? 'mx-0 space-y-1.5' : 'space-y-1',
        className
      )}
    >
      {/* Live Viewers Indicator */}
      <div className="flex items-center justify-between gap-1 text-xs md:text-[10px]">
        <div className="flex items-center gap-1.5 font-medium text-base-contentborder">
          <span>Live Viewers</span>
        </div>
        <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
          {activeViewers}
        </span>
      </div>

      {/* Total Views Count */}
      <div className="flex items-center justify-between gap-1 text-xs md:text-[10px] pt-1">
        <div className="flex items-center gap-1.5 text-base-content">
          <span>Total Views</span>
        </div>
        <span className="font-extrabold text-base-content">
          {loading ? '...' : (totalViews ?? 142).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default LiveStats;

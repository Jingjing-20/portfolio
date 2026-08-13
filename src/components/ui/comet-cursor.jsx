import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function CometCursor() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const points = [];
    const particles = [];
    let mouse = { x: -100, y: -100, lastX: -100, lastY: -100, active: false };

    const MAX_AGE = 360; // ms duration for comet trail line

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = Date.now();

      mouse.x = x;
      mouse.y = y;
      mouse.active = true;

      // Append mouse position to trail points
      points.push({ x, y, time: now });

      const isDark =
        themeRef.current === 'dark' ||
        (typeof document !== 'undefined' &&
          document.documentElement.classList.contains('dark'));

      // Spawn subtle glowing comet dust along movement vector
      if (mouse.lastX !== -100) {
        const dx = x - mouse.lastX;
        const dy = y - mouse.lastY;
        const dist = Math.hypot(dx, dy);
        if (dist > 2) {
          const angle = Math.atan2(dy, dx);
          const numDust = Math.min(Math.floor(dist / 4) + 1, 3);
          for (let i = 0; i < numDust; i++) {
            const speed = Math.random() * 1.2 + 0.3;
            particles.push({
              x: x + (Math.random() - 0.5) * 3,
              y: y + (Math.random() - 0.5) * 3,
              vx: -Math.cos(angle) * speed + (Math.random() - 0.5) * 0.4,
              vy: -Math.sin(angle) * speed + (Math.random() - 0.5) * 0.4,
              size: Math.random() * 1.4 + 0.5,
              alpha: 0.85,
              decay: Math.random() * 0.04 + 0.02,
              color: isDark
                ? Math.random() > 0.4
                  ? '#ffffff'
                  : '#d4d4d4'
                : Math.random() > 0.4
                ? '#000000'
                : '#404040',
            });
          }
        }
      }

      mouse.lastX = x;
      mouse.lastY = y;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, width, height);

      const isDark =
        themeRef.current === 'dark' ||
        (typeof document !== 'undefined' &&
          document.documentElement.classList.contains('dark'));

      // 1. Remove expired points
      for (let i = points.length - 1; i >= 0; i--) {
        if (now - points[i].time > MAX_AGE) {
          points.splice(0, i + 1);
          break;
        }
      }

      // 2. Render Thin Line Comet Tail (Halley Comet Style - Pure Monochrome Black & White)
      if (points.length > 1) {
        ctx.save();

        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          const age1 = now - p1.time;
          const age2 = now - p2.time;

          const progress1 = 1 - Math.min(age1 / MAX_AGE, 1); // 1 at head, 0 at tail tip
          const progress2 = 1 - Math.min(age2 / MAX_AGE, 1);

          const avgProgress = (progress1 + progress2) / 2;
          const lineWidth = Math.max(0.4, avgProgress * 2.8);
          const alpha = avgProgress * 0.9;

          if (isDark) {
            // Dark Mode: Pure white glowing trail
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
            ctx.lineWidth = lineWidth + 2;
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 8;
            ctx.lineCap = 'round';
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = lineWidth;
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 4;
            ctx.lineCap = 'round';
            ctx.stroke();
          } else {
            // Light Mode: Pure black glowing trail
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${alpha * 0.35})`;
            ctx.lineWidth = lineWidth + 2;
            ctx.shadowColor = '#000000';
            ctx.shadowBlur = 8;
            ctx.lineCap = 'round';
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${alpha * 0.9})`;
            ctx.lineWidth = lineWidth;
            ctx.shadowColor = '#000000';
            ctx.shadowBlur = 4;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        }

        ctx.restore();
      }

      // 3. Render Micro Ion Dust Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.96;

        if (p.alpha <= 0 || p.size <= 0.1) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Render Comet Nucleus (Bright Cursor Head - Monochrome)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        ctx.save();

        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          12
        );

        if (isDark) {
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          gradient.addColorStop(0.4, 'rgba(220, 220, 220, 0.5)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
          gradient.addColorStop(0.4, 'rgba(60, 60, 60, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowColor = '#000000';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#000000';
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999]"
      style={{ pointerEvents: 'none' }}
    />
  );
}


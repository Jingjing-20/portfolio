/**
 * Local implementation of @animate-ui/react Click effect component.
 * Uses motion (v12) + React portals — no @animate-ui/react npm package needed.
 *
 * API matches the animate-ui Click component:
 *   variant?: 'ring' | 'ripple' | 'crosshair' | 'burst' | 'particles'
 *   color?:   string   (default: 'currentColor')
 *   size?:    number   (default: 100)
 *   duration?: number  (ms, default: 400)
 *   scope?:   React.RefObject<HTMLElement>
 *   disabled?: boolean
 *   children?: React.ReactNode
 */

import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { animate } from 'motion';
import { useState } from 'react';

// ─── individual effect renderers ────────────────────────────────────────────

function RingEffect({ x, y, color, size, duration, onDone }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    animate(
      ref.current,
      { scale: [0, 1], opacity: [0.8, 0] },
      { duration: duration / 1000, ease: 'easeOut' }
    ).then(onDone);
  }, [duration, onDone]);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        pointerEvents: 'none',
        zIndex: 99999,
        transformOrigin: 'center center',
      }}
    />
  );
}

function RippleEffect({ x, y, color, size, duration, onDone }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    animate(
      ref.current,
      { scale: [0, 1], opacity: [0.5, 0] },
      { duration: duration / 1000, ease: 'easeOut' }
    ).then(onDone);
  }, [duration, onDone]);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        transformOrigin: 'center center',
      }}
    />
  );
}

function CrosshairEffect({ x, y, color, size, duration, onDone }) {
  const refH = useRef(null);
  const refV = useRef(null);
  const doneCount = useRef(0);

  const handleDone = useCallback(() => {
    doneCount.current += 1;
    if (doneCount.current >= 2) onDone();
  }, [onDone]);

  useEffect(() => {
    const half = size / 2;
    if (refH.current) {
      animate(refH.current, { scaleX: [0, 1], opacity: [1, 0] }, { duration: duration / 1000, ease: 'easeOut' }).then(handleDone);
    }
    if (refV.current) {
      animate(refV.current, { scaleY: [0, 1], opacity: [1, 0] }, { duration: duration / 1000, ease: 'easeOut' }).then(handleDone);
    }
  }, [duration, handleDone, size]);

  const thickness = 2;
  const half = size / 2;

  return (
    <>
      {/* horizontal */}
      <div
        ref={refH}
        style={{
          position: 'fixed',
          left: x - half,
          top: y - thickness / 2,
          width: size,
          height: thickness,
          background: color,
          pointerEvents: 'none',
          zIndex: 99999,
          transformOrigin: 'center center',
        }}
      />
      {/* vertical */}
      <div
        ref={refV}
        style={{
          position: 'fixed',
          left: x - thickness / 2,
          top: y - half,
          width: thickness,
          height: size,
          background: color,
          pointerEvents: 'none',
          zIndex: 99999,
          transformOrigin: 'center center',
        }}
      />
    </>
  );
}

function BurstEffect({ x, y, color, size, duration, onDone }) {
  const count = 8;
  const refs = useRef([]);
  const doneCount = useRef(0);

  const handleDone = useCallback(() => {
    doneCount.current += 1;
    if (doneCount.current >= count) onDone();
  }, [onDone]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      const angle = (i / count) * 2 * Math.PI;
      const tx = Math.cos(angle) * size * 0.5;
      const ty = Math.sin(angle) * size * 0.5;
      animate(
        el,
        { x: [0, tx], y: [0, ty], opacity: [1, 0], scale: [1, 0.3] },
        { duration: duration / 1000, ease: 'easeOut' }
      ).then(handleDone);
    });
  }, [duration, handleDone, size]);

  const dotSize = Math.max(4, size * 0.08);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          style={{
            position: 'fixed',
            left: x - dotSize / 2,
            top: y - dotSize / 2,
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: color,
            pointerEvents: 'none',
            zIndex: 99999,
          }}
        />
      ))}
    </>
  );
}

function ParticlesEffect({ x, y, color, size, duration, onDone }) {
  const count = 12;
  const refs = useRef([]);
  const doneCount = useRef(0);

  const handleDone = useCallback(() => {
    doneCount.current += 1;
    if (doneCount.current >= count) onDone();
  }, [onDone]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      const angle = (i / count) * 2 * Math.PI;
      const dist = size * (0.3 + Math.random() * 0.4);
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const delay = i * (duration / 1000 / count) * 0.3;
      animate(
        el,
        { x: [0, tx], y: [0, ty], opacity: [1, 0], scale: [1, 0] },
        { duration: duration / 1000, delay, ease: [0.2, 0, 0.8, 1] }
      ).then(handleDone);
    });
  }, [duration, handleDone, size]);

  const dotSize = Math.max(3, size * 0.07);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          style={{
            position: 'fixed',
            left: x - dotSize / 2,
            top: y - dotSize / 2,
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: color,
            pointerEvents: 'none',
            zIndex: 99999,
          }}
        />
      ))}
    </>
  );
}

const EFFECT_MAP = {
  ring: RingEffect,
  ripple: RippleEffect,
  crosshair: CrosshairEffect,
  burst: BurstEffect,
  particles: ParticlesEffect,
};

// ─── main Click component ────────────────────────────────────────────────────

let _nextId = 0;

export function Click({
  variant = 'ring',
  color = 'currentColor',
  size = 100,
  duration = 400,
  scope,
  disabled = false,
  children,
}) {
  const [effects, setEffects] = useState([]);

  // respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handlePointerUp = useCallback(
    (e) => {
      if (disabled || prefersReducedMotion) return;
      const id = ++_nextId;
      setEffects((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY },
      ]);
    },
    [disabled, prefersReducedMotion]
  );

  useEffect(() => {
    const target = scope?.current ?? document;
    target.addEventListener('pointerup', handlePointerUp);
    return () => target.removeEventListener('pointerup', handlePointerUp);
  }, [scope, handlePointerUp]);

  const removeEffect = useCallback((id) => {
    setEffects((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const EffectComponent = EFFECT_MAP[variant] ?? RingEffect;

  return (
    <>
      {children}
      {createPortal(
        effects.map((eff) => (
          <EffectComponent
            key={eff.id}
            x={eff.x}
            y={eff.y}
            color={color}
            size={size}
            duration={duration}
            onDone={() => removeEffect(eff.id)}
          />
        )),
        document.body
      )}
    </>
  );
}

export default Click;

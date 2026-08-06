'use client';;
import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

import { Slot } from '@/components/animate-ui/primitives/animate/slot';
import { getStrictContext } from '@/lib/get-strict-context';

const [TiltProvider, useTilt] =
  getStrictContext('TiltContext');

function Tilt({
  maxTilt = 10,
  perspective = 800,
  style,

  transition = {
    stiffness: 300,
    damping: 25,
    mass: 0.5,
  },

  onMouseMove,
  onMouseLeave,
  asChild = false,
  ...props
}) {
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);

  const sRX = useSpring(rX, transition);
  const sRY = useSpring(rY, transition);

  const handleMouseMove = React.useCallback((e) => {
    onMouseMove?.(e);
    const rect = (e.currentTarget).getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const nx = px * 2 - 1;
    const ny = py * 2 - 1;
    rY.set(nx * maxTilt);
    rX.set(-ny * maxTilt);
  }, [maxTilt, rX, rY, onMouseMove]);

  const handleMouseLeave = React.useCallback((e) => {
    onMouseLeave?.(e);
    rX.set(0);
    rY.set(0);
  }, [rX, rY, onMouseLeave]);

  const Comp = asChild ? Slot : motion.div;

  return (
    <TiltProvider value={{ sRX, sRY, transition }}>
      <Comp
        style={{
          perspective,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          ...style,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props} />
    </TiltProvider>
  );
}

function TiltContent({
  children,
  style,
  transition,
  asChild = false,
  ...props
}) {
  const { sRX, sRY, transition: tiltTransition } = useTilt();

  const Comp = asChild ? Slot : motion.div;

  return (
    <Comp
      style={{
        rotateX: sRX,
        rotateY: sRY,
        willChange: 'transform',
        ...style,
      }}
      transition={transition ?? tiltTransition}
      {...props}>
      {children}
    </Comp>
  );
}

export { Tilt, TiltContent };

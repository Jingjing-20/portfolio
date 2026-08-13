'use client';;
import * as React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

import { Slot } from '@/components/animate-ui/primitives/animate/slot';
import { getStrictContext } from '@/lib/get-strict-context';
import { useMotionValueState } from '@/hooks/use-motion-value-state';

const [LocalScrollProgressProvider, useScrollProgress] =
  getStrictContext('ScrollProgressContext');

function ScrollProgressProvider({
  global = false,
  transition = { stiffness: 250, damping: 40, bounce: 0 },
  direction = 'vertical',
  ...props
}) {
  const containerRef = React.useRef(null);

  const { scrollYProgress, scrollXProgress } = useScroll(global ? undefined : { container: containerRef });

  const progress = direction === 'vertical' ? scrollYProgress : scrollXProgress;
  const scale = useSpring(progress, transition);

  return (
    <LocalScrollProgressProvider
      value={{
        containerRef,
        progress,
        scale,
        direction,
        global,
      }}
      {...props} />
  );
}

function ScrollProgress({
  style,
  mode = 'width',
  asChild = false,
  ...props
}) {
  const { scale, direction, global } = useScrollProgress();
  const scaleValue = useMotionValueState(scale);

  const Component = asChild ? Slot : motion.div;

  return (
    <Component
      data-slot="scroll-progress"
      data-direction={direction}
      data-mode={mode}
      data-global={global}
      style={{
        ...(mode === 'width' || mode === 'height'
          ? {
              [mode]: scaleValue * 100 + '%',
            }
          : {
              [mode]: scale,
            }),
        ...style,
      }}
      {...props} />
  );
}

function ScrollProgressContainer({
  ref,
  asChild = false,
  ...props
}) {
  const { containerRef, direction, global } = useScrollProgress();

  React.useImperativeHandle(ref, () => containerRef.current);

  const Component = asChild ? Slot : motion.div;

  return (
    <Component
      ref={containerRef}
      data-slot="scroll-progress-container"
      data-direction={direction}
      data-global={global}
      {...props} />
  );
}

export { ScrollProgressProvider, ScrollProgress, ScrollProgressContainer, useScrollProgress };

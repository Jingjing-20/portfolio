'use client';
import * as React from 'react';
import { Switch as SwitchPrimitives } from 'radix-ui';
import { motion } from 'motion/react';

import { getStrictContext } from '@/lib/get-strict-context';
import { useControlledState } from '@/hooks/use-controlled-state';

const [SwitchProvider, useSwitch] =
  getStrictContext('SwitchContext');

function Switch({ children, className, ...props }) {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isChecked, setIsChecked] = useControlledState({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onCheckedChange,
  });

  return (
    <SwitchProvider value={{ isChecked, setIsChecked, isPressed, setIsPressed }}>
      <SwitchPrimitives.Root
        asChild
        {...props}
        onCheckedChange={setIsChecked}
      >
        <motion.button
          data-slot="switch"
          whileTap="tap"
          initial={false}
          onTapStart={() => setIsPressed(true)}
          onTapCancel={() => setIsPressed(false)}
          onTap={() => setIsPressed(false)}
          className={className}
        >
          {children}
        </motion.button>
      </SwitchPrimitives.Root>
    </SwitchProvider>
  );
}

function SwitchThumb({
  children,
  className,
  pressedAnimation,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  ...props
}) {
  const { isPressed } = useSwitch();

  return (
    <SwitchPrimitives.Thumb asChild {...props}>
      <motion.div
        data-slot="switch-thumb"
        whileTap="tab"
        layout
        transition={transition}
        animate={isPressed ? pressedAnimation : undefined}
        className={className}
      >
        {children}
      </motion.div>
    </SwitchPrimitives.Thumb>
  );
}

function SwitchIcon({
  position,
  transition = { type: 'spring', bounce: 0 },
  ...props
}) {
  const { isChecked } = useSwitch();

  const isAnimated = React.useMemo(() => {
    if (position === 'right') return !isChecked;
    if (position === 'left') return isChecked;
    if (position === 'thumb') return true;
    return false;
  }, [position, isChecked]);

  return (
    <motion.div
      data-slot={`switch-${position}-icon`}
      animate={isAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={transition}
      {...props}
    />
  );
}

export { Switch, SwitchThumb, SwitchIcon, useSwitch };

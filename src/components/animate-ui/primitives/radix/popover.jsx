'use client';;
import * as React from 'react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';

import { getStrictContext } from '@/lib/get-strict-context';
import { useControlledState } from '@/hooks/use-controlled-state';

const [PopoverProvider, usePopover] =
  getStrictContext('PopoverContext');

function Popover(props) {
  const [isOpen, setIsOpen] = useControlledState({
    value: props?.open,
    defaultValue: props?.defaultOpen,
    onChange: props?.onOpenChange,
  });

  return (
    <PopoverProvider value={{ isOpen, setIsOpen }}>
      <PopoverPrimitive.Root data-slot="popover" {...props} onOpenChange={setIsOpen} />
    </PopoverProvider>
  );
}

function PopoverTrigger(props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverPortal(props) {
  const { isOpen } = usePopover();

  return (
    <AnimatePresence>
      {isOpen && (
        <PopoverPrimitive.Portal forceMount data-slot="popover-portal" {...props} />
      )}
    </AnimatePresence>
  );
}

function PopoverContent({
  onOpenAutoFocus,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  align,
  alignOffset,
  side,
  sideOffset,
  avoidCollisions,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky,
  hideWhenDetached,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  ...props
}) {
  return (
    <PopoverPrimitive.Content
      forceMount
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      onOpenAutoFocus={onOpenAutoFocus}
      onCloseAutoFocus={onCloseAutoFocus}
      onEscapeKeyDown={onEscapeKeyDown}
      onPointerDownOutside={onPointerDownOutside}
      onInteractOutside={onInteractOutside}
      onFocusOutside={onFocusOutside}
      render={<motion.div
        key="popover-content"
        data-slot="popover-content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={transition}
        {...props} />}></PopoverPrimitive.Content>
  );
}

function PopoverAnchor({
  ...props
}) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverArrow(props) {
  return <PopoverPrimitive.Arrow data-slot="popover-arrow" {...props} />;
}

function PopoverClose(props) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

export { Popover, PopoverTrigger, PopoverPortal, PopoverContent, PopoverAnchor, PopoverClose, PopoverArrow, usePopover };

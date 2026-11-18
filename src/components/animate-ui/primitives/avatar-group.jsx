'use client';
import * as React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
} from '@floating-ui/react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function AvatarGroupTooltipArrow({
  className,
  arrowRef,
  context,
  ...props
}) {
  if (!context) return null;
  return (
    <FloatingArrow
      ref={arrowRef}
      context={context}
      className={cn('fill-neutral-900 dark:fill-zinc-100', className)}
      width={10}
      height={5}
      {...props}
    />
  );
}
AvatarGroupTooltipArrow.displayName = 'AvatarGroupTooltipArrow';

export function AvatarGroupTooltip({
  children,
  className,
  arrowRef,
  context,
  ...props
}) {
  const childArray = React.Children.toArray(children);
  const content = childArray.map((child) => {
    if (
      React.isValidElement(child) &&
      (child.type === AvatarGroupTooltipArrow ||
        child.type?.displayName === 'AvatarGroupTooltipArrow')
    ) {
      return React.cloneElement(child, { arrowRef, context });
    }
    return child;
  });

  return (
    <div
      className={cn(
        'rounded-md bg-neutral-900 dark:bg-zinc-100 text-white dark:text-neutral-900 px-2.5 py-1 text-[11px] font-medium shadow-xl border border-neutral-700/60 dark:border-zinc-300 whitespace-nowrap select-none',
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
}
AvatarGroupTooltip.displayName = 'AvatarGroupTooltip';

function AvatarGroupItemWrapper({ children, baseZIndex }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({ fallbackAxisSideDirection: 'start' }),
      shift({ padding: 6 }),
      arrow({ element: arrowRef }),
    ],
  });

  const hover = useHover(context, { move: false, delay: { open: 40, close: 100 } });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  let explicitTooltip = null;
  let childWithoutTooltip = children;

  if (React.isValidElement(children) && children.props?.children) {
    const innerChildren = React.Children.toArray(children.props.children);
    const foundTooltip = innerChildren.find(
      (c) =>
        React.isValidElement(c) &&
        (c.type === AvatarGroupTooltip ||
          c.type?.displayName === 'AvatarGroupTooltip')
    );
    if (foundTooltip) {
      explicitTooltip = foundTooltip;
      const remaining = innerChildren.filter((c) => c !== foundTooltip);
      childWithoutTooltip = React.cloneElement(children, {}, remaining);
    }
  }

  const tooltipText =
    explicitTooltip
      ? null
      : (React.isValidElement(children) &&
          (children.props?.alt ||
            children.props?.title ||
            children.props?.['aria-label'])) ||
        null;

  return (
    <>
      <motion.div
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ zIndex: isOpen ? 50 : baseZIndex }}
        whileHover={{ y: -4, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative shrink-0 select-none cursor-pointer"
      >
        {childWithoutTooltip}
      </motion.div>

      <AnimatePresence>
        {isOpen && (explicitTooltip || tooltipText) && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={{ ...floatingStyles, zIndex: 9999 }}
              {...getFloatingProps()}
            >
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 2, scale: 0.95 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                {explicitTooltip ? (
                  React.cloneElement(explicitTooltip, { arrowRef, context })
                ) : (
                  <div className="rounded-md bg-neutral-900 dark:bg-zinc-100 text-white dark:text-neutral-900 px-2.5 py-1 text-[11px] font-medium shadow-xl border border-neutral-700/60 dark:border-zinc-300 select-none">
                    {tooltipText}
                    <FloatingArrow
                      ref={arrowRef}
                      context={context}
                      className="fill-neutral-900 dark:fill-zinc-100"
                      width={10}
                      height={5}
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </>
  );
}

export function AvatarGroup({
  children,
  className,
  invertOverlap = false,
  ...props
}) {
  const childArray = React.Children.toArray(children);
  const total = childArray.length;

  return (
    <div
      role="group"
      className={cn('flex items-center', className)}
      {...props}
    >
      {childArray.map((child, index) => {
        const baseZIndex = invertOverlap ? total - index : index + 1;

        return (
          <AvatarGroupItemWrapper
            key={child.key ?? index}
            baseZIndex={baseZIndex}
          >
            {child}
          </AvatarGroupItemWrapper>
        );
      })}
    </div>
  );
}

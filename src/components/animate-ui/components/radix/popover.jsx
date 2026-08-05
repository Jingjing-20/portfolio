import * as React from 'react';

import {
  Popover as PopoverPrimitive,
  PopoverTrigger as PopoverTriggerPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverPortal as PopoverPortalPrimitive,
  PopoverClose as PopoverClosePrimitive,
} from '@/components/animate-ui/primitives/radix/popover';
import { cn } from '@/lib/utils';

function Popover(props) {
  return <PopoverPrimitive {...props} />;
}

function PopoverTrigger(props) {
  return <PopoverTriggerPrimitive {...props} />;
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}) {
  return (
    <PopoverPortalPrimitive>
      <PopoverContentPrimitive
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className
        )}
        {...props} />
    </PopoverPortalPrimitive>
  );
}

function PopoverClose(props) {
  return <PopoverClosePrimitive {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };

import * as React from 'react';

import {
  Dialog as DialogPrimitive,
  DialogPanel as DialogPanelPrimitive,
  DialogDescription as DialogDescriptionPrimitive,
  DialogFooter as DialogFooterPrimitive,
  DialogHeader as DialogHeaderPrimitive,
  DialogTitle as DialogTitlePrimitive,
  DialogBackdrop as DialogBackdropPrimitive,
  DialogClose as DialogClosePrimitive,
} from '@/components/animate-ui/primitives/headless/dialog';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';

function Dialog(props) {
  return <DialogPrimitive {...props} />;
}

function DialogClose(props) {
  return <DialogClosePrimitive {...props} />;
}

function DialogBackdrop(
  {
    className,
    ...props
  }
) {
  return (<DialogBackdropPrimitive className={cn('fixed inset-0 z-50 bg-black/50', className)} {...props} />);
}

function DialogPanel(
  {
    className,
    children,
    showCloseButton = true,
    ...props
  }
) {
  return (
    <>
      <DialogBackdrop />
      <DialogPanelPrimitive
        className={cn(
          'bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg',
          className
        )}
        {...props}>
        {(bag) => (
          <>
            {typeof children === 'function' ? children(bag) : children}
            {showCloseButton && (
              <DialogClosePrimitive
                className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClosePrimitive>
            )}
          </>
        )}
      </DialogPanelPrimitive>
    </>
  );
}

function DialogHeader(props) {
  const { as = 'div', className, ...rest } = props;

  return (
    <DialogHeaderPrimitive
      as={as}
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...rest} />
  );
}

function DialogFooter(
  {
    className,
    ...props
  }
) {
  return (
    <DialogFooterPrimitive
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props} />
  );
}

function DialogTitle(
  {
    className,
    ...props
  }
) {
  return (
    <DialogTitlePrimitive
      className={cn('text-lg leading-none font-semibold', className)}
      {...props} />
  );
}

function DialogDescription(
  {
    className,
    ...props
  }
) {
  return (<DialogDescriptionPrimitive className={cn('text-muted-foreground text-sm', className)} {...props} />);
}

export { Dialog, DialogClose, DialogPanel, DialogHeader, DialogFooter, DialogTitle, DialogDescription };

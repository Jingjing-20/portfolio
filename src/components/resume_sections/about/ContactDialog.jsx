import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { Download } from '@/components/animate-ui/icons/download';
import { CopyButton, buttonVariants } from '@/components/animate-ui/components/buttons/copy';
import { Button as ButtonPrimitive } from '@/components/animate-ui/primitives/buttons/button';
import { cn } from '@/lib/utils';

const outlineButtonClasses = cn(
  "inline-flex items-center justify-center rounded-md size-9",
  "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  "transition-[box-shadow,_color,_background-color,_border-color]",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
);

export function ContactDialog({ contact, open, onClose }) {
  if (!contact) return null;

  const value = contact.email ?? contact.phone ?? contact.href;
  const isEmail = Boolean(contact.email);
  const isPhone = Boolean(contact.phone);
  const isResume = contact.id === 'resume';
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleOpenLink = () => {
    if (contact.href) {
      window.open(contact.href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownload = () => {
    if (!contact.href || isDownloaded) return;
    const a = document.createElement('a');
    a.href = contact.href;
    a.download = '';
    a.rel = 'noopener,noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">{contact.label}</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">{contact.description}</DialogDescription>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-md border border-gray-400 p-3 min-h-[150px]">
          {contact.previewImage && (
            <>
              <img
                src={contact.previewImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover scale-110 opacity-80 pointer-events-none select-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-base-300/50 pointer-events-none"
              />
            </>
          )}
          {!contact.previewImage && (
            <div className="absolute inset-0 bg-base-300 pointer-events-none" />
          )}
          <div className="relative z-10 drop-shadow-xl">
            {contact.icon}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={value}
            aria-label={isEmail ? 'Email address' : isPhone ? 'Phone number' : isResume ? 'Resume file' : 'Profile URL'}
            className="flex-1 rounded-md border border-gray-300/20 bg-base-200 p-3 text-sm text-base-content outline-none dark:border-white/40"
          />
          {isEmail || isPhone ? (
            <CopyButton content={contact.email ?? contact.phone} variant="outline" aria-label="Copy to clipboard" />
          ) : isResume ? (
            <ButtonPrimitive
              type="button"
              data-slot="download-button"
              className={cn(buttonVariants({ variant: 'outline', size: 'default' }))}
              onClick={handleDownload}
              disabled={isDownloaded}
              aria-label={isDownloaded ? `Downloaded ${contact.label}` : `Download ${contact.label}`}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={isDownloaded ? 'check' : 'download'}
                  data-slot="download-button-icon"
                  initial={{ scale: 0, opacity: 0.4, filter: 'blur(4px)' }}
                  animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ scale: 0, opacity: 0.4, filter: 'blur(4px)' }}
                  transition={{ duration: 0.25 }}>
                  {isDownloaded ? <CheckIcon /> : <Download size={16} />}
                </motion.span>
              </AnimatePresence>
            </ButtonPrimitive>
          ) : (
            <button
              type="button"
              className={outlineButtonClasses}
              onClick={handleOpenLink}
              aria-label={`Open ${contact.label}`}
            >
              <SquareArrowOutUpRight size={16} />
            </button>
          )}
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default ContactDialog;

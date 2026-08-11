import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@/components/animate-ui/components/headless/dialog';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';

const outlineButtonClasses = cn(
  'inline-flex items-center justify-center rounded-md size-9 shrink-0',
  'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
  'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  'transition-[box-shadow,_color,_background-color,_border-color]',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0'
);

export function CertificateDialog({ cert, open, onClose }) {
  if (!cert) return null;

  const handleOpenLink = () => {
    if (cert.link && cert.link !== 'no link') {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-3 md:px-0 p-4 md:p-6 max-w-md w-full">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">{cert.org}</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">{cert.title}</DialogDescription>
        </div>

        {/* Certificate Image Container */}
        {cert.image && (
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 dark:border-white/10 bg-base-200/50 p-2 max-h-64 w-full my-3">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-56 w-full object-contain rounded"
            />
          </div>
        )}

        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            readOnly
            value={cert.link || 'no link'}
            aria-label="Certificate link"
            className="flex-1 rounded-md border border-gray-300/20 bg-base-200 p-3 text-xs md:text-sm text-base-content outline-none dark:border-white/40"
          />
          <button
            type="button"
            className={outlineButtonClasses}
            onClick={handleOpenLink}
            aria-label={`Open link for ${cert.title}`}
          >
            <SquareArrowOutUpRight size={16} />
          </button>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default CertificateDialog;

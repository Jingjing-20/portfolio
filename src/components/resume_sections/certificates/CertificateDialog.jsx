import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@/components/animate-ui/components/headless/dialog';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';

const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  'text-sm font-medium cursor-pointer transform hover:-translate-y-1 hover:rotate-3'
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
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-gray-600 dark:border-gray-400 bg-theme p-2 w-full">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-56 w-full object-contain rounded"
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={cert.link || 'no link'}
            aria-label="Certificate link"
            className="flex-1 rounded-md border border-gray-600 dark:border-gray-400 bg-theme p-2 text-[10px] md:text-xs text-base-content outline-none dark:border-white/40"
          />
          <button
            type="button"
            className={buttonClasses}
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

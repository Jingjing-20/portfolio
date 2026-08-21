import { useEffect } from 'react';
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
  useEffect(() => {
    const stylesheetId = 'testdome-embed-css';
    if (!document.getElementById(stylesheetId)) {
      const link = document.createElement('link');
      link.id = stylesheetId;
      link.href = 'https://www.testdome.com/content/certificates/embed.css';
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.media = 'screen,print';
      document.head.appendChild(link);
    }
  }, []);

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

        {/* Certificate Display Container */}
        {cert.stampType ? (
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 dark:border-white/20 bg-theme p-4 w-full">
            <a
              href={cert.link && cert.link !== 'no link' ? cert.link : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`testdome-certificate-stamp ${cert.stampType}`}
            >
              <span className="testdome-certificate-name">{cert.stampName}</span>
              <span className="testdome-certificate-test-name">{cert.stampTestName || cert.title}</span>
              <span className="testdome-certificate-card-logo">
                TestDome<br />Certificate
              </span>
            </a>
          </div>
        ) : cert.image ? (
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 dark:border-white/20 bg-theme p-2 w-full">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-56 w-full object-contain rounded"
            />
          </div>
        ) : null}

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={cert.link || 'no link'}
            aria-label="Certificate link"
            className="flex-1 rounded-md border border-gray-300 dark:border-white/20 bg-theme p-2 text-[10px] md:text-xs text-base-content outline-none dark:border-white/40"
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

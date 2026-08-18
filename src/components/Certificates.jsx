import { useState } from 'react';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';
import { cn } from '@/lib/utils';

const certCardClasses = cn(
  'group relative flex flex-col p-1.5 md:p-2 rounded-lg shadow-xl hover:shadow-2xl',
  'bg-textured border-4 border-double border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'cursor-pointer transform hover:-translate-y-1 hover:rotate-3'
);

const headerIconClasses = cn(
  'inline-flex items-center justify-center rounded-md p-2 shadow-xl',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'transform hover:-translate-y-1 hover:rotate-3'
);

const iconButtonClasses = cn(
  'absolute top-1 right-1 p-1 md:p-1.5 rounded-full',
  'bg-white/80 dark:bg-black/80 backdrop-blur-sm',
  'hover:bg-white dark:hover:bg-black transition-all duration-200',
  'border border-gray-300 dark:border-white/30',
  'hover:scale-110 hover:shadow-lg',
  'shadow-md',
  'z-10'
);

function OpenIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 md:w-4 md:h-4">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" />
    </svg>
  );
}

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // Flatten all certificates from all categories and sort by date (most recent first)
  const allCertificates = CERTIFICATE_CATEGORIES.flatMap(({ items }) => items).sort((a, b) => {
    const dateA = a.issuedDate ? new Date(a.issuedDate) : new Date(0);
    const dateB = b.issuedDate ? new Date(b.issuedDate) : new Date(0);
    return dateB - dateA; // Descending order (newest first)
  });

  return (
    <section id="certificates" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">
            Certifications and earned credentials
          </p>
          </div>
          <div className={headerIconClasses} aria-hidden="true"><Certificate size={20} /></div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {allCertificates.map((cert) => {
          const IconComponent = cert.icon;
          const formattedDate = formatDate(cert.issuedDate);

          return (
            <div
              key={cert.id}
              className={certCardClasses}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCert(cert)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveCert(cert);
                }
              }}
            >
              {/* Date Issued - Top Left */}
              <div className="absolute top-1 left-1 p-1 rounded-sm bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-300 dark:border-white/30 shadow-md z-10">
                <p className="text-[6px] md:text-[8px] font-medium text-base-content">
                  {formattedDate || 'No date'}
                </p>
              </div>

              {/* Open Icon Button - Top Right */}
              <button
                type="button"
                className={iconButtonClasses}
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveCert(cert);
                }}
                aria-label={`Open ${cert.title} certificate`}
              >
                <OpenIcon />
              </button>

              {/* Polaroid Photo Frame - 16:9 aspect ratio with certificate image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-black/10 dark:border-white/10 shadow-inner">
                {cert.image ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Organization Logo Overlay - Centered */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/60">
                      <div className="text-white drop-shadow-lg">
                        <IconComponent />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-base-content/40">
                    <IconComponent />
                  </div>
                )}
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="flex flex-col justify-between flex-1 pt-2">
                <div>
                  <h3 className="text-[10px] md:text-xs font-semibold tracking-tight leading-snug text-base-content truncate">
                    {cert.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CertificateDialog
        cert={activeCert}
        open={activeCert !== null}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}

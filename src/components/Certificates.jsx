import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';

function CertIcon({ size = 32 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none">
        <path fill="currentColor" d="M4 3h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3l-3 4l-3-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m4 11.5l1.5 2l1.5-2l-1.5-2zm7-7.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0" />
      </g>
    </svg>
  );
}

const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.getFullYear();
};

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  const handleBackToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="certificates" className="scroll-mt-24 max-w-3xl mx-auto">
      <header className="pt-5 md:pt-10 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Back button */}
          <button
            type="button"
            onClick={handleBackToHome}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2',
              'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'text-sm md:text-base font-medium cursor-pointer hover-badge'
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
              Certificates
            </h2>
            <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs lg:text-sm">
              Certifications, webinars, and earned credentials
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Categorized Certificates */}
      <div className="space-y-6 md:space-y-8">
        {CERTIFICATE_CATEGORIES.map((category) => (
          <article key={category.category}>
            <div className="space-y-1 mb-3">
              <h3 className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold text-base-content">
                {category.category}
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Certificate Grid Layout - 2 columns on mobile, 3 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {category.items.map((cert) => {
                const CertIconComp = cert.icon;
                const year = formatDate(cert.issuedDate);
                return (
                  <div
                    key={cert.id}
                    className={cn(
                      'group relative flex flex-col p-3 md:p-4 rounded-lg shadow-xl',
                      'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                      'hover-card cursor-pointer min-h-[120px]'
                    )}
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
                    {/* Top Row: Logo (left) + Year (right) */}
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-center gap-2">
                        {CertIconComp && (
                          <span className="flex items-center justify-center flex-shrink-0 text-xl p-1 rounded-md border-3 border-content text-lg md:text-xl">
                            <CertIconComp />
                          </span>
                        )}
                      </div>
                      {year && (
                        <span className="text-[6px] md:text-[8px] font-medium whitespace-nowrap p-1 rounded-md border-3 border-content text-lg md:text-xl">
                          {year}
                        </span>
                      )}
                    </div>

                    {/* Bottom Content: Org Name (left) + Cert Name (centered vertically) */}
                    <div className="flex flex-col flex-1 mt-2 space-y-2">
                      <p className="text-[10px] md:text-xs font-semibold text-base-content line-clamp-1 text-left">
                        {cert.org}
                      </p>
                      <div className="flex-1 flex items-center">
                        <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2">
                          {cert.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <CertificateDialog
        cert={activeCert}
        open={activeCert !== null}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
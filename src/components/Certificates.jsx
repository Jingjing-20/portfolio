import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
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
    <section id="certificates" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header */}
      <header className="pt-5 md:pt-10 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2',
              'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'cursor-pointer hover-theme-switch'
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
          </button>

          <div className="flex-1">
            <p className="text-base-content text-md md:text-lg lg:text-xl">
              Certifications
            </p>
            <p className="text-[10px] md:text-xs text-base-content/50">
              Training programs, skill assessments, webinars, and earned credentials
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
              <h3 className="text-xs md:text-sm text-base-content">
                {category.category}
              </h3>
              <p className="text-[8px] md:text-[10px] text-base-content/50">
                {category.description}
              </p>
            </div>

            {/* Certificate Grid Layout - follows image wireframe */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {category.items.map((cert) => {
                const CertIconComp = cert.icon;
                const year = formatDate(cert.issuedDate);
                return (
                  <Tilt
                    key={cert.id}
                    maxTilt={10}
                    className="h-full cursor-pointer"
                    onClick={() => setActiveCert(cert)}
                  >
                    <TiltContent
                      className={cn(
                        'group relative flex flex-col justify-between p-3 md:p-3.5 rounded-xl shadow-xl h-full',
                        'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                        'cursor-pointer transition-all duration-300 hover:shadow-2xl'
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
                      <div className="flex-1 flex flex-col">
                        {/* Top Row: Square Icon Box (left) + Pill Badge Year (right) */}
                        <div className="flex items-center justify-between w-full mb-2.5">
                          <div className="flex items-center justify-center size-8 md:size-9 rounded-md bg-textured border border-gray-300 dark:border-white/20 p-1.5 shadow-sm">
                            {CertIconComp ? (
                              <CertIconComp />
                            ) : (
                              <CertIcon size={20} />
                            )}
                          </div>
                          {year && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[8px] md:text-[9px] bg-textured border border-gray-300 dark:border-white/20 text-base-content/60 shadow-sm">
                              {year}
                            </span>
                          )}
                        </div>

                        {/* Middle: Title (prominent) */}
                        <h4 className="text-[11px] md:text-xs font-semibold text-base-content line-clamp-2 leading-snug">
                          {cert.title}
                        </h4>

                        {/* Subtitle: Organization */}
                        <p className="text-[9px] md:text-[10px] text-base-content/50 mt-1 line-clamp-2">
                          {cert.org}
                        </p>
                      </div>

                      {/* Bottom Action Bar: Outlined container button */}
                      <div className="pt-3 mt-2">
                        <div className="w-full py-1.5 px-2 rounded-md bg-textured border border-solid border-gray-300 dark:border-white/20 text-center text-[9px] md:text-[10px] text-base-content/80 flex items-center justify-center gap-1.5 shadow-sm group-hover:border-double">
                          <span>View Certificate</span>
                        </div>
                      </div>
                    </TiltContent>
                  </Tilt>
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
import { useState } from 'react';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';
import { cn } from '@/lib/utils';

const certCardClasses = cn(
  'group relative flex flex-col h-25 md:h-30 p-2 md:p-3 rounded-xl shadow-xl',
  'bg-textured border-5 border-double border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'cursor-pointer transform hover:-translate-y-1 hover:rotate-3'
);

const iconButtonClasses = cn(
  'absolute -top-1.5 -right-1.5 p-1.5 rounded-full',
  'bg-white/80 dark:bg-black/80 backdrop-blur-sm',
  'hover:bg-white dark:hover:bg-black transition-all duration-200',
  'border border-gray-300 dark:border-white/30',
  'hover:scale-110 hover:shadow-lg',
  'shadow-md',
  'z-10'
);

function OpenIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
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

  return (
    <section id="certificates" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">
            Certifications and earned credentials categorized by domain
          </p>
        </div>
      </header>

      <div className="space-y-6 md:space-y-8">
        {CERTIFICATE_CATEGORIES.map(({ category, description, items }) => (
          <article key={category}>
            <div className="space-y-1 mb-3">
              <h3 className="text-xs md:text-sm leading-relaxed font-semibold text-base-content">
                {category}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {items.map((cert) => {
                const IconComponent = cert.icon;
                const formattedDate = formatDate(cert.issuedDate);

                return (
                  <div
                    key={cert.id}
                    className={certCardClasses}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Open Icon Button - Top Right */}
                    <button
                      type="button"
                      className={iconButtonClasses}
                      onClick={() => setActiveCert(cert)}
                      aria-label={`Open ${cert.title} certificate`}
                    >
                      <OpenIcon size={15} />
                    </button>

                    {/* Top: Date - Left aligned with fixed height */}
                    <div className="flex items-center justify-start mb-1 md:mb-1.5 h-2 md:h-4">
                      <p className="text-[6px] md:text-[8px] text-muted-foreground">
                        {`<${formattedDate || 'No date'}/>`}
                      </p>
                    </div>

                    {/* Middle: Organization Logo Only with fixed height */}
                    <div className="flex items-center justify-center mb-3 h-6 md:h-8">
                      <IconComponent />
                    </div>

                    <hr className="mb-1 md:mb-1.5" />

                    {/* Bottom: Certificate Title with fixed height */}
                    <div className="flex items-center justify-center h-4 md:h-6">
                      <h3 className="text-[8px] md:text-[10px] tracking-tight leading-snug text-base-content text-center line-clamp-2">
                        {cert.title}
                      </h3>
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
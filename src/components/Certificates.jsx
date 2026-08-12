import { useState } from 'react';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import CertificateDialog from '@/components/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/certificates/certificates_data';
import { cn } from '@/lib/utils';

const certCardClasses = cn(
  'relative flex flex-col h-25 md:h-35 p-2 md:p-3 rounded-xl shadow-xl',
  'bg-textured border-5 border-double border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'cursor-pointer'
);

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
      <header className="mb-3 flex items-center justify-between md:mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">
            Certifications and earned credentials categorized by domain
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background dark:bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <Certificate size={20} className="h-5 w-5" />
          </AnimateIcon>
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

            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {items.map((cert) => {
                const IconComponent = cert.icon;
                const formattedDate = formatDate(cert.issuedDate);

                return (
                  <div
                    key={cert.id}
                    className={certCardClasses}
                    onClick={() => setActiveCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveCert(cert);
                      }
                    }}
                  >
                    {/* Top: Organization with icon logo beside it */}
                    <div className="flex items-center gap-1.5 mb-1 md:mb-1.5">
                      <IconComponent className="text-muted-foreground flex-shrink-0" />
                      <span className="text-[8px] sm:text-[10px] font-medium text-base-content line-clamp-1">
                        {cert.org}
                      </span>
                    </div>

                    <hr className="mb-1 md:mb-1.5" />

                    {/* Middle: Certificate Title */}
                    <div className="flex items-center justify-center my-auto">
                      <h3 className="text-[10px] md:text-xs font-semibold tracking-tight leading-snug text-base-content text-center line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>

                    {/* Bottom: Issued Date with terminal-style arrow */}
                    <div className="flex items-center justify-center mt-0.5 md:mt-1">
                      <p className="text-[6px] md:text-[8px] text-muted-foreground text-cente">
                        {formattedDate ? `< Issued ${formattedDate} />` : '< Certificate />'}
                      </p>
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
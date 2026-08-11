import { useState } from 'react';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import CertificateDialog from '@/components/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/certificates/certificates_data';
import { cn } from '@/lib/utils';

const certCardClasses = cn(
  'relative flex flex-col justify-between h-32 sm:h-36 md:h-40 p-2.5 sm:p-3.5 rounded-xl border-4 border-double shadow-xl',
  'bg-background dark:bg-input/30 border-gray-300 dark:border-input',
  'cursor-pointer'
);

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

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-xl dark:bg-gray-600/20">
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

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
              {items.map((cert) => {
                const IconComponent = cert.icon;

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
                    {/* Icon only in top right corner */}
                    <div className="flex justify-start w-full">
                      <div className="shadow-xl inline-flex items-center justify-center rounded-md p-2 border bg-background dark:bg-input/30 dark:border-input text-sm font-medium">
                        <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                    </div>

                    {/* Middle: Certificate Title */}
                    <div className="my-auto">
                      <h3 className="text-[10px] md:text-xs font-semibold tracking-tight leading-snug text-base-content line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>

                    {/* Bottom: Border top and org name */}
                    <div className="border-t border-gray-300 dark:border-gray-700/60 pt-1.5 mt-1 flex items-center justify-between">
                      <span className="text-[8px] sm:text-[10px] font-medium text-muted-foreground line-clamp-1">
                        {cert.org}
                      </span>
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

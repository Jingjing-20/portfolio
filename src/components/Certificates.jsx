import { useState } from 'react';
import { cn } from '@/lib/utils';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';

const certListItemClasses = cn(
  'flex gap-3 bg-theme hover:bg-textured p-3 border border-gray-300 dark:border-white/20 rounded-md',
   'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
);

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
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">
            Certifications and earned credentials
          </p>
        </div>
      </header>

      <div className="space-y-3">
        {allCertificates.map((cert) => {
          const IconComponent = cert.icon;

          return (
            <div
              key={cert.id}
              className={cn(certListItemClasses, 'relative')}
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
              {/* Icon inside the border */}
              <div className="flex-shrink-0">
                <IconComponent />
              </div>

              {/* Certificate Title */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] md:text-xs leading-tight md:leading-relaxed font-semibold text-base-content truncate">
                  {cert.title}
                </h4>
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
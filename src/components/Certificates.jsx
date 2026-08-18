import { useState } from 'react';
import { cn } from '@/lib/utils';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';

const certBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-1.5 md:p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'text-sm font-medium cursor-pointer transform hover:-translate-y-1 hover:rotate-3',
  'flex-shrink-0'
);

const certListItemClasses = cn(
  'flex items-start gap-3 p-3 rounded-md cursor-pointer transition-all duration-300',
  'bg-textured border border-gray-300 dark:border-white/20 shadow-sm',
  'hover:border-gray-800 dark:hover:border-white/70 hover:shadow-xl'
);

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
          const formattedDate = formatDate(cert.issuedDate);

          return (
            <div key={cert.id} className="flex items-center gap-2 md:gap-3">
              {/* Logo Badge - Outside border, centered vertically */}
              <div className={certBadgeClasses}>
                <IconComponent />
              </div>
              
              {/* Certificate Text - Inside border */}
              <div
                className={cn(certListItemClasses, 'relative flex-1 min-w-0')}
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
                {/* Date Badge - Top Right */}
                <div className="absolute -top-1 -right-1 p-1 rounded-sm bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-300 dark:border-white/30 shadow-md">
                  <p className="text-[6px] md:text-[8px] font-medium text-base-content whitespace-nowrap">
                    {formattedDate || 'No date'}
                  </p>
                </div>

                <div className="flex-1 pr-14 md:pr-20 min-w-0">
                  <h4 className="text-[10px] md:text-xs leading-tight md:leading-relaxed font-semibold text-base-content truncate">
                    {cert.title}
                  </h4>
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

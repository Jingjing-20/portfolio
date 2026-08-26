import { useState } from 'react';
import { cn } from '@/lib/utils';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';
import { PinList } from '@/components/animate-ui/components/community/pin-list';


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
      <header className="pt-10 mb-3 md:mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs lg:text-sm">
            Certifications, webinars, and earned credentials
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Categorized Certificates */}
      <div className="space-y-6">
        {CERTIFICATE_CATEGORIES.map((category) => {
          const pinListItems = category.items.map((cert) => ({
            id: cert.id,
            name: cert.title,
            info: `${cert.org} • ${formatDate(cert.issuedDate) || 'No date'}`,
            icon: cert.icon,
            pinned: false,
            cert: cert,
          }));

          return (
            <div key={category.category} className="space-y-2">
              <div>
                <h3 className="text-xs md:text-sm lg:text-base font-semibold text-base-content">
                  {category.category}
                </h3>
                <p className="text-[8px] md:text-[10px] lg:text-xs text-base-content/70 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <PinList
                items={pinListItems}
                className="space-y-3"
                onItemClick={(item) => setActiveCert(item.cert)}
              />
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

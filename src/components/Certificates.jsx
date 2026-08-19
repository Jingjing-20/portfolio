import { useState } from 'react';
import { cn } from '@/lib/utils';
import CertificateDialog from '@/components/resume_sections/certificates/CertificateDialog';
import { CERTIFICATE_CATEGORIES } from '@/components/resume_sections/certificates/certificates_data';
import { PinList } from '@/components/animate-ui/components/community/pin-list';

const openDialogBtn = cn(
  'absolute top-1 right-1 p-1 md:p-1.5 rounded-full',
  'bg-white/80 dark:bg-black/80 backdrop-blur-sm',
  'hover:bg-white dark:hover:bg-black transition-all duration-200',
  'border border-gray-300 dark:border-white/30',
  'hover:scale-110 hover:shadow-lg',
  'shadow-md',
  'z-10'
);

const orgLogo = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer  transform hover:-translate-y-1 hover:rotate-3'
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

  // Transform certificates into pin-list format
  const pinListItems = allCertificates.map((cert) => ({
    id: cert.id,
    name: cert.title,
    info: `${cert.org} • ${formatDate(cert.issuedDate) || 'No date'}`,
    icon: cert.icon,
    pinned: false, // Default unpinned, user can pin favorites
    cert: cert, // Store original cert data for dialog
  }));

  const handleCertClick = (item) => {
    // Open certificate dialog when clicking (not on pin button)
    setActiveCert(item.cert);
  };

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

      <PinList
        items={pinListItems}
        className="space-y-3"
        onItemClick={handleCertClick}
      />

      <CertificateDialog
        cert={activeCert}
        open={activeCert !== null}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}

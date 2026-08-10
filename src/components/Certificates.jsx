import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { cn } from '@/lib/utils';

// Replace these sample entries and links with your own credentials.
const CERTIFICATES = [
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy', href: '#' },
  { name: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco Networking Academy', href: '#' },
  { name: 'Networking Devices and Initial Configuration', issuer: 'Cisco Networking Academy', href: '#' },
  { name: 'AI x Enterprise Architecture', issuer: 'Microsoft Learn', href: '#' },
  { name: 'Understanding Project Management', issuer: 'Coursera', href: '#' },
  { name: 'Usage of AI Tools in Cybersecurity', issuer: 'Google Cloud Skills Boost', href: '#' },
];

const credentialLinkClasses = cn(
  'inline-flex items-center justify-center gap-1.5 rounded-md border p-2 shadow-xl',
  'bg-background hover:bg-accent hover:text-accent-foreground',
  'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  'transition-[box-shadow,color,background-color,border-color]',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'
);

function ExternalLinkIcon({ size = 14 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <header className="mb-3 flex items-center justify-between md:mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">
            Certifications and earned credentials
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-xl dark:bg-gray-600/20">
          <AnimateIcon animateOnHover>
            <Certificate size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {CERTIFICATES.map((certificate) => (
          <article
            key={certificate.name}
            className="flex min-h-44 flex-col rounded-lg border border-gray-300 bg-background p-4 shadow-xl transition-transform duration-200 hover:-translate-y-1 dark:border-white/20 dark:bg-input/30"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-300 text-base-content">
                <AnimateIcon animateOnHover>
                  <Certificate size={20} />
                </AnimateIcon>
              </div>
              <div className="min-w-0 space-y-1">
                <h3 className="text-xs font-semibold leading-relaxed text-base-content md:text-sm">
                  {certificate.name}
                </h3>
                <p className="text-[10px] leading-relaxed text-muted-foreground md:text-xs">
                  {certificate.issuer}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-5">
              <a
                href={certificate.href}
                target="_blank"
                rel="noreferrer"
                className={credentialLinkClasses}
                aria-label={`View ${certificate.name} credential`}
              >
                <span className="text-[8px] font-medium md:text-[10px]">View credential</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

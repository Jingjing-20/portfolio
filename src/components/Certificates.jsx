import { useState } from 'react';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';

// Issuing Organization Icons formatted as clean SVGs (matching TechStack icon style)
const CiscoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <title>cisco</title>
    <path
      fill="currentColor"
      d="M15.61 17.144v-.926l-.02.008a1.7 1.7 0 0 1-.667.17a1 1 0 0 1-.671-.198a.87.87 0 0 1-.294-.415a1 1 0 0 1-.019-.556a.85.85 0 0 1 .298-.474a.9.9 0 0 1 .468-.202c.305-.034.612.024.884.165l.02.011v-.93l-.042-.013a2.4 2.4 0 0 0-.843-.11a2 2 0 0 0-.752.172c-.24.11-.45.273-.616.476a1.85 1.85 0 0 0-.034 2.254c.246.315.591.538.98.63c.409.1.838.085 1.239-.043zm-9.163 0v-.926l-.019.008a1.7 1.7 0 0 1-.667.17a1 1 0 0 1-.672-.198a.86.86 0 0 1-.292-.415a1 1 0 0 1-.02-.556a.85.85 0 0 1 .297-.474a.9.9 0 0 1 .469-.202c.304-.034.612.024.884.165l.02.011v-.93l-.043-.013a2.4 2.4 0 0 0-.842-.11c-.26.007-.516.066-.753.172c-.239.11-.45.273-.617.476a1.85 1.85 0 0 0-.034 2.254c.246.316.592.538.98.63c.41.1.838.085 1.24-.043zm3.27-.769l-.004.798l.059.01q.274.05.553.07q.244.024.49.01q.234-.017.458-.086c.175-.05.338-.136.476-.254a1 1 0 0 0 .278-.398a1.1 1.1 0 0 0-.006-.8a.9.9 0 0 0-.248-.345a1.1 1.1 0 0 0-.365-.213l-.602-.223a.32.32 0 0 1-.164-.157a.2.2 0 0 1 .006-.183a.3.3 0 0 1 .129-.118a.7.7 0 0 1 .214-.062q.192-.028.383.005q.225.024.444.08l.032.006v-.735l-.057-.013a4 4 0 0 0-.453-.08a2.4 2.4 0 0 0-.595-.003a1.3 1.3 0 0 0-.684.275a.9.9 0 0 0-.293.403a1.1 1.1 0 0 0 0 .75q.069.181.21.317q.122.117.273.196q.197.105.414.163q.072.021.142.045l.07.026l.02.008c.07.025.136.065.189.117a.3.3 0 0 1 .084.126a.3.3 0 0 1 0 .134a.28.28 0 0 1-.137.165a.7.7 0 0 1-.23.071a1.7 1.7 0 0 1-.356.018a4 4 0 0 1-.464-.062l-.239-.056zm-2.063.83h.875v-3.473h-.875zm10.135-2.447a.912.912 0 0 1 1.485.8a.9.9 0 0 1-.332.616l-.014.011a.913.913 0 0 1-1.139-1.427m-1.27.712a1.83 1.83 0 0 0 2.221 1.755a1.783 1.783 0 0 0 .584-3.28a1.839 1.839 0 0 0-2.806 1.524m4.615-4.529a.433.433 0 0 0 .866 0v-.96a.434.434 0 0 0-.866 0zm-2.37 0a.435.435 0 0 0 .868 0V8.784a.435.435 0 0 0-.867 0v2.157m-2.406.87a.434.434 0 0 0 .866 0V7.142a.434.434 0 0 0-.866 0zm-2.365-.87a.434.434 0 0 0 .867 0V8.784a.433.433 0 0 0-.866 0zm-2.417 0a.435.435 0 0 0 .866 0V9.98a.434.434 0 0 0-.866 0zm-2.391 0a.433.433 0 0 0 .866 0V8.784a.434.434 0 0 0-.866 0zm-2.406.87a.433.433 0 0 0 .866 0V7.142a.433.433 0 0 0-.866 0zm-2.384-.87a.435.435 0 0 0 .866 0V8.784a.433.433 0 0 0-.865 0zm-2.398 0a.434.434 0 0 0 .866 0V9.98a.433.433 0 0 0-.866 0z"
    />
  </svg>
);

const TestDomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 100 100"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M50 10C27.9 10 10 27.9 10 50c0 11.5 4.8 21.9 12.6 29.2l8.8-8.8C25.8 65.2 22.2 58 22.2 50c0-15.4 12.4-27.8 27.8-27.8S77.8 34.6 77.8 50c0 8-3.6 15.2-9.2 20.4l8.8 8.8C85.2 71.9 90 61.5 90 50 90 27.9 72.1 10 50 10z"
    />
    <path
      fill="currentColor"
      d="M38 48c0-6.6 5.4-12 12-12s12 5.4 12 12v26h-8V50h-8v24h-8V48z"
    />
  </svg>
);

const KoenigIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2L2 7v10l10 5 10-5V7L12 2zm-2 14.5H7.5V7.5H10v3.2l3.2-3.2h3.3l-4.2 4.2 4.5 4.8h-3.4L10 12.8v3.7z"
    />
  </svg>
);

const GoogleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="currentColor"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="currentColor"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="currentColor"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const CERTIFICATES = [
  {
    id: 'mental-health',
    title: '10 Keys to Mental Health at Work',
    subtitle: 'Support Wellbeing with AI Tools',
    org: 'Koenig',
    description: 'Guidelines and AI integration strategies for supporting mental health and wellbeing in the workplace.',
    icon: KoenigIcon,
    link: 'no link',
  },
  {
    id: 'enterprise-arch',
    title: 'AI x Enterprise Architecture',
    subtitle: 'Powering Emerging Tech',
    org: 'Koenig',
    description: 'Explores the intersection of Artificial Intelligence and Enterprise Architecture to drive modern tech solutions.',
    icon: KoenigIcon,
    link: 'no link',
  },
  {
    id: 'devfest-2025',
    title: 'DevFest 2025 Certificate',
    subtitle: 'Google Developer Groups',
    org: 'Google',
    description: 'Participation and achievement certificate for DevFest 2025 developer conference.',
    icon: GoogleIcon,
    link: 'no link',
  },
  {
    id: 'net-addressing',
    title: 'Network Addressing & Troubleshooting',
    subtitle: 'Cisco Networking Academy',
    org: 'Cisco',
    description: 'Fundamentals of IPv4/IPv6 network addressing, subnetting, and network troubleshooting techniques.',
    icon: CiscoIcon,
    link: 'no link',
  },
  {
    id: 'net-basics',
    title: 'Networking Basics',
    subtitle: 'Cisco Networking Academy',
    org: 'Cisco',
    description: 'Core concepts of computer networking, protocols, OSI model layers, and data transmission.',
    icon: CiscoIcon,
    link: 'no link',
  },
  {
    id: 'net-devices',
    title: 'Networking Devices & Config',
    subtitle: 'Cisco Networking Academy',
    org: 'Cisco',
    description: 'Initial configuration, management, and operational principles of routers and switches.',
    icon: CiscoIcon,
    link: 'no link',
  },
  {
    id: 'project-mgmt',
    title: 'Project Management',
    subtitle: 'Basic to Advance',
    org: 'Koenig',
    description: 'Comprehensive project management principles, agile methodologies, and planning strategies.',
    icon: KoenigIcon,
    link: 'no link',
  },
  {
    id: 'chatgpt-agent',
    title: 'ChatGPT Agent Mode',
    subtitle: 'Chatbot to Autonomous AI',
    org: 'Koenig',
    description: 'Advanced techniques in building and deploying autonomous AI agents and prompt engineering.',
    icon: KoenigIcon,
    link: 'no link',
  },
  {
    id: 'cyber-security',
    title: 'AI Tools in Cyber Security',
    subtitle: 'Cyber Security & AI Integration',
    org: 'TestDome',
    description: 'Practical application of AI tools in threat detection, security analysis, and vulnerability management.',
    icon: TestDomeIcon,
    link: 'no link',
  },
];

const outlineButtonClasses = cn(
  'inline-flex items-center justify-center rounded-md size-9 shrink-0',
  'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
  'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  'transition-[box-shadow,_color,_background-color,_border-color]',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0'
);

const certCardClasses = cn(
  'relative flex flex-col justify-between h-28 sm:h-32 md:h-36 p-2.5 sm:p-3.5 rounded-xl border shadow-xs',
  'bg-background dark:bg-input/30 border-gray-300 dark:border-input',
  'cursor-pointer'
);

function CertificateDialog({ cert, open, onClose }) {
  if (!cert) return null;

  const handleOpenLink = () => {
    if (cert.link && cert.link !== 'no link') {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  };

  const IconComp = cert.icon;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-3 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <div className="inline-flex items-center gap-1.5 rounded-md p-1.5 border bg-background/50 dark:bg-input/20 dark:border-input w-fit mb-2">
            <IconComp className="h-4 w-4 text-base-content shrink-0" />
            <span className="text-xs font-medium text-base-content">{cert.org}</span>
          </div>
          <DialogTitle className="text-sm md:text-base font-semibold leading-relaxed">
            {cert.title}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content/70">
            {cert.description}
          </DialogDescription>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            readOnly
            value={cert.link || 'no link'}
            aria-label="Certificate link"
            className="flex-1 rounded-md border border-gray-300/20 bg-base-200 p-3 text-xs md:text-sm text-base-content outline-none dark:border-white/40"
          />
          <button
            type="button"
            className={outlineButtonClasses}
            onClick={handleOpenLink}
            aria-label={`Open link for ${cert.title}`}
          >
            <SquareArrowOutUpRight size={16} />
          </button>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

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
            Certifications and earned credentials
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-xl dark:bg-gray-600/20">
          <AnimateIcon animateOnHover>
            <Certificate size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>

      {/* 3-column grid layout for both mobile and desktop */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
        {CERTIFICATES.map((cert) => {
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
              {/* Icon and Org Name side by side like TechStack */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md p-1.5 border bg-background/50 dark:bg-input/20 dark:border-input w-fit">
                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-base-content shrink-0" />
                <span className="text-[8px] sm:text-[10px] font-medium text-base-content line-clamp-1">
                  {cert.org}
                </span>
              </div>

              {/* Text content bottom wrapper */}
              <div className="space-y-0.5">
                <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight leading-snug text-base-content line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground line-clamp-1">
                  {cert.subtitle}
                </p>
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

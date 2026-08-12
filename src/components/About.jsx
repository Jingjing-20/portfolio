import { useState } from 'react';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import profileImage from '@/components/about/gian.png';
import ResumeImg from '@/components/about/resume.png';
import LinkedInImg from '@/components/about/linkedin.png';
import GitHubImg from '@/components/about/github.png';
import GmailImg from '@/components/about/gmail.png';
import ResumePDF from '@/components/about/resumes/GCNU - RESUME v11.pdf';
import ContactDialog from '@/components/about/ContactDialog';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';


const CONTACT_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Jingjing-20',
    description: 'View my open-source work.',
    previewImage: GitHubImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="5em" height="5em" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gian-carlo-ulep-003490346/',
    description: 'Connect with me professionally.',
    previewImage: LinkedInImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" aria-hidden="true">
        <title>linkedin</title>
        <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
      </svg>
    ),
  },
  {
    id: 'gmail',
    label: 'Gmail',
    email: 'jingjing0527004@gmail.com',
    description: 'Send me an email.',
    previewImage: GmailImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 193" width="5em" height="5em" aria-hidden="true">
        <title>gmail</title>
        <path fill="currentColor" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727z" />
        <path fill="currentColor" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v98.91z" />
        <path fill="currentColor" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992-4.669 40.644L128 145.504l-69.818-52.364z" />
        <path fill="currentColor" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292-10.782z" />
        <path fill="currentColor" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.274z" />
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    href: ResumePDF,
    description: 'Download my resume PDF.',
    previewImage: ResumeImg,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" aria-hidden="true">
        <title>file</title>
        <path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      </svg>
    ),
  },
];

const outlineButtonWithLabelClasses = cn(
  "shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2",
  "bg-textured border border-gray-300 dark:border-white/20",
  "hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "text-sm font-medium cursor-pointer"
);

const outlineButtonClasses = cn(
  "inline-flex items-center justify-center rounded-md size-9",
  "bg-textured border border-gray-300 dark:border-white/20",
  "hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "cursor-pointer"
);


export default function About() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section id="about" className="scroll-mt-24 pt-4 sm:pt-6 md:pt-0">
      {/* Name on top - mobile */}
      <header className="mb-3 md:mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Gian Carlo N. Ulep
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            BS in Information Technology : Batch 2025 – 2026
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background dark:bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <AboutInfo size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>

      <div className="items-start gap-3 md:gap-6 grid grid-cols-[30%_70%] md:grid-cols-[20%_80%] md:gap-6">
        {/* Left: Polaroid-style portrait */}
        <div className="flex block">
          <Tilt maxTilt={12} className="w-34 max-w-xs">
            <TiltContent className="border border-gray-300 dark:border-white/20 overflow-hidden rounded-lg p-1 md:p-2 shadow-xl dark:shadow-2xl">
              <div className="overflow-hidden border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-[#1a1b1d]">
                <img
                  src={profileImage}
                  alt="Gian Carlo N. Ulep"
                  className="aspect-square w-full object-cover transition-all duration-500"
                />
              </div>
            </TiltContent>
          </Tilt>
        </div>

        {/* Right: intro + contact */}
        <div className="flex min-h-full flex-col justify-between gap-6">
          <div className="space-y-6">
            <div className="text-[10px] md:text-xs leading-relaxed">
              <p>
                <span className="text-base-content/50">I am a </span>
                <span className="font-bold"><ShimmeringText text="Software Developer" className="font-bold" /></span>
                <span className="text-base-content/50"> focused on building accessible and responsive web applications. I work with modern web technologies to create clean, maintainable solutions that address practical needs and improve user experience.
                </span>
              </p>
            </div>

            <div className="hidden md:block">
              <nav
                aria-label="Contact links"
                className="flex flex-wrap items-center justify-center gap-6 md:justify-start"
              >
                {CONTACT_LINKS.map((contact) => (
                  <button
                    key={contact.id}
                    type="button"
                    className={outlineButtonWithLabelClasses}
                    onClick={() => setActiveContact(contact)}
                    aria-label={contact.label}
                  >
                    {contact.icon}
                    <span className="hidden md:block text-[10px] font-medium text-base-content">{contact.label}</span>

                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile contact buttons */}
      <div className="block md:hidden mt-3">
        <nav
          aria-label="Contact links"
          className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
        >
          {CONTACT_LINKS.map((contact) => (
            <button
              key={contact.id}
              type="button"
              className={outlineButtonWithLabelClasses}
              onClick={() => setActiveContact(contact)}
              aria-label={contact.label}
            >
              {contact.icon}
              <span className="text-[8px] font-medium text-base-content/80">{contact.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <ContactDialog
        contact={activeContact}
        open={activeContact !== null}
        onClose={() => setActiveContact(null)}
      />
    </section>
  );
}
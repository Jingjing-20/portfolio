import { useState } from 'react';
import profileImage from '@/assets/gian.png';
import { CopyButton } from '@/components/animate-ui/components/buttons/copy';
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import { cn } from '@/lib/utils';

const DIALOG_PANEL_CLASSES = 'gap-4 p-6 w-sm';

const CONTACT_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Jingjing-20',
    description: 'View my open-source work.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
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
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">linkedin</title><path fill="#4b6ff4" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
    ),
  },
  {
    id: 'gmail',
    label: 'Gmail',
    email: 'jingjing0527004@gmail.com',
    description: 'Send me an email.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 193" className="h-5 w-5" aria-hidden="true">
        <path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" />
        <path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" />
        <path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" />
        <path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" />
        <path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" />
      </svg>
    ),
  },
];

// Custom outline button styling - with label and arrow
const outlineButtonWithLabelClasses = cn(
  "inline-flex items-center justify-center gap-2 rounded-md p-2",
  "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  "transition-[box-shadow,_color,_background-color,_border-color]",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "text-sm font-medium"
);

// Custom outline button styling for dialog link button
const outlineButtonClasses = cn(
  "inline-flex items-center justify-center rounded-md size-9",
  "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  "transition-[box-shadow,_color,_background-color,_border-color]",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
);

function ContactDialog({ contact, open, onClose }) {
  if (!contact) return null;

  const value = contact.email ?? contact.href;
  const isEmail = Boolean(contact.email);

  const handleOpenLink = () => {
    if (contact.href) {
      window.open(contact.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className={DIALOG_PANEL_CLASSES}>
        <div className="space-y-1.5 pr-6">
          <DialogTitle>{contact.label}</DialogTitle>
          <DialogDescription>{contact.description}</DialogDescription>
        </div>

        <div className="flex justify-center bg-base-300 border border-gray-400 p-3 rounded-md [&_svg]:h-24 [&_svg]:w-24">
          {contact.icon}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={value}
            aria-label={isEmail ? 'Email address' : 'Profile URL'}
            className="flex-1 rounded-md border border-gray-900/20 bg-base-200 px-3 py-2 text-sm text-base-content outline-none dark:border-gray-600/40"
          />
          {isEmail ? (
            <CopyButton content={contact.email} variant="outline" aria-label="Copy email" />
          ) : (
            <button
              type="button"
              className={outlineButtonClasses}
              onClick={handleOpenLink}
              aria-label={`Open ${contact.label}`}
            >
              <SquareArrowOutUpRight size={16} />
            </button>
          )}
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default function About() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section id="about" className="scroll-mt-24 pt-4 sm:pt-6 md:pt-0">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[30%_70%] md:gap-10">
        {/* Left: Polaroid-style portrait */}
        <div className="flex justify-center md:block">
          <Tilt maxTilt={12} className="w-48 sm:w-56 md:w-full max-w-xs">
            <TiltContent className="border border-gray-900 dark:border-gray-600 overflow-hidden rounded-lg bg-white p-2 shadow-xl dark:bg-gray-800 dark:shadow-2xl">
              <div className="overflow-hidden rounded-lg bg-white dark:bg-[#1a1b1d]">
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
          <div className="space-y-3">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl md:text-5xl">
                Gian Carlo N. Ulep
              </h2>
            </div>

            <div className="text-xs md:text-sm leading-relaxed text-base-content/80 sm:text-base space-y-2">
              <p>
              I am a software developer who builds practical web applications that provide significant value to users. I prioritize performance, accessibility, and usability, translating complex requirements into clean, maintainable software that serves its purpose effectively.
            </p>
            </div>
          </div>

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
                <span className="text-[10px] font-medium text-base-content/80">{contact.label}</span>
                ↗
              </button>
            ))}
          </nav>
        </div>
      </div>

      <ContactDialog
        contact={activeContact}
        open={activeContact !== null}
        onClose={() => setActiveContact(null)}
      />
    </section>
  );
}
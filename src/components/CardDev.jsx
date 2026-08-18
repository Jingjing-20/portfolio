import { useState } from 'react';
import profileImage from '@/components/resume_sections/about/gian.webp';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import ContactDialog from '@/components/resume_sections/carddev/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/carddev/contact_data';
import { cn } from '@/lib/utils';

const cardClasses = cn(
  'group relative mx-auto w-36 h-36 rounded-lg p-1.5 shadow-xl',
  'bg-textured border-4 border-double border-gray-300 dark:border-white/20',
  'transition-all duration-300',
  'md:w-46 md:h-46'
);

const interactiveButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer transform hover:-translate-y-1 hover:rotate-3'
);

export default function CardDev() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section aria-label="Profile card" className="space-y-4">
      {/* Mobile: Name beside image */}
      <div className="flex flex-col md:hidden">
        <div className="flex items-center gap-4">
          <Tilt maxTilt={12} className="flex-shrink-0">
            <TiltContent className={cn(cardClasses, 'w-24 h-24')}>
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-black/10 bg-base-300 shadow-inner dark:border-white/10">
                <img
                  src={profileImage}
                  alt="Gian Carlo N. Ulep"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </TiltContent>
          </Tilt>
          <h1 className="font-bold tracking-tight text-base-content text-2xl flex-1">
            Gian Carlo N. Ulep
          </h1>
        </div>
      </div>

      {/* Desktop: Name above */}
      <div className="hidden md:block text-center md:text-left">
        <h1 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
          Gian Carlo N. Ulep
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Left: Profile Image (desktop only) */}
        <div className="hidden md:block">
          <Tilt maxTilt={12} className="flex-shrink-0 md:justify-self-start">
            <TiltContent className={cardClasses}>
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-black/10 bg-base-300 shadow-inner dark:border-white/10">
                <img
                  src={profileImage}
                  alt="Gian Carlo N. Ulep"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </TiltContent>
          </Tilt>
        </div>

        {/* Right: Contact Buttons - Stacked vertically on desktop */}
        <nav 
          aria-label="Contact links" 
          className="flex flex-col items-start gap-2 md:justify-start"
        >
          {CONTACT_LINKS.map((contact) => (
            <button
              key={contact.id}
              type="button"
              className={interactiveButtonClasses}
              onClick={() => setActiveContact(contact)}
              aria-label={contact.label}
            >
              {contact.icon}
              <span className="text-[8px] font-medium text-base-content md:text-[10px]">
                {contact.label}
              </span>
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
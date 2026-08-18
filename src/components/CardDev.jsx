import { useState } from 'react';
import profileImage from '@/components/resume_sections/about/gian.webp';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import ContactDialog from '@/components/resume_sections/carddev/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/carddev/contact_data';
import { cn } from '@/lib/utils';

const cardClasses = cn(
  'group relative rounded-lg p-0.5 shadow-xl',
  'bg-textured border-4 border-double border-gray-300 dark:border-white/20',
  'transition-all duration-300',
  'w-40 h-40 md:w-48 md:h-48'
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
    <section aria-label="Profile card" className="flex justify-center">
      <div className="flex flex-col items-center gap-3 max-w-md w-full">
        {/* Name */}
        <h1 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl text-center">
          Gian Carlo N. Ulep
        </h1>

        {/* Image + Contacts Container */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full md:w-auto">
          {/* Profile Image */}
          <Tilt maxTilt={13}>
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

          {/* Contact Buttons */}
          <nav 
            aria-label="Contact links" 
            className="grid grid-cols-4 gap-1.5 md:gap-3 md:flex md:flex-col place-items-center md:place-items-start"
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
                <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                  {contact.label}
                </span>
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
import { useState } from 'react';
import profileImage from '@/components/resume_sections/carddev/gian.webp';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import ContactDialog from '@/components/resume_sections/carddev/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/carddev/contact_data';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';

const interactiveButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer',
  'transform hover:-translate-y-1 hover:rotate-3'
);

export default function CardDev() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section
      id="carddev"
      aria-label="Profile card"
      className="flex flex-col items-center space-y-4"
    >
     {/* Profile Card */}
      <Tilt
        className="w-[280px] md:w-[340px]"
        rotationFactor={8}
        springOptions={{
          stiffness: 350,
          damping: 25,
        }}
      >
        <TiltContent
          className={cn(
            'relative w-full overflow-hidden',
            'rounded-xl',
            'border-double border-5 border-gray-300 dark:border-white/20',
            'bg-textured shadow-xl',
            'px-5 py-6 md:px-6 md:py-7'
          )}
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <div
              className={cn(
                'relative overflow-hidden',
                'w-24 h-24 md:w-28 md:h-28',
                'rounded-full',
                'border-4 border-double border-gray-300 dark:border-white/20',
                'bg-textured shadow-lg'
              )}
            >
              <img
                src={profileImage}
                alt="Gian Carlo N. Ulep"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-center font-bold tracking-tight text-base-content text-xl md:text-2xl">
            Gian Carlo N. Ulep
          </h1>

          <hr className="mt-3 mb-3" />

          {/* Personal Information */}
          <div className="w-full text-[10px] md:text-xs text-base-content leading-relaxed space-y-1">
            {/* BirthDate */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-left">
                BirthDate :
              </span>

              <span className="text-base-content/80 text-right">
                May 27, 2004
              </span>
            </div>

            {/* Age */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-left">
                Age :
              </span>

              <span className="text-base-content/80 text-right">
                22
              </span>
            </div>

            {/* Sex */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-left">
                Sex :
              </span>

              <span className="text-base-content/80 text-right">
                Male
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start justify-between gap-3">
              <span className="font-semibold text-left shrink-0">
                Address :
              </span>

              <span className="text-base-content/80 text-right">
                Negros Occidental, Philippines
              </span>
            </div>
          </div>
        </TiltContent>
      </Tilt>

      {/* Description */}
      <div className="w-full text-base-content leading-relaxed text-center md:text-left">
        <p className="text-[10px] md:text-xs mt-1">
          <span className="text-base-content">
            I am a{' '}
          </span>

          <span className="font-bold">
            <ShimmeringText
              text="Software Developer"
              className="font-bold"
            />
          </span>

          <span className="text-base-content">
            {' '}
            focused on building accessible and responsive web applications. I
            work with modern web technologies to create clean, maintainable
            solutions that address practical needs and improve user experience.
          </span>
        </p>
      </div>

      {/* Contact Buttons */}
      <nav
        aria-label="Contact links"
        className="grid grid-cols-4 gap-1.5 md:gap-3 md:flex md:flex-row md:flex-wrap justify-center md:justify-start"
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

      {/* Contact Dialog */}
      <ContactDialog
        contact={activeContact}
        open={activeContact !== null}
        onClose={() => setActiveContact(null)}
      />
    </section>
  );
}
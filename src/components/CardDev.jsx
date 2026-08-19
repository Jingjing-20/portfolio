import { useState } from 'react';
import profileImage from '@/components/resume_sections/about/gian.webp';
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
      {/* Name */}
      <h1 className="w-full font-bold tracking-tight text-base-content text-3xl md:text-5xl text-center md:text-left">
        Gian Carlo N. Ulep
      </h1>

      {/* Profile Image */}
      <div className="hover-3d w-fit mx-auto">
        <figure
          className={cn(
            'relative overflow-hidden p-1 md:p-2',
            'w-40 h-40 md:w-56 md:h-56',
            'rounded-lg',
            'border-4 border-double border-gray-300 dark:border-white/20',
            'bg-textured shadow-xl'
          )}
        >
          <img
            src={profileImage}
            alt="Gian Carlo N. Ulep"
            className="rounded-lg h-full w-full object-cover object-top"
          />
        </figure>

        {/* 8 empty divs required by DaisyUI hover-3d */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Description */}
      <div className="w-full text-base-content leading-relaxed text-center md:text-left">
        <div className="text-[8px] md:text-[10px] flex flex-wrap items-center justify-center md:justify-start gap-x-1 gap-y-1">
          <span>Born in 2004</span>

          <span className="text-base-content/20">•</span>

          <span>
            Valladolid, Negros Occidental, Philippines
          </span>
        </div>

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
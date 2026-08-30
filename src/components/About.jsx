import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import profileImage from '@/components/resume_sections/about/gian.webp';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
import ContactDialog from '@/components/resume_sections/about/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/about/contact_data';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';

const interactiveButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm md:text-base font-medium cursor-pointer hover-badge'
);

export default function About() {
  const [activeContact, setActiveContact] = useState(null);

  const handleBackToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      aria-label="About me"
      className="space-y-4 max-w-3xl mx-auto"
    >
      {/* Header */}
      <header className="pt-5 md:pt-10 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2',
              'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'text-sm md:text-base font-medium cursor-pointer hover-badge'
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <div className="flex-1">
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
              About
            </h2>
            <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs lg:text-sm">
              Get to know me better
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Image + Name + Details Row - Vertically centered */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 md:gap-8 w-full">
        {/* Image - Tilt Card (larger on mobile) */}
        <div className="shrink-0">
          <Tilt
            rotationFactor={8}
            springOptions={{
              stiffness: 350,
              damping: 25,
            }}
          >
            <TiltContent
              className={cn(
                'relative overflow-hidden',
                'rounded-xl',
                'border-3 border-gray-300 dark:border-white/20',
                'bg-gradient-image-border shadow-xl',
                'p-1'
              )}
            >
              <img
                src={profileImage}
                alt="Gian Carlo N. Ulep"
                className="rounded-lg w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover object-top"
              />
            </TiltContent>
          </Tilt>
        </div>

        {/* Right Side: Name + Details */}
        <div className="flex-1 w-full">
          {/* Name - with header format (title + subtitle) */}
          <div className="w-full text-center sm:text-left">
            <h3 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
              Gian Carlo N. Ulep
            </h3>
            {/* Role under name with shimmering */}
            <div className="mt-0">
              <ShimmeringText
                text="Software Developer"
                className="text-base-content font-extrabold text-md md:text-lg tracking-wider"
              />
            </div>
          </div>

          {/* HR separator between name/role and details */}
          <hr className="my-3 md:my-4" />

          {/* Details with grid layout */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {/* Row 1: Birthdate, Age, Gender */}
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Birthdate
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                05/27/2004
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Age
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                22
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Gender
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Male
              </span>
            </div>

            {/* Row 2: Phone (span 1), Location (span 2) */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Phone
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                09562657521
              </span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Location
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Valladolid, Negros Occidental, Philippines
              </span>
            </div>

            {/* Row 3: Program (full width - span 3) */}
            <div className="flex flex-col col-span-3">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Program
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Bachelor of Science in Information Technology - 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Description */}
      <div className="w-full">
        <p className="text-[10px] md:text-xs text-base-content/70 leading-relaxed">
          Experienced in deploying production-grade systems for state university and government institutions. Passionate about building web and software applications with a keen eye for detail and a dedication to delivering exceptional user experiences. I enjoy transforming ideas into functional, efficient, and visually appealing solutions through clean code, modern technologies, and continuous learning. Knowledgeable in troubleshooting, networking, email systems, web technologies, databases, security, documentation, and hosting platforms.        </p>
      </div>

      {/* Contact Buttons - Centered below description */}
      <nav
        aria-label="Contact links"
        className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3"
      >
        {CONTACT_LINKS.map((contact) => (
          <button
            key={contact.id}
            type="button"
            className={interactiveButtonClasses}
            style={{ '--brand-color': contact.color }}
            onClick={() => setActiveContact(contact)}
            aria-label={contact.label}
          >
            <span className="tool-icon flex items-center justify-center">
              {contact.icon}
            </span>
            <span className="hidden md:block text-[8px] md:text-[10px] font-medium text-base-content">
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
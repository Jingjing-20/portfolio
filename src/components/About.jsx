import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import profileImage from '@/components/resume_sections/about/gian.webp';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
import { CONTACT_LINKS } from '@/components/resume_sections/about/contact_data';
import ContactDialog from '@/components/resume_sections/about/ContactDialog';
import { cn } from '@/lib/utils';

const interactiveButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-1.5 md:gap-2 rounded-md px-2.5 py-1.5 md:px-3 md:py-1.5',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-[8px] md:text-[10px] font-medium cursor-pointer hover-badge'
);

export default function About() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleBackToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (contact) => {
    if (contact.email) {
      setSelectedContact(contact);
    } else if (contact.href) {
      window.open(contact.href, '_blank', 'noopener,noreferrer');
    }
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
              About Me
            </h2>
            <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs lg:text-sm">
              Get to know me better
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Image + Name + Contacts Row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8 w-full">
        {/* Image - Tilt Card */}
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
                className="rounded-lg w-40 h-40 md:w-25 md:h-25 lg:w-30 lg:h-30 object-cover object-top"
              />
            </TiltContent>
          </Tilt>
        </div>

        {/* Right Side: Name + Contact Buttons */}
        <div className="flex-1 w-full space-y-3 md:space-y-4">
          {/* Name */}
          <div className="w-full text-center sm:text-left">
            <h3 className="font-bold tracking-tight text-base-content text-4xl md:text-5xl lg:text-6xl">
              Gian Carlo N. Ulep
            </h3>
          </div>

          {/* Contact Buttons */}
          <nav
            aria-label="Contact links"
            className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 md:gap-2.5"
          >
            {CONTACT_LINKS.map((contact) => (
              <button
                key={contact.id}
                type="button"
                className={interactiveButtonClasses}
                style={{ '--brand-color': contact.color }}
                onClick={() => handleContactClick(contact)}
                aria-label={contact.label}
              >
                <span className="font-medium text-base-content">
                  {contact.label}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" className="size-3 md:size-3.5 opacity-70">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" />
                </svg>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <hr className="my-3 md:my-4" />

      {/* Description */}
      <div className="w-full">
        <p className="text-[10px] md:text-xs text-base-content/70 leading-relaxed">
          Experience in software development, systems deployment, and technical support, including systems used by government offices and a state university. Brings customer service experience and a solid foundation in computer networking through academic coursework and hands-on projects.
        </p>
      </div>

      <hr className="my-3 md:my-4" />

      {/* Personal Details & Education - With category headers */}
      <div className="w-full space-y-4">
        {/* Personal Details Section */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold text-base-content/80 tracking-wider uppercase mb-2">
            Personal Details
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-3">
            {/* Birthdate */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Birthdate
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                05/27/2004
              </span>
            </div>

            {/* Age */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Age
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                22
              </span>
            </div>

            {/* Gender */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Gender
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Male
              </span>
            </div>

            {/* Nationality */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Nationality
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Filipino
              </span>
            </div>

            {/* Zodiac Sign - shown beside nationality on desktop */}
            <div className="hidden md:flex flex-col md:col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Zodiac Sign
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Gemini
              </span>
            </div>

            {/* Address */}
            <div className="flex flex-col col-span-2">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Address
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Valladolid, Negros Occidental, Philippines
              </span>
            </div>

            {/* Languages */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Languages
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                English, Filipino
              </span>
            </div>

            {/* Phone */}
            <div className="flex flex-col col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Phone
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                09562657521
              </span>
            </div>
          </div>
        </div>

        {/* Educational Background Section */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold text-base-content/80 tracking-wider uppercase mb-2">
            Educational Background
          </h4>
          <div className="grid grid-cols-5 gap-x-4 gap-y-3">
            {/* School */}
            <div className="flex flex-col col-span-3 md:col-span-2">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                School
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Carlos Hilado Memorial State University – Alijis
              </span>
            </div>

            {/* Duration */}
            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Duration
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                2022–2026
              </span>
            </div>

            {/* Program */}
            <div className="flex flex-col col-span-5 md:col-span-2">
              <span className="text-[8px] md:text-[10px] text-base-content/70 tracking-wider uppercase">
                Program
              </span>
              <span className="text-[10px] md:text-xs text-base-content font-medium">
                Bachelor of Science in Information Technology
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <ContactDialog
        contact={selectedContact}
        open={selectedContact !== null}
        onClose={() => setSelectedContact(null)}
      />
    </section>
  );
}
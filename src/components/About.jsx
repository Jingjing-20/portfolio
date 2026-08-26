import { useState } from 'react';
import profileImage from '@/components/resume_sections/about/gian.webp';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
import ContactDialog from '@/components/resume_sections/about/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/about/contact_data';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import cardLogo from '@/components/resume_sections/about/code-circle-outline.svg';
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

  return (
    <section
      id="about"
      aria-label="About me"
      className="space-y-4"
    >
      {/* Header - Left aligned */}
      <header>
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
            About
          </h2>

          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs lg:text-sm">
            Get to know me better
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* All content stacked and centered */}
      <div className="flex flex-col items-center gap-4 md:gap-6">
        {/* Profile Card - Centered */}
        <div className="flex justify-center w-full">
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
                'max-w-2xl w-full',
                'rounded-xl',
                'border-3 border-gray-300 dark:border-white/20',
                'bg-gradient-card shadow-xl',
                'p-3 md:p-4 lg:p-5',
                'flex flex-col items-center',
                'gap-3 md:gap-4 lg:gap-5'
              )}
            >
              {/* Role - Positioned above image */}
              <div className="w-full flex gap-3">
                <span className="flex items-center gap-2">
                  <img src={cardLogo} alt="Code Icon" className="w-6 h-6 dark:invert" />
                </span>
                <span className="text-base-content font-bold text-md md:text-xl lg:text-2xl tracking-wider">
                  <ShimmeringText
                    text="Software Developer"
                    className="font-extrabold"
                  />
                </span>
              </div>

              <hr className="w-full" />

              {/* Image and Details - Side by side */}
              <div className="flex flex-row items-center w-full gap-3 md:gap-6">
                {/* Left Side - Profile Image */}
                <div className="shrink-0">
                  <div
                    className={cn(
                      'relative overflow-hidden',
                      'w-20 h-20',
                      'md:w-25 md:h-25',
                      'lg:w-30 lg:h-30',
                      'p-0.5 md:p-1 rounded-md',
                      'border-3 border-gray-300 dark:border-white/20',
                      'bg-gradient-image-border shadow-lg'
                    )}
                  >
                    <img
                      src={profileImage}
                      alt="Gian Carlo N. Ulep"
                      className="rounded-md h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="min-w-0 flex-1">
                  {/* Personal Information */}
                  <div className="w-full text-base-content leading-relaxed space-y-0.5 md:space-y-1 lg:space-y-2">
                    {/* Birthdate and Gender - Side by side */}
                    <div className="grid grid-cols-2 gap-x-6">
                      {/* Birth Date */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] lg:text-xs text-base-content/70 tracking-wider">
                          Birth Date :
                        </span>
                        <span className="text-[10px] md:text-xs lg:text-sm text-base-content font-medium">
                          05/27/2004
                        </span>
                      </div>

                      {/* Gender */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] lg:text-xs text-base-content/70 tracking-wider">
                          Gender :
                        </span>
                        <span className="text-[10px] md:text-xs lg:text-sm text-base-content font-medium">
                          Male
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6">
                      {/* Languages */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] lg:text-xs text-base-content/70 tracking-wider">
                          Languages :
                        </span>
                        <span className="text-[10px] md:text-xs lg:text-sm text-base-content font-medium">
                          Filipino, English
                        </span>
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] lg:text-xs text-base-content/70 tracking-wider">
                          Phone # :
                        </span>
                        <span className="text-[10px] md:text-xs lg:text-sm text-base-content font-medium">
                          09562657521
                        </span>
                      </div>
                    </div>

                    {/* Location - Full width */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[6px] md:text-[10px] lg:text-xs text-base-content/70 tracking-wider">
                        Location :
                      </span>
                      <span className="text-[10px] md:text-xs lg:text-sm text-base-content font-medium">
                        Negros Occidental, Philippines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltContent>
          </Tilt>
        </div>

        {/* Name and Course - Centered with same size as header */}
        <div className="w-full text-center">
          <h3 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
            Gian Carlo N. Ulep
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm text-base-content/70">
            Bachelor of Science in Information Technology - 2026
          </p>
        </div>

        {/* Description - Centered container with left-aligned text */}
        <div className="w-full max-w-2xl">
          <p className="text-[10px] md:text-xs lg:text-sm text-base-content/70 leading-relaxed text-left">
            Passionate about building web and software applications with a keen eye for detail and a dedication to delivering exceptional user experiences.
            I enjoy transforming ideas into functional, efficient, and visually appealing solutions through clean code, modern technologies, and continuous learning.
          </p>
        </div>

        {/* Contact Buttons - Centered */}
        <nav
          aria-label="Contact links"
          className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-1.5 md:gap-3"
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

              <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                {contact.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Contact Dialog */}
      <ContactDialog
        contact={activeContact}
        open={activeContact !== null}
        onClose={() => setActiveContact(null)}
      />
    </section>
  );
}
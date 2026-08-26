import { useState } from 'react';
import profileImage from '@/components/resume_sections/carddev/gian.webp';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
import ContactDialog from '@/components/resume_sections/carddev/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/carddev/contact_data';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import cardLogo from '@/components/resume_sections/carddev/code-circle-outline.svg';
import { cn } from '@/lib/utils';

const interactiveButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm md:text-base font-medium cursor-pointer hover-badge'
);

export default function CardDev() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section
      id="carddev"
      aria-label="Profile card"
      className="space-y-4"
    >
      {/* Header */}
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Gian Carlo N. Ulep
          </h2>

          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">
            BS in Information Technology - 2026
          </p>
        </div>
      </header>

      {/* Mobile: Card on left, Description + Contact on right */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Side - Profile Card */}
        <div className="flex-shrink-0 md:w-auto">
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
                'w-full md:max-w-xl',
                'rounded-xl',
                'border-3 border-gray-300 dark:border-white/20',
                'bg-gradient-card shadow-xl',
                'p-3 md:p-4',
                'flex flex-col items-center',
                'gap-3 md:gap-4'
              )}
            >
              {/* Role - Positioned above image */}
              <div className="w-full flex gap-3">
                <span className="flex items-center gap-2">
                  <img src={cardLogo} alt="Code Icon" className="w-6 h-6 dark:invert" />
                </span>
                <span className="text-base-content font-bold text-md md:text-xl tracking-wider">
                  <ShimmeringText
                    text="Software Developer"
                    className="font-extrabold"
                  />
                </span>
              </div>

              <hr className="w-full" />

              {/* Image and Details - Side by side */}
              <div className="flex flex-row items-center w-full gap-3 md:gap-6">
                {/* Left Side - Profile Image (Smaller) */}
                <div className="shrink-0">
                  <div
                    className={cn(
                      'relative overflow-hidden',
                      'w-20 h-20',
                      'md:w-25 md:h-25',
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
                  <div className="w-full text-base-content leading-relaxed space-y-0.5 md:space-y-1">
                    {/* Birthdate and Gender - Side by side */}
                    <div className="grid grid-cols-2 gap-x-6">
                      {/* Birth Date */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] text-base-content/70 tracking-wider">
                          Birth Date :
                        </span>
                        <span className="text-[10px] md:text-xs text-base-content font-medium">
                          05/27/2004
                        </span>
                      </div>

                      {/* Gender */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] text-base-content/70 tracking-wider">
                          Gender :
                        </span>
                        <span className="text-[10px] md:text-xs text-base-content font-medium">
                          Male
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6">
                      {/* Languages */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] text-base-content/70 tracking-wider">
                          Languages :
                        </span>
                        <span className="text-[10px] md:text-xs text-base-content font-medium">
                          Filipino, English
                        </span>
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-[6px] md:text-[10px] text-base-content/70 tracking-wider">
                          Phone # :
                        </span>
                        <span className="text-[10px] md:text-xs text-base-content font-medium">
                          09562657521
                        </span>
                      </div>
                    </div>

                    {/* Location - Full width */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[6px] md:text-[10px] text-base-content/70 tracking-wider">
                        Location :
                      </span>
                      <span className="text-[10px] md:text-xs text-base-content font-medium">
                        Negros Occidental, Philippines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltContent>
          </Tilt>
        </div>

        {/* Right Side - Description and Contact Buttons */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Description */}
          <div className="w-full text-base-content leading-relaxed text-left">
            <p className="text-[10px] md:text-xs">
              Passionate about building web and software applications with a keen eye for detail and a dedication to delivering exceptional user experiences.
              I enjoy transforming ideas into functional, efficient, and visually appealing solutions through clean code, modern technologies, and continuous learning.
            </p>
          </div>

          {/* Contact Buttons */}
          <nav
            aria-label="Contact links"
            className="flex w-full flex-wrap items-start gap-1.5 md:gap-3"
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
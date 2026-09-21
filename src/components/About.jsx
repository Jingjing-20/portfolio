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
  'shadow-xl inline-flex items-center justify-center gap-1.5 md:gap-2 rounded-sm px-2.5 py-1.5 md:px-3 md:py-1.5',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-[10px] md:text-xs cursor-pointer hover-badge'
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
      className="space-y-4 max-w-2xl mx-auto"
    >
      {/* Header */}
      <header className="pt-5 md:pt-10 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2',
              'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'cursor-pointer hover-badge'
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
          </button>

          <div className="flex-1">
            <p className="text-base-content text-md md:text-lg lg:text-xl">
              About Me
            </p>
            <p className="text-[10px] md:text-xs text-base-content/50">
              Get to know me better
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Image + Name + Contacts Row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-6 w-full">
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
                className="rounded-lg w-40 h-40 md:w-40 md:h-40 lg:w-45 lg:h-45 object-cover object-top"
              />
            </TiltContent>
          </Tilt>
        </div>

        {/* Right Side: Name + Contact Buttons */}
        <div className="flex-1 w-full space-y-3 md:space-y-4">
          {/* Name */}
          <div className="w-full text-center sm:text-left">
            <h3 className="font-extrabold text-base-content text-3xl md:text-4xl lg:text-5xl">
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
                <span className="text-base-content">
                  {contact.label}
                </span>
              </button>
            ))}
          </nav>
          <p className="text-[10px] md:text-xs text-base-content">
            Experience in software development, systems deployment, and technical support, including systems used by government offices and a state university. Brings customer service experience and a solid foundation in computer networking through academic coursework and hands-on projects.
          </p>
        </div>
      </div>

      <hr className="my-3 md:my-4" />

      {/* Contact Dialog */}
      <ContactDialog
        contact={selectedContact}
        open={selectedContact !== null}
        onClose={() => setSelectedContact(null)}
      />
    </section>
  );
}
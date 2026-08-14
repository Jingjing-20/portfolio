import { useState } from 'react';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import profileImage from '@/components/resume_sections/about/gian.png';
import ContactDialog from '@/components/resume_sections/about/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/about/about_data';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';


const outlineButtonWithLabelClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer'
);

export default function About() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section id="about" className="scroll-mt-24 pt-4 sm:pt-6 md:pt-0">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">Gian Carlo N. Ulep</h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">BS in Information Technology : Batch 2025 – 2026</p>
        </div>
      </header>

      <div className="items-start gap-3 md:gap-6 grid grid-cols-[30%_70%]">
        <div className="flex block">
          <Tilt maxTilt={12} className="w-46 max-w-xs">
            <TiltContent className="overflow-hidden rounded-lg p-1 md:p-1.5 bg-textured border-5 border-double border-gray-300 dark:border-white/20 shadow-xl dark:shadow-2xl">
              <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-[#1a1b1d]">
                <img src={profileImage} alt="Gian Carlo N. Ulep" className="aspect-square w-full object-cover transition-all duration-500 hover:scale-105" />
              </div>
            </TiltContent>
          </Tilt>
        </div>

        <div className="flex min-h-full flex-col justify-between gap-5">
          <div className="space-y-1.5 md:space-y-3">
            <div className="text-[10px] md:text-xs leading-relaxed">
              <p>
                <span className="text-base-content">I am a </span>
                <span className="font-bold"><ShimmeringText text="Software Developer" className="font-bold" /></span>
                <span className="text-base-content"> focused on building accessible and responsive web applications. I work with modern web technologies to create clean, maintainable solutions that address practical needs and improve user experience.</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] md:text-[10px] text-base-content/45">
              <span>Born in 2004</span>
              <span className="text-base-content/20">•</span>
              <span>Male</span>
              <span className="text-base-content/20">•</span>
              <span>Valladolid, Negros Occidental, Philippines</span>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Contact links" className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
              {CONTACT_LINKS.map((contact) => (
                <button key={contact.id} type="button" className={outlineButtonWithLabelClasses} onClick={() => setActiveContact(contact)} aria-label={contact.label}>
                  {contact.icon}
                  <span className="hidden md:block text-[10px] font-medium text-base-content">{contact.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="block md:hidden mt-3">
        <nav aria-label="Contact links" className="flex flex-wrap items-center justify-center gap-3">
          {CONTACT_LINKS.map((contact) => (
            <button key={contact.id} type="button" className={outlineButtonWithLabelClasses} onClick={() => setActiveContact(contact)} aria-label={contact.label}>
              {contact.icon}
              <span className="text-[8px] font-medium text-base-content/80">{contact.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <ContactDialog contact={activeContact} open={activeContact !== null} onClose={() => setActiveContact(null)} />
    </section>
  );
}
import { useState } from 'react';
import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import ContactDialog from '@/components/resume_sections/about/ContactDialog';
import { CONTACT_LINKS } from '@/components/resume_sections/about/about_data';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';

const interactiveButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer transform hover:-translate-y-1 hover:rotate-3'
);

const headerIconClasses = cn(
  'inline-flex items-center justify-center rounded-md p-2 shadow-xl',
  'bg-textured border border-gray-300 dark:border-white/20',
  'transition-all duration-300 hover:border-gray-800 dark:hover:border-white/70',
  'transform hover:-translate-y-1 hover:rotate-3'
);

export default function About() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <section id="about" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">About</h2>
            <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">A quick introduction and ways to get in touch</p>
          </div>
          <div className={headerIconClasses} aria-hidden="true"><AboutInfo size={20} /></div>
        </div>
      </header>

      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-[10px] leading-relaxed md:text-xs">
            <span className="text-base-content">I am a </span>
            <span className="font-bold"><ShimmeringText text="Software Developer" className="font-bold" /></span>
            <span className="text-base-content"> focused on building accessible and responsive web applications. I work with modern web technologies to create clean, maintainable solutions that address practical needs and improve user experience.</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-base-content/45 md:text-[10px]">
            <span>Born in 2004</span><span className="text-base-content/20">•</span><span>Male</span><span className="text-base-content/20">•</span><span>Valladolid, Negros Occidental, Philippines</span>
          </div>
        </div>
        <nav aria-label="Contact links" className="flex flex-wrap items-center gap-2">
          {CONTACT_LINKS.map((contact) => (
            <button key={contact.id} type="button" className={interactiveButtonClasses} onClick={() => setActiveContact(contact)} aria-label={contact.label}>
              {contact.icon}
              <span className="text-[8px] font-medium text-base-content md:text-[10px]">{contact.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <ContactDialog contact={activeContact} open={activeContact !== null} onClose={() => setActiveContact(null)} />
    </section>
  );
}

import { useState } from 'react';
import { CONTACT_LINKS } from '@/components/resume_sections/socials/contact_data';
import ContactDialog from '@/components/resume_sections/socials/ContactDialog';
import { cn } from '@/lib/utils';

const socialBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-1.5 md:gap-2 p-2 rounded-sm',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-[10px] md:text-xs cursor-pointer hover-badge'
);

const SOCIAL_CATEGORIES = [
  {
    category: 'Professional & Code',
    description: 'Software repositories, open-source work, and professional network',
    items: ['github', 'linkedin'],
  },
  {
    category: 'Direct Contact',
    description: 'Email for inquiries, collaborations, and opportunities',
    items: ['gmail'],
  },
  {
    category: 'Social Media',
    description: 'Personal profiles, social channels, and messaging',
    items: ['instagram', 'facebook'],
  },
];

export default function Socials() {
  const [selectedContact, setSelectedContact] = useState(null);

  const contactMap = new Map(CONTACT_LINKS.map((item) => [item.id, item]));

  const renderCategory = (cat) => {
    const contacts = cat.items
      .map((id) => contactMap.get(id))
      .filter(Boolean);

    return (
      <div key={cat.category}>
        {/* Category Title and Description */}
        <div className="mb-2">
          <h3 className="text-xs md:text-sm text-base-content">
            {cat.category}
          </h3>
          <p className="text-[8px] md:text-[10px] text-base-content/50">
            {cat.description}
          </p>
        </div>

        {/* Social Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              type="button"
              className={socialBadgeClasses}
              onClick={() => setSelectedContact(contact)}
              aria-label={contact.label}
            >
              <span className="flex items-center justify-center size-3.5 md:size-4 shrink-0">
                {contact.icon}
              </span>
              <span className="text-base-content">
                {contact.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="socials" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3 md:mb-6">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl">
            Socials
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Connect, collaborate, and reach out with me across platforms
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Stack Format Layout */}
      <div className="space-y-4 md:space-y-6">
        {SOCIAL_CATEGORIES.map(renderCategory)}
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

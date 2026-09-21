import { ArrowLeft } from 'lucide-react';
import { TECH_STACK } from '@/components/resume_sections/stack/stack_data';
import { cn } from '@/lib/utils';

const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center p-1 md:p-2 rounded-sm',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover-badge',
  'text-[10px] md:text-xs cursor-default text-base-content'
);

export default function TechStack() {
  const handleBackToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStackCategory = (stackCategory) => (
    <div key={stackCategory.category}>
      {/* Category Title and Description */}
      <div className="mb-2">
        <h3 className="text-xs md:text-sm text-base-content">
          {stackCategory.category}
        </h3>
        <p className="text-[8px] md:text-[10px] text-base-content/50 ">
          {stackCategory.description}
        </p>
      </div>

      {/* Tools / Skills Badges (Text Only) */}
      <div className="flex flex-wrap items-center gap-2">
        {stackCategory.tools.map((tool) => (
          <div
            key={tool}
            className={techBadgeClasses}
          >
            <span>{tool}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="stack" className="scroll-mt-24 max-w-2xl mx-auto">
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
              Technical Skills
            </p>
            <p className="text-[10px] md:text-xs text-base-content/50">
              Technologies, networking, systems, and technical competencies
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Single column stack layout */}
      <div className="space-y-4 md:space-y-6">
        {TECH_STACK.map(renderStackCategory)}
      </div>
    </section>
  );
}

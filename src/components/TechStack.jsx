import { TECH_STACK } from '@/components/resume_sections/stack/stack_data';
import { cn } from '@/lib/utils';

const techBadgeClasses = cn(
  'text-[10px] md:text-xs px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
  'hover:text-base-content hover:border-base-content',
  'font-medium grayscale cursor-default',
  'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0'
);

export default function TechStack() {
  const renderStackCategory = (stackCategory) => (
    <div key={stackCategory.category}>
      <div className="mb-2">
        <h3 className="text-[10px] md:text-xs text-base-content">
          {stackCategory.category} :
        </h3>
      </div>

      <div className="space-y-2">
        <p className="text-[8px] md:text-[10px] text-base-content/50">
          {stackCategory.description}
        </p>

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
    </div>
  );

  return (
    <section id="stack" className="scroll-mt-24 max-w-2xl mx-auto">
      <header className="pt-20 md:pt-10 mb-3">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            Technical Skills
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Languages, frameworks, and tools
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3" />

      <div className="space-y-4 md:space-y-6">
        {TECH_STACK.map(renderStackCategory)}
      </div>
    </section>
  );
}

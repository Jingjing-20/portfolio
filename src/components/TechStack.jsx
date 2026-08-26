import { Tools } from '@/components/resume_sections/stack/tools';
import { TECH_STACK } from '@/components/resume_sections/stack/stack_data';
import { cn } from '@/lib/utils';

const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-sm md:text-base font-medium cursor-default hover-badge'
);

export default function TechStack() {
  // Split the stack into two halves for desktop layout
  const midPoint = Math.ceil(TECH_STACK.length / 2);
  const leftStack = TECH_STACK.slice(0, midPoint);
  const rightStack = TECH_STACK.slice(midPoint);

  const renderStackCategory = (stackCategory) => (
    <div key={stackCategory.category}>
      {/* Category Title and Description */}
      <div className="mb-2">
        <h3 className="text-xs md:text-sm lg:text-base font-semibold text-base-content">
          {stackCategory.category}
        </h3>
        <p className="text-[8px] md:text-[10px] lg:text-xs text-base-content/70 leading-relaxed">
          {stackCategory.description}
        </p>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap items-center gap-2">
        {stackCategory.tools.map((tool) => {
          const stackTool = Tools[tool];
          if (!stackTool) return null;

          return (
            <div
              key={tool}
              className={techBadgeClasses}
              style={{ '--brand-color': stackTool.color }}
            >
              <span className="tool-icon flex items-center justify-center">
                {stackTool.icon}
              </span>
              <span className="text-[8px] md:text-[10px] lg:text-xs font-medium text-base-content">
                {tool}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="stack" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
              Stack
            </h2>
            <p className="text-[10px] md:text-xs lg:text-sm leading-relaxed text-base-content/70">
              Tools and technologies I work with
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />
      
      {/* Mobile: Single column | Desktop: Two columns */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          {leftStack.map(renderStackCategory)}
        </div>

        {/* Right Column - Only visible on desktop */}
        <div className="flex-1 space-y-4">
          {rightStack.map(renderStackCategory)}
        </div>
      </div>
    </section>
  );
}

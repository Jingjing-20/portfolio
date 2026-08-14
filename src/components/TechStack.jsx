import { StackLine } from '@/components/animate-ui/icons/stack-line';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Tools } from '@/components/resume_sections/stack/tools';
import { TECH_STACK } from '@/components/resume_sections/stack/stack_data';
import { cn } from '@/lib/utils';


const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'text-sm font-medium cursor-default'
);

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Stack
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Tools and technologies I work with
          </p>
        </div>
      </header>
      <div className="space-y-6 md:space-y-8">
        {TECH_STACK.map(({ category, description, tools }) => (
          <article key={category}>
            <div className="space-y-1">
              <h3 className="text-xs md:text-sm leading-relaxed font-semibold text-base-content">
                {category}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {tools.map((tool) => {
                const stackTool = Tools[tool];
                if (!stackTool) return null;

                return (
                  <div key={tool} className={techBadgeClasses}>
                    {stackTool.icon}
                    <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                      {tool}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

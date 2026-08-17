import { StackLine } from '@/components/animate-ui/icons/stack-line';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Tools } from '@/components/resume_sections/stack/tools';
import { TECH_STACK } from '@/components/resume_sections/stack/stack_data';
import { cn } from '@/lib/utils';


const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'text-sm font-medium cursor-default transform hover:-translate-y-1 hover:rotate-3'
);

const headerIconClasses = cn(
  'inline-flex items-center justify-center rounded-md p-2 shadow-xl',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'transform hover:-translate-y-1 hover:rotate-3'
);

export default function TechStack() {
  // Flatten all tools from all categories into a single array
  const allTools = TECH_STACK.flatMap(({ tools }) => tools);

  return (
    <section id="stack" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Stack
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Tools and technologies I work with
          </p>
          </div>
          <div className={headerIconClasses} aria-hidden="true"><StackLine size={20} /></div>
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        {allTools.map((tool) => {
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
    </section>
  );
}

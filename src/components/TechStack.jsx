// TechStack.jsx
import { StackLine } from '@/components/animate-ui/icons/stack-line';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Tools } from '@/assets/projects/tools';
import { cn } from '@/lib/utils';

const TECH_STACK = [
  {
    category: 'Frontend',
    description: 'Modern component libraries and styling for responsive user experiences.',
    tools: ['React', 'JavaScript', 'Tailwind CSS', 'Vue.js', 'Next.js', 'Vite'],
  },
  {
    category: 'Backend & Server',
    description: 'Application logic, APIs, and server-side processing.',
    tools: ['PHP', 'Laravel', 'Node.js', 'Apache'],
  },
  {
    category: 'Database',
    description: 'Reliable data storage and real-time database services.',
    tools: ['MySQL', 'Supabase', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Development Tools',
    description: 'Version control, CI/CD, and development environment tools.',
    tools: ['Git', 'GitHub', 'GitHub Actions', 'Antigravity'],
  },
];

const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'border bg-background dark:bg-input/30 dark:border-input',
  'text-sm font-medium'
);

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <header className="mb-3 md:mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Stack
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Tools and technologies I work with
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background dark:bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <StackLine size={20} className="h-5 w-5" />
          </AnimateIcon>
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
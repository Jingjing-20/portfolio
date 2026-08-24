import { Tools } from '@/components/resume_sections/stack/tools';
import { ArrowUp, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ShadcnIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="m19.01 11.55l-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0Zm.16-8.21c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z" />
  </svg>
);

const PORTFOLIO_STACK = [
  { name: 'React', icon: Tools['React']?.icon },
  { name: 'JavaScript', icon: Tools['JavaScript']?.icon },
  { name: 'Vite', icon: Tools['Vite']?.icon },
  { name: 'Tailwind', icon: Tools['Tailwind']?.icon },
  { name: 'Shadcn UI', icon: <ShadcnIcon className="h-5 w-5" /> },
];

// Reusing the exact same button style from About section
const outlineButtonWithLabelClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-4 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer hover-badge'
);

const buttonUp = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-4 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer hover-theme-switch'
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Built with Stack */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-1.5 justify-center md:justify-start text-[10px] md:text-xs text-base-content font-semibold tracking-wider">
            <Code2 className="h-3.5 w-3.5 text-base-content/60" />
            <span>Built With</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {PORTFOLIO_STACK.map((item) => (
              <div key={item.name} className={outlineButtonWithLabelClasses}>
                <span className="shrink-0 text-base-content [&_svg]:h-5 [&_svg]:w-5">
                  {item.icon}
                </span>
                <span className="text-[8px] font-medium text-base-content">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <div className="space-y-1">
            <p className="text-[10px] md:text-xs font-medium text-base-content">
              © {new Date().getFullYear()} Gian Carlo N. Ulep
            </p>
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              Designed & Crafted with Motion
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={buttonUp}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
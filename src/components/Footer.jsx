import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ReactIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.2">
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const JavaScriptIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" rx="2" fill="#F7DF1E" />
    <path fill="#000" d="M3.2 4h17.6v17.6H3.2V4zm8.45 14.14c.52.79 1.26 1.4 2.42 1.4 1.48 0 2.09-.76 2.09-1.94 0-1.33-.73-1.86-1.96-2.57l-.41-.24c-.88-.51-1.48-.87-1.48-1.8 0-.7.53-1.25 1.32-1.25.71 0 1.21.27 1.7.74l1.12-1.44c-.79-.73-1.83-1.08-3.02-1.08-1.79 0-2.92 1.08-2.92 2.46 0 1.42.79 1.98 2.04 2.69l.41.23c1.03.6 1.65.94 1.65 1.95 0 .8-.63 1.26-1.51 1.26-.95 0-1.61-.47-2.02-1.19l-1.47.84zm7.3-.27c.52.79 1.26 1.4 2.42 1.4 1.47 0 2.09-.76 2.09-1.94 0-1.33-.73-1.86-1.96-2.57l-.41-.24c-.88-.51-1.48-.87-1.48-1.8 0-.7.53-1.25 1.32-1.25.71 0 1.21.27 1.7.74l1.12-1.44c-.79-.73-1.83-1.08-3.02-1.08-1.79 0-2.92 1.08-2.92 2.46 0 1.42.79 1.98 2.04 2.69l.41.23c1.03.6 1.65.94 1.65 1.95 0 .8-.63 1.26-1.51 1.26-.95 0-1.61-.47-2.02-1.19l-1.47.84z" />
  </svg>
);

const TailwindIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="#38BDF8" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.77.19 1.31.74 1.92 1.36C13.41 10.86 14.56 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.77-.19-1.31-.74-1.92-1.36C15.59 7.14 14.44 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.77.19 1.31.74 1.92 1.36C8.41 16.86 9.56 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.77-.19-1.31-.74-1.92-1.36C10.59 13.14 9.44 12 7 12z" />
  </svg>
);

const ShadcnIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="m19.01 11.55l-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0Zm.16-8.21c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z" />
  </svg>
);

const PORTFOLIO_STACK = [
  { name: 'React', icon: <ReactIcon className="h-5 w-5" /> },
  { name: 'JavaScript', icon: <JavaScriptIcon className="h-5 w-5" /> },
  { name: 'Tailwind', icon: <TailwindIcon className="h-5 w-5" /> },
  { name: 'Shadcn UI', icon: <ShadcnIcon className="h-5 w-5" /> },
];

// Reusing the exact same button style from About section
const outlineButtonWithLabelClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm md:text-base cursor-pointer hover-badge'
);

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Built with Stack */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-1.5 justify-center md:justify-start text-[10px] md:text-xs lg:text-sm text-base-content tracking-wider">
            <Code2 className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-base-content/60" />
            <span>Built With</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {PORTFOLIO_STACK.map((item) => (
              <div key={item.name} className={outlineButtonWithLabelClasses}>
                <span className="shrink-0 text-base-content [&_svg]:h-5 [&_svg]:w-5">
                  {item.icon}
                </span>
                <span className="text-[8px] md:text-[10px] text-base-content">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <div className="space-y-1">
            <p className="text-[10px] md:text-xs lg:text-sm text-base-content">
              © {new Date().getFullYear()} Gian Carlo N. Ulep
            </p>
            <p className="text-[8px] md:text-[10px] lg:text-xs text-base-content/60">
              Designed & Crafted with Motion
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
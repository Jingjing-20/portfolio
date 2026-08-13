import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun, Menu } from 'lucide-react';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import { Briefcase } from '@/components/animate-ui/icons/briefcase';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { StackLine } from '@/components/animate-ui/icons/stack-line';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { Particles, ParticlesEffect } from '@/components/animate-ui/primitives/effects/particles';
import { ThemeToggler } from '@/components/animate-ui/primitives/effects/theme-toggler';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from '@/components/animate-ui/primitives/animate/tooltip';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { 
    value: 'about', 
    label: 'About', 
    href: '#about',
    icon: <AboutInfo size={20} />
  },
  { 
    value: 'experience', 
    label: 'Experience', 
    href: '#experience',
    icon: <Briefcase size={20} />
  },
  { 
    value: 'projects', 
    label: 'Projects', 
    href: '#projects',
    icon: <FolderFiles size={20} />
  },
  { 
    value: 'stack', 
    label: 'Stack', 
    href: '#stack',
    icon: <StackLine size={20} />
  },
  { 
    value: 'certificates', 
    label: 'Certificates', 
    href: '#certificates',
    icon: <Certificate size={20} />
  },
];

const navButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-background border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'cursor-pointer'
);

const activeButtonClasses = cn(
  'border-double border-5 border-gray-800 dark:border-white/70'
);

const mobileMenuButtonClasses = cn(
  'shadow-xl inline-flex items-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'cursor-pointer'
);

function ThemeTogglerBtn({ showLabel = false }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  const handleThemeToggle = (nextTheme, toggleTheme) => {
    toggleTheme(nextTheme);
    setClickCount((prev) => prev + 1);
  };

  return (
    <ThemeToggler
      theme={theme}
      resolvedTheme={resolvedTheme}
      setTheme={setTheme}
      direction="ltr"
    >
      {({ effective, toggleTheme }) => {
        const nextTheme = effective === 'dark' ? 'light' : 'dark';
        const ThemeIcon = effective === 'system' ? Monitor : effective === 'dark' ? Moon : Sun;
        const themeLabel = effective === 'system' ? 'System' : effective === 'dark' ? 'Dark' : 'Light';

        if (showLabel) {
          return (
            <button
              onClick={() => handleThemeToggle(nextTheme, toggleTheme)}
              className={cn(mobileMenuButtonClasses, 'relative w-full justify-start')}
              aria-label="Toggle theme"
            >
              <Particles animate={true}>
                <AnimateIcon animateOnHover>
                  <ThemeIcon className="h-5 w-5" />
                </AnimateIcon>
                {clickCount > 0 && (
                  <ParticlesEffect
                    key={clickCount}
                    count={10}
                    radius={35}
                    spread={360}
                    duration={0.6}
                    holdDelay={0.02}
                    style={{ top: '50%', left: '50%' }}
                    className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50"
                  />
                )}
              </Particles>
              <span className="text-[8px] md:text-[10px] font-medium text-base-content">{themeLabel}</span>
            </button>
          );
        }

        return (
          <Tooltip side="bottom" sideOffset={8}>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleThemeToggle(nextTheme, toggleTheme)}
                className={cn(navButtonClasses, 'relative')}
                aria-label="Toggle theme"
              >
                <Particles animate={true}>
                  <AnimateIcon animateOnHover>
                    <ThemeIcon className="h-5 w-5" />
                  </AnimateIcon>
                  {clickCount > 0 && (
                    <ParticlesEffect
                      key={clickCount}
                      count={10}
                      radius={35}
                      spread={360}
                      duration={0.6}
                      holdDelay={0.02}
                      style={{ top: '50%', left: '50%' }}
                      className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50"
                    />
                  )}
                </Particles>
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white/50 dark:bg-black/50 text-base-content text-xs font-medium p-1.5 rounded-md shadow-xl border border-gray-400 dark:border-gray-400">
              <TooltipArrow
                fill="currentColor"
                className="text-base-300 stroke-gray-400 dark:stroke-gray-400"
                strokeWidth={1}
              />
              {themeLabel}
            </TooltipContent>
          </Tooltip>
        );
      }}
    </ThemeToggler>
  );
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(NAV_ITEMS[0]?.value);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => ({
        id: item.value,
        element: document.querySelector(item.href)
      })).filter(section => section.element);

      if (sections.length === 0) return;

      // Get current scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If at the bottom of the page, set last section as active
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveTab(sections[sections.length - 1].id);
        return;
      }

      // Find the section that's currently most visible in viewport
      // Check from the top of the viewport with an offset for the navbar
      const offset = 100; // Account for fixed navbar height
      let currentSection = sections[0].id;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.element.getBoundingClientRect();
        const absoluteTop = scrollPosition + rect.top;

        if (scrollPosition >= absoluteTop - offset) {
          currentSection = section.id;
          break;
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, value, href) => {
    e.preventDefault();
    setActiveTab(value);
    setIsMobileMenuOpen(false);
    
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <TooltipProvider openDelay={200} closeDelay={100}>
      <div className="fixed left-0 right-0 top-3 z-50 flex w-full justify-center px-4">
        <div className={cn(
          'flex w-full max-w-3xl items-center justify-between px-3 py-2',
          'shadow-xl rounded-xl bg-background border border-gray-300 dark:border-white/20'
        )}>
          {/* Left: Portfolio Text */}
          <div className="flex items-center">
            <h1 className="text-sm md:text-xl font-bold text-base-content">Portfolio</h1>
          </div>

          {/* Desktop: Center Navigation Buttons */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <Tooltip key={item.value} side="bottom" sideOffset={8}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={(e) => handleNavClick(e, item.value, item.href)}
                      className={cn(
                        navButtonClasses,
                        isActive && activeButtonClasses
                      )}
                      aria-label={item.label}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.icon}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white/50 dark:bg-black/50 text-base-content text-xs font-medium p-1.5 rounded-md shadow-xl border border-gray-400 dark:border-gray-400">
                    <TooltipArrow
                      fill="currentColor"
                      className="text-base-300 stroke-gray-400 dark:stroke-gray-400"
                      strokeWidth={1}
                    />
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>

          {/* Desktop: Right Theme Toggle */}
          <div className="hidden md:flex items-center">
            <ThemeTogglerBtn />
          </div>

          {/* Mobile: Dropdown Menu */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(navButtonClasses)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Dropdown Panel */}
            {isMobileMenuOpen && (
              <>
                {/* Backdrop to close menu when clicking outside */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-hidden="true"
                />
                
                {/* Dropdown Content */}
                <div className={cn(
                  'absolute right-0 top-full mt-2 z-50',
                  'shadow-xl rounded-xl bg-background border border-gray-300 dark:border-white/20',
                  'p-3 space-y-2'
                )}>
                  <div className="space-y-1 pb-2 border-b border-gray-300 dark:border-white/20">
                    <h3 className="text-xs font-semibold text-base-content">Navigation</h3>
                    <p className="text-[10px] text-base-content/70 leading-relaxed">Browse through sections</p>
                  </div>

                  <nav aria-label="Mobile navigation" className="space-y-2">
                    {NAV_ITEMS.map((item) => {
                      const isActive = activeTab === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={(e) => handleNavClick(e, item.value, item.href)}
                          className={cn(
                            mobileMenuButtonClasses,
                            'w-full justify-start',
                            isActive && activeButtonClasses
                          )}
                          aria-label={item.label}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.icon}
                          <span className="text-[8px] md:text-[10px] font-medium text-base-content">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>

                  <div className="pt-2 border-t border-gray-300 dark:border-white/20">
                    <ThemeTogglerBtn showLabel={true} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

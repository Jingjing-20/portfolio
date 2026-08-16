import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '@/components/resume_sections/about/android-chrome-512x512.png';
import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import { Briefcase } from '@/components/animate-ui/icons/briefcase';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { StackLine } from '@/components/animate-ui/icons/stack-line';
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { Switch, SwitchThumb } from '@/components/animate-ui/primitives/radix/switch';
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
    value: 'stack',
    label: 'Stack',
    href: '#stack',
    icon: <StackLine size={20} />
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
    value: 'certificates',
    label: 'Certificates',
    href: '#certificates',
    icon: <Certificate size={20} />
  },
];

const navButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'cursor-pointer'
);

const activeButtonClasses = cn(
  'border border-gray-800 dark:border-white/70'
);

const mobileMenuButtonClasses = cn(
  'shadow-xl inline-flex items-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'cursor-pointer'
);

function ThemeTogglerBtn({ showLabel = false, className = '' }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const handleToggle = (checked) => {
    const nextTheme = checked ? 'dark' : 'light';
    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  if (showLabel) {
    return (
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        className={cn(
          "relative inline-flex h-9 w-[64px] items-center rounded-full bg-textured border border-gray-300 dark:border-white/20 hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200 shadow-xl cursor-pointer p-1",
          className
        )}
        aria-label="Toggle theme"
      >
        <SwitchThumb
          style={{ viewTransitionName: 'theme-toggle-thumb-mobile' }}
          className="pointer-events-none flex items-center justify-center h-[26px] w-[26px] rounded-full bg-white dark:bg-zinc-800 border border-gray-300/80 dark:border-white/20 shadow-md transition-transform duration-300 data-[state=checked]:translate-x-[28px] data-[state=unchecked]:translate-x-0"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="h-4 w-4 text-gray-800 dark:text-gray-200" />
          )}
        </SwitchThumb>
      </Switch>
    );
  }

  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        className="relative inline-flex h-9 w-[64px] items-center rounded-full bg-textured border border-gray-300 dark:border-white/20 hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200 shadow-xl cursor-pointer p-1"
        aria-label="Toggle theme"
      >
        <SwitchThumb
          style={{ viewTransitionName: 'theme-toggle-thumb' }}
          className="pointer-events-none flex items-center justify-center h-[26px] w-[26px] rounded-full bg-white dark:bg-zinc-800 border border-gray-300/80 dark:border-white/20 shadow-md transition-transform duration-300 data-[state=checked]:translate-x-[28px] data-[state=unchecked]:translate-x-0"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="h-4 w-4 text-gray-800 dark:text-gray-200" />
          )}
        </SwitchThumb>
      </Switch>
    </div>
  );
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(NAV_ITEMS[0]?.value);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          'flex w-full max-w-xl items-center justify-between px-4 py-3',
          'shadow-xl rounded-xl bg-theme border-5 border-double border-gray-300 dark:border-white/20'
        )}>
          {/* Left: Logo and Portfolio Text */}
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Logo"
              className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="text-sm md:text-md font-bold text-base-content">Portfolio</h1>
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

          {/* Mobile: Theme Toggle + Dropdown Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeTogglerBtn showLabel={true} className="h-9 w-[64px]" />

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(navButtonClasses, 'h-9 w-9')}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Dropdown Panel with AnimatePresence */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-hidden="true"
                    />

                    {/* Animated Dropdown Content */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.94, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94, y: -10 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      className={cn(
                        'absolute right-0 top-full mt-2 z-50 w-30',
                        'shadow-2xl rounded-xl bg-theme border border-gray-300 dark:border-white/20',
                        'p-3 space-y-2 origin-top-right'
                      )}
                    >
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
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
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
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'cursor-pointer transform hover:-translate-y-1 hover:rotate-3'
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
  const [activeTab, setActiveTab] = useState(null);
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
    <>
      {/* Desktop Navbar - Full width with double border under */}
      <div className="hidden md:block fixed left-0 right-0 top-0 z-50 w-full">
        <div className={cn(
          'flex w-full items-center justify-between px-6 py-3',
          'bg-theme border-b-4 border-double border-gray-300 dark:border-white/20'
        )}>
          {/* Portfolio identity */}
          <button
            type="button"
            onClick={(event) => handleNavClick(event, 'about', '#about')}
            className="flex items-center gap-2 rounded-md text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label="About Gian Carlo N. Ulep"
            aria-current={activeTab === 'about' ? 'page' : undefined}
          >
            <img
              src={logoImg}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="text-sm md:text-md font-bold text-base-content">Portfolio</h1>
          </button>

          {/* Desktop: Center Navigation Buttons */}
          <nav aria-label="Main navigation" className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <button
                  key={item.value}
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
                  <span className="text-[10px] font-medium text-base-content">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop: Right Theme Toggle */}
          <div className="flex items-center">
            <ThemeTogglerBtn />
          </div>
        </div>
      </div>

      {/* Mobile Navbar - Non-floating format */}
      <div className="md:hidden fixed left-0 right-0 top-0 z-50 w-full">
        <div className={cn(
          'flex w-full items-center justify-between px-4 py-3',
          'bg-theme border-b-4 border-double border-gray-300 dark:border-white/20'
        )}>
          {/* Portfolio identity doubles as the About shortcut. */}
          <button
            type="button"
            onClick={(event) => handleNavClick(event, 'about', '#about')}
            className="flex items-center gap-2 rounded-md text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label="About Gian Carlo N. Ulep"
            aria-current={activeTab === 'about' ? 'page' : undefined}
          >
            <img
              src={logoImg}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="text-sm md:text-md font-bold text-base-content">Portfolio</h1>
          </button>

          {/* Mobile: Theme Toggle + Dropdown Menu */}
          <div className="flex items-center gap-2">
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
    </>
  );
}
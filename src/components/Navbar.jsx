import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '@/components/resume_sections/carddev/android-chrome-512x512.png';
import { Switch, SwitchThumb } from '@/components/animate-ui/primitives/radix/switch';
import { cn } from '@/lib/utils';

// Custom SVG Icons
function AboutIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path fill="currentColor" fillRule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"/>
    </svg>
  );
}

function StackIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"/>
    </svg>
  );
}

function BriefcaseIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01"/>
        <path d="M3 13a20 20 0 0 0 18 0"/>
      </g>
    </svg>
  );
}

function FolderFilesIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
      <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M3.5 4.5v-2h9V6m-10 2h11m-11-3.5v8h11V6h-6L6 4.5z"/>
    </svg>
  );
}

function CertificateIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/>
        <path d="M13 17.5V22l2-1.5l2 1.5v-4.5"/>
        <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2"/>
      </g>
    </svg>
  );
}

const NAV_ITEMS = [
  {
    value: 'carddev',
    label: 'About',
    href: '#carddev',
    icon: <AboutIcon size={20} />
  },
  {
    value: 'stack',
    label: 'Stack',
    href: '#stack',
    icon: <StackIcon size={20} />
  },
  {
    value: 'experience',
    label: 'Experience',
    href: '#experience',
    icon: <BriefcaseIcon size={20} />
  },
  {
    value: 'projects',
    label: 'Projects',
    href: '#projects',
    icon: <FolderFilesIcon size={20} />
  },
  {
    value: 'certificates',
    label: 'Certificates',
    href: '#certificates',
    icon: <CertificateIcon size={20} />
  },
];

const navButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double shadow-xl cursor-pointer hover-theme-switch',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
);

const mobileMenuButtonClasses = cn(
  'shadow-xl inline-flex items-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double shadow-xl cursor-pointer hover-theme-switch',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'
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
          "relative inline-flex h-7.5 w-[52px] items-center rounded-full bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double shadow-xl cursor-pointer p-0.5 hover-theme-switch",
          className
        )}
        aria-label="Toggle theme"
      >
        <SwitchThumb
          style={{ viewTransitionName: 'theme-toggle-thumb-mobile' }}
          className="pointer-events-none flex items-center justify-center h-[20px] w-[20px] rounded-full bg-white dark:bg-zinc-800 border border-gray-300/80 dark:border-white/20 shadow-md transition-transform duration-300 data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0"
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="h-3 w-3 text-gray-800 dark:text-gray-200" />
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
        className="relative inline-flex h-7.5 w-[52px] items-center rounded-full bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double shadow-xl cursor-pointer p-0.5 hover-theme-switch"
        aria-label="Toggle theme"
      >
        <SwitchThumb
          style={{ viewTransitionName: 'theme-toggle-thumb' }}
          className="pointer-events-none flex items-center justify-center h-[20px] w-[20px] rounded-full bg-white dark:bg-zinc-800 border border-gray-300/80 dark:border-white/20 shadow-md transition-transform duration-300 data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0"
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="h-3 w-3 text-gray-800 dark:text-gray-200" />
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
      <div className="hidden md:block fixed left-0 right-0 top-0 z-50 w-full bg-theme border-b-4 border-double border-gray-300 dark:border-white/20 shadow-xl">
        <div
          className={cn(
            'flex max-w-6xl mx-auto items-center px-6 py-3'
          )}
        >
          {/* Portfolio identity */}
          <button
            type="button"
            onClick={(event) => handleNavClick(event, 'carddev', '#carddev')}
            className="flex items-center gap-2 rounded-md text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50 flex-shrink-0"
            aria-label="About Gian Carlo N. Ulep"
          >
            <img
              src={logoImg}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-base-content">
              Portfolio
            </h1>
          </button>

          {/* Spacer to push nav and switch to the right */}
          <div className="flex-1" />

          {/* Desktop: Navigation Buttons + Theme Toggle Group */}
          <div className="flex items-center gap-3">
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-2"
            >
              {NAV_ITEMS.map((item) => {
                return (
                  <button key={item.value} type="button" 
                    onClick={(e) => handleNavClick(e, item.value, item.href)}
                    className={navButtonClasses} aria-label={item.label}
                  >
                    {item.icon}
                    <span className="text-[8px] md:text-[10px] lg:text-xs font-medium text-base-content">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-gray-300 dark:bg-white/20" />

            {/* Theme Toggle */}
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
          {/* Portfolio identity doubles as the CardDev shortcut. */}
          <button
            type="button" onClick={(event) => handleNavClick(event, 'carddev', '#carddev')}
            className="flex items-center gap-2 rounded-md text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label="About Gian Carlo N. Ulep"
          >
            <img
              src={logoImg} alt="" className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-base-content">Portfolio</h1>
          </button>

          {/* Mobile: Theme Toggle + Dropdown Menu */}
          <div className="flex items-center gap-2">
            <ThemeTogglerBtn showLabel={true} className="" />

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
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={(e) => handleNavClick(e, item.value, item.href)}
                              className={cn(
                                mobileMenuButtonClasses,
                                'w-full justify-start'
                              )}
                              aria-label={item.label}
                            >
                              {item.icon}
                              <span className="text-[8px] md:text-[10px] lg:text-xs font-medium text-base-content">{item.label}</span>
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
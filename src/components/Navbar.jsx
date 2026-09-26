import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '@/components/resume_sections/about/android-chrome-512x512.png';
import { Switch, SwitchThumb } from '@/components/animate-ui/primitives/radix/switch';
import { CopyButton } from '@/components/animate-ui/components/buttons/copy';
import { cn } from '@/lib/utils';

import aboutIconSrc from '@/components/resume_sections/navbar/about.svg';
import stackIconSrc from '@/components/resume_sections/navbar/stack.svg';
import experienceIconSrc from '@/components/resume_sections/navbar/experience.svg';
import projectsIconSrc from '@/components/resume_sections/navbar/projects.svg';
import certificateIconSrc from '@/components/resume_sections/navbar/certificate.svg';

const EMAIL = 'ulep.giancarlo.17@gmail.com';

function HomeIcon({ className = '', size = '1em' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <title>home-outline-rounded</title>
      <path
        fill="currentColor"
        d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"
      />
    </svg>
  );
}

function ArrowIcon({ className = '', size = '1em' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 15 15"
      className={className}
      aria-hidden="true"
    >
      <title>arrow</title>
      <path
        fill="currentColor"
        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
}

function NavIcon({ src, alt, size = 14 }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="dark:invert shrink-0"
      aria-hidden="true"
    />
  );
}

const NAV_ITEMS = [
  {
    value: 'home',
    label: 'Home',
    shortLabel: 'Home',
    href: '#home',
    icon: <HomeIcon size={14} className="shrink-0 text-base-content" />
  },
  {
    value: 'about',
    label: 'About',
    shortLabel: 'About',
    href: '#about',
    icon: <NavIcon src={aboutIconSrc} alt="About" />
  },
  {
    value: 'stack',
    label: 'Skills',
    shortLabel: 'Skills',
    href: '#stack',
    icon: <NavIcon src={stackIconSrc} alt="Skills" />
  },
  {
    value: 'experience',
    label: 'Experience',
    shortLabel: 'Experience',
    href: '#experience',
    icon: <NavIcon src={experienceIconSrc} alt="Experience" />
  },
  {
    value: 'projects',
    label: 'Projects',
    shortLabel: 'Projects',
    href: '#projects',
    icon: <NavIcon src={projectsIconSrc} alt="Projects" />
  },
  {
    value: 'certificates',
    label: 'Certifications',
    shortLabel: 'Certifications',
    href: '#certificates',
    icon: <NavIcon src={certificateIconSrc} alt="Certifications" />
  },
];

const navButtonClasses = cn(
  'inline-flex items-center gap-2 px-1 py-1.5 text-xs font-medium w-full text-left',
  'bg-transparent border-0 cursor-pointer transition-colors duration-150',
  'focus-visible:ring-ring/50 focus-visible:ring-2 outline-none',
  'disabled:pointer-events-none disabled:opacity-50'
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

export default function Navbar({ activePage = 'home', onSelectPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, value) => {
    e.preventDefault();
    if (onSelectPage) {
      onSelectPage(value);
    } else {
      window.location.hash = value;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Inset Persistent Sticky Left Navigation Sidebar */}
      <aside
        className="hidden md:flex flex-col border-r border-gray-300 dark:border-white/20 pr-6 lg:pr-8 shrink-0 self-stretch select-none w-48 lg:w-52"
        aria-label="Sidebar navigation"
      >
        <div className="sticky top-0 flex flex-col">
          {/* Header */}
          <header className="pt-20 md:pt-10">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-2.5 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring/50 w-full"
              aria-label="Return to Home"
            >
              <img
                src={logoImg}
                alt=""
                className="size-9 rounded-full object-cover border border-gray-300 dark:border-white/20 shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <p className="text-base-content text-md md:text-lg lg:text-xl">
                  Portfolio
                </p>
                <p className="text-[10px] md:text-xs text-base-content/50 truncate">
                  Gian Carlo Ulep
                </p>
              </div>
            </button>
          </header>

          <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

          {/* Navigation Items with Arrow Before Button Icon and No Active Background */}
          <nav aria-label="Main navigation" className="flex flex-col gap-1 w-full">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={(e) => handleNavClick(e, item.value)}
                  className={cn(
                    navButtonClasses,
                    isActive && 'font-semibold'
                  )}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <ArrowIcon size={12} className="shrink-0 text-base-content" />
                  )}
                  <span className="shrink-0 flex items-center justify-center size-4">
                    {item.icon}
                  </span>
                  <span className="text-base-content text-xs">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <hr className="my-3 md:my-4" />

          {/* Theme Toggler */}
          <div className="flex items-center justify-between py-1">
            <span className="text-[11px] text-base-content/60 font-medium">
              Theme
            </span>
            <ThemeTogglerBtn />
          </div>

          <hr className="my-3 md:my-4" />

          {/* Email Address & Copy Button Beside It */}
          <div className="flex items-center justify-between gap-1.5 py-1">
            <a
              href={`mailto:${EMAIL}`}
              className="text-[10px] font-mono text-base-content/80 hover:text-base-content truncate hover:underline tracking-tight flex-1 min-w-0"
              title={`Send email to ${EMAIL}`}
            >
              {EMAIL}
            </a>
            <CopyButton
              content={EMAIL}
              size="xs"
              variant="ghost"
              className="h-6 w-6 p-0 shrink-0 bg-transparent border-0 cursor-pointer"
              title="Copy email address"
              aria-label="Copy email address"
            />
          </div>
        </div>
      </aside>

      {/* Mobile Navbar Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-theme border-b-3 border-double border-gray-300 dark:border-white/20 shadow-md">
        <div className="flex w-full items-center justify-between px-4 py-2.5">
          {/* Portfolio identity */}
          <button
            type="button"
            onClick={(event) => handleNavClick(event, 'home')}
            className="flex items-center gap-2 rounded-md text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50 cursor-pointer"
            aria-label="Home - Portfolio of Gian Carlo N. Ulep"
          >
            <img
              src={logoImg}
              alt=""
              className="h-6 w-6 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="font-extrabold text-md md:text-lg lg:text-xl text-base-content">
              Portfolio
            </h1>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2 h-9 w-9',
              'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double cursor-pointer hover-theme-switch',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Pop-Out Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden fixed top-[56px] inset-x-0 bottom-0 z-40 bg-theme p-4 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              {/* Navigation items list starting at top */}
              <nav aria-label="Mobile main navigation" className="flex flex-col gap-1 w-full pt-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activePage === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={(e) => handleNavClick(e, item.value)}
                      className={cn(
                        'flex items-center gap-2.5 py-2.5 px-3 rounded-md text-xs font-medium cursor-pointer text-left w-full transition-colors',
                        isActive
                          ? 'font-semibold text-base-content'
                          : 'text-base-content/80'
                      )}
                      aria-label={item.label}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive && (
                        <ArrowIcon size={12} className="shrink-0 text-base-content" />
                      )}
                      <span className="shrink-0 flex items-center justify-center size-4">
                        {item.icon}
                      </span>
                      <span className="text-base-content">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <hr className="my-1 border-gray-300 dark:border-white/20" />

              {/* Theme Switcher inside Mobile Menu */}
              <div className="flex items-center justify-between px-3 py-1.5">
                <span className="text-xs text-base-content/80 font-medium">
                  Theme
                </span>
                <ThemeTogglerBtn showLabel={true} />
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-3 border-t border-gray-300 dark:border-white/20 flex items-center justify-between gap-2 px-1">
              <a
                href={`mailto:${EMAIL}`}
                className="text-[11px] font-mono text-base-content/80 hover:text-base-content truncate hover:underline"
                title={`Send email to ${EMAIL}`}
              >
                {EMAIL}
              </a>
              <CopyButton
                content={EMAIL}
                size="xs"
                variant="ghost"
                className="h-7 w-7 p-0 shrink-0 cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, Monitor, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '@/lib/utils';

import logoImg from '@/components/resume_sections/about/android-chrome-512x512.png';

const TEXT = 'text-base-content';
const CHROME = 'border-2 border-solid border-gray-300 dark:border-white/20';
const FOCUS_RING = 'outline-none focus-visible:ring-2 focus-visible:ring-ring/50';

function HomeIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75" /></svg>;
}

function ArrowIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15 15" className={className} aria-hidden="true"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1-1.414-1.414" /></svg>;
}

function AboutIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>;
}

function SkillsIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M17.504 7.501H7.5v10.003h10.003z" /><path fill="currentColor" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z" /></svg>;
}

function ExperienceIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><g fill="currentColor"><path d="M14 11h-4v2h4z" /><path fillRule="evenodd" d="M7 5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm2-1h6v1H9zM4 7a1 1 0 0 0-1 1v6h18V8a1 1 0 0 0-1-1zM3 18v-2h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clipRule="evenodd" /></g></svg>;
}

function ProjectsIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z" /></svg>;
}

function CertificateIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.36 12.166l2.475 2.474l4.951-4.951M6 4.999h2.686a1 1 0 0 0 .707-.293l1.9-1.9a1 1 0 0 1 1.414 0l1.9 1.9a1 1 0 0 0 .707.293H18a1 1 0 0 1 1 1v2.686a1 1 0 0 0 .293.707l1.9 1.9a1 1 0 0 1 0 1.414l-1.9 1.9a1 1 0 0 0-.293.707v2.686a1 1 0 0 1-1 1h-2.687a1 1 0 0 0-.707.293l-1.9 1.9a1 1 0 0 1-1.413 0l-1.9-1.9a1 1 0 0 0-.707-.293H6a1 1 0 0 1-1-1v-2.686a1 1 0 0 0-.293-.707l-1.9-1.9a1 1 0 0 1 0-1.414l1.9-1.9A1 1 0 0 0 5 8.686V6a1 1 0 0 1 1-1" /></svg>;
}

const NAV_ITEMS = [
  { value: 'home', label: 'Home', icon: <HomeIcon size={14} className="shrink-0" /> },
  { value: 'about', label: 'About', icon: <AboutIcon size={14} className="shrink-0" /> },
  { value: 'stack', label: 'Skills', icon: <SkillsIcon size={14} className="shrink-0" /> },
  { value: 'experience', label: 'Experience', icon: <ExperienceIcon size={14} className="shrink-0" /> },
  { value: 'projects', label: 'Projects', icon: <ProjectsIcon size={14} className="shrink-0" /> },
  { value: 'certificates', label: 'Certifications', icon: <CertificateIcon size={14} className="shrink-0" /> },
];

const THEME_OPTIONS = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'system', label: 'System', icon: Monitor },
  { value: 'dark', label: 'Dark', icon: Moon },
];

function ThemeToggle({ size = 'md', className = '' }) {
  const { theme, setTheme } = useTheme();
  const active = theme ?? 'system';

  const selectTheme = (value) => {
    if (value === active) return;

    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => setTheme(value));
    } else {
      setTheme(value);
    }
  };

  const buttonSize = size === 'lg' ? 'h-7 w-7' : 'h-6 w-6';
  const iconSize = size === 'lg' ? 'h-3.5 w-3.5' : 'h-3 w-3';

  return (
    <div role="radiogroup" aria-label="Theme" className={cn('inline-flex items-center gap-0.5 rounded-full bg-textured p-0.5 shadow-xl', CHROME, className)}>
      {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
        const isActive = active === value;

        return (
          <button
            key={value} type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            onClick={() => selectTheme(value)}
            style={isActive ? { viewTransitionName: `theme-toggle-${value}` } : undefined}
            className={cn(
              buttonSize,
              'inline-flex items-center justify-center rounded-full cursor-pointer',
              TEXT,
              isActive ? 'bg-base-content text-base-100' : ''
            )}
          >
            <Icon className={iconSize} />
          </button>
        );
      })}
    </div>
  );
}

function LogoMark({ onNavigate }) {
  return (
    <button type="button" onClick={onNavigate} className={cn('flex items-center gap-2.5 text-left cursor-pointer w-full', FOCUS_RING, TEXT)} aria-label="Return to Home">
      <img src={logoImg} alt="" className="size-7 rounded-full object-cover border border-base-content shrink-0" />
      <div className="flex flex-col min-w-0">
        <p className="text-md md:text-lg lg:text-xl">Portfolio</p>
        <p className="text-[10px] md:text-xs truncate text-base-content/70">Gian Carlo N. Ulep</p>
      </div>
    </button>
  );
}

function NavList({ activePage, onSelect, variant = 'desktop' }) {
  const isMobile = variant === 'mobile';

  return (
    <nav aria-label={isMobile ? 'Mobile main navigation' : 'Main navigation'} className={cn('flex flex-col gap-1 w-full', isMobile && 'pt-1')}>
      {NAV_ITEMS.map((item) => {
        const isActive = activePage === item.value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={(e) => onSelect(e, item.value)}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'inline-flex items-center text-left w-full cursor-pointer bg-transparent border-0',
              FOCUS_RING,
              TEXT,
              isActive && 'font-semibold underline underline-offset-4',
              isMobile ? 'gap-2.5 py-2.5 px-3 rounded-md text-xs font-medium' : 'gap-2 px-1 py-1.5 text-xs font-medium'
            )}
          >
            {isActive && <ArrowIcon size={12} className="shrink-0" />}
            <span className={cn('shrink-0 flex items-center justify-center', isMobile && 'size-4')}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default function Navbar({ activePage = 'home', onSelectPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

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
      <aside className="hidden md:flex flex-col border-r border-gray-300 dark:border-white/20 pr-6 lg:pr-8 shrink-0 self-stretch select-none w-48 lg:w-52" aria-label="Sidebar navigation">
        <div className="sticky top-0 flex flex-col">
          <header className="pt-20 md:pt-10">
            <LogoMark onNavigate={(e) => handleNavClick(e, 'home')} />
          </header>

          <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

          <NavList activePage={activePage} onSelect={handleNavClick} variant="desktop" />

          <hr className="my-3 md:my-4" />

          <div className="flex items-center justify-between py-1">
            <span className={cn('text-xs font-medium', TEXT)}>Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      <header className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-theme border-b-3 border-double border-gray-300 dark:border-white/20 shadow-md">
        <div className="flex w-full items-center justify-between px-4 py-2.5">
          <LogoMark onNavigate={(e) => handleNavClick(e, 'home')} />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className={cn('inline-flex items-center justify-center rounded-md p-2 h-9 w-9 cursor-pointer bg-textured shadow-xl', CHROME, FOCUS_RING, TEXT)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

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
              <NavList activePage={activePage} onSelect={handleNavClick} variant="mobile" />

              <hr className="my-1 border-gray-300 dark:border-white/20" />

              <div className="flex items-center justify-between px-3 py-1.5">
                <span className={cn('text-xs font-medium', TEXT)}>Theme</span>
                <ThemeToggle size="lg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


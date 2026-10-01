import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, Monitor, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '@/lib/utils';
import { GmailIcon } from '@/components/resume_sections/socials/contact_data';
import { CopyButton } from '@/components/animate-ui/components/buttons/copy';
import LiveStats from './LiveStats';

import logoImg from '@/components/resume_sections/about/android-chrome-512x512.png';

const TEXT = 'text-base-content';
const CHROME = 'border border-solid border-gray-300 dark:border-white/20';
const FOCUS_RING = 'outline-none focus-visible:ring-2 focus-visible:ring-ring/50';

function HomeOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75" /></svg>;
}

function AboutOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>;
}

function AboutFilledIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>;
}

function SkillsOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z" /></svg>;
}

function SkillsFilledIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="m20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0" /></svg>;
}

function ExperienceOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><rect width="448" height="320" x="32" y="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" rx="48" ry="48" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m112 112H32m288 0v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24" /></svg>;
}

function ExperienceFilledIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><path fill="none" d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16" /><path fill="currentColor" d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480Zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 152a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4Z" /></svg>;
}

function ProjectsOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z" /></svg>;
}

function ProjectsFilledIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z" /></svg>;
}

function CertificateOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.36 12.166l2.475 2.474l4.951-4.951M6 4.999h2.686a1 1 0 0 0 .707-.293l1.9-1.9a1 1 0 0 1 1.414 0l1.9 1.9a1 1 0 0 0 .707.293H18a1 1 0 0 1 1 1v2.686a1 1 0 0 0 .293.707l1.9 1.9a1 1 0 0 1 0 1.414l-1.9 1.9a1 1 0 0 0-.293.707v2.686a1 1 0 0 1-1 1h-2.687a1 1 0 0 0-.707.293l-1.9 1.9a1 1 0 0 1-1.413 0l-1.9-1.9a1 1 0 0 0-.707-.293H6a1 1 0 0 1-1-1v-2.686a1 1 0 0 0-.293-.707l-1.9-1.9a1 1 0 0 1 0-1.414l1.9-1.9A1 1 0 0 0 5 8.686V6a1 1 0 0 1 1-1" /></svg>;
}

function CertificateFilledIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M10.586 2.101a2 2 0 0 1 2.828 0l1.9 1.9H18a2 2 0 0 1 2 2v2.686l1.9 1.9a2 2 0 0 1 0 2.828l-1.9 1.9V18a2 2 0 0 1-2 2h-2.687l-1.9 1.9a2 2 0 0 1-2.827 0l-1.9-1.9H6a2 2 0 0 1-2-2v-2.687l-1.9-1.9a2 2 0 0 1 0-2.827l1.9-1.9V6.001a2 2 0 0 1 2-2h2.686zm5.907 6.882a1 1 0 0 0-1.414 0l-4.244 4.245l-1.769-1.768a1 1 0 0 0-1.414 1.415l2.476 2.474a1 1 0 0 0 1.414 0l4.951-4.952a1 1 0 0 0 0-1.414" /></svg>;
}

function SocialOutlinedIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94" /></svg>;
}

function SocialFilledIcon({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><path fill="currentColor" d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336" /></svg>;
}

function Pointer({ className = '', size = '1em' }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="m2.5 6l2.906-3.737a1.978 1.978 0 0 1 3.48 1.694L8.626 5h5.432a1.942 1.942 0 0 1 .421 3.838L11.5 9.5l-.457 2.744A3 3 0 0 1 7.31 14.65L3 13.5zm5.197 7.2l-3.272-.872l-.39-5.858L6.59 3.184a.478.478 0 0 1 .84.41l-.26 1.042L6.704 6.5h7.354a.442.442 0 0 1 .096.874l-2.98.662l-.987.22l-.166.997l-.458 2.744A1.5 1.5 0 0 1 7.697 13.2m-7.195.103a.75.75 0 0 0 1.496-.106l-.5-7a.75.75 0 1 0-1.496.106z" clipRule="evenodd" /></svg>;
}

const NAV_ITEMS = [
  {
    value: 'home',
    label: 'Home Page',
    outlined: <HomeOutlinedIcon size={14} className="shrink-0" />,
    filled: <HomeOutlinedIcon size={14} className="shrink-0" />,
  },
  {
    value: 'about',
    label: 'About Me',
    outlined: <AboutOutlinedIcon size={14} className="shrink-0" />,
    filled: <AboutFilledIcon size={14} className="shrink-0" />,
  },
  {
    value: 'stack',
    label: 'Technical Skills',
    outlined: <SkillsOutlinedIcon size={14} className="shrink-0" />,
    filled: <SkillsFilledIcon size={14} className="shrink-0" />,
  },
  {
    value: 'experience',
    label: 'Work Experience',
    outlined: <ExperienceOutlinedIcon size={14} className="shrink-0" />,
    filled: <ExperienceFilledIcon size={14} className="shrink-0" />,
  },
  {
    value: 'projects',
    label: 'Built Projects',
    outlined: <ProjectsOutlinedIcon size={14} className="shrink-0" />,
    filled: <ProjectsFilledIcon size={14} className="shrink-0" />,
  },
  {
    value: 'certificates',
    label: 'Credentials Earned',
    outlined: <CertificateOutlinedIcon size={14} className="shrink-0" />,
    filled: <CertificateFilledIcon size={14} className="shrink-0" />,
  },
  {
    value: 'socials',
    label: 'Social Links',
    outlined: <SocialOutlinedIcon size={14} className="shrink-0" />,
    filled: <SocialFilledIcon size={14} className="shrink-0" />,
  },
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
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full bg-textured p-0.5 shadow-xl',
        CHROME,
        className
      )}
    >
      {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
        const isActive = active === value;

        return (
          <button
            key={value}
            type="button"
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
              isActive && 'bg-base-content text-base-100'
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
    <button
      type="button"
      onClick={onNavigate}
      className={cn(
        'flex items-center gap-2.5 text-left cursor-pointer w-full',
        FOCUS_RING,
        TEXT
      )}
      aria-label="Return to Home"
    >
      <img
        src={logoImg}
        alt=""
        className="size-7 rounded-full object-cover border border-base-content shrink-0"
      />

      <div className="flex flex-col min-w-0">
        <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
          Portfolio
        </p>
        <p className="text-[10px] md:text-xs truncate text-base-content/70">
          Gian Carlo N. Ulep
        </p>
      </div>
    </button>
  );
}

function NavList({ activePage, onSelect, variant = 'desktop' }) {
  const isMobile = variant === 'mobile';

  return (
    <nav
      aria-label={isMobile ? 'Mobile main navigation' : 'Main navigation'}
      className={cn('flex flex-col gap-1 w-full', isMobile && 'pt-1')}
    >
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
              'inline-flex items-center text-left w-full cursor-pointer bg-transparent border-0 hover:underline underline-offset-4',
              FOCUS_RING,
              TEXT,
              'font-medium',
              isActive && 'font-extrabold underline underline-offset-4',
              isMobile
                ? 'gap-2.5 py-2.5 px-3 rounded-md text-xs'
                : 'gap-2 px-1 py-1.5 text-xs'
            )}
          >
            {isActive && <Pointer size={12} className="shrink-0" />}

            <span
              className={cn(
                'shrink-0 flex items-center justify-center',
                isMobile && 'size-4'
              )}
            >
              {isActive ? item.filled : item.outlined}
            </span>

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
      <aside
        className="hidden md:flex flex-col border-r border-gray-300 dark:border-white/20 pr-6 lg:pr-8 shrink-0 self-stretch select-none"
        aria-label="Sidebar navigation"
      >
        <div className="sticky top-0 flex flex-col">
          <header className="pt-20 md:pt-10">
            <LogoMark onNavigate={(e) => handleNavClick(e, 'home')} />
          </header>

          <hr className="my-2" />

          <NavList
            activePage={activePage}
            onSelect={handleNavClick}
            variant="desktop"
          />

          <hr className="my-2" />

          <div className="flex items-center justify-between py-1">
            <span className={cn('text-[10px] font-medium', TEXT)}>
              Theme
            </span>

            <ThemeToggle />
          </div>

          <hr className="my-2" />

          <div className="py-1">
            <LiveStats variant="desktop" />
          </div>

          <hr className="my-2" />

          <div>
            <div className="flex items-center justify-between gap-1">
              <a
                href="mailto:jingjing052704@gmail.com"
                className="flex items-center gap-1.5 min-w-0 flex-1 px-1 text-[10px] md:text-xs font-medium text-base-content hover:underline truncate cursor-pointer"
                title="Send email to jingjing052704@gmail.com"
              >
                <span className="truncate font-extrabold text-[10px] md:text-xs px-1.5 py-0.5 rounded bg-base-content/10 text-base-content/60 transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0">
                  jingjing052704@gmail.com
                </span>
              </a>

              <CopyButton
                content="jingjing052704@gmail.com"
                variant="outline"
                size="xs"
                className="shrink-0 cursor-pointer hover-theme-switch size-6"
                aria-label="Copy email address"
              />
            </div>
          </div>
        </div>
      </aside>

      <header className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-theme border-b-3 border-double border-gray-300 dark:border-white/20 shadow-md">
        <div className="flex w-full items-center justify-between px-4 py-2.5">
          <LogoMark onNavigate={(e) => handleNavClick(e, 'home')} />

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className={cn(
                'inline-flex items-center justify-center rounded-md p-2 h-9 w-9 cursor-pointer bg-textured shadow-xl',
                CHROME,
                FOCUS_RING,
                TEXT
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
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
            <div className="flex flex-col">
              <NavList
                activePage={activePage}
                onSelect={handleNavClick}
                variant="mobile"
              />

              <hr className="my-2" />

              <div className="flex items-center justify-between px-3">
                <span className={cn('text-xs font-medium', TEXT)}>
                  Theme
                </span>

                <ThemeToggle size="lg" />
              </div>

              <hr className="my-2" />

              <div className="px-3">
                <LiveStats variant="mobile" />
              </div>

              <hr className="my-2" />

              <div className="px-3">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:jingjing052704@gmail.com"
                    className="flex items-center gap-2 min-w-0 flex-1 text-[10px] md:text-xs font-medium text-base-content hover:underline truncate cursor-pointer"
                  >
                    <span className="truncate">
                      jingjing052704@gmail.com
                    </span>
                  </a>

                  <CopyButton
                    content="jingjing052704@gmail.com"
                    variant="outline"
                    size="xs"
                    className="shrink-0 cursor-pointer hover-theme-switch size-7"
                    aria-label="Copy email address"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import logoImg from '@/components/resume_sections/about/android-chrome-512x512.png';
import { Switch, SwitchThumb } from '@/components/animate-ui/primitives/radix/switch';
import { CopyButton } from '@/components/animate-ui/components/buttons/copy';
import { GmailIcon } from '@/components/resume_sections/socials/contact_data';
import { cn } from '@/lib/utils';

function ThemeTogglerBtn() {
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

  return (
    <div className="relative inline-flex items-center">
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        className="relative inline-flex h-7.5 w-[52px] items-center rounded-full bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double shadow-xl cursor-pointer p-0.5 hover-theme-switch"
        aria-label="Toggle theme"
      >
        <SwitchThumb
          style={{ viewTransitionName: 'theme-toggle-thumb-home' }}
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

export default function HomeNavbar() {
  return (
    <>
      {/* Desktop Home Navbar */}
      <div className="hidden md:block fixed top-4 left-4 right-4 z-50">
        <div className="flex max-w-md mx-auto items-center justify-between px-4 py-2 bg-theme border-3 border-double border-gray-300 dark:border-white/20 shadow-xl rounded-3xl">
          {/* Portfolio identity */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logoImg}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border border-gray-300 dark:border-white/20"
            />
            <h1 className="font-extrabold text-md md:text-lg lg:text-xl text-base-content">
              Portfolio
            </h1>
          </div>

          {/* Actions: Email + Copy Button + Theme Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-textured border-3 border-solid border-gray-300 dark:border-white/20 shadow-xl">
              <a
                href="mailto:jingjing052704@gmail.com"
                className="text-[10px] md:text-xs font-medium text-base-content hover:underline truncate max-w-[140px] md:max-w-none"
                title="jingjing052704@gmail.com"
              >
                jingjing052704@gmail.com
              </a>
              <CopyButton
                content="jingjing052704@gmail.com"
                variant="outline"
                size="xs"
                className="shrink-0 cursor-pointer hover-theme-switch size-6"
                aria-label="Copy email address"
              />
            </div>
            <ThemeTogglerBtn />
          </div>
        </div>
      </div>

      {/* Mobile Home Navbar */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className={cn(
          'flex max-w-3xl mx-auto w-full items-center justify-between px-4 py-2',
          'bg-theme border-3 border-double border-gray-300 dark:border-white/20 shadow-xl rounded-xl'
        )}>
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logoImg}
              alt=""
              className="h-6 w-6 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
            />
            <h1 className="text-xl text-base-content">
              Portfolio
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <CopyButton
              content="jingjing052704@gmail.com"
              variant="outline"
              size="xs"
              className="shrink-0 cursor-pointer bg-textured border-3 border-solid border-gray-300 dark:border-white/20 shadow-xl hover-theme-switch size-7.5 rounded-full"
              aria-label="Copy email address"
            />
            <ThemeTogglerBtn />
          </div>
        </div>
      </div>
    </>
  );
}

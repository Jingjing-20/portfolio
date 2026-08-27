import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import logoImg from '@/components/resume_sections/about/android-chrome-512x512.png';
import { Switch, SwitchThumb } from '@/components/animate-ui/primitives/radix/switch';
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
    <div className="fixed left-0 right-0 top-0 z-50 w-full bg-theme border-b-4 border-double border-gray-300 dark:border-white/20 shadow-xl">
      <div className="flex max-w-6xl mx-auto items-center justify-between px-4 md:px-6 py-3">
        {/* Portfolio identity */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoImg}
            alt=""
            className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border-3 border-gray-300 dark:border-white/20"
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-base-content">
            Portfolio
          </h1>
        </div>

        {/* Theme Toggle */}
        <ThemeTogglerBtn />
      </div>
    </div>
  );
}

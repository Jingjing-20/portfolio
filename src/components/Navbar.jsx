import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { GalleryHorizontalEnd } from '@/components/animate-ui/icons/gallery-horizontal-end';
import { Layers } from '@/components/animate-ui/icons/layers';
import { UserRound } from '@/components/animate-ui/icons/user-round';
import { BadgeCheck } from '@/components/animate-ui/icons/badge-check';
import { PanelBottom } from '@/components/animate-ui/icons/panel-bottom';
import { Highlight } from '@/components/animate-ui/primitives/effects/highlight';
import { Particles, ParticlesEffect } from '@/components/animate-ui/primitives/effects/particles';
import { ThemeToggler } from '@/components/animate-ui/primitives/effects/theme-toggler';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from '@/components/animate-ui/primitives/animate/tooltip';

const NAV_ITEMS = [
  { value: 'about', label: 'About', icon: UserRound, href: '#about' },
  { value: 'experience', label: 'Experience', icon: PanelBottom, href: '#experience' },
  { value: 'projects', label: 'Projects', icon: GalleryHorizontalEnd, href: '#projects' },
  { value: 'stack', label: 'Stack', icon: Layers, href: '#stack' },
  { value: 'certificates', label: 'Certificates', icon: BadgeCheck, href: '#certificates' },
];

const SURFACE_CLASSES =
  'bg-base-300 rounded-box shadow-xl border border-gray-400 dark:border-gray-700';

function ThemeTogglerBtn({ direction = 'ltr' }) {
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
      direction={direction}
    >
      {({ effective, toggleTheme }) => {
        const nextTheme = effective === 'dark' ? 'light' : 'dark';

        return (
          <button
            onClick={() => handleThemeToggle(nextTheme, toggleTheme)}
            className="p-2 rounded-lg hover:bg-gray-600/20 text-base-content transition-colors duration-200 flex items-center justify-center cursor-pointer relative"
            aria-label="Toggle theme"
          >
            <Particles animate={true}>
              <AnimateIcon animateOnHover>
                <span className="flex items-center justify-center">
                  {effective === 'system' ? (
                    <Monitor className="h-5 w-5" />
                  ) : effective === 'dark' ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </span>
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
        );
      }}
    </ThemeToggler>
  );
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(NAV_ITEMS[0]?.value);
  const [clickCounts, setClickCounts] = useState({});

  const handleValueChange = (value) => {
    if (!value) return;
    setActiveTab(value);
  };

  const handleButtonClick = (e, value) => {
    e.preventDefault();
    handleValueChange(value);
    setClickCounts((prev) => ({
      ...prev,
      [value]: (prev[value] || 0) + 1,
    }));

    const href = NAV_ITEMS.find((item) => item.value === value)?.href;
    if (href) {
      window.location.hash = href;
    }
  };

  return (
    <TooltipProvider openDelay={200} closeDelay={100}>
      {/* Single navbar for all screen sizes */}
      <div className="fixed left-0 right-0 top-5 z-50 flex w-full justify-center px-4">
        <div className="relative flex w-full items-center justify-between">
          {/* Left spacer for balance */}
          <div className="w-10 hidden sm:block" />

          {/* Center Nav Items */}
          <ul className={`menu menu-horizontal ${SURFACE_CLASSES} gap-1 p-2 md:gap-2`}>
            <Highlight
              value={activeTab}
              onValueChange={handleValueChange}
              defaultValue={NAV_ITEMS[0]?.value}
              className="rounded-lg bg-gray-600/20 inset-0"
              containerClassName="flex gap-1 md:gap-2"
              mode="children"
              exitDelay={200}
              hover={false}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.value;
                const clickCount = clickCounts[item.value] || 0;

                return (
                  <li key={item.value} data-value={item.value}>
                    <Tooltip side="top" sideOffset={12}>
                      <TooltipTrigger asChild>
                        <a
                          href={item.href}
                          onClick={(e) => handleButtonClick(e, item.value)}
                          data-active={isActive}
                          className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-600/20 transition-colors duration-200"
                        >
                          <Particles animate={isActive}>
                            <AnimateIcon animateOnHover>
                              <item.icon size={20} className="h-5 w-5" />
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
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className="bg-base-300 border border-gray-400 dark:border-gray-700 text-base-content text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg z-50">
                        <TooltipArrow
                          fill="currentColor"
                          className="text-base-300 stroke-gray-400 dark:stroke-gray-700"
                          strokeWidth={1}
                        />                        
                        {item.label}
                      </TooltipContent>
                    </Tooltip>
                  </li>
                );
              })}
            </Highlight>
          </ul>

          {/* Right aligned Theme Toggler */}
          <div className={`${SURFACE_CLASSES} flex items-center justify-center p-1`}>
            <ThemeTogglerBtn />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
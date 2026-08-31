import { motion } from 'motion/react';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';

// Powered by SVGs
import reactSvg from '@/components/resume_sections/home/powered_by/react.svg';
import jsSvg from '@/components/resume_sections/home/powered_by/javascript.svg';
import tailwindSvg from '@/components/resume_sections/home/powered_by/file-type-tailwind.svg';
import shadcnSvg from '@/components/resume_sections/home/powered_by/shadcn-ui.svg';
import motionSvg from '@/components/resume_sections/home/powered_by/motion.svg';

// Section Icons
import aboutIcon from '@/components/resume_sections/navbar/about.svg';
import stackIcon from '@/components/resume_sections/navbar/stack.svg';
import experienceIcon from '@/components/resume_sections/navbar/experience.svg';
import projectsIcon from '@/components/resume_sections/navbar/projects.svg';
import certIcon from '@/components/resume_sections/navbar/certificate.svg';

const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md px-6 py-3',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-sm md:text-base font-medium cursor-pointer hover-theme-switch',
  'transition-all duration-200 hover:scale-105'
);

// 4 Main Sections
const SECTIONS = [
  {
    id: 'stack',
    title: 'Stack',
    icon: stackIcon,
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: experienceIcon,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: projectsIcon,
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: certIcon,
  },
];

// Portfolio tech stack tools from powered_by directory (Icons Only - No labels)
const POWERED_BY_STACK = [
  {
    name: 'React',
    color: '#00bcd4',
    icon: <img src={reactSvg} alt="React" className="tool-icon-img" />,
  },
  {
    name: 'JavaScript',
    color: '#f7df1e',
    icon: <img src={jsSvg} alt="JavaScript" className="tool-icon-img" />,
  },
  {
    name: 'Tailwind CSS',
    color: '#44a8b3',
    icon: <img src={tailwindSvg} alt="Tailwind CSS" className="tool-icon-img" />,
  },
  {
    name: 'shadcn/ui',
    color: '#000000',
    icon: <img src={shadcnSvg} alt="shadcn/ui" className="tool-icon-img tool-icon-monochrome" />,
  },
  {
    name: 'Motion',
    color: '#ff0055',
    icon: <img src={motionSvg} alt="Motion" className="tool-icon-img tool-icon-monochrome" />,
  },
];

export default function Home() {
  const handleNavigate = (pageId) => {
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="min-h-[calc(100vh-8.5rem)] flex flex-col justify-between items-center"
    >
      {/* Main Center Content */}
      <div className="w-full max-w-7xl mx-auto text-center space-y-6 md:space-y-8 px-4 my-auto flex-1 flex flex-col justify-center items-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <h1 className="font-bold tracking-tight text-base-content text-4xl md:text-5xl lg:text-7xl max-w-4xl mx-auto">
            <span className="block">
              <ShimmeringText
                text="Building the Future,"
                className="font-extrabold"
              />
              <ShimmeringText
                text="One Line of Code at a Time"
                className="font-extrabold"
              />
            </span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
            Software developer passionate about crafting clean, scalable, and impactful web experiences.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center"
        >
          <button
            type="button"
            onClick={() => handleNavigate('about')}
            className={buttonClasses}
            aria-label="Get to know me"
          >
            <img
              src={aboutIcon}
              alt=""
              className="h-4 w-4 md:h-5 md:w-5 dark:invert"
              aria-hidden="true"
            />
            <span>Get to Know Me</span>
          </button>
        </motion.div>

        {/* Powered By Section - Icons Only, No Labels, No Hover Enlarge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-2xl mx-auto pt-2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-base-content/50 font-semibold">
              Powered by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {POWERED_BY_STACK.map((tool) => (
                <div
                  key={tool.name}
                  className={cn(
                    'shadow-md inline-flex items-center justify-center rounded-md p-2',
                    'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                    'cursor-default hover-badge'
                  )}
                  style={{ '--brand-color': tool.color }}
                  title={tool.name}
                  aria-label={tool.name}
                >
                  <span className="tool-icon flex items-center justify-center">
                    {tool.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 Section Navigation Cards - Grid 2 on mobile, 4 on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-4 w-full max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                className={cn(
                  'group relative flex flex-col p-3 md:p-4 rounded-lg shadow-xl',
                  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                  'cursor-pointer hover-card text-center transition-all duration-200 hover:scale-105'
                )}
                role="button"
                tabIndex={0}
                onClick={() => handleNavigate(section.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigate(section.id);
                  }
                }}
              >
                {/* Icon Frame - 16:9 aspect ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300/60 dark:bg-base-300/30 border border-black/10 dark:border-white/10 shadow-inner flex items-center justify-center">
                  <img
                    src={section.icon}
                    alt=""
                    className="h-8 w-8 md:h-10 md:w-10 dark:invert transition-transform duration-300 group-hover:scale-110 object-contain"
                    aria-hidden="true"
                  />
                </div>

                {/* Bottom Caption: Name Only */}
                <div className="pt-2 px-0.5">
                  <h3 className="text-xs md:text-sm font-semibold tracking-tight text-base-content line-clamp-1">
                    {section.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer - Removed Powered By, added small details */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="w-full pt-8 pb-4 mt-auto space-y-3"
      >
        {/* Divider */}
        <hr className="w-full max-w-4xl mx-auto border-gray-300/40 dark:border-white/10" />

        {/* Footer Details - Added more small details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto px-4 text-xs text-base-content/70">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-[10px] md:text-xs font-medium text-base-content">
              © {new Date().getFullYear()} Gian Carlo N. Ulep
            </p>
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              Crafted with precision, passion & motion
            </p>
          </div>

          <div className="text-center sm:text-right space-y-0.5">
            <p className="text-[8px] md:text-[10px] text-base-content/50">
              <span className="inline-block mx-1">✦</span>
              Available for opportunities
              <span className="inline-block mx-1">✦</span>
            </p>
            <p className="text-[8px] md:text-[10px] text-base-content/40 font-mono tracking-wider">
              v1.0.0 · built with ♥
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
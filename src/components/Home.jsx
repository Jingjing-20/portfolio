import { motion } from 'motion/react';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { ArrowRight } from 'lucide-react';
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
  'text-sm md:text-base font-medium cursor-pointer hover-badge',
  'transition-all duration-200 hover:scale-105'
);

const iconButtonClasses = cn(
  'absolute top-1 right-1 p-1 md:p-1.5 rounded-full',
  'bg-white/80 dark:bg-black/80 backdrop-blur-sm',
  'border border-gray-300 dark:border-white/30',
  'shadow-md z-10 hover-open-icon'
);

function OpenIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 md:w-3.5 md:h-3.5">
      <title>Open</title>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" />
    </svg>
  );
}

// 5 Main Sections
const SECTIONS = [
  {
    id: 'about',
    title: 'About',
    icon: aboutIcon,
  },
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

// Portfolio tech stack tools from powered_by directory (Icons Only)
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
            <span className="block md:hidden">
              <ShimmeringText
                text="Code. Build."
                className="font-extrabold"
              />
              <ShimmeringText
                text="Deliver."
                className="font-extrabold"
              />
            </span>
            <span className="hidden md:block">
              <ShimmeringText
                text="Code. Build. Deliver."
                className="font-extrabold"
              />
            </span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
            Where creativity meets code — I craft thoughtful web experiences
            with precision, passion, and a commitment to excellence.
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
            aria-label="Explore my works"
          >
            <span>Explore My Works</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* 5 Section Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2 w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                className={cn(
                  'group relative flex flex-col p-1.5 md:p-2 rounded-lg shadow-xl',
                  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                  'w-20 md:w-25 lg:w-30 flex-shrink-0 cursor-pointer hover-card text-center'
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
                {/* Open Icon Button - Top Right */}
                <button
                  type="button"
                  className={iconButtonClasses}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(section.id);
                  }}
                  aria-label={`Go to ${section.title}`}
                >
                  <OpenIcon />
                </button>

                {/* Icon Frame - 16:9 aspect ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300/60 dark:bg-base-300/30 border border-black/10 dark:border-white/10 shadow-inner flex items-center justify-center">
                  <img
                    src={section.icon}
                    alt=""
                    className="h-6 w-6 md:h-7 md:w-7 dark:invert transition-transform duration-300 group-hover:scale-110 object-contain"
                    aria-hidden="true"
                  />
                </div>

                {/* Bottom Caption: Name Only */}
                <div className="pt-1.5 px-0.5">
                  <h3 className="text-[10px] md:text-xs font-semibold tracking-tight text-base-content line-clamp-1">
                    {section.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="w-full pt-8 pb-4 mt-auto space-y-3"
      >
        {/* Divider */}
        <hr className="w-full max-w-4xl mx-auto border-gray-300/40 dark:border-white/10" />

        {/* Footer Details & Powered By */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto px-4 text-xs text-base-content/70">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-[10px] md:text-xs font-medium text-base-content">
              © {new Date().getFullYear()} Gian Carlo N. Ulep
            </p>
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              Crafted with precision, passion & motion
            </p>
          </div>

          {/* Powered By (Icons Only) */}
          <div className="flex items-center gap-1.5 md:gap-2 flex-wrap justify-center sm:justify-end">
            <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-base-content/60 font-semibold mr-1">
              Powered by
            </span>
            {POWERED_BY_STACK.map((tool) => (
              <div
                key={tool.name}
                className={cn(
                  'shadow-md inline-flex items-center justify-center rounded-md p-1.5',
                  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                  'cursor-default hover-badge transition-transform duration-200 hover:scale-110'
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
      </motion.footer>
    </section>
  );
}
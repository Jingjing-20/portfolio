import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles, FolderGit2, Code2, Briefcase, Award, User, Send } from 'lucide-react';

// Powered by SVGs
import reactSvg from '@/components/resume_sections/home/powered_by/react.svg';
import jsSvg from '@/components/resume_sections/home/powered_by/javascript.svg';
import tailwindSvg from '@/components/resume_sections/home/powered_by/file-type-tailwind.svg';
import shadcnSvg from '@/components/resume_sections/home/powered_by/shadcn-ui.svg';
import motionSvg from '@/components/resume_sections/home/powered_by/motion.svg';


const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2.5 md:p-3',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-xs md:text-sm cursor-pointer hover-theme-switch select-none'
);

const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-[10px] md:text-xs cursor-pointer hover-badge'
);

const sectionCardClasses = cn(
  'group text-left p-3.5 md:p-4 rounded-xl bg-textured border border-solid border-gray-300 dark:border-white/20',
  'hover:border-double shadow-xl cursor-pointer hover-theme-switch transition-all duration-200'
);

// Portfolio Highlights accurately mapping to navbar sections
const PORTFOLIO_SECTIONS = [
  {
    id: 'projects',
    title: 'Projects',
    badge: 'Showcase',
    description: 'Explore featured software projects, web applications, and interactive digital experiences.',
    icon: projectsIcon,
    accent: '#00bcd4',
  },
  {
    id: 'stack',
    title: 'Skills',
    badge: 'Tech Stack',
    description: 'Overview of technical proficiencies, development tools, and core engineering capabilities.',
    icon: stackIcon,
    accent: '#f7df1e',
  },
  {
    id: 'experience',
    title: 'Experience',
    badge: 'Career Path',
    description: 'Professional background, practical industry roles, and collaborative work history.',
    icon: experienceIcon,
    accent: '#44a8b3',
  },
  {
    id: 'certificates',
    title: 'Certifications',
    badge: 'Credentials',
    description: 'Accredited certifications, technical skill assessments, and professional training.',
    icon: certIcon,
    accent: '#a855f7',
  },
];

// Portfolio tech stack tools from powered_by directory (Icons Only - No labels)
const POWERED_BY_STACK = [
  {
    name: 'React',
    color: '#00bcd4',
    icon: <img src={reactSvg} alt="React" className="tool-icon-img" />,
    stack: 'React',
  },
  {
    name: 'JavaScript',
    color: '#f7df1e',
    icon: <img src={jsSvg} alt="JavaScript" className="tool-icon-img" />,
    stack: 'JavaScript',
  },
  {
    name: 'Tailwind CSS',
    color: '#44a8b3',
    icon: <img src={tailwindSvg} alt="Tailwind CSS" className="tool-icon-img" />,
    stack: 'Tailwind CSS',
  },
  {
    name: 'shadcn/ui',
    color: '#000000',
    icon: <img src={shadcnSvg} alt="shadcn/ui" className="tool-icon-img tool-icon-monochrome" />,
    stack: 'shadcn/ui',
  },
  {
    name: 'Motion',
    color: '#ff0055',
    icon: <img src={motionSvg} alt="Motion" className="tool-icon-img tool-icon-monochrome" />,
    stack: 'Motion',
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
      aria-label="Portfolio Home"
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center py-4 md:py-6"
    >
      {/* Main Content Area */}
      <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-10 px-2 sm:px-4 my-auto flex-1 flex flex-col justify-center">

        {/* Hero Section */}
        <div className="text-center space-y-4 md:space-y-5">

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 max-w-3xl mx-auto"
          >
            <h1 className="tracking-tight text-base-content text-3xl md:text-6xl lg:text-7xl font-bold">
              <span className="block">
                Code. Learn. Grow.
              </span>
            </h1>

            <p className="text-[10px] md:text-xs text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer with 2+ years of project experience building web applications for government offices, a state university, boutique interactive mockups, browser games, and computer networking solutions.
            </p>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 pt-1"
          >
            <button
              type="button"
              onClick={() => handleNavigate('about')}
              className={cn(buttonClasses, 'font-semibold')}
              aria-label="View Projects"
            >
              <span>Explore</span>
              <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5 opacity-60" />
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('socials')}
              className={buttonClasses}
              aria-label="Contact & Socials"
            >
              <Send className="h-3 w-3 md:h-4 md:w-4" />
              <span>Contact</span>
            </button>
          </motion.div>
        </div>

        {/* What's Inside the Portfolio - 4 Interactive Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-base-content/60">
              Portfolio Overview
            </h2>
            <span className="text-[9px] md:text-[11px] text-base-content/40">
              Select any section to explore
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {PORTFOLIO_SECTIONS.map((sec) => (
              <div
                key={sec.id}
                onClick={() => handleNavigate(sec.id)}
                className={sectionCardClasses}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleNavigate(sec.id)}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={sec.icon}
                      alt=""
                      className="h-4 w-4 md:h-5 md:w-5 dark:invert shrink-0"
                      aria-hidden="true"
                    />
                    <h3 className="text-xs md:text-sm font-semibold text-base-content group-hover:underline underline-offset-2">
                      {sec.title}
                    </h3>
                  </div>
                  <span className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-full bg-base-300/60 text-base-content/70 font-medium whitespace-nowrap">
                    {sec.badge}
                  </span>
                </div>

                <hr className="my-2" />

                <p className="text-[10px] md:text-xs text-base-content/60 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Powered By Section - Full brand colors by default */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-2xl mx-auto pt-2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-base-content/50">
              Built With
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {POWERED_BY_STACK.map((tool) => (
                <div
                  key={tool.name}
                  className={techBadgeClasses}
                  style={{ '--brand-color': tool.color }}
                  title={tool.name}
                  aria-label={tool.name}
                >
                  <span className="flex items-center justify-center size-3.5 md:size-4 shrink-0">
                    {tool.icon}
                  </span>
                  <span className="text-base-content">
                    {tool.stack}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full pt-8 pb-2 mt-auto space-y-3"
      >
        {/* Divider */}
        <hr className="w-full max-w-4xl mx-auto border-gray-300/40 dark:border-white/10" />

        {/* Footer Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto px-4 text-xs text-base-content/50">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-[10px] md:text-xs text-base-content">
              © {new Date().getFullYear()} Gian Carlo N. Ulep
            </p>
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              Bachelor of Science in Information Technology · CHMSU
            </p>
          </div>

          <div className="text-center sm:text-right space-y-0.5">
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              Available for full-time & contract roles
            </p>
            <p className="text-[8px] md:text-[10px] text-base-content/40 font-mono tracking-wider">
              Crafted with precision & motion
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
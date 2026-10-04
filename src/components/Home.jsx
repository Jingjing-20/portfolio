import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ArrowRight, Send } from 'lucide-react';

function ArrowTopRightIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15 15" className={className} aria-hidden="true">
      <title>arrow-top-right</title>
      <path fill="currentColor" d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
    </svg>
  );
}

function ProjectsOutlinedIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z" />
    </svg>
  );
}

function SkillsOutlinedIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z" />
    </svg>
  );
}

function ExperienceOutlinedIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true">
      <rect width="448" height="320" x="32" y="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" rx="48" ry="48" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m112 112H32m288 0v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24" />
    </svg>
  );
}

function CertificateOutlinedIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.36 12.166l2.475 2.474l4.951-4.951M6 4.999h2.686a1 1 0 0 0 .707-.293l1.9-1.9a1 1 0 0 1 1.414 0l1.9 1.9a1 1 0 0 0 .707.293H18a1 1 0 0 1 1 1v2.686a1 1 0 0 0 .293.707l1.9 1.9a1 1 0 0 1 0 1.414l-1.9 1.9a1 1 0 0 0-.293.707v2.686a1 1 0 0 1-1 1h-2.687a1 1 0 0 0-.707.293l-1.9 1.9a1 1 0 0 1-1.413 0l-1.9-1.9a1 1 0 0 0-.707-.293H6a1 1 0 0 1-1-1v-2.686a1 1 0 0 0-.293-.707l-1.9-1.9a1 1 0 0 1 0-1.414l1.9-1.9A1 1 0 0 0 5 8.686V6a1 1 0 0 1 1-1" />
    </svg>
  );
}

const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2.5 md:p-3',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-xs md:text-sm hover-theme-switch select-none'
);

const invertedButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2.5 md:p-3',
  'bg-base-content text-base-100',
  'border border-solid border-base-content/20',
  'hover:bg-base-100 hover:text-base-content hover:border-base-content duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-xs md:text-sm transition-all duration-200 hover-theme-switch select-none'
);

const techBadgeClasses = cn(
  'text-[7px] md:text-[8px] px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
  'hover:text-base-content hover:border-base-content',
  'font-medium grayscale cursor-default',
  'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0'
);

const sectionCardClasses = cn(
  'group text-left p-3.5 md:p-4 rounded-xl bg-textured border border-solid border-gray-300 dark:border-white/20',
  'hover:border-double shadow-xl hover-theme-switch transition-all duration-200'
);

const PORTFOLIO_SECTIONS = [
  {
    id: 'projects',
    title: 'Built Projects',
    badge: 'View Portfolio',
    description: 'Explore featured software projects, web applications, and interactive digital experiences.',
    icon: ProjectsOutlinedIcon,
    accent: '#00bcd4',
  },
  {
    id: 'stack',
    title: 'Technical Skills',
    badge: 'View Skills',
    description: 'Overview of technical proficiencies, development tools, and core engineering capabilities.',
    icon: SkillsOutlinedIcon,
    accent: '#f7df1e',
  },
  {
    id: 'experience',
    title: 'Work Experience',
    badge: 'View Experience',
    description: 'Professional background, practical industry roles, and collaborative work history.',
    icon: ExperienceOutlinedIcon,
    accent: '#44a8b3',
  },
  {
    id: 'certificates',
    title: 'Credentials Earned',
    badge: 'View Credentials',
    description: 'Accredited certifications, technical skill assessments, and professional training.',
    icon: CertificateOutlinedIcon,
    accent: '#a855f7',
  },
];

const POWERED_BY_STACK = [
  {
    name: 'React',
  },
  {
    name: 'Vite',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'shadcn/ui',
  },
  {
    name: 'Motion One',
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
      <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-10 px-2 sm:px-4 my-auto flex-1 flex flex-col justify-center">

        <div className="text-center space-y-4 md:space-y-5">

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 pt-1"
          >
            <button
              type="button"
              onClick={() => handleNavigate('about')}
              className={cn(invertedButtonClasses, 'font-semibold')}
              aria-label="View Projects"
            >
              <span>About Me</span>
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
            <span className="text-[8px] md:text-[10px] text-base-content/40">
              Select any section to explore
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {PORTFOLIO_SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  onClick={() => handleNavigate(sec.id)}
                  className={sectionCardClasses}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavigate(sec.id)}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xs md:text-sm font-semibold text-base-content group-hover:underline underline-offset-2">
                      {sec.title}
                    </h3>
                    <ArrowTopRightIcon size={16} className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors" />
                  </div>

                  <hr className="my-2" />

                  <p className="text-[10px] md:text-xs text-base-content/60 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-2xl mx-auto pt-2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-base-content/50">
              Built With
            </span>
            <div className="px-9 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {POWERED_BY_STACK.map((tool) => (
                <div
                  key={tool.name}
                  className={techBadgeClasses}
                  title={tool.name}
                  aria-label={tool.name}
                >
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full pt-8 pb-2 mt-auto space-y-3"
      >
        <hr className="w-full max-w-4xl mx-auto border-gray-300/40 dark:border-white/10" />

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
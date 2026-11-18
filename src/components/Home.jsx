import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ArrowRight, Send } from 'lucide-react';
import {
  AvatarGroup,
  AvatarGroupTooltip,
  AvatarGroupTooltipArrow,
} from '@/components/animate-ui/primitives/avatar-group';

function ReactIcon({ className = 'size-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <title>react</title>
      <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
    </svg>
  );
}

function ViteIcon({ className = 'size-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <title>vite</title>
      <path fill="currentColor" d="m8.525 4.63l-5.132-.915a1.17 1.17 0 0 0-1.164.468a1.16 1.16 0 0 0-.07 1.28l8.901 15.58a1.182 1.182 0 0 0 2.057-.008l8.729-15.578c.49-.875-.262-1.917-1.242-1.739l-4.574.813l-.206.754l4.906-.871a.474.474 0 0 1 .498.697L12.5 20.689a.47.47 0 0 1-.5.234a.47.47 0 0 1-.326-.231L2.772 5.112a.474.474 0 0 1 .496-.7l5.133.916l.074.013z" />
      <path fill="currentColor" d="m15.097 5.26l.162-.593l-.6.107zm-5.88-.506l.513.09l-.542.427z" />
      <path fill="currentColor" d="m15.549 2.367l-6.1 1.26a.22.22 0 0 0-.126.077a.25.25 0 0 0-.055.142l-.375 6.685a.24.24 0 0 0 .079.194a.21.21 0 0 0 .195.05l1.698-.414c.16-.038.302.11.27.278l-.505 2.606c-.034.176.122.326.285.274l1.049-.336c.162-.052.319.098.284.274l-.801 4.093c-.05.257.272.396.407.177l.09-.147l4.97-10.464c.084-.175-.06-.375-.242-.338l-1.748.356c-.165.034-.304-.128-.258-.297l1.14-4.173c.047-.17-.093-.331-.257-.297" />
    </svg>
  );
}

function JavaScriptIcon({ className = 'size-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <title>javascript-fill</title>
      <path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583" />
    </svg>
  );
}

function TailwindIcon({ className = 'size-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <title>tailwind</title>
      <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
    </svg>
  );
}

function ShadcnIcon({ className = 'size-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className={className} aria-hidden="true">
      <title>file-type-light-shadcn</title>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="4.48" fill="none" d="m27.76 16.56l-11.2 11.2m8.96-23.52L4.24 25.52" />
    </svg>
  );
}

function MotionIcon({ className = 'size-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" className={className} aria-hidden="true">
      <title>motion</title>
      <path fill="currentColor" d="M48.379 39.997L23.063 88.003H0L19.77 50.52c3.064-5.814 10.708-10.523 17.078-10.523ZM104.937 52c0-6.631 5.162-12.002 11.531-12.002S128 45.368 128 52c0 6.629-5.162 12-11.532 12c-6.369 0-11.531-5.37-11.531-12.001M52.703 39.997h23.063L50.45 88.003H27.387Zm27.238 0h23.063L83.241 77.48c-3.065 5.814-10.715 10.523-17.084 10.523H54.625Z" />
    </svg>
  );
}

function ArrowTopRightIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15 15" className={className} aria-hidden="true">
      <title>arrow-top-right</title>
      <path fill="currentColor" d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z" />
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
  'text-[10px] md:text-xs px-1.5 py-0.5 rounded',
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
    icon: ReactIcon,
  },
  {
    name: 'Vite',
    icon: ViteIcon,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
  },
  {
    name: 'shadcn/ui',
    icon: ShadcnIcon,
  },
  {
    name: 'Motion',
    icon: MotionIcon,
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
            className="space-y-3 mx-auto"
          >
            <h1 className="tracking-tight text-base-content text-3xl md:text-6xl lg:text-7xl font-bold">
              <span className="block md:whitespace-nowrap">
                Design. Build. Deliver.
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
            <AvatarGroup className="h-11 md:h-12 -space-x-2.5 md:-space-x-3" invertOverlap>
              {POWERED_BY_STACK.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    aria-label={tool.name}
                    className="relative flex size-9 md:size-10 items-center justify-center rounded-full border border-black dark:border-white bg-base-200 dark:bg-base-300 text-base-content shadow-sm transition-all"
                  >
                    <Icon className="size-4 md:size-5 shrink-0" />
                    <AvatarGroupTooltip>
                      {tool.name}
                      <AvatarGroupTooltipArrow />
                    </AvatarGroupTooltip>
                  </div>
                );
              })}
            </AvatarGroup>
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
              Bachelor of Science in Information Technology · CHMSU-A
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
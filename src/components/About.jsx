import profileImage from '@/components/resume_sections/about/gian.webp';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
import { cn } from '@/lib/utils';

const roleBadgeClasses = cn(
  'text-[10px] md:text-xs px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
  'hover:text-base-content hover:border-base-content',
  'font-medium grayscale cursor-default',
  'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0'
);

const ROLES = [
  'Software Developer',
  'Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Mobile Developer',
  'Application Support',
  'IT Support',
  'Technical Support',
  'IT Operations',
  'Help Desk',
  'NOC Support',
  'Network Support',
  'SQL Developer',
  'WordPress Developer',
  'UI Developer',
  'Customer Support',
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="scroll-mt-24 max-w-2xl mx-auto"
    >
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            About Me
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Background, education, and career goals
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3" />

      {/* Image + Name + Description */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-6 w-full">
        {/* Image - Tilt Card */}
        <div className="shrink-0">
          <Tilt
            maxTilt={22}
            perspective={800}
          >
            <TiltContent
              className={cn(
                'relative overflow-hidden select-none',
                'rounded-xl',
                'border-2 border-gray-300 dark:border-white/20',
                'bg-gradient-image-border shadow-xl',
                'p-1'
              )}
            >
              <img
                src={profileImage}
                alt="Gian Carlo N. Ulep"
                className="rounded-lg w-35 h-35 md:w-35 md:h-35 object-cover object-top pointer-events-none"
              />
            </TiltContent>
          </Tilt>
        </div>

        {/* Right Side: Name + Bio */}
        <div className="flex-1 w-full space-y-3 md:space-y-4">
          {/* Name */}
          <div className="w-full text-center sm:text-left">
            <h3 className="font-extrabold text-base-content text-2xl md:text-4xl">
              Gian Carlo N. Ulep
            </h3>
          </div>
          <p className="text-[10px] md:text-xs text-base-content">
            2 years of project-based experience in software and web development, including systems for government offices and a state university. Brings customer/technical support experience and a solid foundation in computer networking through academic coursework and hands-on projects.          </p>
        </div>
      </div>

      <hr className="my-3 md:my-4" />

      {/* Roles / Focus Areas */}
      <div className="space-y-2">
        <div className="space-y-1">
          <h3 className="text-[10px] md:text-xs text-base-content">
            Open for Junior/Entry-Level Roles :
          </h3>
          <p className="text-[8px] md:text-[10px] text-base-content/50">
            Career opportunities I'm actively seeking and prepared for
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {ROLES.map((role) => (
            <div key={role} className={roleBadgeClasses}>
              <span>{role}</span>
            </div>
          ))}
        </div>
      </div>

      <br className="mt-3 md:mt-4" />

      {/* Education */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-[10px] md:text-xs text-base-content">
            Education :
          </h3>
          <p className="text-[8px] md:text-[10px] text-base-content/50">
            Academic background and formal qualifications
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-xs md:text-sm text-base-content font-bold">
              Bachelor of Science in Information Technology
            </h4>
            <p className="text-[10px] md:text-xs text-base-content/60">
              Carlos Hilado Memorial State University – Alijis
            </p>
          </div>
          <div className="flex flex-col sm:items-end mt-1 sm:mt-0">
            <span className="text-[8px] md:text-[10px] text-base-content/80">
              2022 – 2026
            </span>
            <span className="text-[8px] md:text-[10px] text-base-content/60">
              Negros Occidental, Philippines
            </span>
          </div>
        </div>
      </div>

      <br className="mt-3 md:mt-4" />

      {/* Additional Info */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-[10px] md:text-xs text-base-content">
            Highlights :
          </h3>
          <p className="text-[8px] md:text-[10px] text-base-content/50">
            Key strengths, interests, and professional values
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-start gap-3 p-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
            <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
              Passionate about building user-centric applications that solve real-world problems
            </p>
          </div>
          <div className="flex items-start gap-3 p-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
            <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
              Continuously learning and experimenting with modern frameworks, best practices, and emerging technologies
            </p>
          </div>
          <div className="flex items-start gap-3 p-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
            <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
              Strong communicator who thrives in collaborative environments and values clean, maintainable code
            </p>
          </div>
          <div className="flex items-start gap-3 p-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
            <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
              Active learner exploring AI-assisted development tools and modern web development workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
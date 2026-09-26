import profileImage from '@/components/resume_sections/about/gian.webp';
import {
  Tilt,
  TiltContent,
} from '@/components/animate-ui/primitives/effects/tilt';
import { cn } from '@/lib/utils';

const roleBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center p-2 rounded-sm',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover-badge',
  'text-[10px] md:text-xs cursor-default text-base-content'
);

const ROLES = [
  'Software & Web Development',
  'UX/UI Design',
  'Technical Support',
  'Computer Networking',
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="scroll-mt-24 max-w-2xl mx-auto"
    >
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3 md:mb-6">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl">
            About
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Get to know me better
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      {/* Image + Name + Description */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-6 w-full">
        {/* Image - Tilt Card */}
        <div className="shrink-0">
          <Tilt
            rotationFactor={8}
            springOptions={{
              stiffness: 350,
              damping: 25,
            }}
          >
            <TiltContent
              className={cn(
                'relative overflow-hidden',
                'rounded-xl',
                'border-2 border-gray-300 dark:border-white/20',
                'bg-gradient-image-border shadow-xl',
                'p-1'
              )}
            >
              <img
                src={profileImage}
                alt="Gian Carlo N. Ulep"
                className="rounded-lg w-35 h-35 md:w-35 md:h-35 object-cover object-top"
              />
            </TiltContent>
          </Tilt>
        </div>

        {/* Right Side: Name + Bio */}
        <div className="flex-1 w-full space-y-3 md:space-y-4">
          {/* Name */}
          <div className="w-full text-center sm:text-left">
            <h3 className="font-bold text-base-content text-2xl md:text-4xl">
              Gian Carlo N. Ulep
            </h3>
          </div>
          <p className="text-[10px] md:text-xs text-base-content">
            Experience in software development, systems deployment, and technical support, including systems used by government offices and a state university. Brings customer service experience and a solid foundation in computer networking through academic coursework and hands-on projects.
          </p>
        </div>
      </div>

      <hr className="my-3 md:my-4" />

      {/* Roles / Focus Areas */}
      <div className="space-y-2">
        <div className="space-y-1">
          <h3 className="text-[10px] md:text-xs text-base-content">
            Role :
          </h3>
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
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <h4 className="text-[10px] md:text-xs text-base-content font-medium">
              Bachelor of Science in Information Technology
            </h4>
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              Carlos Hilado Memorial State University – Alijis
            </p>
          </div>
          <span className="text-[6px] md:text-[8px] text-base-content/80 whitespace-nowrap self-start sm:self-auto">
            Bacolod City, Negros Occidental, Philippines
          </span>
        </div>
      </div>
    </section>
  );
}
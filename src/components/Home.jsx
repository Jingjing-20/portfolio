import { motion } from 'motion/react';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tools } from '@/components/resume_sections/stack/tools';
import profileImage from '@/components/resume_sections/about/gian.webp';

const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md px-6 py-3',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-sm md:text-base font-medium cursor-pointer hover-badge',
  'transition-all duration-200 hover:scale-105'
);

const techBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-sm md:text-base font-medium cursor-default hover-badge'
);

// Portfolio tech stack tools
const PORTFOLIO_TECH = ['React', 'JavaScript', 'Tailwind', 'Vite', 'Framer'];

export default function Home() {
  const handleGetStarted = () => {
    window.location.hash = 'about';
  };

  const handleBrowseProjects = () => {
    window.location.hash = 'projects';
  };

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="min-h-[calc(100vh-10rem)] flex items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto text-center space-y-8 px-4">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div
            className={cn(
              'relative overflow-hidden',
              'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
              'p-1 md:p-1.5 rounded-full',
              'border-4 border-gray-300 dark:border-white/20',
              'bg-gradient-image-border shadow-2xl'
            )}
          >
            <img
              src={profileImage}
              alt="Gian Carlo N. Ulep"
              className="rounded-full h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-textured border-2 border-gray-300 dark:border-white/20 shadow-lg mb-2">
            <span className="text-xs md:text-sm font-medium text-base-content/70">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="font-bold tracking-tight text-base-content text-4xl md:text-5xl lg:text-7xl">
            <ShimmeringText
              text="Gian Carlo N. Ulep"
              className="font-extrabold"
            />
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-base-content/80 font-medium">
            Software Developer
          </p>

          <p className="text-sm md:text-base lg:text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
            Passionate about building web and software applications with a keen eye for detail 
            and a dedication to delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={handleGetStarted}
            className={buttonClasses}
            aria-label="Get started and learn about me"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleBrowseProjects}
            className={cn(buttonClasses, 'bg-transparent')}
            aria-label="Browse my projects"
          >
            <span>Browse Projects</span>
          </button>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8"
        >
          <p className="text-[10px] md:text-xs text-base-content/60 mb-4 tracking-wider">
            POWERED BY
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {PORTFOLIO_TECH.map((toolName) => {
              const tool = Tools[toolName];
              if (!tool) return null;

              return (
                <div
                  key={toolName}
                  className={techBadgeClasses}
                  style={{ '--brand-color': tool.color }}
                >
                  <span className="tool-icon flex items-center justify-center">
                    {tool.icon}
                  </span>
                  <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                    {toolName}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

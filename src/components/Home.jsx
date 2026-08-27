import { motion } from 'motion/react';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tools } from '@/components/resume_sections/stack/tools';

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

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="min-h-[calc(100vh-10rem)] flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto text-center space-y-8 px-4">
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <button
            type="button"
            onClick={handleGetStarted}
            className={buttonClasses}
            aria-label="Get started and learn about me"
          >
            <span>Explore My Work</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 max-w-4xl mx-auto"
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
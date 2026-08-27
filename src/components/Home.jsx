import { motion } from 'motion/react';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import reactSvg from '@/components/resume_sections/home/powered_by/react.svg';
import jsSvg from '@/components/resume_sections/home/powered_by/javascript.svg';
import tailwindSvg from '@/components/resume_sections/home/powered_by/file-type-tailwind.svg';
import shadcnSvg from '@/components/resume_sections/home/powered_by/shadcn-ui.svg';
import motionSvg from '@/components/resume_sections/home/powered_by/motion.svg';

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

// Portfolio tech stack tools from powered_by directory
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
  const handleGetStarted = () => {
    window.location.hash = 'about';
  };

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="min-h-[calc(100vh-8.5rem)] flex flex-col justify-between items-center"
    >
      {/* Main Center Content */}
      <div className="w-full max-w-7xl mx-auto text-center space-y-8 px-4 my-auto flex-1 flex flex-col justify-center items-center">
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
      </div>

      {/* Powered By Footer at bottom end */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full pt-8 pb-4 text-center mt-auto"
      >
        <p className="text-[10px] md:text-xs text-base-content/60 mb-3 tracking-wider font-medium">
          POWERED BY
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          {POWERED_BY_STACK.map((tool) => (
            <div
              key={tool.name}
              className={techBadgeClasses}
              style={{ '--brand-color': tool.color }}
            >
              <span className="tool-icon flex items-center justify-center">
                {tool.icon}
              </span>
              <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </motion.footer>
    </section>
  );
}
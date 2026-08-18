import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { cn } from '@/lib/utils';

const headerIconClasses = cn(
  'inline-flex items-center justify-center rounded-md p-2 shadow-xl',
  'bg-textured border border-gray-300 dark:border-white/20',
  'transition-all duration-300 hover:border-gray-800 dark:hover:border-white/70',
  'transform hover:-translate-y-1 hover:rotate-3'
);

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">About</h2>
            <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">A quick introduction</p>
          </div>
          <div className={headerIconClasses} aria-hidden="true"><AboutInfo size={20} /></div>
        </div>
      </header>

      <div className="space-y-3">
        <p className="text-[10px] leading-relaxed md:text-xs">
          <span className="text-base-content">I am a </span>
          <span className="font-bold"><ShimmeringText text="Software Developer" className="font-bold" /></span>
          <span className="text-base-content"> focused on building accessible and responsive web applications. I work with modern web technologies to create clean, maintainable solutions that address practical needs and improve user experience.</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-base-content/45 md:text-[10px]">
          <span>Born in 2004</span><span className="text-base-content/20">•</span><span>Male</span><span className="text-base-content/20">•</span><span>Valladolid, Negros Occidental, Philippines</span>
        </div>
      </div>
    </section>
  );
}

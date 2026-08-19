import { AboutInfo } from '@/components/animate-ui/icons/about-info';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">About</h2>
          <p className="text-[10px] leading-relaxed text-base-content/70 md:text-xs">A quick introduction</p>
        </div>
      </header>

      <div className="space-y-1 md:space-y-2 text-base-content text-[10px] leading-relaxed md:text-xs">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          <span>Born in 2004</span><span className="text-base-content/20">•</span><span>Male</span><span className="text-base-content/20">•</span><br/><span>Valladolid, Negros Occidental, Philippines</span>
        </div>
        <p className="">
          <span className="text-base-content">I am a </span>
          <span className="font-bold"><ShimmeringText text="Software Developer" className="font-bold" /></span>
          <span className="text-base-content"> focused on building accessible and responsive web applications. I work with modern web technologies to create clean, maintainable solutions that address practical needs and improve user experience.</span>
        </p>
      </div>
    </section>
  );
}

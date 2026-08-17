import profileImage from '@/components/resume_sections/about/gian.png';
import { Tilt, TiltContent } from '@/components/animate-ui/primitives/effects/tilt';
import { cn } from '@/lib/utils';

const cardClasses = cn(
  'group relative mx-auto w-36 h-36 rounded-lg p-1.5 shadow-xl md:w-46 md:h-46',
  'bg-textured border-4 border-double border-gray-300 dark:border-white/20',
  'transition-all duration-300'
);

export default function CardDev() {
  return (
    <section aria-label="Profile card">
      <Tilt maxTilt={12} className="w-full">
        <TiltContent className={cardClasses}>
          <div className="relative h-full w-full overflow-hidden rounded-sm border border-black/10 bg-base-300 shadow-inner dark:border-white/10">
            <img
              src={profileImage}
              alt="Gian Carlo N. Ulep"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </TiltContent>
      </Tilt>
    </section>
  );
}

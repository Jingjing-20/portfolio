// Certificates.jsx
import { Certificate } from '@/components/animate-ui/icons/certificate';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import SectionSkeleton from './SectionSkeleton';

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <header className="mb-3 md:mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Certificates
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Certifications and earned credentials
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background dark:bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <Certificate size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>
      <SectionSkeleton icon={Certificate} />
    </section>
  );
}

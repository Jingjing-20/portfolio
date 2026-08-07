// Certificates.jsx
import { Certificate } from '@/components/animate-ui/icons/certificate';
import SectionSkeleton from './SectionSkeleton';

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <header className="mb-8 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/60">
            <Certificate size={20} className="h-5 w-5 text-muted-foreground/80" />
          </div>
          <div>
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
              Certificates
            </h2>
            <p className="text-sm text-base-content/70">
              Certifications and earned credentials
            </p>
          </div>
        </div>
      </header>
      <SectionSkeleton icon={Certificate} />
    </section>
  );
}

// TechStack.jsx
import { StackLine } from '@/components/animate-ui/icons/stack-line';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import SectionSkeleton from './SectionSkeleton';

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <header className="mb-8 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/60">
            <AnimateIcon animateOnHover>
              <StackLine size={20} className="h-5 w-5 text-muted-foreground/80" />
            </AnimateIcon>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
              Stack
            </h2>
            <p className="text-sm text-base-content/70">
              Tools and technologies I work with
            </p>
          </div>
        </div>
      </header>
      <SectionSkeleton icon={StackLine} />
    </section>
  );
}

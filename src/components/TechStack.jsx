// TechStack.jsx
import { Layers } from '@/components/animate-ui/icons/layers';
import SectionSkeleton from './SectionSkeleton';

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <header></header>
      <SectionSkeleton icon={Layers} />
    </section>
  );
}
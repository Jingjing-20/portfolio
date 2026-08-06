// Experience.jsx
import { PanelBottom } from '@/components/animate-ui/icons/panel-bottom';
import SectionSkeleton from './SectionSkeleton';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <header></header>
      <SectionSkeleton icon={PanelBottom} />
    </section>
  );
}
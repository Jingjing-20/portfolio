// Projects.jsx
import { GalleryHorizontalEnd } from '@/components/animate-ui/icons/gallery-horizontal-end';
import SectionSkeleton from './SectionSkeleton';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <header></header>
      <SectionSkeleton icon={GalleryHorizontalEnd} />
    </section>
  );
}
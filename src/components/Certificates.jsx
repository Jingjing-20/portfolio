// Certificates.jsx
import { BadgeCheck } from '@/components/animate-ui/icons/badge-check';
import SectionSkeleton from './SectionSkeleton';

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <header></header>
      <SectionSkeleton icon={BadgeCheck} />
    </section>
  );
}
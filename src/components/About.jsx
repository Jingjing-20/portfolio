// About.jsx
import { UserRound } from '@/components/animate-ui/icons/user-round';
import SectionSkeleton from './SectionSkeleton';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <header></header>
      <SectionSkeleton icon={UserRound} />
    </section>
  );
}
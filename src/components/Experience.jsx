// Experience.jsx
import PGNOImg from '@/assets/experience/pgno.png';
import { Briefcase } from '@/components/animate-ui/icons/briefcase';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/reui/timeline';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const PGNO_EXPERIENCE = {
  step: 1,
  company: 'Provincial Government of Negros Occidental',
  logo: PGNOImg,
  logoInitials: 'PG',
  employmentType: 'Internship',
  durationMonths: '4 mos',
  location: 'Bacolod, Negros Occidental, Philippines',
  workMode: 'On-site',
  role: 'Software Developer & Systems Administrator',
  dateRange: 'Feb 2026 – May 2026',
  description: [
    'Developed PGSO-PMD: ULPMMS, a centralized platform for managing provincial lots and properties, integrating property monitoring, document management, beneficiary tracking, and geographic visualization.',
  ],
  keyContributions: [
    'Built lot allocation and property donation modules.',
    'Migrated legacy records into a unified database.',
    'Implemented beneficiary and amortization payment tracking.',
    'Integrated interactive property maps with Leaflet.',
    'Built secure document management with scanner support.',
    'Created Excel import and export reporting features.',
    'Designed real-time statistics dashboards.',
    'Implemented RBAC and authentication workflows.',
  ],
  skills: [
    'Laravel',
    'Vue.js',
    'Leaflet',
    'MySQL',
  ],
  extraSkills: 2,
};

export default function Experience() {
  const exp = PGNO_EXPERIENCE;
  return (
    <section id="experience" className="scroll-mt-24">
      <header className="mb-8 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/60">
            <AnimateIcon animateOnHover>
              <Briefcase size={20} className="h-5 w-5 text-muted-foreground/80" />
            </AnimateIcon>
          </div>
          <div>
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
              Experience
            </h2>
            <p className="text-sm text-base-content/70">
              Work history and professional engagements
            </p>
          </div>
        </div>
      </header>

      <Timeline defaultValue={1} className="w-full max-w-full ps-4">
        <TimelineItem
          step={exp.step}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
            <TimelineIndicator className="size-8 overflow-hidden rounded-full border-2 border-border group-data-[orientation=vertical]/timeline:-left-8 bg-background shadow-sm">
              <Avatar className="size-full">
                <AvatarImage src={exp.logo} alt={exp.company} />
                <AvatarFallback className="text-[10px]">
                  {exp.logoInitials}
                </AvatarFallback>
              </Avatar>
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-base-content">
                {exp.company}
              </h3>
              <p className="text-sm text-muted-foreground">
                {exp.employmentType}
                <span className="mx-2 text-base-content/40">·</span>
                {exp.durationMonths}
              </p>
              <p className="text-sm text-muted-foreground">
                {exp.location}
                <span className="mx-2 text-base-content/40">·</span>
                {exp.workMode}
              </p>
            </div>

            <div className="mt-2 space-y-1">
              <h4 className="text-sm font-medium text-base-content">
                {exp.role}
              </h4>
              <TimelineDate className="mt-0.5 mb-0">
                {exp.dateRange}
                <span className="mx-2 text-base-content/50">·</span>
                {exp.durationMonths}
              </TimelineDate>
            </div>

            <div className="mt-3 space-y-3 text-sm leading-relaxed">
              {exp.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {exp.keyContributions?.length ? (
              <div className="mt-4">
                <p className="mb-1.5 text-sm font-semibold text-base-content">
                  Key Contributions
                </p>
                <ul className="space-y-1.5">
                  {exp.keyContributions.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed">
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {exp.skills?.length ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/70 px-2.5 py-1 text-xs font-medium text-base-content/80"
                  >
                    {skill}
                  </span>
                ))}
                {typeof exp.extraSkills === 'number' && exp.extraSkills > 0 ? (
                  <span className="inline-flex items-center rounded-md border border-dashed border-border/70 px-2.5 py-1 text-xs font-medium text-base-content/70">
                    +{exp.extraSkills} skills
                  </span>
                ) : null}
              </div>
            ) : null}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

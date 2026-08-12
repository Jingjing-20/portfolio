// Experience.jsx
import { useState } from 'react';
import PGNOImg from '@/components/resume_sections/experience/pgno.png';
import { Briefcase } from '@/components/animate-ui/icons/briefcase';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { DetailsDialog } from '@/components/resume_sections/experience/ExperienceDialog';
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
import { cn } from '@/lib/utils';

// Experience Data
const EXPERIENCES = [
  {
    step: 1,
    company: 'Provincial Government of Negros Occidental : General Services Office - Property Management Division',
    logo: PGNOImg,
    logoInitials: 'PG',
    employmentType: 'Internship',
    durationMonths: '4 mos',
    location: 'Bacolod, Negros Occidental, Philippines',
    workMode: 'On-site',
    role: 'Software Developer & Systems Administrator',
    dateRange: 'Feb 2026 – May 2026',
    description: [
      'Developed GSO-ULPMMS, a centralized platform for managing provincial lots and properties, integrating property monitoring, document management, beneficiary tracking, and geographic visualization.',
    ],
    keyContributions: [
      'Improved property management by developing a system for lot allocations and property donations.',
      'Increased data accuracy by migrating legacy records into a unified database.',
      'Simplified payment processing by implementing beneficiary and amortization tracking.',
      'Enhanced property monitoring by integrating interactive maps with Leaflet.',
      'Reduced manual paperwork by building a secure document management system.',
      'Optimized reporting by creating Excel import and export features.',
      'Improved decision-making by designing dashboards with real-time statistics.',
      'Strengthened security by implementing role-based access control and authentication.',
      'Maintained and configured office computers, software, and IT equipment.',
      'Provided technical support by troubleshooting hardware, software, and system issues.',
      'Assisted with user account management, access permissions, and system configuration.',
      'Performed database maintenance and backups to help ensure data integrity.',
      'Assisted with network and connectivity troubleshooting for office workstations.',
      'Supported system deployment, updates, and routine maintenance.',
      'Documented system configurations and technical procedures for future maintenance.'
    ],
  },
];

const outlineButtonWithLabelClasses = cn(
  "shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2",
  "bg-textured border border-gray-300 dark:border-white/20",
  "hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "text-sm font-medium cursor-pointer"
);

const KEY_CONTRIBUTIONS_TITLE = 'Key Contributions';

function DetailsIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <title>details</title>
      <path fill="currentColor" fillRule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h6V5H4zm7 0h1V5h-1zm-1 2.5H4v-1h6zm1 0h1v-1h-1zM10 11H4v-1h6zm1 0h1v-1h-1z" clipRule="evenodd" />
    </svg>
  );
}

function ExperienceItem({ experience, onOpenDetails }) {
  return (
    <TimelineItem
      step={experience.step}
      className="group-data-[orientation=vertical]/timeline:ms-10"
    >
      <TimelineHeader>
        <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
        <TimelineIndicator className="size-8 overflow-hidden rounded-full border-2 border-border group-data-[orientation=vertical]/timeline:-left-8 bg-background shadow-sm">
          <Avatar className="size-full">
            <AvatarImage src={experience.logo} alt={experience.company} />
            <AvatarFallback className="text-[10px]">
              {experience.logoInitials}
            </AvatarFallback>
          </Avatar>
        </TimelineIndicator>
      </TimelineHeader>
      <TimelineContent>
        <div className="space-y-1">
          <h3 className="text-xs md:text-sm leading-relaxed font-base font-semibold text-base-content">
            {experience.company}
          </h3>
          <p className="text-[10px] md:text-xs text-muted-foreground">
            {experience.location}
            <span className="mx-2 text-base-content/40">·</span>
            {experience.workMode}
          </p>
          <div className="">
            <h4 className="text-xs md:text-sm font-medium text-base-content">
              {experience.role}
            </h4>
          </div>
          <TimelineDate className="text-[10px] md:text-xs text-muted-foreground">
            {experience.employmentType}
            <span className="mx-1 text-base-content/40">·</span>
            {experience.dateRange}
            <span className="mx-1 text-base-content/40">·</span>
            {experience.durationMonths}
          </TimelineDate>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={outlineButtonWithLabelClasses}
              onClick={() => onOpenDetails(experience)}
              aria-label="Details"
            >
              <DetailsIcon size={16} />
              <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                Details
              </span>
            </button>
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Experience() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenDetails = (experience) => {
    setSelectedExperience(experience);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Experience
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Work history and professional engagements
          </p>
        </div>
      </header>

      <Timeline defaultValue={1} className="w-full max-w-full ps-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.step}
            experience={experience}
            onOpenDetails={handleOpenDetails}
          />
        ))}
      </Timeline>

      <DetailsDialog
        experience={selectedExperience}
        open={detailsOpen}
        onClose={handleCloseDetails}
      />
    </section>
  );
}
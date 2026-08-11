// Experience.jsx
import { useState } from 'react';
import PGNOImg from '@/components/experience/pgno.png';
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
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
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
  "border bg-background hover:bg-accent text-accent-foreground",
  "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  "transition-[box-shadow,_color,_background-color,_border-color]",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "text-sm font-medium"
);

const KEY_CONTRIBUTIONS_TITLE = 'Key Contributions';

function OpenLineIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <title>help-outline</title>
      <path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31.29-.49.12-.6.01l2.99 2.98c.29.31.12.49.01.6" />
    </svg>
  );
}

function KeyContributionsDialog({ contributions, company, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">
            {KEY_CONTRIBUTIONS_TITLE}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">
            {company}
          </DialogDescription>
        </div>
        <div className="max-h-[350px] overflow-y-auto border border-gray-600 dark:border-gray-400 rounded-md">
          <ul className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-1.5 md:space-y-2 leading-relaxed text-base-content">
            {contributions.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="inline-block">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

function ExperienceItem({ experience, onOpenContributions }) {
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

        <ul className="p-1.5 md:p-2 text-[10px] md:text-xs text-muted-foreground space-y-1.5 md:space-y-2 leading-relaxed">
          {experience.description.map((para, i) => (
            <li key={i} className="flex gap-2">
              <span className="inline-block">•</span>
              <span className="flex-1">{para}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={outlineButtonWithLabelClasses}
              onClick={() => onOpenContributions(experience)}
              aria-label={KEY_CONTRIBUTIONS_TITLE}
            >
              <OpenLineIcon size={16} />
              <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                {KEY_CONTRIBUTIONS_TITLE}
              </span>
            </button>
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Experience() {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenContributions = (experience) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="scroll-mt-24">
      <header className="mb-3 md:mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Experience
          </h2>
          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Work history and professional engagements
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background dark:bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <Briefcase size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>

      <Timeline defaultValue={1} className="w-full max-w-full ps-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.step}
            experience={experience}
            onOpenContributions={handleOpenContributions}
          />
        ))}
      </Timeline>

      <KeyContributionsDialog
        contributions={selectedExperience?.keyContributions ?? []}
        company={selectedExperience?.company ?? ''}
        open={open}
        onClose={handleCloseDialog}
      />
    </section>
  );
}
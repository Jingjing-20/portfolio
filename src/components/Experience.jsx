// Experience.jsx
import { useState } from 'react';
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
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

const PGNO_EXPERIENCE = {
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
    'Built lot allocation and property donation modules.',
    'Migrated legacy records into a unified database.',
    'Implemented beneficiary and amortization payment tracking.',
    'Integrated interactive property maps with Leaflet.',
    'Built secure document management with scanner support.',
    'Created Excel import and export reporting features.',
    'Designed real-time statistics dashboards.',
    'Implemented RBAC and authentication workflows.',
  ],
};

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
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">help-outline</title><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg>
  );
}

function KeyContributionsDialog({ contributions, company, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">{KEY_CONTRIBUTIONS_TITLE}</DialogTitle>
          <hr></hr>
          <DialogDescription className="text-xs md:text-sm leading-relaxed">{company}</DialogDescription>
        </div>
        <ul className="space-y-2">
          {contributions.map((item, i) => (
            <li key={i} className="flex gap-2 text-[10px] md:text-xs leading-relaxed">
              <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </DialogPanel>
    </Dialog>
  );
}

export default function Experience() {
  const exp = PGNO_EXPERIENCE;
  const [open, setOpen] = useState(false);
  return (
    <section id="experience" className="scroll-mt-24">
      <header className="mb-8 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="shadow-xl flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600/20">
            <AnimateIcon animateOnHover>
              <Briefcase size={20} className="h-5 w-5" />
            </AnimateIcon>
          </div>
          <div>
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
              Experience
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-base-content/70">
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
              <h3 className="text-xs md:text-sm leading-relaxed font-base font-semibold text-base-content">
                {exp.company}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {exp.employmentType}
                <span className="mx-2 text-base-content/40">·</span>
                {exp.durationMonths}
              </p>
              <TimelineDate className="text-[10px] md:text-xs mt-0.5 mb-0">
                {exp.dateRange}
                <span className="mx-2 text-base-content/50">·</span>
              </TimelineDate>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {exp.location}
                <span className="mx-2 text-base-content/40">·</span>
                {exp.workMode}
              </p>
            </div>

            <div className="mt-2">
              <h4 className="text-xs md:text-sm font-medium text-base-content">
                {exp.role}
              </h4>
            </div>

            <ul className="text-[10px] md:text-xs mt-3 space-y-3 leading-relaxed">
              {exp.description.map((para, i) => (
                <li key={i} className="flex gap-2">
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/60 mt-[7px]" />
                  <span className="flex-1">{para}</span>
                </li>
              ))}
            </ul>
              <div className="mt-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className={outlineButtonWithLabelClasses}
                    onClick={() => setOpen(true)}
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
      </Timeline>

      <KeyContributionsDialog
        contributions={exp.keyContributions ?? []}
        company={exp.company}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
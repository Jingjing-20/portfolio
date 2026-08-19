import { useState } from 'react';
import { Briefcase } from '@/components/animate-ui/icons/briefcase';
import { DetailsDialog } from '@/components/resume_sections/experience/ExperienceDialog';
import { EXPERIENCES } from '@/components/resume_sections/experience/experience_data';
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


const outlineButtonWithLabelClasses = cn(
  "shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2",
  "bg-textured border border-gray-300 dark:border-white/20",
  "hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "text-sm font-medium cursor-pointer transform hover:-translate-y-1 hover:rotate-3"
);

const KEY_CONTRIBUTIONS_TITLE = 'Key Contributions';

function ExperienceItem({ experience, onOpenDetails }) {
  return (
    <TimelineItem
      step={experience.step}
      className="group-data-[orientation=vertical]/timeline:ms-10"
    >
      <TimelineHeader>
        <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
        <TimelineIndicator className="size-8 overflow-hidden rounded-full border-2 border-border group-data-[orientation=vertical]/timeline:-left-8 bg-background shadow-xl">
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
            {experience.role}
          </h3>
          <p className="text-[10px] md:text-xs text-muted-foreground">
            {experience.company}
            <span className="mx-1 text-base-content/40">·</span>
            {experience.employmentType}
          </p>
          <TimelineDate className="text-[10px] md:text-xs text-muted-foreground">
            {experience.dateRange}
            <span className="mx-1 text-base-content/40">·</span>
            {experience.durationMonths}
          </TimelineDate>
          <p className="text-[10px] md:text-xs text-muted-foreground">
            {experience.location}
            <span className="mx-1 text-base-content/40">·</span>
            {experience.workMode}
          </p>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={outlineButtonWithLabelClasses}
              onClick={() => onOpenDetails(experience)}
              aria-label="Details"
            >
              <Briefcase size={16} />
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

      <Timeline defaultValue={1} className=" border-l md:border-l-2 pl-4 md:pl-5 border-gray-300 dark:border-white/20  w-full max-w-full ps-4">
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

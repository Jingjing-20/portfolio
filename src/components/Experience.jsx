import { useState } from 'react';
import { EXPERIENCES } from '@/components/resume_sections/experience/experience_data';
import { ExperienceDialog } from '@/components/resume_sections/experience/ExperienceDialog';
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

function ExperienceIcon({ className = '', size = '1em' }) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true"><path fill="none" d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16" /><path fill="currentColor" d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480Zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 152a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4Z" /></svg>
  );
}

const experienceButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border  border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'cursor-pointer hover-theme-switch'
);

function ExperienceItem({ experience, onOpenSkills }) {
  return (
    <TimelineItem
      step={experience.step}
      className="group-data-[orientation=vertical]/timeline:ms-10"
    >
      <TimelineHeader>
        <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />

        <TimelineIndicator className="size-8 overflow-hidden rounded-full border-3 border-solid border-gray-300 dark:border-white/20 group-data-[orientation=vertical]/timeline:-left-8 bg-background shadow-xl flex items-center justify-center p-0.5">
          <Avatar className="size-full">
            <AvatarImage
              src={experience.logo}
              alt={experience.company}
              className="object-contain size-full rounded-full"
            />
            <AvatarFallback className="text-[10px] lg:text-xs">
              {experience.logoInitials}
            </AvatarFallback>
          </Avatar>
        </TimelineIndicator>
      </TimelineHeader>

      <TimelineContent>
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[10px] md:text-xs text-base-content font-bold">
                {experience.company}
              </h3>

              {(experience.employmentType || experience.durationMonths) && (
                <p className="text-[8px] md:text-[10px] text-base-content/80">
                  {experience.employmentType}

                  {experience.employmentType && experience.durationMonths && (
                    <span className="mx-1 text-base-content">·</span>
                  )}

                  {experience.durationMonths}
                </p>
              )}

              {(experience.location || experience.workMode) && (
                <p className="text-[8px] md:text-[10px] text-base-content/80">
                  {experience.location}

                  {experience.location && experience.workMode && (
                    <span className="mx-1 text-base-content">·</span>
                  )}

                  {experience.workMode}
                </p>
              )}
            </div>

            {experience.skills && experience.skills.length > 0 && (
              <button
                type="button"
                className={experienceButtonClasses}
                onClick={() => onOpenSkills(experience)}
                aria-label={`View skills for ${experience.company}`}
              >
                <ExperienceIcon className="h-3 w-3" />
              </button>
            )}
          </div>

          <div>
            <h4 className="text-xs md:text-sm text-base-content font-extrabold">
              {experience.role}
            </h4>

            <TimelineDate className="text-[8px] md:text-[10px] text-base-content/80">
              {experience.dateRange}

              {experience.durationMonths &&
                experience.durationMonths !== experience.dateRange && (
                  <>
                    <span className="mx-1 text-base-content">·</span>
                    {experience.durationMonths}
                  </>
                )}
            </TimelineDate>
          </div>

          {experience.description && (
            <p className="text-[10px] md:text-xs text-base-content">
              {experience.description}
            </p>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section id="experience" className="scroll-mt-24 max-w-2xl mx-auto">
      <header className="pt-20 md:pt-10 mb-3 md:mb-6">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            Experience
          </p>

          <p className="text-[10px] md:text-xs text-base-content/50">
            Work history and professional engagements
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      <Timeline
        defaultValue={1}
        className="w-full max-w-full ps-4"
      >
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.step}
            experience={experience}
            onOpenSkills={(exp) => setSelectedExperience(exp)}
          />
        ))}
      </Timeline>

      <ExperienceDialog
        experience={selectedExperience}
        open={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
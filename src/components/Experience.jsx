import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { EXPERIENCES } from '@/components/resume_sections/experience/experience_data';
import { ExperienceDialog } from '@/components/resume_sections/experience/ExperienceDialog';
import experienceIconSrc from '@/components/resume_sections/navbar/experience.svg';
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

const experienceButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-1.5 md:p-2 shrink-0',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double cursor-pointer hover-badge',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50'
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
          {/* Company name and top-right experience button */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[10px] md:text-xs text-base-content">
                {experience.company}
              </h3>
              {(experience.employmentType || experience.durationMonths) && (
                <p className="text-[8px] md:text-[10px]">
                  {experience.employmentType}
                  {experience.employmentType && experience.durationMonths && (
                    <span className="mx-1 text-base-content/50">·</span>
                  )}
                  {experience.durationMonths}
                </p>
              )}
              {(experience.location || experience.workMode) && (
                <p className="text-[8px] md:text-[10px]">
                  {experience.location}
                  {experience.location && experience.workMode && (
                    <span className="mx-1 text-base-content/50">·</span>
                  )}
                  {experience.workMode}
                </p>
              )}
            </div>

            {/* Experience button from Navbar format */}
            {experience.skills && experience.skills.length > 0 && (
              <button
                type="button"
                className={experienceButtonClasses}
                onClick={() => onOpenSkills(experience)}
                aria-label={`View skills for ${experience.company}`}
              >
                <img
                  src={experienceIconSrc}
                  alt=""
                  width={13}
                  height={13}
                  className="dark:invert"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          {/* Role and Date range - compact */}
          <div>
            <h4 className="text-xs md:text-sm  text-base-content">
              {experience.role}
            </h4>
            <TimelineDate className="text-[8px] md:text-[10px] text-base-content/50">
              {experience.dateRange}
              {experience.durationMonths && experience.durationMonths !== experience.dateRange && (
                <>
                  <span className="mx-1 text-base-content/50">·</span>
                  {experience.durationMonths}
                </>
              )}
            </TimelineDate>
          </div>

          {/* Description - compact */}
          {experience.description && (
            <p className="text-[10px] md:text-xs text-base-content ">
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

  const handleBackToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="experience" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header */}
      <header className="pt-5 md:pt-10 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2',
              'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'cursor-pointer hover-badge'
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
          </button>

          <div className="flex-1">
            <p className="text-base-content text-md md:text-lg lg:text-xl">
              Work Experience
            </p>
            <p className="text-[10px] md:text-xs text-base-content/50">
              Work history and professional engagements
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      <Timeline defaultValue={1} className="w-full max-w-full ps-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.step}
            experience={experience}
            onOpenSkills={(exp) => setSelectedExperience(exp)}
          />
        ))}
      </Timeline>

      {/* Experience Dialog */}
      <ExperienceDialog
        experience={selectedExperience}
        open={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}


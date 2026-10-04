import { useState, useEffect } from 'react';
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

function MoreDotsIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <title>dots-filled</title>
      <path fill="currentColor" d="M7 12a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 5 10a2 2 0 0 1 2 2m7 0a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 10a2 2 0 0 1 2 2m7 0a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 19 10a2 2 0 0 1 2 2"/>
    </svg>
  );
}

const techBadgeClasses = cn(
  'text-[7px] md:text-[8px] px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
  'hover:text-base-content hover:border-base-content',
  'font-medium grayscale cursor-default',
  'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0',
  'whitespace-nowrap'
);

const moreButtonClasses = cn(
  'inline-flex items-center justify-center',
  'text-[7px] md:text-[8px] px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60',
  'hover:text-base-content hover:border-base-content hover:bg-base-content/20',
  'cursor-pointer',
  'transition-all duration-200',
  'shrink-0'
);

function ExperienceItem({ experience, onOpenSkills }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Display 3 skills on mobile, 5 on desktop
  const MAX_VISIBLE_SKILLS = isMobile ? 3 : 5;
  const visibleSkills = experience.skills?.slice(0, MAX_VISIBLE_SKILLS) || [];
  const hasMoreSkills = experience.skills && experience.skills.length > MAX_VISIBLE_SKILLS;

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
          <div>
            <h3 className="text-[10px] md:text-xs text-base-content font-bold">
              {experience.company}
            </h3>

            {(experience.employmentType || experience.durationMonths) && (
              <p className="text-[8px] md:text-[10px] text-base-content/60">
                {experience.employmentType}

                {experience.employmentType && experience.durationMonths && (
                  <span className="mx-1 text-base-content">·</span>
                )}

                {experience.durationMonths}
              </p>
            )}

            {(experience.location || experience.workMode) && (
              <p className="text-[8px] md:text-[10px] text-base-content/60">
                {experience.location}

                {experience.location && experience.workMode && (
                  <span className="mx-1 text-base-content">·</span>
                )}

                {experience.workMode}
              </p>
            )}
          </div>

          <div>
            <h4 className="text-xs md:text-sm text-base-content font-extrabold">
              {experience.role}
            </h4>

            <TimelineDate className="text-[8px] md:text-[10px] text-base-content/60">
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
            <p className="text-[8px] md:text-[10px] text-base-content/60">
              {experience.description}
            </p>
          )}

          {/* Skills & Technologies inline - display 5, then dots button */}
          {experience.skills && experience.skills.length > 0 && (
            <div className="relative w-full mt-2">
              <div className="flex flex-wrap gap-1 items-center">
                {visibleSkills.map((skill) => (
                  <span
                    key={skill}
                    className={techBadgeClasses}
                  >
                    {skill}
                  </span>
                ))}
                {hasMoreSkills && (
                  <button
                    type="button"
                    className={moreButtonClasses}
                    onClick={() => onOpenSkills(experience)}
                    aria-label={`View all skills for ${experience.company}`}
                  >
                    <MoreDotsIcon size="14" />
                  </button>
                )}
              </div>
            </div>
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
      <header className="pt-20 md:pt-10 mb-3">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            Work Experience
          </p>

          <p className="text-[10px] md:text-xs text-base-content/50">
            Professional roles and responsibilities
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3" />

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
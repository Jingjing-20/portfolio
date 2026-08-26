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

const skillBadgeClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-[10px] md:text-xs cursor-default hover-theme-switch'
);

function ExperienceItem({ experience }) {
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
            <AvatarFallback className="text-[10px] lg:text-xs">
              {experience.logoInitials}
            </AvatarFallback>
          </Avatar>
        </TimelineIndicator>
      </TimelineHeader>
      <TimelineContent>
        <div className="space-y-1 md:space-y-2">
          <div>
            {/* Company name - aligned with timeline */}
            <h3 className="text-xs md:text-sm lg:text-base leading-relaxed font-base font-semibold text-base-content">
              {experience.company}
            </h3>

          {/* Employment type, duration, location - compact */}
            <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">
              {experience.employmentType}
              <span className="mx-1 text-base-content/40">·</span>
              {experience.durationMonths}
            </p>
            <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">
              {experience.location}
              <span className="mx-1 text-base-content/40">·</span>
              {experience.workMode}
            </p>
          </div>

          {/* Role and Date range - compact */}
          <div className="">
            <h4 className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold text-base-content">
              {experience.role}
            </h4>
            <TimelineDate className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">
              {experience.dateRange}
              <span className="mx-1 text-base-content/40">·</span>
              {experience.durationMonths}
            </TimelineDate>
          </div>

          {/* Description - compact */}
          {experience.description && (
            <p className="text-[10px] md:text-xs lg:text-sm text-base-content/80 leading-relaxed">
              {experience.description}
            </p>
          )}

          {/* Skills - badge format like TechStack */}
          {experience.skills && experience.skills.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {experience.skills.map((skill) => (
                <div
                  key={skill}
                  className={skillBadgeClasses}
                >
                  <span className="text-[8px] md:text-[10px] text-base-content">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
            Experience
          </h2>
          <p className="text-[10px] md:text-xs lg:text-sm leading-relaxed text-base-content/70">
            Work history and professional engagements
          </p>
        </div>
      </header>

      <Timeline defaultValue={1} className=" w-full max-w-full ps-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.step}
            experience={experience}
          />
        ))}
      </Timeline>
    </section>
  );
}

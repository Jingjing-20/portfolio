import { useState, useRef, useEffect } from 'react';
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
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2 whitespace-nowrap flex-shrink-0',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-sm md:text-base font-medium cursor-default hover-badge'
);

const arrowButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-1.5 flex-shrink-0',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'cursor-pointer hover-theme-switch'
);

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="0.5em" 
      height="1em" 
      viewBox="0 0 12 24"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
    >
      <path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/>
    </svg>
  );
}

function ExperienceItem({ experience }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 100);
    }
  };

  // Check scroll on mount
  useEffect(() => {
    setTimeout(checkScroll, 100);
  }, [experience.skills]);

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
        <div className="space-y-2">
          {/* Company name - aligned with timeline */}
          <h3 className="text-xs md:text-sm lg:text-base leading-relaxed font-base font-semibold text-base-content">
            {experience.company}
          </h3>

          {/* Employment type, duration, location - compact */}
          <div className="space-y-0.5">
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
          <div className="space-y-0.5">
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

          {/* Skills - horizontal scrollable with arrows */}
          {experience.skills && experience.skills.length > 0 && (
            <div className="flex items-center gap-2 pt-1">
              {/* Left arrow */}
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  className={arrowButtonClasses}
                  aria-label="Scroll left"
                >
                  <ArrowIcon direction="left" />
                </button>
              )}

              {/* Scrollable skills container */}
              <div 
                ref={scrollContainerRef}
                className="flex items-center gap-2 overflow-x-auto flex-1"
                onScroll={checkScroll}
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {experience.skills.map((skill) => (
                  <div
                    key={skill}
                    className={skillBadgeClasses}
                  >
                    <span className="text-[8px] md:text-[10px] lg:text-xs font-medium text-base-content">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  className={arrowButtonClasses}
                  aria-label="Scroll right"
                >
                  <ArrowIcon direction="right" />
                </button>
              )}
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

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />
      
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

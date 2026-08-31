import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { cn } from '@/lib/utils';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-sm md:text-base font-medium cursor-pointer hover-badge'
);

const radioButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md px-3 py-1.5 md:px-4 md:py-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-xs md:text-sm font-medium cursor-pointer hover-theme-switch transition-all duration-200',
  'disabled:opacity-50 disabled:pointer-events-none'
);

const radioButtonActiveClasses = cn(
  'border-gray-800 dark:border-white/70 shadow-md font-semibold'
);

// Full Page view for Project Details with Motion Carousel & Description
export function ProjectPage({ project, onBack, onClose }) {
  const [activeView, setActiveView] = useState('screenshots');

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onClose) {
      onClose();
    }
  };

  if (!project) return null;

  const hasScreenshots = Array.isArray(project.images) && project.images.length > 0;

  return (
    <section className="scroll-mt-24 max-w-4xl mx-auto space-y-4 md:space-y-6">
      {/* Header */}
      <header className="pt-5 md:pt-10 mb-2 md:mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleBack}
            className={backButtonClasses}
            aria-label="Back to projects"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <div className="flex-1 min-w-0">
            <h2 className="font-bold tracking-tight text-base-content text-2xl md:text-3xl lg:text-4xl leading-tight">
              {project.title}
            </h2>

            {project.organization && (
              <p className="text-[10px] md:text-xs lg:text-sm leading-relaxed text-base-content/70 mt-0.5">
                {project.organization}
              </p>
            )}
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-4" />

      {/* Radio Button Toggle View */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex gap-2 items-center">
          <label
            className={cn(
              radioButtonClasses,
              activeView === 'screenshots' && radioButtonActiveClasses,
              !hasScreenshots && 'opacity-50 pointer-events-none'
            )}
          >
            <input
              type="radio"
              name="project-view"
              value="screenshots"
              checked={activeView === 'screenshots'}
              onChange={() => setActiveView('screenshots')}
              className="sr-only"
              disabled={!hasScreenshots}
            />
            <span className="text-[10px] md:text-xs font-medium text-base-content">
              Screenshots
            </span>
          </label>

          <label
            className={cn(
              radioButtonClasses,
              activeView === 'description' && radioButtonActiveClasses
            )}
          >
            <input
              type="radio"
              name="project-view"
              value="description"
              checked={activeView === 'description'}
              onChange={() => setActiveView('description')}
              className="sr-only"
            />
            <span className="text-[10px] md:text-xs font-medium text-base-content">
              Description
            </span>
          </label>
        </div>

        {activeView === 'screenshots' && hasScreenshots && (
          <span className="text-[10px] md:text-xs text-base-content/60 font-medium">
            {project.images.length} {project.images.length === 1 ? 'Screenshot' : 'Screenshots'}
          </span>
        )}
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {/* Screenshots Motion Carousel View */}
        {activeView === 'screenshots' && (
          <div className="w-full">
            {hasScreenshots ? (
              <MotionCarousel slides={project.images} />
            ) : (
              <div className="rounded-xl border-3 border-solid border-gray-300 dark:border-white/20 bg-textured p-8 text-center shadow-xl">
                <p className="text-xs md:text-sm text-base-content/70">
                  No screenshots available for this project.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Description View */}
        {activeView === 'description' && (
          <div className="rounded-xl border-3 border-solid border-gray-300 dark:border-white/20 bg-textured p-4 md:p-6 shadow-xl space-y-6">
            {/* Overview / Description */}
            <div className="space-y-2">
              <h3 className="text-xs md:text-sm lg:text-base font-semibold text-base-content uppercase tracking-wider">
                Overview
              </h3>
              <p className="text-xs md:text-sm text-base-content/85 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {Array.isArray(project.details) && project.details.length > 0 && (
              <div className="space-y-3 pt-3 border-t border-gray-300 dark:border-white/10">
                <h3 className="text-xs md:text-sm lg:text-base font-semibold text-base-content uppercase tracking-wider">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                  {project.details.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-base-300/30 border border-gray-300/60 dark:border-white/10"
                    >
                      <span className="inline-flex items-center justify-center size-5 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0 mt-0.5">
                        •
                      </span>
                      <span className="text-[11px] md:text-xs text-base-content/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Organization / Details Footer */}
            {project.organization && (
              <div className="pt-3 border-t border-gray-300 dark:border-white/10 flex items-center justify-between text-[10px] md:text-xs text-base-content/60">
                <span>Organization</span>
                <span className="font-medium text-base-content/80 text-right max-w-[70%]">
                  {project.organization}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Aliases and backward-compatible exports
export const ProjectDetail = ProjectPage;

export function ProjectDialog({ project, open, onClose }) {
  if (!open || !project) return null;
  return <ProjectPage project={project} onClose={onClose} onBack={onClose} />;
}

export function ImagesDialog({ project, open, onClose }) {
  return <ProjectDialog project={project} open={open} onClose={onClose} />;
}

export function DetailsDialog({ project, open, onClose }) {
  return <ProjectDialog project={project} open={open} onClose={onClose} />;
}

export default ProjectPage;

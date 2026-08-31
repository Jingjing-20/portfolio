import { ArrowLeft } from 'lucide-react';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-sm md:text-base font-medium cursor-pointer hover-badge'
);

// Full Page view for Project Details with MotionCarousel & plain text description
export function ProjectPage({ project, onBack, onClose }) {
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
    <ScrollReveal animation="fadeInUp" duration="0.4s">
      <section className="scroll-mt-24 max-w-3xl mx-auto space-y-4 md:space-y-6">
        {/* Header with Back Button, Project Title & Organization */}
        <header className="pt-5 md:pt-10">
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
              <h2 className="font-bold tracking-tight text-base-content text-base md:text-xl leading-tight">
                {project.title}
              </h2>
              {project.organization && (
                <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70 mt-0.5">
                  {project.organization}
                </p>
              )}
            </div>
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 md:mt-4" />

        {/* Content - All displayed at once */}
        <div className="space-y-6 md:space-y-8">
          {/* Screenshots Section with MotionCarousel */}
          {hasScreenshots && (
            <div className="space-y-2.5">
              <h3 className="text-xs md:text-sm font-semibold text-base-content ">
                Screenshots
              </h3>
              <div className="w-full">
                <MotionCarousel slides={project.images} />
              </div>
            </div>
          )}

          {/* Description Section */}
          <div className="space-y-2">
            <h3 className="text-xs md:text-sm font-semibold text-base-content ">
              Description
            </h3>
            <p className="text-[10px] md:text-xs text-base-content/85 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features Section */}
          {Array.isArray(project.details) && project.details.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs md:text-sm font-semibold text-base-content ">
                Key Features
              </h3>
              <ul className="space-y-1.5 md:space-y-2">
                {project.details.map((item, i) => (
                  <li
                    key={i}
                    className="text-[10px] md:text-xs text-base-content/85 leading-relaxed flex items-start gap-2"
                  >
                    <span className="inline-block mt-0.5 text-base-content/60">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default ProjectPage;

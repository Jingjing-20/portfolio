import { ArrowLeft } from 'lucide-react';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border  border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'cursor-pointer hover-theme-switch'
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
      <section className="scroll-mt-24 max-w-2xl mx-auto space-y-4 md:space-y-6">
        {/* Header */}
        <header className="pt-20 md:pt-10 mb-3 md:mb-6">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={handleBack}
              className={backButtonClasses}
              aria-label="Back to projects"
            >
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
            </button>

            <div className="flex-1 min-w-0">
              <p className="text-base-content text-md md:text-lg lg:text-xl">
                {project.title}
              </p>
              {project.organization && (
                <p className="text-[10px] md:text-xs text-base-content/50">
                  {project.organization}
                </p>
              )}
            </div>
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

        {/* Content - All displayed at once */}
        <div className="space-y-6 md:space-y-8">
          {/* Screenshots Section with MotionCarousel */}
          {hasScreenshots && (
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
                Screenshots :
              </h3>
              <div className="w-full">
                <MotionCarousel slides={project.images} />
              </div>
            </div>
          )}

          {/* Description Section */}
          <div className="space-y-2">
            <h3 className="text-[10px] md:text-xs text-base-content">
              Description :
            </h3>
            <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features Section */}
          {Array.isArray(project.details) && project.details.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
                Key Features :
              </h3>
              <div className="space-y-1">
                {project.details.map((item, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex items-start gap-3 p-1 rounded-md',
                      'text-[10px] md:text-xs font-medium text-base-content leading-relaxed'
                    )}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default ProjectPage;

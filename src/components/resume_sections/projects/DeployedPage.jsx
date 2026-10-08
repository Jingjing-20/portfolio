import { ArrowLeft } from 'lucide-react';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border  border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'hover-theme-switch'
);

const techBadgeClasses = cn(
  'text-[10px] md:text-xs px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
  'hover:text-base-content hover:border-base-content',
  'font-medium grayscale cursor-default',
  'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0'
);

// Full Page view for Deployed Project Details with MotionCarousel & plain text description
export function DeployedPage({ project, onBack, onClose }) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onClose) {
      onClose();
    }
  };

  if (!project) return null;

  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  const hasMultipleImages = Array.isArray(project.images) && project.images.length > 1;
  const hasLivePreview = Boolean(project.livePreview);

  const handleOpenLive = () => {
    if (project.livePreview) {
      window.open(project.livePreview, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ScrollReveal animation="fadeInUp" duration="0.4s">
      <section className="scroll-mt-24 max-w-2xl mx-auto space-y-4 md:space-y-6">
        {/* Header */}
      <header className="pt-20 md:pt-10 mb-3">
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
              <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
                {project.title}
              </p>
              {(project.type || project.organization) && (
                <p className="text-[10px] md:text-xs text-base-content/50">
                  {project.type || project.organization}
                </p>
              )}
            </div>

            {hasLivePreview && (
              <button
                type="button"
                onClick={handleOpenLive}
                className={backButtonClasses}
                aria-label="View live site"
              >
                <SquareArrowOutUpRight size={14} className="h-3 w-3 md:h-4 md:w-4" />
              </button>
            )}
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

        {/* Content - All displayed at once */}
        <div className="space-y-6 md:space-y-8">
          {/* Image Gallery: Carousel if >1, simple preview if exactly 1 */}
          {hasImages && (
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  {hasMultipleImages ? 'Gallery :' : 'Screenshot :'}
                </h3>
                <p className="text-[8px] md:text-[10px] text-base-content/50">
                  {hasMultipleImages 
                    ? 'Visual showcase of the deployed application' 
                    : 'Live application interface and features'}
                </p>
              </div>
              {hasMultipleImages ? (
                <div className="w-full">
                  <MotionCarousel slides={project.images} />
                </div>
              ) : (
                <div className="overflow-hidden border-2  border-gray-300 dark:border-white/20 p-1.5 md:p-3 rounded-lg bg-base-300/30">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-base-300">
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt ?? project.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Description Section */}
          <div className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-[10px] md:text-xs text-base-content">
                Description :
              </h3>
              <p className="text-[8px] md:text-[10px] text-base-content/50">
                Overview of the project and its purpose
              </p>
            </div>
            <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Purpose Section */}
          {project.purpose && (
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  Purpose :
                </h3>
                <p className="text-[8px] md:text-[10px] text-base-content/50">
                  The problem it solves or goal it achieves
                </p>
              </div>
              <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                {project.purpose}
              </p>
            </div>
          )}

          {/* Key Features Section */}
          {Array.isArray(project.details) && project.details.length > 0 && (
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  Key Features :
                </h3>
                <p className="text-[8px] md:text-[10px] text-base-content/50">
                  Main functionalities and capabilities
                </p>
              </div>
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

          {/* Stack Section */}
          {Array.isArray(project.techStack) && project.techStack.length > 0 && (
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  Stack :
                </h3>
                <p className="text-[8px] md:text-[10px] text-base-content/50">
                  Technologies and tools used in development
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.techStack.map((item, i) => (
                  <div
                    key={i}
                    className={techBadgeClasses}
                  >
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

export default DeployedPage;

import { ArrowLeft } from 'lucide-react';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'hover-theme-switch'
);

export function PersonalPage({ personal, onBack, onClose }) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onClose) {
      onClose();
    }
  };

  if (!personal) return null;

  const hasImages = Array.isArray(personal.images) && personal.images.length > 0;
  const hasMultipleImages = Array.isArray(personal.images) && personal.images.length > 1;
  const hasLivePreview = Boolean(personal.livePreview);

  const handleOpenLive = () => {
    if (personal.livePreview) {
      window.open(personal.livePreview, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ScrollReveal animation="fadeInUp" duration="0.4s">
      <section className="scroll-mt-24 max-w-2xl mx-auto space-y-4 md:space-y-6">

        {/* Header */}
        <header className="pt-20 md:pt-10">
          <div className="flex items-center gap-3 md:gap-4">

            {/* Back Button */}
            <button
              type="button"
              onClick={handleBack}
              className={backButtonClasses}
              aria-label="Back to projects"
            >
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
            </button>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <p className="text-base-content text-sm md:text-md">
                {personal.name}
              </p>

              {personal.type && (
                <p className="text-[10px] md:text-xs text-base-content/50">
                  {personal.type}
                </p>
              )}
            </div>

            {/* Live Preview Button */}
            {hasLivePreview && (
              <button
                type="button"
                onClick={handleOpenLive}
                className={backButtonClasses}
                aria-label="View live site"
              >
                <SquareArrowOutUpRight
                  size={14}
                  className="h-3 w-3 md:h-4 md:w-4"
                />
              </button>
            )}
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

        {/* Content */}
        <div className="space-y-6 md:space-y-8">

          {/* Image Gallery: Carousel if >1, simple preview if exactly 1 */}
          {hasImages && (
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  {hasMultipleImages ? 'Gallery :' : 'Preview :'}
                </h3>
                <p className="text-[8px] md:text-[10px] text-base-content/50">
                  {hasMultipleImages 
                    ? 'Visual walkthrough of the project' 
                    : 'Project interface and design'}
                </p>
              </div>
              {hasMultipleImages ? (
                <div className="w-full">
                  <MotionCarousel slides={personal.images} />
                </div>
              ) : (
                <div className="overflow-hidden border-2 border-gray-300 dark:border-white/20 p-1.5 md:p-3 rounded-lg bg-base-300/30">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-base-300">
                    <img
                      src={personal.images[0].src}
                      alt={personal.images[0].alt ?? personal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {personal.description && (
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
                {personal.description}
              </p>
            </div>
          )}

          {/* Purpose */}
          {personal.purpose && (
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
                {personal.purpose}
              </p>
            </div>
          )}

          {/* Features */}
          {Array.isArray(personal.features) &&
            personal.features.length > 0 && (
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Features :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Main functionalities and capabilities
                  </p>
                </div>
                <div className="space-y-1">
                  {personal.features.map((feature, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex items-start gap-3 p-1 rounded-md',
                        'text-[10px] md:text-xs font-medium text-base-content',
                        'leading-relaxed whitespace-pre-line'
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Stack */}
          {Array.isArray(personal.stack) &&
            personal.stack.length > 0 && (
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Stack :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Technologies and tools used in development
                  </p>
                </div>
                <div className="space-y-1">
                  {personal.stack.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex items-start gap-3 p-1 rounded-md',
                        'text-[10px] md:text-xs font-medium text-base-content',
                        'leading-relaxed whitespace-pre-line'
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

export default PersonalPage;

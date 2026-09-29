import { ArrowLeft } from 'lucide-react';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border  border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'cursor-pointer hover-theme-switch'
);

const actionButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border  border-gray-300 dark:border-white/20 hover:border-double',
  'text-sm md:text-base font-medium cursor-default hover-theme-switch'
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

  const handleOpenLink = () => {
    if (personal.livePreview) {
      window.open(personal.livePreview, '_blank', 'noopener,noreferrer');
    }
  };

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
                {personal.name}
              </p>
              {personal.type && (
                <p className="text-[10px] md:text-xs text-base-content/50">
                  {personal.type}
                </p>
              )}
            </div>
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

        {/* Content - All displayed at once */}
        <div className="space-y-6 md:space-y-8">
          {/* Preview Image */}
          {personal.previewImage && (
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
                Preview :
              </h3>
              <div className="overflow-hidden border-2  border-gray-300 dark:border-white/20 p-1.5 md:p-3 rounded-lg bg-base-300/30">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-base-300">
                  <img
                    src={personal.previewImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Live Preview Link - Button only */}
          {personal.livePreview && (
            <div>
              <button
                type="button"
                className={actionButtonClasses}
                onClick={handleOpenLink}
                aria-label="Open live preview"
              >
                <SquareArrowOutUpRight size={14} />
                <span className="text-[10px] md:text-xs">View Live</span>
              </button>
            </div>
          )}

          {/* Description Section */}
          {personal.description && (
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
            About :
              </h3>
              <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                {personal.description}
              </p>
            </div>
          )}

          {/* Features Section */}
          {Array.isArray(personal.features) && personal.features.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
                Features :
              </h3>
              <div className="space-y-1">
                {personal.features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3 p-1 rounded-md',
                      'text-[10px] md:text-xs font-medium text-base-content leading-relaxed whitespace-pre-line'
                    )}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack Section */}
          {Array.isArray(personal.stack) && personal.stack.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
                Stack :
              </h3>
              <div className="space-y-1">
                {personal.stack.map((item, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex items-start gap-3 p-1 rounded-md',
                      'text-[10px] md:text-xs font-medium text-base-content leading-relaxed whitespace-pre-line'
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
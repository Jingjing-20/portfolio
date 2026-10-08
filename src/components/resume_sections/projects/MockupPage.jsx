import { ArrowLeft } from 'lucide-react';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border  border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'hover-theme-switch'
);

export function MockupPage({ mockup, onBack, onClose }) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onClose) {
      onClose();
    }
  };

  if (!mockup) return null;

  const hasLivePreview = Boolean(mockup.livePreview);

  const handleOpenLive = () => {
    if (mockup.livePreview) {
      window.open(mockup.livePreview, '_blank', 'noopener,noreferrer');
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
                {mockup.name}
              </p>
              {mockup.type && (
                <p className="text-[10px] md:text-xs text-base-content/50">
                  {mockup.type}
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
          {/* Preview Image */}
          {mockup.previewImage && (
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  Preview :
                </h3>
                <p className="text-[8px] md:text-[10px] text-base-content/50">
                  Visual mockup of the design concept
                </p>
              </div>
              <div className="overflow-hidden border-2  border-gray-300 dark:border-white/20 p-1.5 md:p-3 rounded-lg bg-base-300/30">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-base-300">
                  <img
                    src={mockup.previewImage}
                    alt={mockup.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Details Sections */}
          <div className="space-y-4">
            {mockup.category && (
              <div className="space-y-1">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Category :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Type of design or interface
                  </p>
                </div>
                <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                  {mockup.category}
                </p>
              </div>
            )}

            {mockup.format && (
              <div className="space-y-1">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Format :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Design format and dimensions
                  </p>
                </div>
                <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                  {mockup.format}
                </p>
              </div>
            )}

            {mockup.styling && (
              <div className="space-y-1">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Styling :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Visual style and design approach
                  </p>
                </div>
                <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                  {mockup.styling}
                </p>
              </div>
            )}

            {/* Features Section */}
            {Array.isArray(mockup.features) && mockup.features.length > 0 && (
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Features :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Design elements and components included
                  </p>
                </div>
                <div className="space-y-1">
                  {mockup.features.map((feature, index) => (
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

            {/* Key Features / Details Section */}
            {Array.isArray(mockup.details) && mockup.details.length > 0 && (
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs text-base-content">
                    Key Features :
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-base-content/50">
                    Notable aspects of the design
                  </p>
                </div>
                <div className="space-y-1">
                  {mockup.details.map((item, i) => (
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
        </div>
      </section>
    </ScrollReveal>
  );
}

export default MockupPage;
import { ArrowLeft } from 'lucide-react';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'cursor-pointer hover-theme-switch'
);

const actionButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-sm md:text-base font-medium cursor-default hover-theme-switch'
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

  const handleOpenLink = () => {
    if (mockup.livePreview) {
      window.open(mockup.livePreview, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ScrollReveal animation="fadeInUp" duration="0.4s">
      <section className="scroll-mt-24 max-w-2xl mx-auto space-y-4 md:space-y-6">
        {/* Header */}
        <header className="pt-5 md:pt-10 mb-3 md:mb-6">
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
                {mockup.name}
              </p>
              {mockup.type && (
                <p className="text-[10px] md:text-xs text-base-content/50">
                  {mockup.type}
                </p>
              )}
            </div>
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

        {/* Content - All displayed at once */}
        <div className="space-y-6 md:space-y-8">
          {/* Preview Image */}
          {mockup.previewImage && (
            <div className="space-y-2.5">
              <h3 className="text-xs md:text-sm text-base-content">
                Preview ;
              </h3>
              <div className="overflow-hidden border-2 border-solid border-gray-300 dark:border-white/20 p-1.5 md:p-3 rounded-lg bg-base-300/30">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-base-300">
                  <img
                    src={mockup.previewImage}
                    alt={mockup.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Live Preview Link - Button only */}
          {mockup.livePreview && (
            <div className="space-y-2">
              <button
                type="button"
                className={actionButtonClasses}
                onClick={handleOpenLink}
                aria-label="Open live preview"
              >
                <SquareArrowOutUpRight size={16} />
                <span className='text-[8px] md:text-[10px]'>View Live</span>
              </button>
            </div>
          )}

          {/* Details Sections */}
          <div className="space-y-4">
            {mockup.category && (
              <div className="space-y-1">
                <h3 className="text-xs md:text-sm text-base-content">
                  Category :
                </h3>
                <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                  {mockup.category}
                </p>
              </div>
            )}

            {mockup.format && (
              <div className="space-y-1">
                <h3 className="text-xs md:text-sm text-base-content ">
                  Format :
                </h3>
                <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                  {mockup.format}
                </p>
              </div>
            )}

            {mockup.styling && (
              <div className="space-y-1">
                <h3 className="text-xs md:text-sm text-base-content">
                  Styling :
                </h3>
                <p className="text-[10px] md:text-xs text-base-content leading-relaxed">
                  {mockup.styling}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default MockupPage;
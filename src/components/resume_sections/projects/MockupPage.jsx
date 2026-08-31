import { ArrowLeft } from 'lucide-react';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'text-sm md:text-base font-medium cursor-pointer hover-badge'
);

const actionButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
  'text-sm md:text-base font-medium cursor-default hover-badge'
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
    <section className="scroll-mt-24 max-w-3xl mx-auto space-y-4 md:space-y-6">
      {/* Header with Back Button, Title & Type */}
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
              {mockup.name}
            </h2>
            {mockup.type && (
              <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70 mt-0.5">
                {mockup.type}
              </p>
            )}
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-4" />

      {/* Content - All displayed at once */}
      <div className="space-y-6 md:space-y-8">
        {/* Preview Image */}
        {mockup.previewImage && (
          <div className="space-y-2.5">
            <h3 className="text-xs md:text-sm font-semibold text-base-content ">
              Preview
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
              <h3 className="text-xs md:text-sm font-semibold text-base-content ">
                Category
              </h3>
              <p className="text-[10px] md:text-xs text-base-content/85 leading-relaxed">
                {mockup.category}
              </p>
            </div>
          )}

          {mockup.format && (
            <div className="space-y-1">
              <h3 className="text-xs md:text-sm font-semibold text-base-content ">
                Format
              </h3>
              <p className="text-[10px] md:text-xs text-base-content/85 leading-relaxed">
                {mockup.format}
              </p>
            </div>
          )}

          {mockup.styling && (
            <div className="space-y-1">
              <h3 className="text-xs md:text-sm font-semibold text-base-content ">
                Styling
              </h3>
              <p className="text-[10px] md:text-xs text-base-content/85 leading-relaxed">
                {mockup.styling}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MockupPage;
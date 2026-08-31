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

export function MinigamePage({ minigame, onBack, onClose }) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onClose) {
      onClose();
    }
  };

  if (!minigame) return null;

  const handleOpenLink = () => {
    if (minigame.livePreview) {
      window.open(minigame.livePreview, '_blank', 'noopener,noreferrer');
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
              {minigame.name}
            </h2>
            {minigame.type && (
              <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70 mt-0.5">
                {minigame.type}
              </p>
            )}
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-4" />

      {/* Content - All displayed at once */}
      <div className="space-y-6 md:space-y-8">
        {/* Preview Image */}
        {minigame.previewImage && (
          <div className="space-y-2.5">
            <h3 className="text-xs md:text-sm font-semibold text-base-content ">
              Preview
            </h3>
            <div className="overflow-hidden border-3 border-solid border-gray-300 dark:border-white/20 p-1.5 md:p-3 rounded-lg bg-base-300/30">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-base-300">
                <img
                  src={minigame.previewImage}
                  alt={minigame.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        )}

        {/* Live Preview Link - Button only */}
        {minigame.livePreview && (
          <button
            type="button"
            className={actionButtonClasses}
            onClick={handleOpenLink}
            aria-label="Open live game"
          >
            <SquareArrowOutUpRight size={16} />
            <span className='text-[8px] md:text-[10px]'>Play Now</span>
          </button>
        )}

        {/* Description Section */}
        {minigame.description && (
          <div className="space-y-2">
            <h3 className="text-xs md:text-sm font-semibold text-base-content ">
              About
            </h3>
            <p className="text-[10px] md:text-xs text-base-content/85 leading-relaxed whitespace-pre-line">
              {minigame.description}
            </p>
          </div>
        )}

        {/* Features Section */}
        {Array.isArray(minigame.features) && minigame.features.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-xs md:text-sm font-semibold text-base-content ">
              Features
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {minigame.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-[10px] md:text-xs text-base-content/85 leading-relaxed flex items-start gap-2 whitespace-pre-line"
                >
                  <span className="inline-block mt-0.5 text-base-content/60">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default MinigamePage;
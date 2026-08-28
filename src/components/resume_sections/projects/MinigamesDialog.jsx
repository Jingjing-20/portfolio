import { useState } from 'react';
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right';
import { cn } from '@/lib/utils';

const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-theme border border-gray-300 dark:border-white/20',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  'text-sm font-medium cursor-pointer hover-theme-switch'
);

const radioButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'text-sm font-medium cursor-pointer hover-theme-switch',
  'disabled:opacity-50 disabled:pointer-events-none'
);

const radioButtonActiveClasses = cn(
  'border-gray-800 dark:border-white/70'
);

export function MinigamesDialog({ minigame, open, onClose }) {
  const [activeView, setActiveView] = useState('preview');

  if (!minigame) return null;

  const hasPreviewImage = Boolean(minigame.previewImage);

  const handleOpenLink = () => {
    if (minigame.livePreview) {
      window.open(minigame.livePreview, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-md">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">
            {minigame.name}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">
            {minigame.type}
          </DialogDescription>
        </div>

        <div className="flex gap-2 items-center">
          <label
            className={cn(
              radioButtonClasses,
              activeView === 'preview' && radioButtonActiveClasses,
              !hasPreviewImage && 'opacity-50 pointer-events-none'
            )}
          >
            <input
              type="radio"
              name="minigame-view"
              value="preview"
              checked={activeView === 'preview'}
              onChange={() => setActiveView('preview')}
              className="sr-only"
              disabled={!hasPreviewImage}
            />
            <span className="text-[8px] md:text-[10px] font-medium text-base-content">Preview</span>
          </label>
          <label
            className={cn(
              radioButtonClasses,
              activeView === 'description' && radioButtonActiveClasses
            )}
          >
            <input
              type="radio"
              name="minigame-view"
              value="description"
              checked={activeView === 'description'}
              onChange={() => setActiveView('description')}
              className="sr-only"
            />
            <span className="text-[8px] md:text-[10px] font-medium text-base-content">Description</span>
          </label>
          <label
            className={cn(
              radioButtonClasses,
              activeView === 'features' && radioButtonActiveClasses
            )}
          >
            <input
              type="radio"
              name="minigame-view"
              value="features"
              checked={activeView === 'features'}
              onChange={() => setActiveView('features')}
              className="sr-only"
            />
            <span className="text-[8px] md:text-[10px] font-medium text-base-content">Features</span>
          </label>
        </div>

        <div className="space-y-4">
          {activeView === 'preview' && hasPreviewImage && (
            <div className="relative overflow-hidden rounded-md border border-gray-400 bg-base-300/30">
              <img
                src={minigame.previewImage}
                alt={minigame.name}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {activeView === 'preview' && !hasPreviewImage && (
            <div className="border border-gray-300 dark:border-white/20 rounded-md p-4 text-center">
              <p className="text-[10px] md:text-xs text-base-content/70">No preview available</p>
            </div>
          )}

          {activeView === 'description' && (
            <div className="max-h-[300px] overflow-y-auto border border-gray-300 dark:border-white/20 rounded-md">
              <div className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-3 leading-relaxed text-base-content whitespace-pre-line">
                <div>
                  <p className="font-semibold mb-1.5">Category:</p>
                  <p>{minigame.category}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1.5">About:</p>
                  <p>{minigame.description}</p>
                </div>
              </div>
            </div>
          )}

          {activeView === 'features' && (
            <div className="max-h-[300px] overflow-y-auto border border-gray-300 dark:border-white/20 rounded-md">
              <div className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-2.5 leading-relaxed text-base-content">
                <p className="font-semibold mb-1.5">Features:</p>
                <ul className="space-y-2">
                  {minigame.features && minigame.features.map((feature, index) => (
                    <li key={index} className="flex gap-2 whitespace-pre-line">
                      <span className="text-base-content/60 mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {minigame.livePreview && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={minigame.livePreview}
              aria-label="Live preview URL"
              className="flex-1 rounded-md border border-gray-300 dark:border-white/20 bg-theme p-2 text-[10px] md:text-xs text-base-content outline-none dark:border-white/40"
            />
            <button
              type="button"
              className={buttonClasses}
              onClick={handleOpenLink}
              aria-label="Open live preview"
            >
              <SquareArrowOutUpRight size={16} />
            </button>
          </div>
        )}
      </DialogPanel>
    </Dialog>
  );
}

export default MinigamesDialog;

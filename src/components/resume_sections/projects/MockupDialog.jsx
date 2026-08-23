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
  'text-sm font-medium cursor-pointer hover-badge'
);

const radioButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'text-sm font-medium cursor-pointer hover-badge',
  'disabled:opacity-50 disabled:pointer-events-none'
);

const radioButtonActiveClasses = cn(
  'border-gray-800 dark:border-white/70'
);

function WebIcon({ size = 56 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <title>web-line</title>
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8H5v6h14zm0-6H5v4h14zM7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
        />
      </g>
    </svg>
  );
}

export function MockupDialog({ mockup, open, onClose }) {
  const [activeView, setActiveView] = useState('preview');

  if (!mockup) return null;

  const hasPreviewImage = Boolean(mockup.previewImage);

  const handleOpenLink = () => {
    if (mockup.livePreview) {
      window.open(mockup.livePreview, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-md">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">
            {mockup.name}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">
            {mockup.type}
          </DialogDescription>
        </div>

        {/* Radio Button Toggle */}
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
              name="mockup-view"
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
              name="mockup-view"
              value="description"
              checked={activeView === 'description'}
              onChange={() => setActiveView('description')}
              className="sr-only"
            />
            <span className="text-[8px] md:text-[10px] font-medium text-base-content">Description</span>
          </label>
        </div>

        <div className="space-y-4">
          {/* Preview Section */}
          {activeView === 'preview' && hasPreviewImage && (
            <div className="relative overflow-hidden rounded-md border border-gray-400 bg-base-300/30">
              <img
                src={mockup.previewImage}
                alt={mockup.name}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* No Preview Message */}
          {activeView === 'preview' && !hasPreviewImage && (
            <div className="border border-gray-300 dark:border-white/20 rounded-md p-4 text-center">
              <p className="text-[10px] md:text-xs text-base-content/70">No preview available</p>
            </div>
          )}

          {/* Description Section */}
          {activeView === 'description' && (
            <div className="max-h-[300px] overflow-y-auto border border-gray-300 dark:border-white/20 rounded-md">
              <div className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-3 leading-relaxed text-base-content">
                <div>
                  <p className="font-semibold mb-1.5">Category:</p>
                  <p>{mockup.category}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1.5">Format:</p>
                  <p>{mockup.format}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1.5">Styling:</p>
                  <p>{mockup.styling}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Live Preview Link */}
        {mockup.livePreview && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={mockup.livePreview}
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

export default MockupDialog;

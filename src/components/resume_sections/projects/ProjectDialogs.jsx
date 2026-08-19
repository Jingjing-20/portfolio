import { useState } from 'react';
import { Dialog, DialogDescription, DialogPanel, DialogTitle } from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

const buttonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  'text-sm font-medium cursor-pointer transform'
);

const radioButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'text-sm font-medium cursor-pointer transform hover:-translate-y-1 hover:rotate-3',
  'disabled:opacity-50 disabled:pointer-events-none'
);

const radioButtonActiveClasses = cn(
  'border-gray-800 dark:border-white/70'
);

function ChevronLeftIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ImageCarousel({ images, startIndex = 0 }) {
  const [index, setIndex] = useState(startIndex);
  const total = images.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative overflow-hidden rounded-md border border-gray-400 bg-base-300/30 h-[300px] flex flex-col flex-shrink-0">
      <div className="flex-1 flex items-center justify-center w-full p-2 md:p-4 min-h-0">
        <img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="h-full w-full object-contain"
        />
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className={cn(
              buttonClasses,
              'absolute left-3 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-background/80 hover:bg-accent hover:text-accent-foreground border-border')}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className={cn(
              buttonClasses,
              'absolute right-3 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-background/60'
            )}
          >
            <ChevronRightIcon />
          </button>
        </>
      )}

      <div className="border-t border-gray-400 p-1.5 md:p-2 text-[10px] md:text-xs text-base-content flex items-center justify-between flex-shrink-0">
        <span className="truncate">{images[index].alt}</span>
        <span className="tabular-nums">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}

// Merged Dialog for both Screenshots and Details
export function ProjectDialog({ project, open, onClose }) {
  const [activeView, setActiveView] = useState('screenshots');

  if (!project) return null;

  const hasScreenshots = project.images && project.images.length > 0;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-md">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Project Details</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">{project.title}</DialogDescription>
        </div>

        {/* Radio Button Toggle */}
        <div className="flex gap-2 items-center">
          <label 
            className={cn(
              radioButtonClasses,
              activeView === 'screenshots' && radioButtonActiveClasses,
              !hasScreenshots && 'opacity-50 pointer-events-none'
            )}
          >
            <input
              type="radio"
              name="view"
              value="screenshots"
              checked={activeView === 'screenshots'}
              onChange={() => setActiveView('screenshots')}
              className="sr-only"
              disabled={!hasScreenshots}
            />
            <span className="text-[8px] md:text-[10px] font-medium text-base-content">Screenshots</span>
          </label>
          <label 
            className={cn(
              radioButtonClasses,
              activeView === 'description' && radioButtonActiveClasses
            )}
          >
            <input
              type="radio"
              name="view"
              value="description"
              checked={activeView === 'description'}
              onChange={() => setActiveView('description')}
              className="sr-only"
            />
            <span className="text-[8px] md:text-[10px] font-medium text-base-content">Description</span>
          </label>
        </div>

        <div className="space-y-4">
          {/* Screenshots Section */}
          {activeView === 'screenshots' && hasScreenshots && (
            <div>
              <ImageCarousel images={project.images} />
            </div>
          )}

          {/* No Screenshots Message */}
          {activeView === 'screenshots' && !hasScreenshots && (
            <div className="border border-gray-300 dark:border-white/20 rounded-md p-4 text-center">
              <p className="text-[10px] md:text-xs text-base-content/70">No screenshots available</p>
            </div>
          )}

          {/* Details Section */}
          {activeView === 'description' && (
            <div className="max-h-[300px] overflow-y-auto border border-gray-300 dark:border-white/20 rounded-md">
              <div className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-3 leading-relaxed text-base-content">
                <div>
                  <p className="font-semibold mb-1.5">Description:</p>
                  <p>{project.description}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1.5">Key Features:</p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {(project.details ?? []).map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="inline-block">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogPanel>
    </Dialog>
  );
}

// Keep old exports for backward compatibility if needed elsewhere
export function ImagesDialog({ project, open, onClose }) {
  return <ProjectDialog project={project} open={open} onClose={onClose} />;
}

export function DetailsDialog({ project, open, onClose }) {
  return <ProjectDialog project={project} open={open} onClose={onClose} />;
}

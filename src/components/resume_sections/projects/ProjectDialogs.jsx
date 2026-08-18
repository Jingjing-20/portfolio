import { useState } from 'react';
import { Dialog, DialogDescription, DialogPanel, DialogTitle } from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

const outlineButtonClasses = cn(
  'inline-flex items-center justify-center rounded-md size-9',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0',
  'cursor-pointer'
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
              outlineButtonClasses,
              'absolute left-3 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-background/80 hover:bg-accent hover:text-accent-foreground border-border')}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className={cn(
              outlineButtonClasses,
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
  if (!project) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-md">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Project Details</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">{project.title}</DialogDescription>
        </div>

        <div className="space-y-4">
          {/* Screenshots Section */}
          {project.images && project.images.length > 0 && (
            <div>
              <p className="text-xs md:text-sm font-semibold mb-2 text-base-content">Screenshots:</p>
              <ImageCarousel images={project.images} />
            </div>
          )}

          {/* Details Section */}
          <div className="max-h-[300px] overflow-y-auto border border-gray-600 dark:border-gray-400 rounded-md">
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

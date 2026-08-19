import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { cn } from '@/lib/utils';
import { ProjectDialog } from '@/components/resume_sections/projects/ProjectDialogs';
import { MockupDialog } from '@/components/resume_sections/projects/MockupDialog';
import { PROJECT_CATEGORIES } from '@/components/resume_sections/projects/projects_data';

const outlineButtonWithLabelClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  'text-sm font-medium cursor-pointer transform hover:rotate-3'
);

const iconButtonClasses = cn(
  'absolute top-1 right-1 p-1 md:p-1.5 rounded-full',
  'bg-white/80 dark:bg-black/80 backdrop-blur-sm',
  'hover:bg-white dark:hover:bg-black transition-all duration-200',
  'border border-gray-300 dark:border-white/30',
  'hover:scale-110 hover:shadow-lg',
  'shadow-md',
  'z-10'
);

function WebIcon({ size = 32 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path fill="currentColor" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8H5v6h14zm0-6H5v4h14zM7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
      </g>
    </svg>
  );
}

function OpenIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 md:w-4 md:h-4">
      <title>Open</title>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mockupProject, setMockupProject] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1,
    align: 'start',
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="projects" className="scroll-mt-24">
      <header className="mb-3 md:mb-6">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Projects
          </h2>

          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Selected work and personal builds
          </p>
        </div>
      </header>

      <div className="border-l md:border-l-2 pl-1.5 md:pl-3 border-gray-300 dark:border-white/20  space-y-6 md:space-y-8">
        {PROJECT_CATEGORIES.map(({ category, description, items }) => (
          <article key={category}>
            <div className="space-y-1 mb-3">
              <h3 className="text-xs md:text-sm leading-relaxed font-semibold text-base-content">
                {category}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-6 md:space-y-7">
              {category === 'Mockups' ? (
                // Carousel Mockup Layout
                <div className="relative">
                  <div className="py-3 overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y touch-pinch-zoom gap-3">
                      {items.map((mockup) => (
                        <div
                          key={mockup.id}
                          className={cn(
                            'group relative flex flex-col p-0.5 md:p-1 rounded-lg shadow-xl hover:shadow-2xl',
                            'bg-textured border-4 border-double border-gray-300 dark:border-white/20',
                            'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300',
                            'transform hover:-translate-y-1 hover:rotate-3',
                            'w-30 md:w-35 flex-shrink-0'
                          )}
                          role="button"
                          tabIndex={0}
                          onClick={() => setMockupProject(mockup)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              setMockupProject(mockup);
                            }
                          }}
                        >
                          {/* Open Icon Button - Top Right */}
                          <button
                            type="button"
                            className={iconButtonClasses}
                            onClick={(event) => {
                              event.stopPropagation();
                              setMockupProject(mockup);
                            }}
                            aria-label={`Open ${mockup.name} mockup`}
                          >
                            <OpenIcon />
                          </button>

                          {/* Polaroid Photo Frame - 16:9 aspect ratio */}
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-black/10 dark:border-white/10 shadow-inner">
                            {mockup.previewImage ? (
                              <img
                                src={mockup.previewImage}
                                alt={mockup.name}
                                loading="lazy"
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-base-content/40">
                                <WebIcon size={32} />
                              </div>
                            )}
                          </div>

                          {/* Polaroid Bottom Caption (Under Photo: Name only) */}
                          <div className="flex flex-col justify-between flex-1 pt-2">
                            <div>
                              <h3 className="text-[10px] md:text-xs font-semibold tracking-tight leading-snug text-base-content line-clamp-1">
                                {mockup.name}
                              </h3>
                              <p className="text-[8px] md:text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                                {mockup.category}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Carousel Controls - Left and Right */}
                  <button
                    type="button"
                    className={cn(
                      outlineButtonWithLabelClasses,
                      'absolute left-2 top-1/2 -translate-y-1/2 z-10'
                    )}
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    aria-label="Previous mockups"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    type="button"
                    className={cn(
                      outlineButtonWithLabelClasses,
                      'absolute right-2 top-1/2 -translate-y-1/2 z-10'
                    )}
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    aria-label="Next mockups"
                  >
                    <ChevronRight />
                  </button>
                </div>
              ) : (
                // Deployed project layout with cover image and icon button
                <ul className="space-y-6 md:space-y-7">
                  {items.map((project) => (
                    <li key={project.id} className="flex items-start gap-3">
                      <span className="text-base-content flex-shrink-0 self-center">
                        <FolderFiles size={14} />
                      </span>
                      <div className="flex-1 space-y-3">
                        <div className="flex gap-4 items-start">
                          {/* Cover Image - Double Border with Icon Button and Hover Rotate */}
                          {project.coverImage && (
                            <div className="flex-shrink-0 w-30 md:w-35 relative group">
                              <div 
                                className="relative p-1 md:p-1.5 rounded-lg shadow-xl bg-textured border-4 border-double border-gray-300 dark:border-white/20 hover:border-gray-800 dark:hover:border-white/70 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:rotate-3"
                                onClick={() => setSelectedProject(project)}
                              >
                                {/* Open Icon Button - Top Right */}
                                <button
                                  type="button"
                                  className={iconButtonClasses}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    setSelectedProject(project);
                                  }}
                                  aria-label={`Open ${project.title} details`}
                                >
                                  <OpenIcon />
                                </button>

                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-black/10 dark:border-white/10 shadow-inner">
                                  <img
                                    src={project.coverImage}
                                    alt={`${project.title} cover`}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Text Content */}
                          <div className="flex-1 space-y-1">
                            <h4 className="text-[10px] md:text-xs leading-relaxed font-base font-semibold text-base-content">
                              {project.title}
                            </h4>
                            {project.organization && (
                              <p className="text-[8px] md:text-[10px] text-muted-foreground">
                                {project.organization}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <ProjectDialog
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
      <MockupDialog
        mockup={mockupProject}
        open={mockupProject !== null}
        onClose={() => setMockupProject(null)}
      />
    </section>
  );
}

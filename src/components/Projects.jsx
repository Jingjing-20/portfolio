import { useState } from 'react';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Dialog, DialogDescription, DialogPanel, DialogTitle, } from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';
import { chmsuagrmImages } from '@/components/projects/chmsuagrm_ss';
import { pgsoulpmmsImages } from '@/components/projects/pgsoulpmms_ss';

const PROJECT_CATEGORIES = [
  {
    category: 'Deployed',
    description: 'Production systems actively serving end users in real-world environments.',
    items: [
      {
        id: 'chmsuagrm',
        title: 'Integrated Online Platform for Academic Grade and Report Management',
        organization: 'Carlos Hilado Memorial State University - Alijis',
        description:
          'A centralized web-based academic information system designed to automate grade computation, QR-based attendance tracking, academic record management, and report generation through role-based access control for administrators, faculty, and students.',
        details: [
          'Created an academic management system for Carlos Hilado Memorial State University.',
          'Built separate dashboards for administrators, faculty, and students.',
          'Managed student, faculty, enrollment, program, and section records.',
          'Reduced manual grading by adding automatic grade computation.',
          'Allowed students to check grades and enrollment status online.',
          'Used QR codes to make attendance recording faster and easier.',
          'Sent email notifications for account verification and password recovery.',
          'Generated PDF and Excel reports for school records.',
        ],
        images: chmsuagrmImages,
      },
      {
        id: 'pgsoulpmms',
        title: 'Unified Lot and Property Management and Monitoring',
        organization:
          'Provincial Government of Negros Occidental : General Services Office - Property Management Division',
        description:
          'A provincial-scale property management platform designed to monitor government-owned housing lots and assets, featuring interactive lot mapping, beneficiary and payment tracking, document management, real-time analytics, bulk data processing, and official report generation.',
        details: [
          'Developed a digital platform for managing government housing lots and property assets.',
          'Built separate modules for lot management and property management.',
          'Tracked beneficiaries, lot assignments, and payment records.',
          'Added document management and duplicate transaction checking.',
          'Used Leaflet.js to display lot boundaries and property locations.',
          'Created dashboards with charts and real-time statistics.',
          'Supported bulk operations through Excel import and export features.',
          'Generated print-ready reports for official records.',
        ],
        images: pgsoulpmmsImages,
      },
    ],
  },
];

const outlineButtonWithLabelClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0',
  'text-sm font-medium cursor-pointer'
);

const outlineButtonClasses = cn(
  'inline-flex items-center justify-center rounded-md size-9',
  'bg-textured border border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0',
  'cursor-pointer'
);

function ImageIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <title>image</title>
      <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z" />
    </svg>
  );
}

function DetailsIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <title>details</title>
      <path fill="currentColor" fillRule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h6V5H4zm7 0h1V5h-1zm-1 2.5H4v-1h6zm1 0h1v-1h-1zM10 11H4v-1h6zm1 0h1v-1h-1z" clipRule="evenodd" />
    </svg>
  );
}

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

function ImagesDialog({ project, open, onClose }) {
  if (!project) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Screenshots</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">{project.title}</DialogDescription>
        </div>
        <div className="flex-1 min-h-0">
          <ImageCarousel images={project.images ?? []} />
        </div>
      </DialogPanel>
    </Dialog>
  );
}

function DetailsDialog({ project, open, onClose }) {
  if (!project) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Details</DialogTitle>
          <hr></hr>
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">{project.title}</DialogDescription>
        </div>

        <div className="max-h-[500px] overflow-y-auto border border-gray-600 dark:border-gray-400 rounded-md">
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
      </DialogPanel>
    </Dialog>
  );
}

export default function Projects() {
  const [imagesProject, setImagesProject] = useState(null);
  const [detailsProject, setDetailsProject] = useState(null);

  return (
    <section id="projects" className="scroll-mt-24">
      <header className="mb-3 md:mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Projects
          </h2>

          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Selected work and personal builds
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background dark:bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <FolderFiles size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>

      <div className="space-y-6 md:space-y-8">
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
              {items.map((project) => (
                <div key={project.id} className="">
                  <div className="space-y-1">
                    <h4 className="text-xs md:text-sm leading-relaxed font-base font-semibold text-base-content">
                      {project.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-muted-foreground">
                      {project.organization}
                    </p>
                    <ul className="text-[10px] md:text-xs text-muted-foreground space-y-3 leading-relaxed">
                      <li className="flex gap-2">
                        <span className="inline-block">•</span>
                        <span>{project.description}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        className={outlineButtonWithLabelClasses}
                        onClick={() => setImagesProject(project)}
                        aria-label="Screenshots"
                      >
                        <ImageIcon size={16} />
                        <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                          Screenshots
                        </span>
                      </button>
                      <button
                        type="button"
                        className={outlineButtonWithLabelClasses}
                        onClick={() => setDetailsProject(project)}
                        aria-label="Details"
                      >
                        <DetailsIcon size={16} />
                        <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                          Details
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <ImagesDialog
        project={imagesProject}
        open={imagesProject !== null}
        onClose={() => setImagesProject(null)}
      />
      <DetailsDialog
        project={detailsProject}
        open={detailsProject !== null}
        onClose={() => setDetailsProject(null)}
      />
    </section>
  );
}

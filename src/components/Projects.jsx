import { useState } from 'react';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { cn } from '@/lib/utils';
import { chmsuagrmImages } from '@/components/resume_sections/projects/chmsuagrm_ss';
import { pgsoulpmmsImages } from '@/components/resume_sections/projects/pgsoulpmms_ss';
import { ImagesDialog, DetailsDialog } from '@/components/resume_sections/projects/ProjectDialogs';

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

export default function Projects() {
  const [imagesProject, setImagesProject] = useState(null);
  const [detailsProject, setDetailsProject] = useState(null);

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

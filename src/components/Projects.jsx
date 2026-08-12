import { useState } from 'react';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { cn } from '@/lib/utils';
import { chmsuagrmImages } from '@/components/resume_sections/projects/chmsuagrm_ss';
import { pgsoulpmmsImages } from '@/components/resume_sections/projects/pgsoulpmms_ss';
import { ImagesDialog, DetailsDialog } from '@/components/resume_sections/projects/ProjectDialogs';
import { MockupDialog } from '@/components/resume_sections/projects/MockupDialog';
import { mockupsData } from '@/components/resume_sections/projects/mockups_data';

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
  {
    category: 'Personal',
    description: 'Experimental builds and hobby projects exploring new technologies and concepts.',
    items: [
      // Add your personal projects here
    ],
  },
  {
    category: 'Mockups',
    description: 'Design concepts and interface prototypes available for development or licensing.',
    items: mockupsData,
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

const mockupCardClasses = cn(
  'relative flex flex-col h-25 md:h-35 p-2 md:p-3 rounded-xl shadow-xl',
  'bg-textured border-5 border-double border-gray-300 dark:border-white/20',
  'hover:border-gray-800 dark:hover:border-white/70 transition-all duration-200',
  'cursor-pointer'
);

function WebIcon({ size = 16 }) {
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
  const [mockupProject, setMockupProject] = useState(null);

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
              {category === 'Mockups' ? (
                // Mockup grid layout (similar to certificates)
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2">
                  {items.map((mockup) => (
                    <div
                      key={mockup.id}
                      className={mockupCardClasses}
                      onClick={() => setMockupProject(mockup)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setMockupProject(mockup);
                        }
                      }}
                    >
                      {/* Center: Mockup Icon and Name */}
                      <div className="flex flex-col items-center justify-center flex-1">
                        <div className="text-base-content/70 mb-2">
                          <WebIcon size={32} />
                        </div>
                        <h3 className="text-[10px] md:text-xs font-semibold tracking-tight leading-snug text-base-content text-center line-clamp-2 px-1">
                          {mockup.name}
                        </h3>
                      </div>

                      {/* Bottom: Category */}
                      <div className="flex items-center justify-center mt-auto pt-2">
                        <p className="text-[6px] md:text-[8px] text-muted-foreground text-center">
                          &lt; {mockup.category} /&gt;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Deployed and Personal project layout
                items.map((project) => (
                  <div key={project.id} className="">
                    <div className="space-y-1">
                      <h4 className="text-xs md:text-sm leading-relaxed font-base font-semibold text-base-content">
                        {project.title}
                      </h4>
                      {project.organization && (
                        <p className="text-[10px] md:text-xs text-muted-foreground">
                          {project.organization}
                        </p>
                      )}
                    </div>

                    <div className="mt-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.images && (
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
                        )}
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
                ))
              )}
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
      <MockupDialog
        mockup={mockupProject}
        open={mockupProject !== null}
        onClose={() => setMockupProject(null)}
      />
    </section>
  );
}

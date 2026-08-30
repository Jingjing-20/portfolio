import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectDialog } from '@/components/resume_sections/projects/ProjectDialogs';
import { MockupDialog } from '@/components/resume_sections/projects/MockupDialog';
import { MinigamesDialog } from '@/components/resume_sections/projects/MinigamesDialog';
import { PROJECT_CATEGORIES } from '@/components/resume_sections/projects/projects_data';

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mockupProject, setMockupProject] = useState(null);
  const [minigameProject, setMinigameProject] = useState(null);

  const handleBackToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="scroll-mt-24 max-w-3xl mx-auto">
      <header className="pt-5 md:pt-10 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Back button */}
          <button
            type="button"
            onClick={handleBackToHome}
            className={cn(
              'shadow-xl inline-flex items-center justify-center rounded-md p-2',
              'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'text-sm md:text-base font-medium cursor-pointer hover-badge'
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <div className="flex-1">
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-4xl lg:text-5xl">
              Projects
            </h2>

            <p className="text-[10px] md:text-xs lg:text-sm leading-relaxed text-base-content/70">
              Selected work and personal builds
            </p>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      <div className="space-y-6 md:space-y-8">
        {PROJECT_CATEGORIES.map(({ category, description, items }) => (
          <article key={category}>
            <div className="space-y-1 mb-3">
              <h3 className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold text-base-content">
                {category}
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-6 md:space-y-7">
              {category === 'Mockups' ? (
                // Mockups Grid Layout
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {items.map((mockup) => (
                    <div
                      key={mockup.id}
                      className={cn(
                        'group relative flex flex-col p-0.5 md:p-1 rounded-lg shadow-xl',
                        'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                        'hover-card cursor-pointer'
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
                          <h3 className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-tight leading-snug text-base-content line-clamp-1">
                            {mockup.name}
                          </h3>
                          <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground line-clamp-1 mt-0.5">
                            {mockup.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : category === 'Browser Games' ? (
                // Browser Games Grid Layout
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {items.map((minigame) => (
                    <div
                      key={minigame.id}
                      className={cn(
                        'group relative flex flex-col p-0.5 md:p-1 rounded-lg shadow-xl',
                        'bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                        'hover-card cursor-pointer'
                      )}
                      role="button"
                      tabIndex={0}
                      onClick={() => setMinigameProject(minigame)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setMinigameProject(minigame);
                        }
                      }}
                    >
                      {/* Polaroid Photo Frame - 16:9 aspect ratio */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-black/10 dark:border-white/10 shadow-inner">
                        {minigame.previewImage ? (
                          <img
                            src={minigame.previewImage}
                            alt={minigame.name}
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
                          <h3 className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-tight leading-snug text-base-content line-clamp-1">
                            {minigame.name}
                          </h3>
                          <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground line-clamp-1 mt-0.5">
                            {minigame.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Deployed project layout with cover image
                <ul className="space-y-6 md:space-y-7">
                  {items.map((project) => (
                    <li key={project.id} className="flex items-start">
                      <div className="flex-1 space-y-3">
                        <div className="flex gap-4 items-center">
                          {/* Cover Image - Double Border */}
                          {project.coverImage && (
                            <div className="flex-shrink-0 w-30 sm:w-40 md:w-50 relative group">
                              <div
                                className="relative p-0.5 md:p-1 rounded-lg shadow-xl bg-textured border-3 border-solid border-gray-300 dark:border-white/20 hover:border-double cursor-pointer hover-card"
                                onClick={() => setSelectedProject(project)}
                              >
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
                          <div className="items-center justify-center flex-1 space-y-1">
                            <h4 className="text-[10px] md:text-xs lg:text-sm leading-relaxed font-base font-semibold text-base-content">
                              {project.title}
                            </h4>
                            {project.organization && (
                              <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">
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
      <MinigamesDialog
        minigame={minigameProject}
        open={minigameProject !== null}
        onClose={() => setMinigameProject(null)}
      />
    </section>
  );
}
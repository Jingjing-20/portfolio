import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ProjectPage } from '@/components/resume_sections/projects/ProjectPage';
import { MockupPage } from '@/components/resume_sections/projects/MockupPage';
import { PersonalPage } from '@/components/resume_sections/projects/PersonalPage';
import { PROJECT_CATEGORIES } from '@/components/resume_sections/projects/projects_data';

function getActiveItemFromHash() {
  if (typeof window === 'undefined') return { project: null, mockup: null, personal: null };
  const hash = window.location.hash.replace(/^#/, '');
  const match = hash.match(/^projects\/([^/?#]+)/i) || hash.match(/^project-([^/?#]+)/i);
  const itemId = match ? match[1] : null;
  if (!itemId) return { project: null, mockup: null, personal: null };

  for (const cat of PROJECT_CATEGORIES) {
    const found = cat.items?.find((p) => p.id === itemId);
    if (found) {
      if (cat.category === 'Mockups') return { project: null, mockup: found, personal: null };
      if (cat.category === 'Personal') return { project: null, mockup: null, personal: found };
      return { project: found, mockup: null, personal: null };
    }
  }
  return { project: null, mockup: null, personal: null };
}

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
  const initialItems = getActiveItemFromHash();
  const [selectedProject, setSelectedProject] = useState(initialItems.project);
  const [mockupProject, setMockupProject] = useState(initialItems.mockup);
  const [personalProject, setPersonalProject] = useState(initialItems.personal);

  useEffect(() => {
    const handleHash = () => {
      const active = getActiveItemFromHash();
      setSelectedProject(active.project);
      setMockupProject(active.mockup);
      setPersonalProject(active.personal);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setMockupProject(null);
    setPersonalProject(null);
    window.location.hash = `projects/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMockup = (mockup) => {
    setMockupProject(mockup);
    setSelectedProject(null);
    setPersonalProject(null);
    window.location.hash = `projects/${mockup.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPersonal = (personal) => {
    setPersonalProject(personal);
    setSelectedProject(null);
    setMockupProject(null);
    window.location.hash = `projects/${personal.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setMockupProject(null);
    setPersonalProject(null);
    window.location.hash = 'projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedProject) {
    return (
      <ProjectPage
        project={selectedProject}
        onBack={handleBackToProjects}
      />
    );
  }

  if (mockupProject) {
    return (
      <MockupPage
        mockup={mockupProject}
        onBack={handleBackToProjects}
      />
    );
  }

  if (personalProject) {
    return (
      <PersonalPage
        personal={personalProject}
        onBack={handleBackToProjects}
      />
    );
  }

  const PolaroidCard = ({ item, onClick, onKeyDown, imgSrc, name, subtitle }) => (
    <div
      key={item.id}
      className={cn(
        'group relative flex flex-col p-0.5 md:p-1 rounded-lg shadow-xl',
        'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
        'hover-card cursor-pointer'
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-black/10 dark:border-white/10 shadow-inner">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-base-content/40">
            <WebIcon size={32} />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between flex-1 pt-2">
        <div>
          <h3 className="text-[10px] md:text-xs font-bold text-base-content truncate">
            {name}
          </h3>
          <p className="text-[8px] md:text-[10px] mt-0.5 truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3 md:mb-6">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            Projects
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Selected work and personal builds
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 md:mt-6" />

      <div className="space-y-6 md:space-y-8">
        {PROJECT_CATEGORIES.map(({ category, description, items }) => (
          <article key={category}>
            <div className="space-y-1 mb-3">
              <h3 className="text-[10px] md:text-xs text-base-content">
                {category}
              </h3>
              <p className="text-[8px] md:text-[10px] text-base-content/50 ">
                {description}
              </p>
            </div>

            <div className="space-y-6 md:space-y-7">
              {category === 'Mockups' ? (
                // Mockups Grid Layout (3 cols mobile, 4 cols desktop)
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {items.map((mockup) => (
                    <PolaroidCard
                      key={mockup.id}
                      item={mockup}
                      imgSrc={mockup.previewImage}
                      name={mockup.name}
                      subtitle={mockup.category}
                      onClick={() => handleSelectMockup(mockup)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleSelectMockup(mockup);
                        }
                      }}
                    />
                  ))}
                </div>
              ) : category === 'Personal' ? (
                // Personal Grid Layout - always 3 columns
                <div className="grid grid-cols-3 gap-3">
                  {items.map((personal) => (
                    <PolaroidCard
                      key={personal.id}
                      item={personal}
                      imgSrc={personal.previewImage}
                      name={personal.name}
                      subtitle={personal.category}
                      onClick={() => handleSelectPersonal(personal)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleSelectPersonal(personal);
                        }
                      }}
                    />
                  ))}
                </div>
              ) : (
                // Deployed Grid Layout - always 3 columns, polaroid format
                <div className="grid grid-cols-3 gap-3">
                  {items.map((project) => (
                    <PolaroidCard
                      key={project.id}
                      item={project}
                      imgSrc={project.previewImage || project.coverImage}
                      name={project.name || project.title}
                      subtitle={project.category || project.organization}
                      onClick={() => handleSelectProject(project)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleSelectProject(project);
                        }
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

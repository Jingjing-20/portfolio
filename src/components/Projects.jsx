import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { DeployedPage } from '@/components/resume_sections/projects/DeployedPage';
import { MockupPage } from '@/components/resume_sections/projects/MockupPage';
import { PersonalPage } from '@/components/resume_sections/projects/PersonalPage';
import { PROJECT_CATEGORIES } from '@/components/resume_sections/projects/projects_data';

function ArrowTopRightIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 7h10m0 0v10m0-10L7 17" />
    </svg>
  );
}

function ListIcon({ className = '', size = 14 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function GridIcon({ className = '', size = 14 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

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
  const [viewMode, setViewMode] = useState('list');

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
      <DeployedPage
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

  const handleItemClick = (category, item) => {
    if (category === 'Mockups') handleSelectMockup(item);
    else if (category === 'Personal') handleSelectPersonal(item);
    else handleSelectProject(item);
  };

  const ProjectCard = ({ onClick, title, type, coverImage }) => (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex gap-2 md:gap-3 items-center">
        {/* Cover Image with Card Styling */}
        {coverImage && (
          <div className="flex-shrink-0 w-30 md:w-40">
            <div className={cn(
              'relative p-0.5 md:p-1 rounded-sm shadow-xl',
              'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
              'hover-card'
            )}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-dashed border-base-content/20 dark:border-white/20 shadow-inner">
                <img
                  src={coverImage}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content - description shown in list */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0 space-y-0.5">
              <h3 className="text-[10px] md:text-xs font-bold text-base-content group-hover:underline underline-offset-2">
                {title}
              </h3>
              {type && (
                <p className="text-[8px] md:text-[10px] text-base-content/60 truncate">
                  {type}
                </p>
              )}
            </div>
            <ArrowTopRightIcon size={14} className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );

  const PolaroidCard = ({ onClick, onKeyDown, imgSrc, name }) => (
    <div
      className={cn(
        'group relative flex flex-col p-1 md:p-1.5 rounded-md shadow-xl cursor-pointer',
        'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
        'hover-card'
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {/* Image inside dashed border with p-0.5 so dashes are visible */}
      <div className="p-0.5 border border-dashed border-base-content/20 dark:border-white/20 rounded-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 shadow-inner">
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
      </div>
      {/* Text inside the border (polaroid style) - no description in grid */}
      <div className="flex items-center justify-between gap-1 pt-1.5 min-w-0">
        <h3 className="text-[10px] md:text-xs font-bold text-base-content truncate group-hover:underline underline-offset-2">
          {name}
        </h3>
        <ArrowTopRightIcon size={12} className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors" />
      </div>
    </div>
  );

  return (
    <section id="projects" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header with Title and View Toggle */}
      <header className="pt-20 md:pt-10 mb-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
              Projects
            </p>
            <p className="text-[10px] md:text-xs text-base-content/50">
              Web applications and personal projects
            </p>
          </div>

          {/* List / Grid Toggle */}
          <div className="inline-flex items-center gap-1 p-0.5 rounded-md border border-gray-300 dark:border-white/20 bg-base-300/30 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={cn(
                'p-1.5 rounded-sm transition-colors cursor-pointer',
                viewMode === 'list'
                  ? 'bg-base-content text-base-100 shadow-sm'
                  : 'text-base-content/50 hover:text-base-content'
              )}
            >
              <ListIcon size={14} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={cn(
                'p-1.5 rounded-sm transition-colors cursor-pointer',
                viewMode === 'grid'
                  ? 'bg-base-content text-base-100 shadow-sm'
                  : 'text-base-content/50 hover:text-base-content'
              )}
            >
              <GridIcon size={14} />
            </button>
          </div>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

      <div className="space-y-6 md:space-y-8">
        {PROJECT_CATEGORIES.map(({ category, items }) => (
          <article key={category}>
            {/* Category title without description */}
            <div className="mb-2">
              <h3 className="text-[10px] md:text-xs text-base-content">
                {category} :
              </h3>
            </div>

            {viewMode === 'grid' ? (
              /* Grid Layout: 2 minimum on mobile, 3 on desktop */
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((item) => (
                  <PolaroidCard
                    key={item.id}
                    item={item}
                    imgSrc={item.previewImage || item.coverImage}
                    name={item.title || item.name}
                    onClick={() => handleItemClick(category, item)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleItemClick(category, item);
                      }
                    }}
                  />
                ))}
              </div>
            ) : (
              /* List Layout with HR separators */
              <div>
                {items.map((item, index) => (
                  <div key={item.id}>
                    <ProjectCard
                      title={item.title || item.name}
                      type={item.type || item.category}
                      coverImage={item.coverImage || item.previewImage}
                      onClick={() => handleItemClick(category, item)}
                    />
                    {/* HR separator between items */}
                    {index < items.length - 1 && (
                      <hr className="my-2 md:my-2.5 border-base-content/10" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

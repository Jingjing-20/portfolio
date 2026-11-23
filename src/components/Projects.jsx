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

  const MockupGridCard = ({ onClick, name, category, previewImage }) => (
    <div
      className={cn(
        'group cursor-pointer flex flex-col rounded-xl overflow-hidden shadow-sm transition-all duration-200',
        'bg-textured border border-solid border-gray-300 dark:border-white/20',
        'hover-card-border hover:shadow-md'
      )}
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
      {/* Top Banner with Mockup Preview Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-base-300 border-b border-gray-300/70 dark:border-white/10">
        {previewImage ? (
          <img
            src={previewImage}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black dark:from-zinc-100 dark:via-neutral-200 dark:to-zinc-300" />
        )}
      </div>

      {/* Bottom Content Area: Name & Category only */}
      <div className="p-2.5 md:p-3 flex flex-col flex-1 justify-between gap-1">
        <div className="flex items-start justify-between gap-1.5">
          <h4 className="text-[10px] md:text-xs font-bold text-base-content group-hover:underline underline-offset-2 leading-snug truncate">
            {name}
          </h4>
          <ArrowTopRightIcon size={12} className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors mt-0.5" />
        </div>
        {category && (
          <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-wider text-base-content/60">
            {category}
          </span>
        )}
      </div>
    </div>
  );

  const ProjectCard = ({ onClick, title, type, description, coverImage }) => (
    <div
      className="group cursor-pointer py-1"
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
      <div className="flex gap-2.5 md:gap-3.5 items-center">
        {/* Cover Image with Card Styling */}
        {coverImage && (
          <div className="flex-shrink-0 w-35 md:w-40">
            <div className={cn(
              'relative p-0.5 rounded-sm shadow-md transition-all duration-200',
              'bg-textured border border-solid border-gray-300 dark:border-white/20',
              'hover-card-border'
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

        {/* Content (title, type, description) & Arrow */}
        <div className="flex-1 min-w-0 flex items-center justify-between gap-2 md:gap-3">
          <div className="flex-1 min-w-0 space-y-0.5">
            <h3 className="text-[10px] md:text-xs font-bold text-base-content group-hover:underline underline-offset-2">
              {title}
            </h3>
            {type && (
              <p className="text-[8px] md:text-[10px] font-medium text-base-content/70">
                {type}
              </p>
            )}
            {description && (
              <p className="text-[8px] md:text-[10px] text-base-content/50 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <ArrowTopRightIcon size={14} className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3">
        <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
          Projects
        </p>
        <p className="text-[10px] md:text-xs text-base-content/50">
          Web applications and personal projects
        </p>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

      <div className="space-y-6 md:space-y-8">
        {PROJECT_CATEGORIES.map(({ category, items }) => {
          const isMockup = category === 'Mockups';

          return (
            <article key={category}>
              {/* Category title */}
              <div className="mb-2">
                <h3 className="text-[10px] md:text-xs text-base-content">
                  {category} :
                </h3>
              </div>

              {isMockup ? (
                /* Grid Layout for Mockups (preview image, name and category only) */
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3">
                  {items.map((item) => (
                    <MockupGridCard
                      key={item.id}
                      name={item.name || item.title}
                      category={item.category || item.type}
                      previewImage={item.previewImage || item.coverImage}
                      onClick={() => handleItemClick(category, item)}
                    />
                  ))}
                </div>
              ) : (
                /* List Layout with HR separators for actual system projects (Deployed & Personal) */
                <div>
                  {items.map((item, index) => (
                    <div key={item.id}>
                      <ProjectCard
                        title={item.title || item.name}
                        type={item.type || item.category}
                        description={item.summary || item.description || item.format}
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
          );
        })}
      </div>
    </section>
  );
}

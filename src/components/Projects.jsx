import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { DeployedPage } from '@/components/resume_sections/projects/DeployedPage';
import { MockupPage } from '@/components/resume_sections/projects/MockupPage';
import { PersonalPage } from '@/components/resume_sections/projects/PersonalPage';
import { PROJECT_CATEGORIES } from '@/components/resume_sections/projects/projects_data';

function ArrowTopRightIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15 15" className={className} aria-hidden="true">
      <path fill="currentColor" d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
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

  const techBadgeClasses = cn(
    'text-[7px] md:text-[8px] px-1.5 py-0.5 rounded shrink-0',
    'border border-transparent',
    'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
    'hover:text-base-content hover:border-base-content',
    'font-medium grayscale cursor-default',
    'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0'
  );

  const PolaroidCard = ({ item, onClick, onKeyDown, imgSrc, name, subtitle }) => (
    <div
      key={item.id}
      className={cn(
        'group relative flex flex-col p-1 md:p-1.5 rounded-md shadow-xl',
        'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double',
        'hover-card'
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

  const CoverListItem = ({ item, onClick, title, type, techStack, isLast }) => (
    <li key={item.id} className="flex flex-col">
      <div
        className="group flex items-center gap-2 md:gap-3 py-2.5 md:py-3 cursor-pointer select-none"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick && onClick();
          }
        }}
      >
        {/* Text Content */}
        <div className="flex-1 min-w-0 space-y-1 group/title">
          <h4 className="text-[10px] md:text-xs font-bold text-base-content group-hover/title:text-primary transition-colors truncate">
            {title}
          </h4>
          {type && (
            <p className="text-[8px] md:text-[10px] text-base-content/80 truncate">
              {type}
            </p>
          )}
          {/* Tech Stack - single horizontal scrollable line */}
          {techStack && techStack.length > 0 && (
            <div
              className={cn(
                'flex flex-nowrap gap-1 mt-1',
                'overflow-x-auto whitespace-nowrap',
                'scrollbar-thin scrollbar-thumb-base-content/20 scrollbar-track-transparent',
                'pb-0.5'
              )}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(120,120,120,0.3) transparent',
              }}
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={techBadgeClasses}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Arrow Icon - vertically centered on the right */}
        <ArrowTopRightIcon
          size={16}
          className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors"
        />
      </div>
      {!isLast && (
        <hr className="border-base-content/15" />
      )}
    </li>
  );

  return (
    <section id="projects" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            Projects
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Web applications and personal projects
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

      <div className="space-y-6 md:space-y-8">
        {PROJECT_CATEGORIES.map(({ category, description, items }) => (
          <article key={category}>
            <div className="space-y-1 mb-3">
              <h3 className="text-[10px] md:text-xs text-base-content">
                {category} :
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
                <ul>
                  {items.map((personal, idx) => (
                    <CoverListItem
                      key={personal.id}
                      item={personal}
                      title={personal.title || personal.name}
                      type={personal.type || personal.organization}
                      techStack={personal.techStack}
                      onClick={() => handleSelectPersonal(personal)}
                      isLast={idx === items.length - 1}
                    />
                  ))}
                </ul>
              ) : (
                <ul>
                  {items.map((project, idx) => (
                    <CoverListItem
                      key={project.id}
                      item={project}
                      title={project.title || project.name}
                      type={project.type || project.organization}
                      techStack={project.techStack}
                      onClick={() => handleSelectProject(project)}
                      isLast={idx === items.length - 1}
                    />
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
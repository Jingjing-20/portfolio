import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { JOURNAL_POSTS } from '@/components/resume_sections/journal/journal_data';
import { JournalPostPage } from '@/components/resume_sections/journal/JournalPostPage';

function ArrowTopRightIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 7h10m0 0v10m0-10L7 17" />
    </svg>
  );
}

function ImageIcon({ className = '', size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
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

function getActivePostFromHash() {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash.replace(/^#/, '');
  const match = hash.match(/^journal\/([^/?#]+)/i);
  const postId = match ? match[1] : null;
  if (!postId) return null;
  return JOURNAL_POSTS.find((p) => p.id === postId) || null;
}

export default function Journal() {
  const [selectedPost, setSelectedPost] = useState(getActivePostFromHash);
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    const handleHash = () => {
      setSelectedPost(getActivePostFromHash());
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.location.hash = `journal/${post.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToJournal = () => {
    setSelectedPost(null);
    window.location.hash = 'journal';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedPost) {
    return (
      <JournalPostPage
        post={selectedPost}
        onBack={handleBackToJournal}
      />
    );
  }

  return (
    <section id="journal" className="scroll-mt-24 max-w-2xl mx-auto">
      {/* Header with Title and Format Toggle */}
      <header className="pt-20 md:pt-10 mb-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
              Journal
            </p>
            <p className="text-[10px] md:text-xs text-base-content/50">
              Notes, reflections, and technical deep dives
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

      {/* Journal Entries - Chronological by Date */}
      {viewMode === 'list' ? (
        <div className="space-y-2.5 md:space-y-3">
          {JOURNAL_POSTS.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer py-0.5"
              onClick={() => handleSelectPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSelectPost(post);
                }
              }}
            >
              <div className="flex gap-2.5 md:gap-3.5 items-center">
                {/* Thumbnail Container (Solid border outside, dashed border inside) */}
                <div className="flex-shrink-0 w-24 sm:w-28 md:w-32">
                  <div
                    className={cn(
                      'relative p-0.5 rounded-sm shadow-md transition-colors duration-200',
                      'bg-textured border border-solid border-gray-300 dark:border-white/20 group-hover:border-base-content/50'
                    )}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-dashed border-base-content/20 dark:border-white/20 shadow-inner">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full w-full gap-0.5 bg-base-200/30 text-base-content/30 group-hover:text-base-content/50 transition-colors">
                          <ImageIcon size={16} />
                          <span className="text-[7px] md:text-[8px] uppercase tracking-wider font-mono">
                            Image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content (No description displayed) */}
                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[8px] md:text-[9px] text-base-content/50 font-medium">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[11px] md:text-xs font-bold text-base-content group-hover:underline underline-offset-2 truncate">
                      {post.title}
                    </h3>
                    <ArrowTopRightIcon
                      size={14}
                      className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Grid Layout: 2 columns on mobile, 3 columns on desktop */
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3.5">
          {JOURNAL_POSTS.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => handleSelectPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSelectPost(post);
                }
              }}
            >
              {/* Thumbnail Container (Solid border outside, dashed border inside) */}
              <div
                className={cn(
                  'relative p-0.5 rounded-sm shadow-md transition-colors duration-200',
                  'bg-textured border border-solid border-gray-300 dark:border-white/20 group-hover:border-base-content/50'
                )}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300 border border-dashed border-base-content/20 dark:border-white/20 shadow-inner">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full gap-0.5 bg-base-200/30 text-base-content/30 group-hover:text-base-content/50 transition-colors">
                      <ImageIcon size={18} />
                      <span className="text-[7px] md:text-[8px] uppercase tracking-wider font-mono">
                        Image
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info below thumbnail (No description displayed) */}
              <div className="pt-1.5 space-y-0.5 min-w-0">
                <div className="flex items-center gap-1.5 text-[7px] md:text-[8px] text-base-content/50 font-medium">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-[10px] md:text-xs font-bold text-base-content group-hover:underline underline-offset-2 truncate">
                    {post.title}
                  </h3>
                  <ArrowTopRightIcon
                    size={12}
                    className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

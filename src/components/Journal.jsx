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
      {/* Header */}
      <header className="pt-20 md:pt-10 mb-3">
        <div>
          <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
            Journal
          </p>
          <p className="text-[10px] md:text-xs text-base-content/50">
            Notes, reflections, and technical deep dives
          </p>
        </div>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

      {/* Journal Entries - Chronological by Date */}
      <div className="space-y-3 md:space-y-3.5">
        {JOURNAL_POSTS.map((post) => (
          <div
            key={post.id}
            className="group cursor-pointer py-1"
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

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1">
                {/* Date & Read Time */}
                <div className="flex items-center gap-1.5 text-[8px] md:text-[9px] text-base-content/50 font-medium">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title & Arrow */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[11px] md:text-xs font-bold text-base-content group-hover:underline underline-offset-2 truncate">
                    {post.title}
                  </h3>
                  <ArrowTopRightIcon
                    size={14}
                    className="shrink-0 text-base-content/40 group-hover:text-base-content transition-colors mt-0.5"
                  />
                </div>

                {/* Subtitle / Excerpt */}
                <p className="text-[8px] md:text-[10px] text-base-content/60 line-clamp-1 md:line-clamp-2 leading-relaxed">
                  {post.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

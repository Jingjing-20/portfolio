import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { JOURNAL_POSTS } from '@/components/resume_sections/journal/journal_data';
import { JournalPostPage } from '@/components/resume_sections/journal/JournalPostPage';

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
        <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
          Journal
        </p>
        <p className="text-[10px] md:text-xs text-base-content/50">
          Notes, reflections, and technical deep dives
        </p>
      </header>

      <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

      {/* Grid Layout: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {JOURNAL_POSTS.map((post) => (
          <div
            key={post.id}
            className={cn(
              'group cursor-pointer flex flex-col rounded-xl overflow-hidden shadow-sm transition-all duration-200',
              'bg-textured border border-solid border-gray-300 dark:border-white/20',
              'hover-card-border hover:shadow-md'
            )}
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
            {/* Top Banner (Occupies whole space in header of card image) */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-base-300 border-b border-gray-300/70 dark:border-white/10">
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black dark:from-zinc-100 dark:via-neutral-200 dark:to-zinc-300" />
              )}
            </div>

            {/* Bottom Content Area */}
            <div className="p-3 md:p-3.5 flex flex-col flex-1 justify-between">
              <div>
                {/* Title */}
                <h3 className="text-[10px] md:text-xs font-bold text-base-content leading-snug line-clamp-2 mb-1 group-hover:underline underline-offset-2">
                  {post.title}
                </h3>

                {/* Subtitle / Excerpt */}
                {post.subtitle && (
                  <p className="text-[8px] md:text-[10px] text-base-content/60 leading-relaxed line-clamp-2 mb-2">
                    {post.subtitle}
                  </p>
                )}
              </div>

              {/* Metadata Footer: Date · Read Time · — */}
              <div className="flex items-center gap-1.5 text-[7px] md:text-[8px] text-base-content/50 font-mono mt-auto">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span>·</span>
                <span>—</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

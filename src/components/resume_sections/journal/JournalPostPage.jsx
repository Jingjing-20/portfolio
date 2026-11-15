import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

const backButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20 hover:border-double',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'hover-theme-switch'
);

export function JournalPostPage({ post, onBack }) {
  if (!post) return null;

  return (
    <ScrollReveal animation="fadeInUp" duration="0.4s">
      <section className="scroll-mt-24 max-w-2xl mx-auto space-y-4 md:space-y-6">

        {/* Header */}
        <header className="pt-20 md:pt-10 mb-3">
          <div className="flex items-center gap-3 md:gap-4">

            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className={backButtonClasses}
              aria-label="Back to journal"
            >
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
            </button>

            {/* Title & Metadata */}
            <div className="flex-1 min-w-0">
              <p className="text-base-content text-md md:text-lg lg:text-xl font-bold">
                {post.title}
              </p>
              <p className="text-[10px] md:text-xs text-base-content/50">
                {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        </header>

        <hr className="mb-3 md:mb-6 mt-3 border-base-content" />

        {/* Content */}
        <div className="space-y-6 md:space-y-8">

          {/* Compact Cover Photo / Thumbnail (Solid border outside, dashed border inside) */}
          <div className="w-full max-w-xs sm:max-w-sm mx-auto">
            <div className="overflow-hidden border border-solid border-gray-300 dark:border-white/20 p-1 rounded-md bg-base-300/30 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-base-300/50 border border-dashed border-base-content/20 dark:border-white/20 shadow-inner">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full gap-1.5 text-base-content/30 bg-base-200/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 text-base-content/35"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span className="text-[8px] md:text-[9px] tracking-wider uppercase font-mono">
                      Cover Image Placeholder
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Subtitle / Overview */}
          {post.subtitle && (
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-base-content/80 font-medium leading-relaxed italic border-l-2 border-base-content/40 pl-3">
                "{post.subtitle}"
              </p>
            </div>
          )}

          {/* Article Body */}
          <div className="space-y-4">
            {post.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <div key={index} className="space-y-2 pt-2">
                    <h3 className="text-xs md:text-sm font-bold text-base-content">
                      {block.text}
                    </h3>
                  </div>
                );
              }

              if (block.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className="text-[10px] md:text-xs text-base-content leading-relaxed"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'list') {
                return (
                  <div key={index} className="space-y-1">
                    {block.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={cn(
                          'flex items-start gap-3 p-1 rounded-md',
                          'text-[10px] md:text-xs font-medium text-base-content',
                          'leading-relaxed whitespace-pre-line'
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default JournalPostPage;

// TechStack.jsx
export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="md:hidden">
              Tech Stack <span className="text-gray-500">& Tools</span>
            </span>
            <span className="hidden md:block">
              Tech Stack
              <br />
              <span className="text-gray-500">& Tools</span>
            </span>
          </h2>
          <span className="shadow-xl badge badge-outline badge-sm text-gray-400 font-extrabold border-gray-400 shrink-0 mt-1 kbd kbd-sm md:kbd-md" aria-hidden="true">
            04
          </span>
        </div>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-lg">
          Languages, frameworks, and tools I use to design, build, and maintain web applications.
        </p>
        <hr className="mt-3 mb-3 border-dashed border-gray-500" />
      </header>

      {/* Body */}
      <div className="relative pl-4 md:pl-5 border-l border-gray-500 space-y-6">
        {/* Content removed */}
      </div>
    </section>
  )
}
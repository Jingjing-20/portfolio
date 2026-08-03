// Experience.jsx
export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <header>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="md:hidden">
              Work <span className="text-gray-500">Experience</span>
            </span>
            <span className="hidden md:block">
              Work
              <br />
              <span className="text-gray-500">Experience</span>
            </span>
          </h2>
          <span className="shadow-xl badge badge-outline badge-sm text-gray-400 font-extrabold border-gray-400 shrink-0 mt-1 kbd kbd-sm md:kbd-md" aria-hidden="true">
            02
          </span>
        </div>
        <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg">
          Real-world internship experience shipping features for government property management.
        </p>
        <hr className="mt-3 mb-3 border-dashed border-gray-500" />
      </header>

      <div className="relative pl-4 md:pl-5 border-l border-gray-500 space-y-6">
        {/* Content removed */}
      </div>
    </section>
  )
}
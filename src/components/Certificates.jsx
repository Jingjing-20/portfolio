// Certificates.jsx
export default function Certificates() {
  return (
    <>
      {/* Certificates Section */}
      <section id="certificates" className="scroll-mt-24">
        {/* Header */}
        <header>
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
              <span className="md:hidden">
                Participation <span className="text-gray-500">Certificates</span>
              </span>
              <span className="hidden md:block">
                Participation
                <br />
                <span className="text-gray-500">Certificates</span>
              </span>
            </h2>
            <span className="shadow-xl badge badge-outline badge-sm text-gray-400 font-extrabold border-gray-400 shrink-0 mt-1 kbd kbd-sm md:kbd-md" aria-hidden="true">
              05
            </span>
          </div>

          <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg">
            Continuous learning through webinars, seminars, certifications, and industry events.
          </p>
          <hr className="mt-3 mb-3 border-dashed border-gray-500" />
        </header>

        {/* Gallery - 3 column grid with rectangle images only */}
        <div className="relative pl-4 md:pl-5 border-l border-gray-500">
          {/* Content removed */}
        </div>
      </section>

      {/* Certificate Modal - consistent with other modals */}
      <dialog className="modal">
        {/* Content removed */}
      </dialog>
    </>
  )
}
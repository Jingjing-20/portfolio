
const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" /></svg>
)

export default function Experience() {
  const workExperienceData = [
    {
      id: 'work-pgso-intern',
      role: 'Full-Stack Developer & Systems Administrator',
      organization: 'Provincial General Services Office - Property Management Division',
      period: 'Feb - May 2026',
      employmentType: 'Internship',
      workArrangement: 'On-site',
      location: 'Bacolod, Negros Occidental, Philippines',
      summary:
        'Developed and maintained PGSO-PMD: ULPMMS, a provincial property management platform with integrated tracking, interactive mapping, and document scanner processing.',
      description:
        'Developed and implemented the Provincial General Services Office Property Management Division - Unified Lot & Property Management and Monitoring System (PGSO-PMD: ULPMMS), a centralized platform for managing provincial lots and properties. The system streamlines property monitoring, document management, beneficiary tracking, and geographic visualization while improving operational efficiency through integrated mapping and scanner-assisted document processing.',
      contributions: [
        'Improved property management by developing a system for lot allocations and property donations.',
        'Increased data accuracy by migrating legacy records into a unified database.',
        'Simplified payment processing by implementing beneficiary and amortization tracking.',
        'Enhanced property monitoring by integrating interactive maps with Leaflet.',
        'Reduced manual paperwork by building a secure document management system.',
        'Optimized reporting by creating Excel import and export features.',
        'Improved decision-making by designing dashboards with real-time statistics.',
        'Strengthened security by implementing role-based access control and authentication.'
      ],
    }
  ]

  return (
    <section id="work-experience" className="scroll-mt-24">
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
        <ul className="list rounded-box gap-3">
          {workExperienceData.map((work) => (
            <li key={work.id} className="border border-gray-300 hover:border-gray-400 hover:shadow-2xl transition-all duration-300 p-3 md:p-4 rounded-box" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.75) 0%, rgba(243,243,243,0.45) 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23000' fill-opacity='0.04'/%3E%3C/svg%3E\")" }}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <h3 className="font-extrabold text-sm md:text-base text-neutral-800">
                    {work.role}
                  </h3>

                  <p className="text-xs md:text-sm font-medium text-gray-600 mt-1">
                    {work.organization}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-square border hover:border-gray-400 tooltip tooltip-top font-bold shrink-0"
                  data-tip="See more"
                  aria-label={`View ${work.role} details`}
                  onClick={() => document.getElementById(work.id).showModal()}
                >
                  {externalLinkIcon}
                </button>
              </div>

              <hr className="mt-3 mb-3 border-gray-400" />

              <div className="text-xs md:text-sm flex flex-wrap gap-1.5 mb-3">
                <span className="kbd kbd-xs md:kbd-sm font-medium">
                  {work.employmentType}
                </span>

                <span className="kbd kbd-xs md:kbd-sm font-medium">
                  {work.workArrangement}
                </span>

                <span className="kbd kbd-xs md:kbd-sm font-medium">
                  {work.period}
                </span>

                <span className="kbd kbd-xs md:kbd-sm font-medium">
                  {work.location}
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {work.summary}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
          {workExperienceData.length} role{workExperienceData.length !== 1 ? 's' : ''} - Internship - On-site
        </p>

        {workExperienceData.map((work) => (
          <dialog key={`${work.id}-modal`} id={work.id} className="modal">
            <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-300 hover:border-gray-400 bg-white/95 backdrop-blur-sm rounded-box p-0 shadow-2xl">
              <form method="dialog">
                <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-white/80 hover:bg-white hover:border-gray-300 border">✕</button>
              </form>

              {/* Card Header - matches card format */}
              <div className="p-6 pb-0">
                <div className="min-w-0 space-y-1">
                  <h3 className="font-extrabold text-sm md:text-base text-neutral-800">
                    {work.role}
                  </h3>

                  <p className="text-xs md:text-sm font-medium text-gray-600 mt-1">
                    {work.organization}
                  </p>
                </div>

                <hr className="mt-3 mb-3 border-gray-400" />

                <div className="text-xs md:text-sm flex flex-wrap gap-1.5 mb-3">
                  <span className="kbd kbd-xs md:kbd-sm font-medium">
                    {work.employmentType}
                  </span>

                  <span className="kbd kbd-xs md:kbd-sm font-medium">
                    {work.workArrangement}
                  </span>

                  <span className="kbd kbd-xs md:kbd-sm font-medium">
                    {work.period}
                  </span>

                  <span className="kbd kbd-xs md:kbd-sm font-medium">
                    {work.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-0">
                {/* Overview */}
                <div className="mb-5">
                  <h4 className="text-xs md:text-sm uppercase tracking-wider font-bold text-gray-500 mb-2">
                    Overview
                  </h4>
                  <p className="text-[10px] md:text-xs text-gray-700 leading-relaxed">
                    {work.description}
                  </p>
                </div>

                {/* Contributions */}
                <div>
                  <h4 className="text-xs md:text-sm uppercase tracking-wider font-bold text-gray-500 mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {work.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10px] md:text-xs text-gray-700 leading-relaxed">
                        <span className="text-gray-400 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-xs">
              <button type="submit">close</button>
            </form>
          </dialog>
        ))}
      </div>
    </section>
  )
}
import React, { useState } from 'react'

const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
)

const enlargeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 9.5L21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></svg>
)

const cert = (filename) => new URL(`../assets/certs/${filename}`, import.meta.url).href

const certificates = [
  {
    id: 'cert-devfest-2025',
    title: 'Google DevFest Bacolod 2025',
    date: 'Nov 22, 2025',
    image: cert('DevFest_2025_Certificate.png'),
  },
  {
    id: 'cert-ai-enterprise',
    title: 'AI x Enterprise Architecture - Powering Emerging Tech',
    date: 'Sep 25, 2025',
    image: cert('AI x Enterprise Architecture - Powering Emerging Tech.png'),
  },
  {
    id: 'cert-mental-health-ai',
    title: '10 Keys to Mental Health at Work',
    date: 'Sep 18, 2025',
    image: cert('10 Keys to Mental Health at Work - Support Wellbeing with AI Tools.png'),
  },
  {
    id: 'cert-ai-cybersecurity',
    title: 'Usage of AI Tools in Cyber Security',
    date: 'Sep 15, 2025',
    image: cert('Usage of AI Tools in Cyber Security.png'),
  },
  {
    id: 'cert-chatgpt-agent',
    title: 'Unleashing ChatGPT Agent Mode',
    date: 'Sep 10, 2025',
    image: cert('Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI.png'),
  },
  {
    id: 'cert-project-management',
    title: 'Understanding Project Management',
    date: 'Sep 02, 2025',
    image: cert('Understanding Project management from basic to advance.png'),
  },
  {
    id: 'cert-networking-devices',
    title: 'Networking Devices and Initial Configuration',
    date: 'Dec 06, 2023',
    image: cert('Networking Devices and Initial Configuration.png'),
  },
  {
    id: 'cert-network-addressing',
    title: 'Network Addressing and Basic Troubleshooting',
    date: 'Nov 01, 2023',
    image: cert('Network Addressing and Basic Troubleshooting.png'),
  },
  {
    id: 'cert-networking-basics',
    title: 'Networking Basics',
    date: 'Oct 07, 2023',
    image: cert('Networking Basics.png'),
  },
]

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null)

  const sectionExtra = {
    label: 'Environment',
    title: 'On-site provincial internship',
    detail: 'Built production features alongside PGSO staff with real datasets, scanners, and reporting requirements.',
  }

  const workExperienceData = [
    {
      id: 'work-pgso-intern',
      role: 'Web Developer',
      organization: 'Provincial General Services Office - Property Management Division · Internship',
      period: 'Feb 2026 - May 2026 · 4 mos',
      location: 'Bacolod, Western Visayas, Philippines · On-site',
      summary:
        'Developed PGSOPMD - ULPMMS, a provincial platform for managing lots and properties with integrated tracking, interactive mapping, and document scanner processing.',
      description:
        'Developed and implemented the Provincial General Services Office Property Management Division - Unified Lot & Property Management and Monitoring System (PGSOPMD - ULPMMS), a comprehensive platform for managing provincial lots and properties, featuring integrated tracking, documentation, and monitoring capabilities for efficient asset management. Includes interactive mapping and connected scanner for document processing.',
      contributions: [
        'Built dual-module system managing lot allocations and property donations across Negros Occidental province',
        'Migrated and consolidated legacy data records into unified database structure with data validation and integrity checks',
        'Implemented beneficiary/awardee contract tracking with payment processing and amortization schedules',
        'Integrated interactive GeoJSON mapping with Leaflet for geographic boundary visualization',
        'Developed hierarchical document management system with secure storage and scanner integration for automated document processing',
        'Created Excel import/export functionality for bulk data operations and reporting',
        'Designed responsive UI with real-time statistics dashboard and analytics',
        'Implemented secure authentication system with role-based access control',
      ],
      technologies: 'PHP, MySQL, JavaScript, Leaflet.js, Tailwind CSS, Excel integration, Scanner API',
    },
  ]

  return (
    <>
      <section id="work-experience" className="scroll-mt-24">
        {/* Header */}
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
            <span className="badge badge-outline badge-sm font-mono text-gray-600 font-bold border-gray-300 shrink-0 mt-1 kbd" aria-hidden="true">
              02
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-lg">
            Real-world internship experience shipping features for government property management.
          </p>
          <hr className="mt-4 mb-4 border-gray-300" />
        </header>

        {/* Body */}
        <div className="relative pl-4 md:pl-5 border-l-2 border-base-300 space-y-4">
          
          {/* Extra Environment Info */}
          <ul className="list rounded-box gap-3 mb-3">
            <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-semibold opacity-60">{sectionExtra.label}</div>
                <div className="text-xs md:text-sm font-bold mt-0.5">{sectionExtra.title}</div>
                <p className="mt-2 text-xs md:text-sm text-gray-600 leading-relaxed">{sectionExtra.detail}</p>
              </div>
            </li>
          </ul>

          {/* Work Experience List */}
          <ul className="list rounded-box gap-3">
            {workExperienceData.map((work) => (
              <li key={work.id} className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-semibold opacity-60">{work.organization}</div>
                  <div className="text-xs md:text-sm font-bold mt-0.5">{work.role}</div>
                  <div className="text-[10px] opacity-60 mt-0.5">
                    {work.period} · {work.location}
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-gray-600 leading-relaxed">{work.summary}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
                  data-tip="See more"
                  aria-label={`View ${work.role} details`}
                  onClick={() => document.getElementById(work.id).showModal()}
                >
                  {externalLinkIcon}
                </button>
              </li>
            ))}
          </ul>

          {/* Section Meta */}
          <p className="mt-2 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
            {workExperienceData.length} role{workExperienceData.length !== 1 ? 's' : ''} · Internship · On-site
          </p>

          {/* Modals with max-height limits for mobile */}
          {workExperienceData.map((work) => (
            <dialog key={`${work.id}-modal`} id={work.id} className="modal">
              <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-200 shadow-2xl rounded-box p-6 bg-white">
                <form method="dialog">
                  <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-neutral-800">{work.role}</h3>
                <p className="text-sm opacity-70 mt-1">{work.organization}</p>
                <p className="text-sm opacity-70 font-mono text-gray-500">{work.period} · {work.location}</p>
                <hr className="my-3 border-gray-200" />
                <p className="py-2 text-sm leading-relaxed text-gray-600">{work.description}</p>
                <h4 className="font-bold text-sm text-neutral-800 mt-4">Key contributions:</h4>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-sm text-gray-600">
                  {work.contributions.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm bg-neutral-50 p-2.5 rounded border border-neutral-200">
                  <span className="font-bold text-neutral-700">Technologies:</span> <span className="font-mono text-xs">{work.technologies}</span>
                </p>
              </div>
              <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-xs">
                <button type="submit">close</button>
              </form>
            </dialog>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="participation-certificates" className="scroll-mt-24 mt-16">
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
            <span className="badge badge-outline badge-sm font-mono text-gray-600 font-bold border-gray-300 shrink-0 mt-1 kbd">
              05
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-500 max-w-lg">
            Continuous learning through webinars, seminars, certifications, and industry events.
          </p>
          <hr className="mt-4 mb-6 border-gray-300" />
        </header>

        {/* Gallery - 3 column grid with rectangle images only */}
        <div className="relative pl-4 md:pl-5 border-l-2 border-base-300">
          <div className="grid grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-base-300 rounded-box p-3 shadow-xl relative group"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono absolute top-4 right-4"
                  data-tip="Enlarge"
                  aria-label={`Enlarge ${cert.title}`}
                  onClick={() => setSelectedCert(cert)}
                >
                  {enlargeIcon}
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-right text-[10px] uppercase tracking-wider text-gray-400">
          {certificates.length} Certificates · 2023–2025
        </p>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <dialog open className="modal modal-open" onClose={() => setSelectedCert(null)}>
          <div className="modal-box max-w-4xl p-0 overflow-hidden rounded-box bg-white">
            <form method="dialog">
              <button
                onClick={() => setSelectedCert(null)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-white/80 hover:bg-white"
              >
                ✕
              </button>
            </form>
            
            {/* Image */}
            <div className="w-full bg-base-200 flex items-center justify-center p-6">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-xl"
              />
            </div>
            
            {/* Text under image */}
            <div className="p-4 border-t border-base-200">
              <h3 className="font-bold text-sm md:text-base text-neutral-800">{selectedCert.title}</h3>
              <p className="text-xs text-gray-500">{selectedCert.date}</p>
            </div>
          </div>
          
          <form method="dialog" className="modal-backdrop bg-black/50 backdrop-blur-sm">
            <button onClick={() => setSelectedCert(null)}>close</button>
          </form>
        </dialog>
      )}
    </>
  )
}
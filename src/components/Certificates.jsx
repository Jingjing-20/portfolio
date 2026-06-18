import React, { useState, useEffect, useRef } from 'react'

const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
)

const enlargeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 9.5L21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></svg>
)

const cert = (filename) => new URL(`../assets/certs/${filename}`, import.meta.url).href

const certificates = [
  {
    id: 'cert-devfest-2025',
    title: 'Google DevFest Bacolod 2025',
    date: '22/11/2025',
    image: cert('DevFest_2025_Certificate.png'),
  },
  {
    id: 'cert-ai-enterprise',
    title: 'AI x Enterprise Architecture - Powering Emerging Tech',
    date: '25/09/2025',
    image: cert('AI x Enterprise Architecture - Powering Emerging Tech.png'),
  },
  {
    id: 'cert-mental-health-ai',
    title: '10 Keys to Mental Health at Work',
    date: '18/09/2025',
    image: cert('10 Keys to Mental Health at Work - Support Wellbeing with AI Tools.png'),
  },
  {
    id: 'cert-ai-cybersecurity',
    title: 'Usage of AI Tools in Cyber Security',
    date: '15/09/2025',
    image: cert('Usage of AI Tools in Cyber Security.png'),
  },
  {
    id: 'cert-chatgpt-agent',
    title: 'Unleashing ChatGPT Agent Mode',
    date: '10/09/2025',
    image: cert('Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI.png'),
  },
  {
    id: 'cert-project-management',
    title: 'Understanding Project Management',
    date: '02/09/2025',
    image: cert('Understanding Project management from basic to advance.png'),
  },
  {
    id: 'cert-networking-devices',
    title: 'Networking Devices and Initial Configuration',
    date: '06/12/2023',
    image: cert('Networking Devices and Initial Configuration.png'),
  },
  {
    id: 'cert-network-addressing',
    title: 'Network Addressing and Basic Troubleshooting',
    date: '01/11/2023',
    image: cert('Network Addressing and Basic Troubleshooting.png'),
  },
  {
    id: 'cert-networking-basics',
    title: 'Networking Basics',
    date: '07/10/2023',
    image: cert('Networking Basics.png'),
  },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (selectedCert && modalRef.current) {
      modalRef.current.showModal()
    }
  }, [selectedCert])

  return (
    <>
      {/* Certificates Section */}
      <section id="participation-certificates" className="scroll-mt-24">
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
          <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg">
            Continuous learning through webinars, seminars, certifications, and industry events.
          </p>
          <hr className="mt-4 mb-6 border-gray-300" />
        </header>

        {/* Gallery - 3 column grid with rectangle images only */}
        <div className="relative pl-4 md:pl-5 border-l-2 border-base-300">
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {certificates.map((certItem) => (
              <div
                key={certItem.id}
                className="bg-base-300 rounded-box p-3 shadow-xl relative group border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={certItem.image}
                  alt={certItem.title}
                  className="w-full object-cover rounded-lg border border-gray-400 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <button
                  type="button"
                  className="p-2 rounded-md shrink-0 tooltip tooltip-top font-mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:top-4 md:right-4 md:translate-x-0 md:translate-y-0 bg-base-200 hover:bg-base-300 shadow-xl"
                  data-tip="Enlarge"
                  aria-label={`Enlarge ${certItem.title}`}
                  onClick={() => setSelectedCert(certItem)}
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

      {/* Certificate Modal - consistent with other modals */}
      <dialog ref={modalRef} className="modal" onClose={() => setSelectedCert(null)}>
        <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-200 shadow-2xl rounded-box p-0 bg-white">
          <form method="dialog">
            <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-white/80 hover:bg-white">✕</button>
          </form>
          
          {/* Image */}
          <div className="w-full bg-base-300 flex items-center justify-center p-6">
            {selectedCert && (
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="border border-gray-400 max-w-full max-h-[60vh] object-contain rounded-lg shadow-xl"
              />
            )}
          </div>
          
          {/* Text under image */}
          {selectedCert && (
            <div className="p-6 border-t border-base-200">
              <h3 className="font-bold text-lg text-neutral-800">{selectedCert.title}</h3>
              <p className="text-xs md:text-sm font-bold mt-1 text-gray-600 kbd">{selectedCert.date}</p>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-xs">
          <button type="submit">close</button>
        </form>
      </dialog>
    </>
  )
}
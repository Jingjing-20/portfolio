import React from 'react'

const cert = (filename) =>
new URL(`../assets/certs/${filename}`, import.meta.url).href

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

export default function Certificates() {
return ( <section id="participation-certificates" className="scroll-mt-24">

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

  {/* Gallery */}
  <div className="grid grid-cols-3 gap-4">

    {certificates.map((cert) => (
      <div
        key={cert.id}
        className="group relative bg-base-300 p-2 rounded-box overflow-hidden"
      >

        <img
          src={cert.image}
          alt={cert.title}
          className="w-full rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-sm leading-tight">
            {cert.title}
          </h3>

          <p className="text-gray-300 text-xs mt-1">
            {cert.date}
          </p>
        </div>

      </div>
    ))}

  </div>

  <p className="mt-4 text-right text-[10px] uppercase tracking-wider text-gray-400">
    {certificates.length} Certificates · 2023–2025
  </p>

</section>

)
}

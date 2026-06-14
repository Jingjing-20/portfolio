import React from 'react'
import resumePdf from '../assets/Gian Carlo N. Ulep - RESUME - 2026.pdf'

const resumeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
  </svg>
)

const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 13.5v-8a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-3"/><path d="m7.5 10.5l3 3l3-3"/></g></svg>
)

export default function About() {
  const aboutIntro =
    'Passionate about building web and software applications with a keen eye for detail and a dedication to delivering exceptional user experiences. I enjoy transforming ideas into functional, efficient, and visually appealing solutions through clean code, modern technologies, and continuous learning.'

  const aboutData = [
    {
      label: 'Education',
      title: "Bachelor of Science in Information Technology - 2025-2026",
      detail: "Carlos Hilado Memorial State University - Alijis · Dean's list candidate with capstone focused on institutional web systems.",
    },
    {
      label: 'Focus',
      title: 'Full-Stack Web Development',
      detail: 'Responsive interfaces, PHP/MySQL backends, REST-style workflows, and deployment-ready documentation.',
    },
    {
      label: 'Availability',
      title: 'Open for opportunities',
      detail: 'Internships, freelance builds, and junior developer roles — remote or on-site in Western Visayas.',
    },
  ]

  return (
    <section id="about-me" className="scroll-mt-24">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="md:hidden">
              Software <span className="text-gray-500">Developer</span>
            </span>
            <span className="hidden md:block">
              Software
              <br />
              <span className="text-gray-500">Developer</span>
            </span>
          </h2>
          <span className="badge badge-outline badge-sm font-mono text-gray-600 font-bold border-gray-300 shrink-0 mt-1 kbd" aria-hidden="true">
            01
          </span>
        </div>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-lg">
          Who I am, what I build, where I studied, and how to reach me directly.
        </p>
        <hr className="mt-4 mb-4 border-gray-300" />
      </header>

      {/* Body */}
      <div className="relative pl-4 md:pl-5 border-l-2 border-base-300 space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">{aboutIntro}</p>
        
        <ul className="list rounded-box gap-3">
          {aboutData.map((item) => (
            <li key={item.label} className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-semibold opacity-60">{item.label}</div>
                <div className="text-xs md:text-sm font-bold mt-0.5">{item.title}</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}

          {/* Resume link row */}
          <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-center p-3 bg-white/50 rounded-box">
            <div className="size-10 rounded-box bg-base-300 flex items-center justify-center shrink-0">
              {resumeIcon}
            </div>
            <div className="min-w-0">
              <div className="text-xs md:text-sm font-bold leading-snug">Resume - Gian Carlo N. Ulep</div>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">Download PDF · updated 2026</p>
            </div>
            <a
              href={resumePdf}
              download="Gian Carlo N. Ulep - RESUME - 2026.pdf"
              className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
              data-tip="Download"
              aria-label="Download Resume"
            >
              {externalLinkIcon}
            </a>
          </li>
        </ul>

        {/* Meta */}
        <p className="mt-2 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
          Based in Negros Occidental, Philippines · BSIT GRADUATE 2026
        </p>
      </div>
    </section>
  )
}

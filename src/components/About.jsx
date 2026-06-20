import React from 'react'
import resumePdf from '../assets/resume versions/GCNU - Resume v3.pdf'

const resumeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.5em] text-gray-600" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /></svg>
)

const downloadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1em] text-gray-600" width="1em" height="1em" viewBox="0 0 512 512"><title xmlns="">download-outline</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 272l80 80l80-80M256 48v288"/></svg>
)

export default function About() {
  const aboutIntro =
    'Passionate about building web and software applications that are functional, scalable, and user-friendly. I enjoy transforming ideas into efficient and visually appealing solutions through clean code, modern technologies, and continuous learning. With experience in institutional systems, government platforms, and academic projects, I focus on developing reliable applications that address real-world needs and deliver meaningful user experiences.'

  const aboutData = [
    {
      label: 'Education',
      title: "BS in Information Technology - 2026",
      detail: "Carlos Hilado Memorial State University - Alijis · Capstone focused on institutional web systems. Specialized in web development, database design, and software engineering principles.",
    },
    {
      label: 'Focus',
      title: 'Full-Stack Software Development',
      detail: 'Responsive interfaces, PHP/MySQL backends, REST-style workflows, and deployment-ready documentation. Experienced in building role-based systems, data management platforms, and interactive dashboards with real-time features.',
    },
    {
      label: 'Availability',
      title: 'Open for opportunities',
      detail: 'Internships, freelance builds, and junior developer roles — remote or on-site in Western Visayas. Available for full-time, part-time, or project-based collaborations.',
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
          <span className="shadow-xl badge badge-outline badge-sm text-gray-400 font-extrabold border-gray-400 shrink-0 mt-1 kbd kbd-sm md:kbd-md" aria-hidden="true">
            01
          </span>
        </div>
        <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg">
          Who I am, what I build, where I studied, what I know, and how to reach me directly.
        </p>
        <hr className="mt-3 mb-3 border-dashed border-gray-500" />
      </header>

      {/* Body */}
      <div className="relative pl-4 md:pl-5 border-dashed border-l-2 border-gray-500 space-y-6">
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{aboutIntro}</p>
        
        <ul className="list rounded-box gap-3">
          {aboutData.map((item) => (
            <li key={item.label} className="border border-gray-300 hover:border-gray-400 list-row hover:bg-base-300 hover:shadow-2xl transition-all duration-300 items-start p-3 md:p-4 bg-white/50 rounded-box">
              <div className="min-w-0">
                <div className="shadow-xl bg-base-300 border border-gray-400 kbd font-extrabold text-[8px] md:text-[10px] uppercase opacity-60">{item.label}</div>
                <div className="text-sm md:text-base font-bold">{item.title}</div>
                <hr className="border border-gray-300 mt-1"></hr>
                <p className="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}

          {/* Resume link row */}
          <li className="border border-gray-300 hover:border-gray-400 list-row hover:bg-base-300 hover:shadow-2xl transition-all duration-300 items-start p-4 md:p-5 bg-white/50 rounded-box">
            <div className="shadow-xl size-10 rounded-box bg-base-300 p-2 flex items-center justify-center shrink-0 [&_svg]:w-full [&_svg]:h-full">
              {resumeIcon}
            </div>

            <div className="min-w-0">
              <div className="text-sm md:text-base font-bold leading-snug">
                Resume - Gian Carlo N. Ulep
              </div>
              <p className="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed">
                Download PDF · updated 2026
              </p>
            </div>

            <div className="flex items-center justify-center shrink-0 self-center">
              <a
                href={resumePdf}
                download="GCNU - Resume as of (18-06-2026)"
                className="btn btn-sm btn-square border hover:border-gray-400 tooltip tooltip-top font-bold"
                data-tip="Download"
                aria-label="Download Resume"
              >
                {downloadIcon}
              </a>
            </div>
          </li>
        </ul>

        {/* Meta */}
        <p className="text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
          Based in Negros Occidental, Philippines · BSIT GRADUATE 2026
        </p>
      </div>
    </section>
  )
}

import React from 'react'

const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
)

export default function Projects() {
  const sectionExtra = {
    label: 'Impact',
    title: 'Systems in active use',
    detail: 'Deployed platforms serve CHMSU Alijis and the Provincial General Services Office in Negros Occidental.',
  }

  const recentProjectsData = [
    {
      id: 'project-chmsu-agrm',
      year: '2025',
      beneficiary: 'Carlos Hilado Memorial State University - Alijis',
      title:
        'CHMSU: AGRM (Carlos Hilado Memorial State University: Integrated Online Platform for Academic Grade and Report Management)',
      summary:
        'Role-based academic platform for administrators, faculty, and students with enrollment, grade management, QR attendance, automated emails, and PDF/Excel reporting.',
      description:
        'A comprehensive academic management system was built for Carlos Hilado Memorial State University to centralize and streamline institutional data. The platform supports three distinct user roles: administrators, faculty, and students, each with a tailored dashboard and access level. Administrators manage students, faculty profiles, course enrollments, academic programs, sections, and grading periods. Faculty members encode and manage grades across multiple grading components such as assessments, exams, participation, projects, and term grades, with automatic computation. Students can view their academic records, monitor enrollment status, and track grades in real time. The system also features QR-based attendance scanning, where faculty generate QR codes per session and students scan them using a device camera for instant attendance logging. Automated email notifications handle enrollment confirmations, signup verifications, and password resets. Data can be exported as formatted PDF reports and Excel spreadsheets for institutional reporting.',
    },
    {
      id: 'project-pgso-ulpmms',
      year: '2026',
      beneficiary:
        'Provincial Government of Negros Occidental (General Services Office - Property Management Division)',
      title:
        'PGSO - ULPMMS (Provincial General Services Office - Unified Lot and Property Management and Monitoring System)',
      summary:
        'Provincial lot and property system with awardee tracking, payments, document management, Leaflet map plotting, dashboard analytics, and Excel import/export.',
      description:
        'A provincial-scale digital platform was developed for the Provincial General Services Office of Negros Occidental to manage and monitor government housing lots and property assets. The system is divided into two modules: Lot Management and Property Management, both operating under a unified authentication and user management layer. Key features include awardee and beneficiary tracking, lot and location assignment, payment recording and monitoring with support for multiple payment methods, document management with categorized file uploads, and duplicate transaction detection. Geographic boundary mapping is integrated using Leaflet.js, enabling administrators to visually plot and view lot boundaries and locations on an interactive map. The platform also provides dashboard analytics with charts, Excel import/export for bulk data operations, and print-ready reports for official documentation.',
    },
  ]

  const otherProjects = [
    {
      id: 'project-volunteering',
      title: 'Volunteering Management System',
      summary:
        'Platform for coordinating volunteer registrations, event assignments, hour tracking, and activity reporting.',
      description:
        'A web-based volunteering management system designed to streamline how organizations recruit, assign, and track volunteers. Administrators can publish events, manage volunteer profiles, and monitor participation hours. Volunteers can register for activities, view schedules, and receive updates on upcoming opportunities. The system centralizes attendance records and generates reports for institutional or community service documentation.',
    },
    {
      id: 'project-qr-memorandum',
      title: 'QR-Code Based Memorandum Distribution System',
      summary:
        'Digital memorandum distribution with QR verification for secure document access and acknowledgment tracking.',
      description:
        'A memorandum distribution system that replaces manual paper circulation with QR-code enabled digital documents. Administrators upload official memos and generate unique QR codes for each release. Recipients scan the code to view the document, confirm receipt, and access related attachments. The platform logs distribution status and read confirmations, improving accountability and reducing delays in internal communications.',
    },
    {
      id: 'project-capstone-archive',
      title: 'Capstone Archive Management System',
      summary:
        'Archive and retrieval system for capstone projects with metadata search, file uploads, and role-based access.',
      description:
        'An archive management system built to preserve and organize capstone project submissions from students and researchers. Users can upload project files, abstracts, and metadata such as course, year, and keywords. Faculty and administrators can review entries, approve submissions, and manage access permissions. A search and filter module helps users quickly find relevant past projects for reference or academic review.',
    },
    {
      id: 'project-patient-appointment',
      title: 'Patient Appointment System',
      summary:
        'Clinic scheduling system with patient registration, doctor availability, appointment booking, and status tracking.',
      description:
        'A patient appointment system developed to simplify clinic scheduling and reduce manual booking errors. Patients can register profiles, browse available time slots, and book appointments with assigned practitioners. Staff can manage schedules, update appointment statuses, and view daily queues from a centralized dashboard. The system supports reminders and basic record keeping to improve clinic workflow and patient experience.',
    },
  ]

  return (
    <section id="recent-projects" className="scroll-mt-24">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="md:hidden">
              Recent <span className="text-gray-500">Projects</span>
            </span>
            <span className="hidden md:block">
              Recent
              <br />
              <span className="text-gray-500">Projects</span>
            </span>
          </h2>
          <span className="badge badge-outline badge-sm font-mono text-gray-600 font-bold border-gray-300 shrink-0 mt-1 kbd" aria-hidden="true">
            03
          </span>
        </div>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-lg">
          Deployed institutional systems plus academic builds that shaped my development workflow.
        </p>
        <hr className="mt-4 mb-4 border-gray-300" />
      </header>

      {/* Body */}
      <div className="relative pl-4 md:pl-5 border-l-2 border-base-300 space-y-5">
        
        {/* Extra Impact Info */}
        <ul className="list rounded-box gap-3">
          <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-semibold opacity-60">{sectionExtra.label}</div>
              <div className="text-xs md:text-sm font-bold mt-0.5">{sectionExtra.title}</div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{sectionExtra.detail}</p>
            </div>
          </li>
        </ul>

        {/* Deployed Projects Section */}
        <div>
          <p className="text-[10px] uppercase font-semibold opacity-60 mb-2">Deployed:</p>
          <ul className="list rounded-box gap-3">
            {recentProjectsData.map((project) => (
              <li key={project.id} className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
                <div className="size-10 rounded-box bg-base-300 flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                  {project.year}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center flex-wrap gap-1.5">
                    <span className="text-[10px] uppercase font-semibold opacity-60">{project.beneficiary}</span>
                  </div>
                  <div className="text-xs md:text-sm font-bold mt-0.5">{project.title}</div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.summary}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
                  data-tip="See more"
                  aria-label={`View ${project.title} details`}
                  onClick={() => document.getElementById(project.id).showModal()}
                >
                  {externalLinkIcon}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Academic Projects Section */}
        <div>
          <p className="text-[10px] uppercase font-semibold opacity-60 mb-2">Others:</p>
          <ul className="list rounded-box gap-2.5">
            {otherProjects.map((project) => (
              <li key={project.id} className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
                <div className="min-w-0">
                  <div className="text-xs md:text-sm font-bold text-neutral-800">{project.title}</div>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{project.summary}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
                  data-tip="See more"
                  aria-label={`View ${project.title} details`}
                  onClick={() => document.getElementById(project.id).showModal()}
                >
                  {externalLinkIcon}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Meta */}
        <p className="mt-2 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
          {recentProjectsData.length} deployed · {otherProjects.length} academic ·{' '}
          {recentProjectsData.length + otherProjects.length} total
        </p>

        {/* Project Detail Modals with max-height limits for mobile */}
        {recentProjectsData.map((project) => (
          <dialog key={`${project.id}-modal`} id={project.id} className="modal">
            <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-200 shadow-2xl rounded-box p-6 bg-white">
              <form method="dialog">
                <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <p className="text-[10px] uppercase font-semibold opacity-60 text-gray-500">{project.beneficiary}</p>
              <h3 className="font-bold text-lg text-neutral-800 mt-1">{project.title}</h3>
              <p className="text-sm opacity-70 mt-1 font-mono">{project.year} · Deployed Project</p>
              <hr className="my-3 border-gray-200" />
              <p className="py-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
            </div>
            <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-xs">
              <button type="submit">close</button>
            </form>
          </dialog>
        ))}

        {/* Other Projects Detail Modals */}
        {otherProjects.map((project) => (
          <dialog key={`${project.id}-modal`} id={project.id} className="modal">
            <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-200 shadow-2xl rounded-box p-6 bg-white">
              <form method="dialog">
                <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h3 className="font-bold text-lg text-neutral-800">{project.title}</h3>
              <p className="text-xs font-semibold opacity-60 text-gray-500 mt-1">Academic Build</p>
              <hr className="my-3 border-gray-200" />
              <p className="py-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
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

import './App.css'
import profileImage from './assets/gian.png'
import resumePdf from './assets/Gian Carlo N. Ulep - RESUME - 2026.pdf'

// Import certificates
import PMCert from './assets/certs/Understanding Project management from basic to advance.png'
import ChatGPTCert from './assets/certs/Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI.png'
import CyberSecurityCert from './assets/certs/Usage of AI Tools in Cyber Security.png'
import MentalHealthCert from './assets/certs/10 Keys to Mental Health at Work - Support Wellbeing with AI Tools.png'
import EACert from './assets/certs/AI x Enterprise Architecture - Powering Emerging Tech.png'
import DevFestCert from './assets/certs/DevFest_2025_Certificate.png'

const navItems = [
  {
    label: 'About',
    href: '#about',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
        <path fillRule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" />
      </svg>
    ),
  },
  {
    label: 'Experience',
    href: '#experience',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <g fillRule="evenodd">
          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
          <path d="M14 4a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3zm1 5H9v10h6zm5 0h-3v10h3zM7 9H4v10h3zm7-3h-4a1 1 0 0 0-.993.883L9 7h6a1 1 0 0 0-.883-.993z" />
        </g>
      </svg>
    ),
  },
  {
    label: 'Tech Tools',
    href: '#tools',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">stack-line</title><path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"/></svg>
    ),
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">folder-outline</title><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"/></svg>
    ),
  },
  {
    label: 'Others',
    href: '#others',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">more-fill</title><path fill="currentColor" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg>
    ),
  },
]

const projects = [
  {
    year: '2025',
    title: 'CHMSU: AGRM',
    subtitle: 'Integrated Online Platform for Academic Grade and Report Management',
    organization: 'Carlos Hilado Memorial State University - Alijis',
    stack: ['PHP', 'MySQL', 'Tailwind CSS v3', 'Flowbite', 'JavaScript', 'AJAX', 'TCPDF', 'PhpSpreadsheet', 'PHPMailer', 'Chart.js'],
    summary: 'A comprehensive academic management system that centralizes institutional data for administrators, faculty, and students with tailored dashboards and access levels.',
    highlights: [
      'Student records, faculty profiles, course enrollments, programs, sections, and grading period management',
      'Grade encoding and automatic computation across assessments, exams, participation, projects, and term grades',
      'QR-based attendance scanning for real-time session logging',
      'Automated email notifications, PDF reports, and Excel exports',
    ],
    mockup: (
      <div className="w-full h-full bg-slate-900 text-white p-3 font-mono text-[9px] select-none flex flex-col justify-between">
        <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-slate-400 font-bold ml-1">AGRM Admin</span>
          </div>
          <div className="bg-slate-800 px-2 py-0.5 rounded text-[8px] text-teal-400 font-bold">2025 Live</div>
        </div>
        <div className="flex-1 grid grid-cols-[50px_1fr] gap-2 overflow-hidden">
          <div className="border-r border-slate-800 pr-1.5 flex flex-col gap-1 text-[8px]">
            <div className="bg-teal-950/50 text-teal-400 px-1 py-0.5 rounded font-bold">Grade Mgr</div>
            <div className="text-slate-500 px-1">Students</div>
            <div className="text-slate-500 px-1">Attendance</div>
            <div className="text-slate-500 px-1">Reports</div>
          </div>
          <div className="flex flex-col gap-2 overflow-hidden">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-slate-800/80 p-1 rounded">
                <div className="text-slate-500 text-[5px]">Students</div>
                <div className="font-bold text-teal-400">1,240</div>
              </div>
              <div className="bg-slate-800/80 p-1 rounded">
                <div className="text-slate-500 text-[5px]">Sections</div>
                <div className="font-bold text-teal-400">32</div>
              </div>
              <div className="bg-slate-800/80 p-1 rounded">
                <div className="text-slate-500 text-[5px]">Passing %</div>
                <div className="font-bold text-teal-400">94.2%</div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-2 rounded flex-1 flex flex-col justify-end gap-1.5 overflow-hidden">
              <div className="flex justify-between items-end gap-1 h-16 px-2">
                <div className="w-3 bg-teal-500 rounded-t h-[40%]"></div>
                <div className="w-3 bg-teal-500 rounded-t h-[65%]"></div>
                <div className="w-3 bg-teal-400 rounded-t h-[85%]"></div>
                <div className="w-3 bg-teal-500 rounded-t h-[55%]"></div>
                <div className="w-3 bg-teal-600 rounded-t h-[75%]"></div>
                <div className="w-3 bg-teal-400 rounded-t h-[95%]"></div>
              </div>
              <div className="border-t border-slate-700 pt-1 flex justify-between text-[5px] text-slate-500 font-mono">
                <span>BSIT 1</span>
                <span>BSIT 2</span>
                <span>BSIT 3</span>
                <span>BSIT 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    year: '2026',
    title: 'PGSO - ULPMMS',
    subtitle: 'Unified Lot and Property Management and Monitoring System',
    organization: 'Provincial Government of Negros Occidental',
    stack: ['PHP', 'MySQL', 'Tailwind CSS v3', 'Flowbite', 'JavaScript', 'AJAX', 'Leaflet.js', 'PhpSpreadsheet', 'Chart.js'],
    summary: 'A provincial-scale platform for managing and monitoring government housing lots and property assets under a unified authentication and user management layer.',
    highlights: [
      'Lot and property modules for awardee, beneficiary, location, and payment tracking',
      'Document management with categorized uploads and duplicate transaction detection',
      'Interactive map plotting and boundary visualization using Leaflet.js',
      'Dashboard analytics, Excel import/export, and print-ready official reports',
    ],
    mockup: (
      <div className="w-full h-full bg-emerald-50 text-slate-900 relative font-mono text-[9px] select-none flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        <svg className="absolute inset-0 w-full h-full text-emerald-200/80 stroke-current fill-none" strokeWidth="6" strokeLinecap="round">
          <path d="M-10,40 L300,90" />
          <path d="M80,-10 L120,200" />
          <path d="M20,130 Q150,110 280,160" strokeWidth="4" />
        </svg>
        <svg className="absolute inset-0 w-full h-full fill-rose-500/10 stroke-rose-500/60" strokeWidth="1.5" strokeDasharray="3 3">
          <polygon points="40,50 90,65 80,105 30,90" />
          <polygon points="120,40 180,60 170,110 110,95" className="fill-teal-500/10 stroke-teal-500/60" />
        </svg>
        <div className="absolute left-[80px] top-[90px] -translate-x-1/2 -translate-y-full flex flex-col items-center animate-bounce">
          <div className="bg-rose-500 text-white rounded-full p-0.5 shadow-md border border-white">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full border border-white -mt-0.5 shadow-sm"></div>
        </div>
        <div className="absolute right-2 top-2 flex flex-col gap-1 z-10">
          <div className="bg-white/95 border border-slate-200 shadow-sm p-1 rounded font-bold text-center cursor-pointer hover:bg-slate-50 text-[10px] w-5 h-5 flex items-center justify-center">+</div>
          <div className="bg-white/95 border border-slate-200 shadow-sm p-1 rounded font-bold text-center cursor-pointer hover:bg-slate-50 text-[10px] w-5 h-5 flex items-center justify-center">-</div>
        </div>
        <div className="absolute left-2 bottom-2 z-10 max-w-[120px]">
          <div className="bg-slate-900/90 text-white border border-slate-800 shadow-md p-1.5 rounded text-[7px] font-sans">
            <div className="font-bold text-emerald-400 text-[8px]">Awardee Lot #24</div>
            <div className="text-slate-400">Negros Occidental</div>
          </div>
        </div>
        <div className="z-10 bg-white/90 backdrop-blur border-b border-slate-200/80 px-2.5 py-1 flex justify-between items-center w-full">
          <span className="font-sans font-bold text-[8px] text-slate-800 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            ULPMMS GIS
          </span>
          <span className="font-mono text-[7px] text-emerald-600 bg-emerald-100/70 px-1 py-0.5 rounded font-bold">Interactive Map</span>
        </div>
      </div>
    )
  }
]

const certificates = [
  { title: 'Understanding Project Management: From Basic to Advanced', issuer: 'Great Learning', type: 'Seminar', image: PMCert },
  { title: "Unleashing ChatGPT's Agent Mode - From Chatbot to Autonomous AI", issuer: 'Great Learning', type: 'Seminar', image: ChatGPTCert },
  { title: 'Usage of AI Tools in Cyber Security', issuer: 'Great Learning', type: 'Seminar', image: CyberSecurityCert },
  { title: '10 Keys to Mental Health at Work - Supporting Wellbeing with AI Tools', issuer: 'Great Learning', type: 'Seminar', image: MentalHealthCert },
  { title: 'AI x Enterprise Architecture - Powering Emerging Tech', issuer: 'Great Learning', type: 'Seminar', image: EACert },
  { title: "DevFest Bacolod '25", issuer: 'Google Developer Groups', type: 'Seminar', image: DevFestCert },
  { title: 'Networking Basics', issuer: 'Cisco', type: 'Credential', image: null },
  { title: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco', type: 'Credential', image: null },
  { title: 'Networking Devices and Initial Configuration', issuer: 'Cisco', type: 'Credential', image: null }
]

const getTechIcon = (tech) => {
  const icons = {
    'PHP': { color: 'bg-indigo-50 text-indigo-700 border-indigo-200/80', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.2H8.4V7.8h1.8v2.6h1.6V7.8h1.8v8.4h-1.8v-2.8H10.2v2.8zm6.5-4.2c0 1.2-.6 1.8-1.7 1.8h-.9v2.4H12.3V7.8h2.6c1.1 0 1.7.6 1.7 1.8v2.4zm-1.7-.8c0-.4-.2-.6-.6-.6h-.5v1.2h.5c.4 0 .6-.2.6-.6v-.01z" /></svg> },
    'MySQL': { color: 'bg-blue-50 text-blue-700 border-blue-200/80', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2V8h2v8z" /></svg> },
    'Tailwind CSS v3': { color: 'bg-sky-50 text-sky-700 border-sky-200/80', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 11.2c-.8.8-2.2.8-3 0l-3-3c-.8-.8-.8-2.2 0-3s2.2-.8 3 0l3 3c.8.8.8 2.2 0 3zm2.6-2.6c-.8.8-2.2.8-3 0l-3-3c-.8-.8-.8-2.2 0-3s2.2-.8 3 0l3 3c.8.8.8 2.2 0 3z" /></svg> },
    'Flowbite': { color: 'bg-indigo-50 text-indigo-800 border-indigo-200/80', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 11h-9v-2h9v2z" /></svg> },
    'JavaScript': { color: 'bg-yellow-50 text-yellow-800 border-yellow-200/80', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 13h-1.5v-1.5H11V15H9.5v-5h1.5v3.5H13V10h1.5v5z" /></svg> },
    'AJAX': { color: 'bg-emerald-50 text-emerald-800 border-emerald-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> },
    'TCPDF': { color: 'bg-red-50 text-red-700 border-red-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    'PhpSpreadsheet': { color: 'bg-green-50 text-green-700 border-green-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    'PHPMailer': { color: 'bg-purple-50 text-purple-700 border-purple-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    'Chart.js': { color: 'bg-orange-50 text-orange-700 border-orange-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    'Leaflet.js': { color: 'bg-rose-50 text-rose-700 border-rose-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> }
  }
  return icons[tech] || { color: 'bg-slate-50 text-slate-700 border-slate-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> }
}



function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-4 z-50 mx-4 md:mx-12 lg:mx-20 xl:mx-32">
      <div className="flex justify-center">
        <div className="navbar rounded-box border border-slate-200 bg-base-100/95 px-3 shadow-sm backdrop-blur max-w-fit">
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost" aria-label="Open navigation">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="-1" className="menu menu-sm dropdown-content z-1 mt-3 w-56 rounded-box bg-base-100 p-2 shadow">
                {navItems.map((item) => (
                  <li key={item.href}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="navbar-center flex gap-2">
            <ul className="menu menu-horizontal bg-base-200 rounded-box px-1 hidden lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="tooltip" data-tip={item.label}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            
            <a href={resumePdf} download="Gian Carlo N. Ulep - RESUME - 2026.pdf" className="btn btn-neutral btn-sm gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.903 8.586a1 1 0 0 0-.196-.293l-6-6a1 1 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a1 1 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a1 1 0 0 0-.051-.259q-.014-.048-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z" />
                <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z" />
              </svg>
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
    </div >
  )
}

function App() {
  return (
    <main data-theme="light" className="slanted-lines min-h-screen text-slate-950">
      <Navbar />

      <section id="about" className="w-full min-h-screen px-4 md:px-12 lg:px-20  pb-20 pt-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <div className="hover-3d mx-auto lg:mx-0 my-8 w-full max-w-96 cursor-pointer">
            <div
              className="card w-full max-w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] border border-slate-800 shadow-xl overflow-hidden"
              style={{ backgroundSize: '4.95em 4.95em' }}
            >
              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="font-bold tracking-wider text-slate-300 text-sm">Web / Software Developer</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">BS in Information Technology</div>
                  </div>
                  <div className="avatar">
                    <div className="w-24 h-24 rounded-2xl border border-white/20 overflow-hidden shadow-inner bg-slate-900">
                      <img src={profileImage} alt="Gian Carlo N. Ulep" className="object-cover object-top h-full w-full" />
                    </div>
                  </div>
                </div>
                <div className="text-lg tracking-widest mb-6 font-mono text-slate-300">jingjing052704@gmail.com</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">Name</div>
                    <div className="font-bold text-sm tracking-wide">GIAN CARLO N. ULEP</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">Age</div>
                    <div className="font-bold text-sm font-mono">22</div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Portfolio</p>
            <h1 className="mt-3 text-5xl font-bold leading-tight tracking-normal md:text-7xl">
              Gian Carlo N. Ulep
            </h1>
            <div className="mt-5 text-4xl font-bold leading-none text-slate-950 md:text-7xl">
              <span className="text-rotate max-md:text-4xl">
                <span className="justify-items-start">
                  <span>DESIGN</span>
                  <span>DEVELOP</span>
                  <span>DEPLOY</span>
                  <span>SCALE</span>
                  <span>MAINTAIN</span>
                  <span>REPEAT</span>
                </span>
              </span>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aspiring software and web developer with a passion for building efficient, user-friendly, and scalable applications. Skilled in web development, database management, UI/UX design, and modern development technologies.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <p><span className="font-semibold text-slate-950">Education:</span> BS Information Technology, CHMSU</p>
              <p><span className="font-semibold text-slate-950">Year:</span> 2022-2026</p>
              <p><span className="font-semibold text-slate-950">Email:</span> jingjing052704@gmail.com</p>
              <p><span className="font-semibold text-slate-950">Phone:</span> 09382877598 / 09562657521</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Skills</p>
          <h2 className="mt-2 text-4xl font-bold tracking-normal">Tech stack and development strengths.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-box border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold">Frontend</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline border-slate-300">HTML5</span>
                <span className="badge badge-outline border-slate-300">CSS3</span>
                <span className="badge badge-outline border-slate-300">JavaScript</span>
                <span className="badge badge-outline border-slate-300">React</span>
                <span className="badge badge-outline border-slate-300">Next.js</span>
                <span className="badge badge-outline border-slate-300">Vue.js</span>
                <span className="badge badge-outline border-slate-300">Tailwind CSS</span>
                <span className="badge badge-outline border-slate-300">Bootstrap</span>
              </div>
            </div>
            <div className="rounded-box border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold">Backend</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline border-slate-300">PHP</span>
                <span className="badge badge-outline border-slate-300">Laravel</span>
              </div>
            </div>
            <div className="rounded-box border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold">Database & BaaS</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline border-slate-300">MySQL</span>
                <span className="badge badge-outline border-slate-300">PostgreSQL</span>
                <span className="badge badge-outline border-slate-300">Supabase</span>
                <span className="badge badge-outline border-slate-300">Firebase</span>
              </div>
            </div>
            <div className="rounded-box border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold">UI/UX & Design</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline border-slate-300">Figma</span>
                <span className="badge badge-outline border-slate-300">Adobe XD</span>
                <span className="badge badge-outline border-slate-300">Canva</span>
                <span className="badge badge-outline border-slate-300">Responsive Web Design</span>
                <span className="badge badge-outline border-slate-300">Wireframing</span>
                <span className="badge badge-outline border-slate-300">Prototyping</span>
              </div>
            </div>
            <div className="rounded-box border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold">Software Development</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline border-slate-300">OOP</span>
                <span className="badge badge-outline border-slate-300">MVC Architecture</span>
                <span className="badge badge-outline border-slate-300">CRUD Development</span>
                <span className="badge badge-outline border-slate-300">Database Design</span>
                <span className="badge badge-outline border-slate-300">System Analysis</span>
                <span className="badge badge-outline border-slate-300">Testing & Debugging</span>
              </div>
            </div>
            <div className="rounded-box border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold">Additional Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge badge-outline border-slate-300">Full-Stack Development</span>
                <span className="badge badge-outline border-slate-300">API Integration</span>
                <span className="badge badge-outline border-slate-300">Authentication</span>
                <span className="badge badge-outline border-slate-300">Problem Solving</span>
                <span className="badge badge-outline border-slate-300">Technical Documentation</span>
                <span className="badge badge-outline border-slate-300">Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full px-4 md:px-12 lg:px-20  py-20">
        <div className="w-full">
          <div className="mb-8 rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Projects</p>
            <h2 className="mt-2 text-4xl font-bold tracking-normal">Deployed systems and portfolio applications.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="card bg-white border border-slate-200/80 shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Polaroid Photo Wrapper */}
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <div className="aspect-[4/3] w-full bg-slate-950 border border-slate-200/60 rounded shadow-inner overflow-hidden relative">
                    {project.mockup}
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-serif italic text-2xl font-bold text-slate-800">{project.title}</h3>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">{project.organization}</div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="card-body p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="badge badge-neutral text-xs font-mono">{project.year}</span>
                      {/* Stack Icons instead of words */}
                      <div className="flex gap-1.5">
                        {project.stack.map((item) => {
                          const info = getTechIcon(item);
                          return (
                            <div key={item} className="tooltip tooltip-top" data-tip={item}>
                              <div className={`p-1.5 rounded-full border ${info.color}`}>
                                {info.icon}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-slate-800 leading-snug">{project.subtitle}</h4>
                    <p className="text-slate-600 text-xs mt-3 leading-relaxed">{project.summary}</p>
                  </div>

                  <div className="mt-4">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">Key Accomplishments</div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-xs leading-relaxed text-slate-700 bg-slate-50/80 border border-slate-100 rounded-lg p-2.5 flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">✔</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Certificates & Credentials</p>
          <h2 className="mt-2 text-4xl font-bold tracking-normal">Continuous learning and professional exposure.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div key={cert.title} className="card bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
                {cert.image ? (
                  <figure className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative border-b border-slate-100">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </figure>
                ) : (
                  <div className="aspect-[4/3] w-full bg-slate-900 border-b border-slate-800 flex flex-col justify-between p-5 relative select-none">
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                      backgroundSize: '8px 8px'
                    }}></div>
                    <div className="flex justify-between items-start z-10">
                      <div className="text-[10px] font-mono text-slate-400 tracking-wider">CISCO NETWORK ACADEMY</div>
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="my-auto z-10">
                      <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-1">CERTIFIED</div>
                      <div className="text-sm font-bold text-white line-clamp-2 leading-snug">{cert.title}</div>
                    </div>
                    <div className="flex justify-between items-end z-10 border-t border-white/10 pt-2 text-[8px] text-slate-500 font-mono">
                      <span>CREDENTIAL</span>
                      <span className="text-slate-400 font-bold">VERIFIED</span>
                    </div>
                  </div>
                )}

                <div className="card-body p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className={`badge text-[10px] font-bold ${cert.type === 'Seminar' ? 'badge-secondary' : 'badge-primary'}`}>
                        {cert.type}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">{cert.issuer}</div>
                    </div>
                    <h3 className="card-title text-sm font-bold text-slate-800 leading-snug line-clamp-2 mb-1">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="card-actions justify-end mt-4 pt-3 border-t border-slate-100">
                    {cert.image && (
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-ghost text-teal-600 font-bold hover:bg-teal-50"
                      >
                        View Certificate
                      </a>
                    )}
                    {!cert.image && (
                      <span className="text-[10px] text-slate-400 font-mono py-1">Verified via Credly</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 mt-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  )
}

export default App

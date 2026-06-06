import './App.css'
import profileImage from './assets/gian.png'
import resumePdf from './assets/Gian Carlo N. Ulep - RESUME - 2026.pdf'

// Import certificates (kept but section removed, so not used in output)
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">about</title><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
    ),
  },
  {
    label: 'Experience',
    href: '#experience',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">case-bold</title><path fill="currentColor" fill-rule="evenodd" d="M10.276 2.255c.083-.005.171-.005.285-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683q.045.034.09.064c2.153.003 3.278.042 4.052.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434c.775-.63 1.899-.67 4.053-.673q.045-.03.09-.064c.267-.204.459-.46.542-.683c.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719m4.543 2.563q.035.093.08.182H9.101q.043-.09.08-.182v-.003l.005-.01l.005-.012l.005-.012l.003-.01l.002-.005l.004-.012l.004-.012l.002-.006l.003-.008l.002-.007l.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.01.028.023.063.062.181l.002.006l.002.007l.003.008l.002.006l.004.012l.004.012l.002.005l.004.01l.004.012l.005.012l.004.01zM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5m-5.99 2.87l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65" clip-rule="evenodd"/></svg>
    ),
  },
  {
    label: 'Tech Tools',
    href: '#tools',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">stack-fill</title><path fill="currentColor" d="m20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0"/></svg>
    ),
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 20 20"><title xmlns="">folder</title><path fill="currentColor" d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554 0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342 2H3.087c-.555 0-1.059.447-1.12.994L1.675 6h16.931zM19.412 7H.588a.58.58 0 0 0-.577.635l.923 9.669A.77.77 0 0 0 1.7 18h16.6a.77.77 0 0 0 .766-.696l.923-9.669A.58.58 0 0 0 19.412 7"/></svg>    ),
  },
  {
    label: 'Others',
    href: '#others',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">more</title><path fill="currentColor" d="M9 20q-.475 0-.9-.213t-.7-.587L2 12l5.4-7.2q.275-.375.7-.587T9 4h11q.825 0 1.413.587T22 6v12q0 .825-.587 1.413T20 20zm1.713-7.288Q11 12.425 11 12t-.288-.712T10 11t-.712.288T9 12t.288.713T10 13t.713-.288m3.5 0q.287-.287.287-.712t-.288-.712T13.5 11t-.712.288T12.5 12t.288.713t.712.287t.713-.288m3.5 0Q18 12.426 18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13t.713-.288"/></svg>    ),
  },
]

// Empty projects array
const projects = []

const certificates = [] // Empty certificates array

const getTechIcon = (tech) => {
  // Simplified for empty template
  return { color: 'bg-slate-50 text-slate-700 border-slate-200/80', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> }
}

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-3 z-50 w-full">
      <div className="navbar w-full">
        <div className="flex-none">
          <details className="dropdown dropdown-start">
            <summary className="list-none cursor-pointer">
              <div className="menu menu-horizontal px-1 gap-1 bg-base-300 shadow-xl rounded-box">
                <li className="list-none">
                  <div className="tooltip tooltip-right" data-tip="Links">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">link-fill</title><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m17.303 9.524l3.182 3.182a5.5 5.5 0 1 1-7.778 7.778l-1.06-1.06a1.5 1.5 0 1 1 2.12-2.122l1.062 1.061a2.5 2.5 0 0 0 3.535-3.536l-3.182-3.182a2.5 2.5 0 0 0-2.681-.56q-.242.096-.454.196l-.464.217c-.62.28-1.097.4-1.704-.206c-.872-.872-.646-1.677.417-2.41a5.5 5.5 0 0 1 7.007.642m-6.01-6.01l1.06 1.06a1.5 1.5 0 0 1-2.12 2.122l-1.061-1.06A2.5 2.5 0 1 0 5.636 9.17l3.182 3.182a2.5 2.5 0 0 0 2.681.56q.242-.096.454-.196l.464-.217c.62-.28 1.098-.4 1.704.206c.872.872.646 1.677-.417 2.41a5.5 5.5 0 0 1-7.007-.642l-3.182-3.182a5.5 5.5 0 1 1 7.778-7.778Z"/></g></svg>                  </div>
                </li>
              </div>
            </summary>
            <ul className="dropdown-content menu bg-base-300 rounded-box z-[1] p-2 shadow border border-slate-200 mt-2">
              <li>
                <a href="https://www.facebook.com/Shmingmong" target="_blank" rel="noopener noreferrer" className="tooltip tooltip-right" data-tip="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/gian-carlo-ulep-003490346/" target="_blank" rel="noopener noreferrer" className="tooltip tooltip-right" data-tip="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
                </a>
              </li>

              <li>
                <a href="https://github.com/Jingjing-20" target="_blank" rel="noopener noreferrer" className="tooltip tooltip-right" data-tip="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg>
                </a>
              </li>

              <div className="divider my-0"></div>

              <li>
                <a href={resumePdf} download="Gian Carlo N. Ulep - RESUME - 2026.pdf" className="tooltip tooltip-right" data-tip="Resume">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /></svg>
                </a>
              </li>
            </ul>
          </details>
        </div>
        
        {/* Empty space for balance - pushes center items to middle */}
        <div className="flex-1"></div>
        
        {/* Centered Navigation Icons */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1 bg-base-300 shadow-xl rounded-box">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="tooltip tooltip-bottom" data-tip={item.label}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Empty space for balance */}
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

function App() {
  return (
    <main data-theme="light" className="slanted-lines min-h-screen text-slate-950">
      <Navbar />

      {/* Empty Card Template: About */}
      <section id="about" className="w-full min-h-screen px-4 md:px-12 lg:px-20 pb-20 pt-30 md:pt-25">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left side - 4 columns (3D Card) */}
          <div className="lg:col-span-3 flex items-center justify-center lg:p-16">
            <a href="#" className="hover-3d w-full max-w-md lg:max-w-none cursor-pointer shadow-xl">
              <div className="card w-full bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)]" style={{ backgroundSize: '4.95em 4.95em' }}>
                <div className="card-body p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6 md:mb-10">
                    {/* Profile Image - Top Left */}
                    <div className="avatar">
                      <div className="w-20 h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 rounded-2xl border border-white/20 overflow-hidden shadow-inner bg-slate-900">
                        <img src={profileImage} alt="Gian Carlo N. Ulep" className="object-cover object-top h-full w-full" />
                      </div>
                    </div>
                    {/* Icon - Top Right */}
                      <div>
                        <div className="font-medium text-sm md:text-xl lg:text-2xl text-right">Web & Software Developer</div>
                      </div>                    
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="mb-6 md:mb-9">
                      <div className="text-3xl md:text-5xl lg:text-6xl mt-1 font-medium opacity-40">Gian Carlo N. Ulep</div>
                    </div>   
                    <div className="flex justify-between">
                      <div>
                        <div className="text-xs opacity-30">Email</div>
                        <div className="text-sm md:text-lg lg:text-xl">jingjing052704@gmail.com</div>
                      </div>
                      <div>
                        <div className="text-xs opacity-30">Age</div>
                        <div className="text-sm md:text-lg lg:text-xl">22</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </a>
          </div>

          {/* Right side - 2 columns (Info Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">About Me</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Aspiring software and web developer with a passion for building efficient, user-friendly, and scalable applications.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Education:</span>
                  <span className="text-slate-600">BS IT, CHMSU</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Year:</span>
                  <span className="text-slate-600">2022-2026</span>
                </div>
              </div>
            </div>

            <div className="rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Phone</div>
                  <div className="text-slate-700">09382877598</div>
                  <div className="text-slate-700">09562657521</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Email</div>
                  <div className="text-slate-700">jingjing052704@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">2+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">9+</div>
                  <div className="text-xs text-slate-600">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty Card Template: Experience */}
      <section id="experience" className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-6 min-h-[60vh]">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-700">Experience Section</h2>
            <p className="text-slate-500 max-w-md">This is an empty card template. Add your experience content here.</p>
          </div>
        </div>
      </section>

      {/* Empty Card Template: Tech Tools */}
      <section id="tools" className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-6 min-h-[60vh]">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-700">Tech Tools Section</h2>
            <p className="text-slate-500 max-w-md">This is an empty card template. Add your tech tools content here.</p>
          </div>
        </div>
      </section>

      {/* Empty Card Template: Projects */}
      <section id="projects" className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-6 min-h-[60vh]">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-700">Projects Section</h2>
            <p className="text-slate-500 max-w-md">This is an empty card template. Add your project content here.</p>
          </div>
        </div>
      </section>

      {/* Empty Card Template: Others */}
      <section id="others" className="w-full px-4 md:px-12 lg:px-20 py-20">
        <div className="w-full rounded-box border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-6 min-h-[60vh]">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-700">Others Section</h2>
            <p className="text-slate-500 max-w-md">This is an empty card template. Add your other content here.</p>
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
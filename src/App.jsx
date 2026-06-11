import './App.css'
import profileImage from './assets/gian.png'
import resumePdf from './assets/Gian Carlo N. Ulep - RESUME - 2026.pdf'

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
        
        <div className="flex-1"></div>
        
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
        
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

function App() {
  return (
    <main data-theme="light" className="slanted-lines">
      <Navbar />

      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        {/* Fixed Left Side - Desktop Only */}
        <aside className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2 items-center justify-center p-12">
          {/* Profile Card - Bigger */}
          <div className="hover-3d w-full max-w-lg cursor-pointer">
            <div
              className="card w-full bg-[#151312] text-white border border-slate-800 shadow-2xl relative p-8 flex flex-col justify-between aspect-[1.58/1] rounded-2xl overflow-hidden"
              style={{ backgroundSize: '4.95em 4.95em' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] opacity-80 pointer-events-none"></div>
              <div className="absolute -right-10 -top-10 w-52 h-52 bg-lime-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -left-10 -bottom-10 w-52 h-52 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex justify-between items-start z-10">
                <div>
                  <div className="text-xs font-mono tracking-widest text-[#c5ff41] uppercase font-black">IT Specialist</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">CHMSU Bacolod</div>
                </div>
                <div className="avatar">
                  <div className="w-20 h-20 rounded-xl border border-white/10 overflow-hidden bg-slate-900 shadow-lg">
                    <img src={profileImage} alt="Gian Carlo N. Ulep" className="object-cover object-top h-full w-full" />
                  </div>
                </div>
              </div>

              <div className="my-3 z-10">
                <div className="text-base tracking-widest font-mono text-slate-300">jingjing052704@gmail.com</div>
              </div>

              <div className="flex justify-between items-end z-10 border-t border-white/5 pt-5">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-mono">Cardholder</div>
                  <div className="font-bold text-sm tracking-wider text-white">GIAN CARLO N. ULEP</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 font-mono">Birthdate</div>
                  <div className="font-mono text-sm text-white">05/27/2004</div>
                </div>
              </div>
            </div>
            {/* 8 empty divs for 3D card tilt effect */}
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
          </div>
        </aside>

        {/* Scrollable Content - Full width on mobile, right side on desktop */}
        <div className="w-full lg:ml-[50%] lg:w-1/2 h-screen overflow-y-auto bg-white/50">
          <div className="min-h-screen">
            
            {/* About Section - Shows profile info on mobile */}
            <section id="about" className="min-h-screen flex items-center justify-center p-6 lg:p-12">
              <div className="w-full max-w-2xl">
                {/* Mobile Profile Card */}
                <div className="lg:hidden mb-12">
                  <div className="hover-3d w-full max-w-96 mx-auto cursor-pointer mb-8">
                    <div
                      className="card w-full bg-[#151312] text-white border border-slate-800 shadow-2xl relative p-6 flex flex-col justify-between aspect-[1.58/1] rounded-2xl overflow-hidden"
                      style={{ backgroundSize: '4.95em 4.95em' }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] opacity-80 pointer-events-none"></div>
                      <div className="absolute -right-10 -top-10 w-44 h-44 bg-lime-500/10 rounded-full blur-2xl pointer-events-none"></div>
                      <div className="absolute -left-10 -bottom-10 w-44 h-44 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="flex justify-between items-start z-10">
                        <div>
                          <div className="text-[10px] font-mono tracking-widest text-[#c5ff41] uppercase font-black">IT Specialist</div>
                          <div className="text-[9px] text-slate-400 font-mono mt-0.5">CHMSU Bacolod</div>
                        </div>
                        <div className="avatar">
                          <div className="w-16 h-16 rounded-xl border border-white/10 overflow-hidden bg-slate-900 shadow-lg">
                            <img src={profileImage} alt="Gian Carlo N. Ulep" className="object-cover object-top h-full w-full" />
                          </div>
                        </div>
                      </div>

                      <div className="my-2 z-10">
                        <div className="text-sm tracking-widest font-mono text-slate-300">jingjing052704@gmail.com</div>
                      </div>

                      <div className="flex justify-between items-end z-10 border-t border-white/5 pt-4">
                        <div>
                          <div className="text-[8px] uppercase tracking-widest text-slate-500 font-mono">Cardholder</div>
                          <div className="font-bold text-xs tracking-wider text-white">GIAN CARLO N. ULEP</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] uppercase tracking-widest text-slate-500 font-mono">Birthdate</div>
                          <div className="font-mono text-xs text-white">05/27/2004</div>
                        </div>
                      </div>
                    </div>
                    {/* 8 empty divs for 3D card tilt effect */}
                    <div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div>
                  </div>
                </div>

                {/* Profile Info Text */}
                <div className="text-center lg:text-left">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-500">
                    BS in Information Technology (2022 - 2026)
                  </span>
                  <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-none tracking-tight text-slate-900 uppercase">
                    WEB<br />DEVELOPER
                  </h1>
                  
                  {/* Smooth Text Rotation Animation */}
                  <div className="mt-5 text-3xl lg:text-4xl font-extrabold text-slate-800">
                    <span className="text-rotate">
                      <span className="justify-items-start text-orange-500">
                        <span>DESIGN</span>
                        <span>DEVELOP</span>
                        <span>DEPLOY</span>
                        <span>SCALE</span>
                        <span>MAINTAIN</span>
                        <span>REPEAT</span>
                      </span>
                    </span>
                  </div>

                  <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
                    Aspiring software and web developer with a passion for building efficient, 
                    user-friendly, and scalable applications. Skilled in web development, 
                    database management, UI/UX design, and modern technologies, with a strong 
                    commitment to continuous learning.
                  </p>

                  <div className="mt-6 grid gap-3 text-sm text-slate-600">
                    <div className="flex gap-2 justify-center lg:justify-start">
                      <span className="font-bold text-slate-900">Institution:</span>
                      <span>CHMSU - Alijis</span>
                    </div>
                    <div className="flex gap-2 justify-center lg:justify-start">
                      <span className="font-bold text-slate-900">Phone:</span>
                      <span>09382877598 / 09562657521</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-4">Experience</h2>
                <p className="text-lg text-slate-600">Content for the Experience section goes here.</p>
              </div>
            </section>

            {/* Tech Tools Section */}
            <section id="tools" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center lg:text-left max-w-4xl">
                <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-8">Tech Tools</h2>

                <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                  <span className="tooltip" data-tip="HTML5"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg></span></span>
                  <span className="tooltip" data-tip="CSS"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60"/><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg></span></span>
                  <span className="tooltip" data-tip="JavaScript"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg></span></span>
                  <span className="tooltip" data-tip="React"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#00bcd4" d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6"/><path fill="#00bcd4" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/><path fill="#00bcd4" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z"/><path fill="#00bcd4" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"/></svg></span></span>
                  <span className="tooltip" data-tip="Next.js"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"/></svg></span></span>
                  <span className="tooltip" data-tip="Vue"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#41b883" d="M1.791 3.851L12 21.471L22.209 3.936V3.85H18.24l-6.18 10.616L5.906 3.851z"/><path fill="#35495e" d="m5.907 3.851l6.152 10.617L18.24 3.851h-3.723L12.084 8.03L9.66 3.85z"/></svg></span></span>
                  <span className="tooltip" data-tip="Tailwind CSS"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"/></svg></span></span>
                  <span className="tooltip" data-tip="Bootstrap"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#boostGrad)" rx="60"/><path fill="#fff" d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"/></g><defs><linearGradient id="boostGrad" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop stop-color="#9013FE"/><stop offset="1" stop-color="#6B11F4"/></linearGradient></defs></svg></span></span>
                  <span className="tooltip" data-tip="PHP"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><ellipse cx="64" cy="64" rx="64" ry="33.667" fill="#777BB3"/><path fill="#fff" d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l-1.796-9.343zm16.464 0l1.796 9.343h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l.408-2.12.8-4.123 1.2-6.22V55.826z"/></svg></span></span>
                  <span className="tooltip" data-tip="Laravel"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#ff5252" d="M31.963 9.12c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a2 2 0 0 0-.162-.205a1 1 0 0 0-.088-.072a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a.7.7 0 0 0-.187.191a1 1 0 0 0-.064.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085a1 1 0 0 0-.037.265v5.382l-4 2V5.385a1 1 0 0 0-.037-.265c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a1 1 0 0 0-.063-.086a.7.7 0 0 0-.187-.191a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a1 1 0 0 0-.088.072a1 1 0 0 0-.1.119a1 1 0 0 0-.063.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085A1 1 0 0 0 0 5.385v19a1 1 0 0 0 .553.894l6 3l6 3c.014.007.03.005.046.011a.9.9 0 0 0 .802 0c.015-.006.032-.004.046-.01l12-6a1 1 0 0 0 .553-.895v-5.382l5.447-2.724a1 1 0 0 0 .553-.894v-6a1 1 0 0 0-.037-.265M9.236 21.385l4.211-2.106h.001L19 16.503l3.764 1.882L13 23.267ZM24 13.003v3.764l-4-2v-3.764Zm1-5.5l3.764 1.882L25 11.267l-3.764-1.882ZM8 19.767V9.003l4-2v10.764ZM7 3.503l3.764 1.882L7 7.267L3.236 5.385Zm-5 3.5l4 2v16.764l-4-2Zm6 16l4 2v3.764l-4-2Zm16 .764l-10 5v-3.764l10-5Zm6-9l-4 2v-3.764l4-2Z"/></svg></span></span>
                  <span className="tooltip" data-tip="MySQL"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#00678C" d="M203.801 178.21c-9.79-.272-17.385.731-23.75 3.409c-1.833.736-4.774.736-5.016 3.043c.98.968 1.098 2.552 1.957 3.894c1.467 2.435 4.041 5.715 6.365 7.417l7.834 5.598c4.774 2.917 10.16 4.622 14.811 7.542c2.694 1.704 5.386 3.894 8.08 5.721c1.372.973 2.203 2.558 3.918 3.163v-.368c-.856-1.091-1.103-2.672-1.956-3.894l-3.677-3.526c-3.547-4.744-7.957-8.884-12.731-12.287c-3.918-2.677-12.484-6.326-14.076-10.825l-.241-.273c2.689-.272 5.872-1.219 8.445-1.949c4.165-1.091 7.957-.851 12.238-1.945l5.88-1.704v-1.091c-2.204-2.189-3.795-5.11-6.119-7.176c-6.242-5.353-13.102-10.586-20.203-14.965c-3.794-2.432-8.692-4.017-12.731-6.081c-1.473-.731-3.918-1.096-4.774-2.312c-2.209-2.672-3.43-6.204-5.021-9.369l-10.037-21.168c-2.203-4.745-3.553-9.49-6.242-13.869c-12.611-20.683-26.324-33.212-47.38-45.502c-4.527-2.555-9.913-3.654-15.64-4.99l-9.18-.49c-1.962-.851-3.919-3.164-5.633-4.26c-6.978-4.38-24.974-13.868-30.12-1.363c-3.305 7.907 4.899 15.692 7.684 19.709c2.085 2.798 4.774 5.96 6.247 9.124c.823 2.067 1.098 4.259 1.957 6.449c1.956 5.352 3.794 11.316 6.365 16.306c1.372 2.555 2.813 5.235 4.527 7.545c.98 1.363 2.695 1.947 3.06 4.136c-1.715 2.435-1.833 6.081-2.813 9.127c-4.409 13.748-2.694 30.78 3.548 40.902c1.962 3.04 6.585 9.734 12.858 7.177c5.509-2.19 4.28-9.124 5.871-15.208c.37-1.458.124-2.432.856-3.408v.273l5.021 10.097c3.795 5.961 10.408 12.167 15.914 16.306c2.936 2.19 5.263 5.964 8.934 7.3v-.368h-.241c-.736-1.091-1.839-1.582-2.818-2.433c-2.203-2.189-4.651-4.867-6.366-7.299c-5.139-6.812-9.666-14.357-13.708-22.142c-1.961-3.771-3.676-7.908-5.262-11.679c-.741-1.461-.741-3.654-1.962-4.379c-1.839 2.672-4.527 4.99-5.88 8.273c-2.327 5.23-2.568 11.679-3.424 18.371c-.494.122-.275 0-.494.272c-3.913-.97-5.263-4.99-6.73-8.393c-3.672-8.638-4.287-22.507-1.104-32.484c.856-2.555 4.533-10.585 3.065-13.018c-.74-2.312-3.183-3.648-4.533-5.475c-1.591-2.312-3.3-5.23-4.403-7.785c-2.936-6.817-4.404-14.357-7.59-21.17c-1.473-3.164-4.041-6.45-6.124-9.367c-2.327-3.286-4.892-5.599-6.73-9.49c-.612-1.363-1.468-3.528-.489-4.99c.242-.973.735-1.363 1.71-1.581c1.59-1.364 6.124.365 7.715 1.09c4.527 1.827 8.322 3.529 12.117 6.081c1.715 1.216 3.553 3.529 5.756 4.14h2.574c3.918.85 8.322.272 11.99 1.363c6.49 2.072 12.364 5.11 17.632 8.398c16.035 10.098 29.26 24.454 38.193 41.611c1.468 2.798 2.08 5.353 3.43 8.273c2.574 5.964 5.757 12.045 8.322 17.888c2.574 5.718 5.021 11.562 8.693 16.306c1.838 2.555 9.18 3.891 12.484 5.23c2.45 1.091 6.242 2.073 8.451 3.409c4.159 2.555 8.322 5.475 12.237 8.273c1.956 1.456 8.081 4.499 8.445 6.926zM78.958 72.487a19.6 19.6 0 0 0-5.015.608v.273h.241c.98 1.947 2.695 3.286 3.918 4.99l2.818 5.84l.242-.272c1.714-1.216 2.573-3.163 2.573-6.08c-.735-.851-.856-1.705-1.468-2.556c-.735-1.216-2.326-1.827-3.309-2.797z"/></svg></span></span>
                  <span className="tooltip" data-tip="PostgreSQL"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#336791" d="M203.48 147.688c-20.32 4.19-21.796-2.693-21.796-2.693 21.466-31.852 30.445-72.282 22.696-82.175-21.122-27-57.692-14.231-58.303-13.894l-.197.035c-4.008-.843-8.438-1.336-13.571-1.406-9.196-.14-16.171 2.412-21.473 6.427 0 0-65.229-26.874-62.198 33.799.646 12.909 18.492 97.734 39.796 72.07 7.798-9.379 15.322-17.304 15.322-17.304 3.726 2.482 8.205 3.748 12.895 3.291l.365-.309a14.2 14.2 0 0 0 .148 3.642c-5.484 6.131-3.867 7.207-14.836 9.464-11.095 2.285-4.57 6.356-.323 7.425 5.161 1.294 17.1 3.122 25.172-8.17l-.324 1.286c2.152 1.723 2.004 12.375 2.32 19.983.317 7.608.816 14.717 2.37 18.9 1.554 4.184 3.375 14.977 17.789 11.953 12.045-2.58 21.256-6.3 22.099-40.851"/><path fill="#000" d="M171.474 169.034c1.146-9.541.802-10.933 7.903-9.393l1.807.161c5.464.246 12.607-.879 16.875-2.826 9.036-4.191 14.393-11.194 5.485-9.352-20.321 4.191-21.797-2.693-21.797-2.693 21.466-31.851 30.445-72.281 22.69-82.174-21.122-27-57.692-14.231-58.303-13.894l-.197.035c-4.008-.843-8.438-1.336-13.571-1.406-9.196-.14-16.171 2.412-21.473 6.427 0 0-65.229-26.874-62.198 33.799.646 12.909 18.492 97.734 39.796 72.07 7.798-9.379 15.322-17.304 15.322-17.304 3.726 2.482 8.205 3.748 12.895 3.291l.365-.309a14.2 14.2 0 0 0 .148 3.642c-5.484 6.131-3.867 7.207-14.836 9.464-11.095 2.285-4.57 6.356-.323 7.425 5.161 1.294 17.1 3.122 25.172-8.17l-.324 1.286c2.152 1.723 2.004 12.375 2.32 19.983.317 7.608.816 14.717 2.37 18.9 1.554 4.184 3.375 14.977 17.789 11.953 12.045-2.58 21.256-6.3 22.099-40.851"/></svg></span></span>
                  <span className="tooltip" data-tip="Supabase"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><defs><linearGradient id="supaG1" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#249361"/><stop offset="1" stop-color="#3ecf8e"/></linearGradient><linearGradient id="supaG2" x1="36.156" x2="54.484" y1="30.578" y2="65.081" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient></defs><path fill="url(#supaG1)" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)"/><path fill="url(#supaG2)" fill-opacity=".2" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)"/><path fill="#3ecf8e" d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"/></svg></span></span>
                  <span className="tooltip" data-tip="Firebase"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 322"><path fill="#FF9100" d="M80.18 312.295c13.455 5.414 28.05 8.628 43.376 9.163a127.5 127.5 0 0 0 58.098-11.71c-21.145-8.307-40.294-20.455-56.638-35.56-10.594 16.963-26.263 30.36-44.835 38.107"/><path fill="#FFC400" d="M125.013 274.193c-37.307-34.504-59.939-84.444-58.026-139.218.062-1.78.156-3.557.266-5.334a96.63 96.63 0 0 0-50.456.528C6.838 147.614.828 167.63.079 189.069-1.853 244.403 31.632 292.75 80.178 312.3c18.572-7.747 34.24-21.13 44.835-38.107"/><path fill="#FF9100" d="M125.015 274.191c8.674-13.88 13.933-30.154 14.545-47.687 1.61-46.12-29.394-85.794-72.306-96.865-.11 1.777-.203 3.555-.265 5.334-1.913 54.775 20.719 104.714 58.026 139.218"/><path fill="#DD2C00" d="M134.761 0c-24.44 19.58-43.738 45.396-55.414 75.136a180.5 180.5 0 0 0-12.113 54.515c42.912 11.07 73.917 50.745 72.306 96.865-.612 17.532-5.887 33.79-14.545 47.687a180.7 180.7 0 0 0 56.637 35.56c42.441-19.618 72.553-61.833 74.297-111.764 1.129-32.351-11.3-61.184-28.864-85.521C208.517 86.738 134.76 0 134.76 0"/></svg></span></span>
                  <span className="tooltip" data-tip="Git"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F03C2E" rx="60"/><path fill="#fff" d="m224.225 119.094l-87.319-87.319a12.87 12.87 0 0 0-14.035-2.793a12.9 12.9 0 0 0-4.177 2.793L100.569 49.9l23 23c5.35-1.875 11.475-.594 15.737 3.669a15.31 15.31 0 0 1 3.631 15.831l22.169 22.169c5.363-1.85 11.55-.657 15.831 3.637a15.32 15.32 0 0 1 3.321 16.706a15.333 15.333 0 0 1-20.029 8.293c-1.86-.771-3.55-1.9-4.973-3.324c-4.5-4.5-5.612-11.125-3.337-16.669l-20.675-20.675v54.407a15.6 15.6 0 0 1 4.062 2.9a15.326 15.326 0 0 1-21.675 21.675a15.32 15.32 0 0 1-3.326-16.704a15.3 15.3 0 0 1 3.326-4.971c1.481-1.475 3.125-2.594 5.019-3.344v-54.913a15.2 15.2 0 0 1-5.019-3.343a15.315 15.315 0 0 1-3.3-16.757L91.644 58.814l-59.875 59.812a12.88 12.88 0 0 0-2.795 14.04a12.9 12.9 0 0 0 2.795 4.179l87.325 87.312a12.9 12.9 0 0 0 4.177 2.793a12.9 12.9 0 0 0 9.858 0a12.9 12.9 0 0 0 4.177-2.793l86.919-86.781a12.88 12.88 0 0 0 3.776-9.109a12.88 12.88 0 0 0-3.776-9.11"/></g></svg></span></span>
                  <span className="tooltip" data-tip="GitHub"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></span></span>
                  <span className="tooltip" data-tip="Figma"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"/></svg></span></span>
                  <span className="tooltip" data-tip="Adobe XD"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 250"><rect width="256" height="249.6" fill="#470137" rx="42.5"/><path fill="#FF61F6" d="m134.578 65.64l-31.943 52.723l34.175 55.985c.22.392.281.852.172 1.288c-.053.186-.167.232-.342.239l-.194-.003l-.236-.006c-.128 0-.271.006-.43.032h-24.64l-.484-.008c-1.328-.035-2.285-.225-2.868-1.199a3292 3292 0 0 0-6.87-13.309a470 470 0 0 0-6.34-11.767l-.958-1.714a783 783 0 0 1-7.642-13.91h-.172a532 532 0 0 1-7.127 13.738q-3.695 6.87-7.299 13.653a608 608 0 0 1-7.384 13.481c-.405.91-1.078 1.1-2.015 1.131l-.39.006H38.064l-.102.003l-.336.03c-.187.011-.299-.029-.335-.311a1.73 1.73 0 0 1 .258-1.202l33.144-54.44l-32.286-54.61q-.514-.684-.172-1.116a1.25 1.25 0 0 1 1.031-.43H63.48a3.6 3.6 0 0 1 1.546.258c.41.233.763.556 1.03.945q3.091 6.87 6.87 13.738a737 737 0 0 0 7.642 13.567a192 192 0 0 1 7.127 13.567h.172a507 507 0 0 1 6.955-13.738q3.518-6.698 7.212-13.482a621 621 0 0 0 7.127-13.48c.132-.424.368-.808.687-1.117a2.5 2.5 0 0 1 1.374-.258h22.497a.984.984 0 0 1 .95 1.634zm50.47 112.473l-1.184.013a53.2 53.2 0 0 1-22.927-4.808a36.45 36.45 0 0 1-16.057-14.512q-5.687-9.445-5.835-23.535l-.004-.765a44.84 44.84 0 0 1 5.84-22.497a42.87 42.87 0 0 1 16.412-16.166l.589-.32q11.16-6.183 26.962-6.183l.46.005l.526.017l.59.026l.656.038l1.102.078l1.248.1l.913.08V55.852q0-1.201 1.03-1.202h21.639a.91.91 0 0 1 1.03 1.03v101.495q0 2.557.198 5.504l.32 4.455l.17 2.577a1.775 1.775 0 0 1-1.031 1.718a85.2 85.2 0 0 1-17.345 5.151a93 93 0 0 1-15.302 1.533m9.291-21.282v-46.883a17 17 0 0 0-2.833-.515a34 34 0 0 0-3.521-.172a26.5 26.5 0 0 0-12.021 2.748a23.5 23.5 0 0 0-9.016 7.9q-3.401 4.974-3.517 12.99l-.004.577a30.3 30.3 0 0 0 1.803 10.99a20.9 20.9 0 0 0 4.81 7.557a18.3 18.3 0 0 0 7.212 4.293a28.3 28.3 0 0 0 8.844 1.375q2.403 0 4.465-.173a18.4 18.4 0 0 0 3.248-.54z"/></svg></span></span> <span className="tooltip" data-tip="Canva"><span className="w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><g fill="#00c4cc"><path d="M59.39.152c-.484.051-1.995.23-3.328.387c-5.374.613-11.468 2.227-16.816 4.48C19.891 13.106 5.324 30.849 1.305 51.2C.359 56.04.129 58.418.129 64c0 7.195.715 12.16 2.61 18.434c6.195 20.53 22.323 36.632 42.906 42.851c6.195 1.871 11.187 2.586 18.355 2.586c7.195 0 12.16-.715 18.434-2.61c20.53-6.195 36.632-22.323 42.851-42.906c1.871-6.195 2.586-11.187 2.586-18.355c0-3.047-.152-6.527-.332-7.809c-2.074-14.796-8.168-27.238-18.328-37.402C99.07 8.703 86.68 2.586 72.19.512c-1.996-.282-11.238-.54-12.8-.36m-20.863 40.32c1.36.41 1.996.794 2.918 1.715c1.793 1.82 2.203 2.817 2.203 5.555c0 2.051-.078 2.434-.691 3.508c-1.18 1.996-3.918 3.84-5.812 3.89c-1.333.028-1.278-.562.18-2.097c1.945-2.023 2.226-2.79 2.226-5.813c-.024-2.917-.383-3.914-1.739-4.734c-1.128-.691-2.355-.64-4.148.203c-4.66 2.23-9.703 9.653-11.672 17.258c-2.613 10.137 2.02 18.25 9.649 16.867c2.226-.41 6.425-2.558 8.246-4.25c1.508-1.379 1.508-1.406 1.66-3.12c.336-3.587 2.867-7.169 6.25-8.833c1.558-.77 1.945-.844 4.043-.844c1.996 0 2.457.102 3.43.637c3.097 1.77 2.457 5.89-.895 5.89c-1.945 0-2.945-1-1.535-1.534c1.383-.512.867-2.434-.742-2.868c-1.895-.488-4.047.793-5.403 3.25c-1.64 2.97-1.715 6.504-.156 8.114c1.512 1.613 3.406.336 4.867-3.329c.766-1.867 1.867-2.867 3.149-2.867c1.125 0 1.332.692.843 2.793c-.718 3.25-.23 4.094 1.793 3.098c.664-.309 1.766-1.023 2.43-1.535l1.254-1l.848-4.43c.922-4.965 1.277-5.633 3.172-5.988c1.82-.336 2.23.562 1.562 3.402l-.36 1.59l1.333-1.36c3.148-3.226 7.015-4.812 8.347-3.48c.715.715.637 1.613-.386 4.785c-.485 1.512-1.153 3.895-1.457 5.25c-.461 2.047-.489 2.535-.23 2.868c.82.972 3.327-.028 5.554-2.204l1.305-1.277l.156-2.844c.152-3.277.457-4.453 1.328-5.504c.82-.972 2.305-1.687 3.098-1.484c.793.207.793.973.078 3.227c-1 3.097-.895 10.238.129 10.238c.41 0 2.507-2.2 3.84-4.043l.996-1.36l-.793-.816c-1.383-1.46-1.715-2.406-1.715-4.789c0-1.738.129-2.379.562-3.227c.719-1.328 1.844-2.3 3.176-2.687c1.406-.434 3.148.281 3.863 1.562c.719 1.305.54 4.223-.383 6.223l-.664 1.457h.895c1.23 0 1.715-.305 3.918-2.379c1.152-1.101 2.484-2.05 3.48-2.511c3.918-1.84 8.528-.895 9.293 1.921c.64 2.254-.765 3.84-3.226 3.66c-1.766-.128-2.098-.59-1.074-1.456c1.843-1.54 0-3.508-2.637-2.793c-1.434.386-3.047 1.996-3.89 3.867c-1.692 3.738-.794 8.14 1.636 8.14c.973 0 2.691-1.921 3.355-3.789c.793-2.152 2.457-3.507 3.711-3.02c.692.255.743.946.309 3.122c-.488 2.383-.563 4.61-.18 5.633c.153.382.614 1.101 1.051 1.586c.816.921.844 1.254.152 1.691c-.332.23-.77.129-1.843-.46c-1.485-.77-2.766-2.153-3.227-3.458l-.281-.766l-1.024.766c-.59.41-1.511.871-2.047 1.023c-2.125.563-4.738-.894-5.964-3.351c-.489-.95-.641-3.738-.282-4.813c.204-.59.204-.59-.617-.18c-.433.231-1.355.485-2.07.563c-1.18.13-1.36.258-2.535 1.742c-1.664 2.07-4.61 4.864-5.813 5.454c-2.558 1.277-3.402.918-4.07-1.72l-.461-1.765l-1.102.973c-1.406 1.23-4.222 2.715-5.836 3.074c-1.535.332-3.175-.156-3.84-1.18c-.995-1.535-.663-4.785.922-9.164c1.176-3.25.333-3.3-2.636-.203c-2.203 2.328-3.149 3.992-3.762 6.578c-.64 2.688-1.41 3.66-3.148 4.07c-1.051.231-1.54-.41-1.332-1.816l.152-1.129l-.973.668c-1.383.946-3.125 1.817-4.328 2.149s-2.789-.024-3.172-.692c-.691-1.175-.691-1.175-1.765-.332c-2.332 1.895-5.66 1.356-7.348-1.152l-.54-.793l-1.687 1.562c-4.867 4.454-10.957 6.45-15.464 5.067c-5.735-1.738-8.907-6.656-8.856-13.746c.024-7.117 3.172-14.617 8.473-20.172c2.996-3.125 5.812-4.969 8.68-5.66c2.07-.512 3.328-.485 5.296.129zm0 0"/><path d="M90.418 58.676c-.563.562-.356 2.816.36 4.25c.359.742.742 1.332.87 1.332c.102 0 .332-.59.512-1.309c.64-2.66-.512-5.504-1.742-4.273m0 0"/></g></svg></span></span></div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-4">Projects</h2>
                <p className="text-lg text-slate-600">Content for the Projects section goes here.</p>
              </div>
            </section>

            {/* Others Section */}
            <section id="others" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-4">Others</h2>
                <p className="text-lg text-slate-600">Content for the Others section goes here.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
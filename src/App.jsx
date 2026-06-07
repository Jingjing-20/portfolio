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
              <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
                <p className="text-lg text-slate-600">Content for the Experience section goes here.</p>
              </div>
            </section>

            {/* Tech Tools Section */}
            <section id="tools" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Tech Tools</h2>
                <p className="text-lg text-slate-600">Content for the Tech Tools section goes here.</p>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
                <p className="text-lg text-slate-600">Content for the Projects section goes here.</p>
              </div>
            </section>

            {/* Others Section */}
            <section id="others" className="min-h-screen flex items-center justify-center border-t border-slate-200 p-6 lg:p-12">
              <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Others</h2>
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
import resumePdf from '../assets/Gian Carlo N. Ulep - RESUME - 2026.pdf'
import { navItems } from '../data/navItems'

export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-3 z-50 w-full">
      <div className="navbar w-full bg-transparent">
        <div className="flex-none">
          <details className="dropdown dropdown-start shadow-xl">
            <summary className="list-none cursor-pointer">
              <div className="menu menu-horizontal px-1 gap-1 bg-base-300 shadow-xl rounded-box">
                <li className="list-none">
                  <div className="tooltip tooltip-right" data-tip="Links">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m17.303 9.524l3.182 3.182a5.5 5.5 0 1 1-7.778 7.778l-1.06-1.06a1.5 1.5 0 1 1 2.12-2.122l1.062 1.061a2.5 2.5 0 0 0 3.535-3.536l-3.182-3.182a2.5 2.5 0 0 0-2.681-.56q-.242.096-.454.196l-.464.217c-.62.28-1.097.4-1.704-.206c-.872-.872-.646-1.677.417-2.41a5.5 5.5 0 0 1 7.007.642m-6.01-6.01l1.06 1.06a1.5 1.5 0 0 1-2.12 2.122l-1.061-1.06A2.5 2.5 0 1 0 5.636 9.17l3.182 3.182a2.5 2.5 0 0 0 2.681.56q.242-.096.454-.196l.464-.217c.62-.28 1.098-.4 1.704.206c.872.872.646 1.677-.417 2.41a5.5 5.5 0 0 1-7.007-.642l-3.182-3.182a5.5 5.5 0 1 1 7.778-7.778Z" /></g></svg>
                  </div>
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

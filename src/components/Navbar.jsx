
const homeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const caseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const folderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const stackIcon = (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z" /></svg>
);

const certificateIcon = (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0" /><path d="M13 17.5V22l2-1.5l2 1.5v-4.5" /><path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2" /></g></svg>
);

const contactIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
    <title>contact</title>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2" />
      <circle cx="12" cy="11" r="3" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
    </g>
  </svg>
);

export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-7 z-50 flex justify-center px-4 w-full">
      <ul className="menu menu-horizontal bg-base-300 rounded-box shadow-xl border border-gray-400 p-2 gap-1 md:gap-2 ">
        <li>
          <a href="#about-me" className="border-b-2 border-transparent hover:border-gray-400 tooltip  font-bold" data-tip="Home" aria-label="Home">
            {homeIcon}
          </a>
        </li>
        <li>
          <a href="#work-experience" className="border-b-2 border-transparent hover:border-gray-400 tooltip  font-bold" data-tip="Experience" aria-label="Experience">
            {caseIcon}
          </a>
        </li>
        <li>
          <a href="#recent-projects" className="border-b-2 border-transparent hover:border-gray-400 tooltip  font-bold" data-tip="Projects" aria-label="Projects">
            {folderIcon}
          </a>
        </li>
        <li>
          <a href="#tech-stack" className="border-b-2 border-transparent hover:border-gray-400 tooltip  font-bold" data-tip="Tools" aria-label="Tools">
            {stackIcon}
          </a>
        </li>
        <li>
          <a href="#participation-certificates" className="border-b-2 border-transparent hover:border-gray-400 tooltip  font-bold" data-tip="Certificates" aria-label="Certificates">
            {certificateIcon}
          </a>
        </li>
        <li>
          <a href="#contact" className="border-b-2 border-transparent hover:border-gray-400 tooltip  font-bold" data-tip="Contact" aria-label="Contact">
            {contactIcon}
          </a>
        </li>
      </ul>
    </div>
  );
}

import React from 'react';

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
<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"/></svg>
);

const certificateIcon = (
<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11.8 6.12a.683.683 0 0 0-.11-.973a.715.715 0 0 0-.992.108l-3.31 4.06l-1.77-1.36a.715.715 0 0 0-.994.089a.683.683 0 0 0 .09.975l2.32 1.81a.715.715 0 0 0 1.003-.1l3.76-4.62z"/><path fill="currentColor" fill-rule="evenodd" d="M6.51.714C7.044.322 7.311.126 7.6.05a1.6 1.6 0 0 1 .787 0c.292.076.56.272 1.09.664l.677.497c.185.136.278.204.378.257q.134.07.279.116c.109.033.222.05.449.085l.83.127c.655.1.982.151 1.24.304c.23.135.422.327.557.557c.153.26.203.588.304 1.24l.127.83c.035.227.052.341.085.45q.045.145.116.278c.054.1.121.193.257.378l.497.677c.392.534.588.801.664 1.09a1.6 1.6 0 0 1 0 .787c-.075.292-.272.56-.664 1.09l-.497.677a3 3 0 0 0-.257.378a1.6 1.6 0 0 0-.116.28c-.033.108-.05.221-.085.448l-.127.83c-.1.655-.151.982-.304 1.24c-.135.23-.327.422-.557.557c-.26.153-.588.203-1.24.304l-.83.127a3 3 0 0 0-.449.086q-.145.044-.279.116c-.1.053-.193.12-.378.257l-.677.497c-.534.392-.801.588-1.09.664a1.6 1.6 0 0 1-.787 0c-.292-.076-.56-.272-1.09-.664l-.677-.497a3 3 0 0 0-.378-.257a1.6 1.6 0 0 0-.279-.116a3 3 0 0 0-.449-.086l-.83-.127c-.655-.1-.983-.15-1.24-.304a1.6 1.6 0 0 1-.557-.557c-.153-.26-.203-.588-.304-1.24l-.127-.83c-.035-.227-.052-.34-.085-.449a1.5 1.5 0 0 0-.116-.279a3 3 0 0 0-.257-.378l-.497-.677c-.392-.534-.588-.8-.664-1.09a1.6 1.6 0 0 1 0-.787c.075-.292.272-.56.664-1.09l.497-.677c.136-.185.204-.278.257-.378q.07-.133.116-.279c.033-.109.05-.222.085-.449l.127-.83c.1-.655.151-.983.304-1.24c.135-.23.327-.42.557-.557c.26-.153.588-.203 1.24-.304l.83-.127c.227-.034.341-.052.449-.085q.145-.045.279-.116c.1-.053.193-.121.378-.257zm2.38.806l.711.522c.151.111.3.221.466.309q.22.117.456.189a4 4 0 0 0 .548.111l.872.134c.741.114.833.145.887.177q.127.076.202.202c.032.054.064.146.177.887l.134.872a4 4 0 0 0 .111.548q.073.238.189.456c.088.166.198.315.309.466l.522.711c.444.604.486.691.502.753a.6.6 0 0 1 0 .286c-.016.061-.058.148-.502.753l-.522.711c-.111.151-.221.3-.309.466a2.6 2.6 0 0 0-.189.456a4 4 0 0 0-.111.548l-.134.872c-.114.741-.145.833-.177.887a.6.6 0 0 1-.202.202c-.054.032-.146.064-.887.177l-.872.134a4 4 0 0 0-.548.111a2.6 2.6 0 0 0-.456.189c-.166.088-.315.198-.466.309l-.711.522c-.604.444-.691.486-.753.502a.6.6 0 0 1-.286 0c-.061-.016-.148-.058-.753-.502l-.711-.522a4 4 0 0 0-.466-.309a2.6 2.6 0 0 0-.456-.189a4 4 0 0 0-.548-.111l-.872-.134c-.741-.114-.833-.145-.887-.177a.6.6 0 0 1-.202-.202c-.032-.054-.064-.146-.177-.887l-.134-.872a4 4 0 0 0-.111-.548a2.6 2.6 0 0 0-.189-.456c-.088-.166-.198-.315-.309-.466l-.522-.711c-.444-.604-.486-.691-.502-.753a.6.6 0 0 1 0-.286c.016-.061.058-.148.502-.753l.522-.711c.111-.151.221-.3.309-.466q.116-.22.189-.456a4 4 0 0 0 .111-.548l.134-.872c.114-.741.145-.833.177-.887a.6.6 0 0 1 .202-.202c.054-.032.146-.064.887-.177l.872-.134a4 4 0 0 0 .548-.111q.238-.073.456-.189c.166-.088.315-.198.466-.309l.711-.522c.604-.444.691-.486.753-.502a.6.6 0 0 1 .286 0c.061.016.148.058.753.502" clip-rule="evenodd"/></svg>
);

const contactIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
    <title>contact</title>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2"/>
      <circle cx="12" cy="11" r="3"/>
      <rect width="18" height="18" x="3" y="4" rx="2"/>
    </g>
  </svg>
);

export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-3 z-50 flex justify-center px-4 w-full">
      <ul className="menu menu-horizontal bg-base-200 rounded-box shadow-xl border border-gray-300 p-2 gap-1 md:gap-2 font-mono">
        <li>
          <a href="#about-me" className="tooltip tooltip-bottom" data-tip="Home" aria-label="Home">
            {homeIcon}
          </a>
        </li>
        <li>
          <a href="#work-experience" className="tooltip tooltip-bottom" data-tip="Experience" aria-label="Experience">
            {caseIcon}
          </a>
        </li>
        <li>
          <a href="#recent-projects" className="tooltip tooltip-bottom" data-tip="Projects" aria-label="Projects">
            {folderIcon}
          </a>
        </li>
        <li>
          <a href="#tech-stack" className="tooltip tooltip-bottom" data-tip="Tools" aria-label="Tools">
            {stackIcon}
          </a>
        </li>
        <li>
          <a href="#participation-certificates" className="tooltip tooltip-bottom" data-tip="Certificates" aria-label="Certificates">
            {certificateIcon}
          </a>
        </li>
        <li>
          <a href="#contact" className="tooltip tooltip-bottom" data-tip="Contact" aria-label="Contact">
            {contactIcon}
          </a>
        </li>
      </ul>
    </div>
  );
}

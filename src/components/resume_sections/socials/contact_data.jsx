export function FacebookIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
      <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" />
      <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" />
    </svg>
  );
}

export function GithubIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
    </svg>
  );
}

export function GmailIcon({ className = '', size = '1.26em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height="1em" viewBox="0 0 256 204" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gmailGradient1" x1="165" x2="165" y1="44" y2="166" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60d673" />
          <stop offset=".17" stopColor="#42c868" />
          <stop offset=".39" stopColor="#0ebc5f" />
          <stop offset=".62" stopColor="#00a9bb" />
          <stop offset=".86" stopColor="#3c90ff" />
          <stop offset="1" stopColor="#3186ff" />
        </linearGradient>
        <linearGradient id="gmailGradient2" x1="8" x2="184" y1="46.13" y2="46.13" gradientUnits="userSpaceOnUse">
          <stop offset=".08" stopColor="#ff63a0" />
          <stop offset=".3" stopColor="#fc413d" />
          <stop offset=".5" stopColor="#fc413d" />
          <stop offset=".65" stopColor="#fc413d" />
          <stop offset=".72" stopColor="#fc5c30" />
          <stop offset=".86" stopColor="#feb10c" />
          <stop offset=".91" stopColor="#fec700" />
          <stop offset=".96" stopColor="#ffdb0f" />
        </linearGradient>
      </defs>
      <path fill="url(#gmailGradient1)" d="M146 44h38v110c0 6.627-5.373 12-12 12h-20a6 6 0 0 1-6-6z" transform="translate(-11.636 -37.818)scale(1.45454)" />
      <path fill="#fc413d" d="M55.273 26.182H0v160c0 9.638 7.816 17.454 17.455 17.454h29.09a8.727 8.727 0 0 0 8.728-8.728z" />
      <path fill="url(#gmailGradient2)" d="M39.226 30.456c-8.033-6.752-20.018-5.714-26.77 2.319c-6.752 8.032-5.714 20.017 2.319 26.77l76.078 63.949a8 8 0 0 0 10.295 0l76.078-63.95c8.032-6.752 9.07-18.737 2.318-26.77c-6.752-8.032-18.737-9.07-26.769-2.318L96 78.18z" transform="translate(-11.636 -37.818)scale(1.45454)" />
    </svg>
  );
}

export function InstagramIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" className={className} aria-hidden="true">
      <g fill="none">
        <rect width="256" height="256" fill="url(#instagramGradient1)" rx="60" />
        <rect width="256" height="256" fill="url(#instagramGradient2)" rx="60" />
        <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-11.996-12-11.996zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" />
        <defs>
          <radialGradient id="instagramGradient1" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fd5" />
            <stop offset=".1" stopColor="#fd5" />
            <stop offset=".5" stopColor="#ff543e" />
            <stop offset="1" stopColor="#c837ab" />
          </radialGradient>
          <radialGradient id="instagramGradient2" cx="0" cy="0" r="1" gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3771c8" />
            <stop offset=".128" stopColor="#3771c8" />
            <stop offset="1" stopColor="#60f" stopOpacity="0" />
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}

export function LinkedinIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" className={className} aria-hidden="true">
      <g fill="none">
        <rect width="256" height="256" fill="#0a66c2" rx="60" />
        <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
      </g>
    </svg>
  );
}

export function ThreadsIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm6.924 2.767c-1.936 0-3.724.715-5.014 2.22C5.63 7.482 4.917 9.66 4.917 12.46c0 2.864.993 4.85 2.5 6.105c1.477 1.23 3.343 1.668 4.967 1.668c3.282 0 5.956-2.02 6.085-4.924c.065-1.458-.58-2.67-1.651-3.487a5.2 5.2 0 0 0-.944-.57l-.012-.187c-.115-1.525-.767-2.485-1.59-3.032a3.7 3.7 0 0 0-2.002-.595c-1.144 0-2.143.475-2.949 1.4a.875.875 0 1 0 1.32 1.149c.5-.574 1.03-.799 1.63-.799c.213 0 .652.05 1.033.303c.277.184.598.522.745 1.217a8 8 0 0 0-1.256-.094c-1.49 0-2.537.379-3.187 1.075c-.648.693-.742 1.531-.709 2.097a2.64 2.64 0 0 0 .99 1.91c.625.504 1.48.748 2.497.673c1.104-.081 2.067-.643 2.7-1.604c.298-.452.515-.98.648-1.57l.024.018c.652.498 1.003 1.177.965 2.018c-.075 1.695-1.69 3.252-4.337 3.252c-1.341 0-2.77-.366-3.848-1.263c-1.048-.873-1.869-2.335-1.869-4.76c0-2.517.641-4.247 1.572-5.334c.92-1.073 2.198-1.609 3.685-1.609c1.577 0 2.827.378 3.722 1.02c.882.632 1.48 1.563 1.701 2.806a.875.875 0 1 0 1.723-.307c-.297-1.664-1.13-3.007-2.404-3.921c-1.262-.905-2.896-1.348-4.742-1.348m.869 8.597q.698.002 1.29.128c-.082.558-.25.992-.46 1.31c-.339.514-.813.781-1.368.822c-.666.049-1.057-.118-1.271-.29a.9.9 0 0 1-.34-.65c-.018-.304.043-.589.241-.8c.196-.21.686-.52 1.908-.52" clipRule="evenodd" />
    </svg>
  );
}

export function TwitterIcon({ className = '', size = '1em' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z" clipRule="evenodd" />
    </svg>
  );
}

export const CONTACT_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Jingjing-20',
    description: 'Explore my projects, source code, and development work.',
    color: '#24292F',
    icon: <GithubIcon size="1.2em" />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gian-carlo-ulep-003490346/',
    description: 'View my professional profile, experience, and career updates.',
    color: '#0A66C2',
    icon: <LinkedinIcon size="1.2em" />,
  },
  {
    id: 'gmail',
    label: 'Gmail',
    email: 'jingjing052704@gmail.com',
    description: 'Contact me directly for professional inquiries and opportunities.',
    color: '#EA4335',
    icon: <GmailIcon size="1.2em" />,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/giyaaan_04/',
    description: 'See my photos, personal updates, and activities.',
    color: '#E4405F',
    icon: <InstagramIcon size="1.2em" />,
  },
  {
    id: 'threads',
    label: 'Threads',
    href: 'https://www.threads.net/',
    description: 'Follow my posts, thoughts, and conversations on Threads.',
    color: '#000000',
    icon: <ThreadsIcon size="1.2em" />,
  },
  {
    id: 'twitter',
    label: 'X',
    href: 'https://x.com/',
    description: 'Follow my posts, updates, and conversations on X.',
    color: '#000000',
    icon: <TwitterIcon size="1.2em" />,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://web.facebook.com/Shmingmong',
    description: 'Connect with me and keep up with my personal updates.',
    color: '#3D5A98',
    icon: <FacebookIcon size="1.2em" />,
  },
];

export const SOCIAL_LINKS = CONTACT_LINKS;
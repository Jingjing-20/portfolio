import apacheSvg from './stack icons/apache.svg';
import bootstrapSvg from './stack icons/bootstrap.svg';
import canvaSvg from './stack icons/canva.svg';
import claudeSvg from './stack icons/claude.svg';
import codexSvg from './stack icons/codex-light.svg';
import cssSvg from './stack icons/css.svg';
import figmaSvg from './stack icons/figma.svg';
import tailwindSvg from './stack icons/file-type-tailwind.svg';
import framerSvg from './stack icons/framer-filled.svg';
import gitSvg from './stack icons/git.svg';
import githubSvg from './stack icons/github.svg';
import githubActionsSvg from './stack icons/githubactions.svg';
import antigravitySvg from './stack icons/google-antigravity.svg';
import hostingerSvg from './stack icons/hostinger.svg';
import htmlSvg from './stack icons/html.svg';
import jsSvg from './stack icons/javascript.svg';
import laravelSvg from './stack icons/laravel.svg';
import mysqlSvg from './stack icons/mysql.svg';
import nextSvg from './stack icons/nextjs.svg';
import nodeSvg from './stack icons/node-js.svg';
import phpSvg from './stack icons/php.svg';
import postgresqlSvg from './stack icons/postgresql.svg';
import reactSvg from './stack icons/react.svg';
import restSvg from './stack icons/rest-api.svg';
import supabaseSvg from './stack icons/supabase.svg';
import typescriptSvg from './stack icons/typescript.svg';
import vercelSvg from './stack icons/vercel.svg';
import viteSvg from './stack icons/vitejs.svg';
import ciscoSvg from '@/components/resume_sections/certificates/orgs/cisco.svg';

export const Tools = {
  // UI/UX & Design
  'Figma': {
    category: 'UI/UX & Design',
    color: '#F24E1E',
    icon: <img src={figmaSvg} alt="Figma" className="tool-icon-img" />,
  },
  'Framer': {
    category: 'UI/UX & Design',
    color: '#0055FF',
    icon: <img src={framerSvg} alt="Framer" className="tool-icon-img tool-icon-monochrome" />,
  },
  'Canva': {
    category: 'UI/UX & Design',
    color: '#00C4CC',
    icon: <img src={canvaSvg} alt="Canva" className="tool-icon-img" />,
  },
  // Frontend
  'HTML': {
    category: 'Frontend',
    color: '#E44D26',
    icon: <img src={htmlSvg} alt="HTML" className="tool-icon-img" />,
  },
  'CSS': {
    category: 'Frontend',
    color: '#1572B6',
    icon: <img src={cssSvg} alt="CSS" className="tool-icon-img" />,
  },
  'React': {
    category: 'Frontend',
    color: '#61DAFB',
    icon: <img src={reactSvg} alt="React" className="tool-icon-img" />,
  },
  'JavaScript': {
    category: 'Frontend',
    color: '#F7DF1E',
    icon: <img src={jsSvg} alt="JavaScript" className="tool-icon-img" />,
  },
  'Tailwind': {
    category: 'Frontend',
    color: '#38BDF8',
    icon: <img src={tailwindSvg} alt="Tailwind" className="tool-icon-img" />,
  },
  'Vite': {
    category: 'Frontend',
    color: '#646CFF',
    icon: <img src={viteSvg} alt="Vite" className="tool-icon-img" />,
  },
  'Next.js': {
    category: 'Frontend',
    color: '#000000',
    icon: <img src={nextSvg} alt="Next.js" className="tool-icon-img tool-icon-monochrome" />,
  },
  'TypeScript': {
    category: 'Frontend',
    color: '#007ACC',
    icon: <img src={typescriptSvg} alt="TypeScript" className="tool-icon-img" />,
  },
  'Bootstrap': {
    category: 'Frontend',
    color: '#7952B3',
    icon: <img src={bootstrapSvg} alt="Bootstrap" className="tool-icon-img" />,
  },

  // Backend & APIs
  'PHP': {
    category: 'Backend & APIs',
    color: '#777BB4',
    icon: <img src={phpSvg} alt="PHP" className="tool-icon-img" />,
  },
  'Laravel': {
    category: 'Backend & APIs',
    color: '#FF2D20',
    icon: <img src={laravelSvg} alt="Laravel" className="tool-icon-img" />,
  },
  'Node.js': {
    category: 'Backend & APIs',
    color: '#5FA04E',
    icon: <img src={nodeSvg} alt="Node.js" className="tool-icon-img" />,
  },
  'REST': {
    category: 'Backend & APIs',
    color: '#009688',
    icon: <img src={restSvg} alt="REST" className="tool-icon-img" />,
  },

  // Databases & Backend Services
  'MySQL': {
    category: 'Databases & Backend Services',
    color: '#00758F',
    icon: <img src={mysqlSvg} alt="MySQL" className="tool-icon-img" />,
  },
  'PostgreSQL': {
    category: 'Databases & Backend Services',
    color: '#4169E1',
    icon: <img src={postgresqlSvg} alt="PostgreSQL" className="tool-icon-img" />,
  },
  'Supabase': {
    category: 'Databases & Backend Services',
    color: '#3ECF8E',
    icon: <img src={supabaseSvg} alt="Supabase" className="tool-icon-img" />,
  },

  // Networking & Infrastructure
  'Cisco': {
    category: 'Networking & Infrastructure',
    color: '#00BCEB',
    icon: <img src={ciscoSvg} alt="Cisco" className="tool-icon-img" />,
  },
  'Packet Tracer': {
    category: 'Networking & Infrastructure',
    color: '#00843D',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="tool-icon-img">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  'Network Configuration': {
    category: 'Networking & Infrastructure',
    color: '#0284C7',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="tool-icon-img">
        <path fill="currentColor" d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m8 8a3 3 0 0 1 3 3h4a1 1 0 0 1 0 2h-4a3 3 0 0 1-6 0H5a1 1 0 0 1 0-2h4a3 3 0 0 1 3-3" />
      </svg>
    ),
  },

  // IT Operations & Technical Support
  'Technical Support': {
    category: 'IT Operations & Technical Support',
    color: '#10B981',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="tool-icon-img">
        <path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 14 0v2h-4v8h3a3 3 0 0 0 3-3v-7a9 9 0 0 0-9-9" />
      </svg>
    ),
  },
  'Systems Deployment': {
    category: 'IT Operations & Technical Support',
    color: '#6366F1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="tool-icon-img">
        <path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
      </svg>
    ),
  },
  'Device Troubleshooting': {
    category: 'IT Operations & Technical Support',
    color: '#F59E0B',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="tool-icon-img">
        <path fill="currentColor" d="M22 17H2V3h20v14zm-9 2h-2v2H7v1h10v-1h-4v-2zM4 5v10h16V5H4z" />
      </svg>
    ),
  },
  'Customer Service': {
    category: 'IT Operations & Technical Support',
    color: '#EC4899',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="tool-icon-img">
        <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
      </svg>
    ),
  },

  // Infrastructure & DevOps
  'Apache': {
    category: 'Infrastructure & DevOps',
    color: '#D22128',
    icon: <img src={apacheSvg} alt="Apache" className="tool-icon-img" />,
  },
  'Vercel': {
    category: 'Infrastructure & DevOps',
    color: '#000000',
    icon: <img src={vercelSvg} alt="Vercel" className="tool-icon-img tool-icon-monochrome" />,
  },
  'Hostinger': {
    category: 'Infrastructure & DevOps',
    color: '#673DE6',
    icon: <img src={hostingerSvg} alt="Hostinger" className="tool-icon-img" />,
  },
  'GitHub Actions': {
    category: 'Infrastructure & DevOps',
    color: '#2088FF',
    icon: <img src={githubActionsSvg} alt="GitHub Actions" className="tool-icon-img" />,
  },

  // Development Tools
  'Git': {
    category: 'Development Tools',
    color: '#F05032',
    icon: <img src={gitSvg} alt="Git" className="tool-icon-img" />,
  },
  'GitHub': {
    category: 'Development Tools',
    color: '#24292F',
    icon: <img src={githubSvg} alt="GitHub" className="tool-icon-img tool-icon-monochrome" />,
  },
  'Antigravity': {
    category: 'Development Tools',
    color: '#4285F4',
    icon: <img src={antigravitySvg} alt="Antigravity" className="tool-icon-img" />,
  },
  'Codex': {
    category: 'Development Tools',
    color: '#10A37F',
    icon: <img src={codexSvg} alt="Codex" className="tool-icon-img" />,
  },
  'Claude': {
    category: 'Development Tools',
    color: '#D97706',
    icon: <img src={claudeSvg} alt="Claude" className="tool-icon-img" />,
  },
};
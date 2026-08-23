import apacheSvg from './stack icons/apache.svg';
import bootstrapSvg from './stack icons/bootstrap.svg';
import claudeSvg from './stack icons/claude.svg';
import codexSvg from './stack icons/codex-light.svg';
import cssSvg from './stack icons/css.svg';
import tailwindSvg from './stack icons/file-type-tailwind.svg';
import gitSvg from './stack icons/git.svg';
import githubSvg from './stack icons/github.svg';
import githubActionsSvg from './stack icons/githubactions.svg';
import antigravitySvg from './stack icons/google-antigravity.svg';
import htmlSvg from './stack icons/html.svg';
import jsSvg from './stack icons/javascript.svg';
import laravelSvg from './stack icons/laravel.svg';
import mysqlSvg from './stack icons/mysql.svg';
import nodeSvg from './stack icons/node-js.svg';
import phpSvg from './stack icons/php.svg';
import postgresqlSvg from './stack icons/postgresql.svg';
import reactSvg from './stack icons/react.svg';
import restSvg from './stack icons/rest-api.svg';
import supabaseSvg from './stack icons/supabase.svg';
import viteSvg from './stack icons/vitejs.svg';

export const Tools = {
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

  // Infrastructure & DevOps
  'Apache': {
    category: 'Infrastructure & DevOps',
    color: '#D22128',
    icon: <img src={apacheSvg} alt="Apache" className="tool-icon-img" />,
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
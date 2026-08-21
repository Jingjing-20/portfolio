import reactSvg from './stack icons/react.svg';
import jsSvg from './stack icons/javascript.svg';
import tailwindSvg from './stack icons/file-type-tailwind.svg';
import viteSvg from './stack icons/vitejs.svg';
import bootstrapSvg from './stack icons/bootstrap.svg';
import phpSvg from './stack icons/php.svg';
import laravelSvg from './stack icons/laravel.svg';
import nodeSvg from './stack icons/node-js.svg';
import restSvg from './stack icons/rest-api.svg';
import mysqlSvg from './stack icons/mysql.svg';
import postgresqlSvg from './stack icons/postgresql.svg';
import supabaseSvg from './stack icons/supabase.svg';
import apacheSvg from './stack icons/apache.svg';
import githubactionsSvg from './stack icons/githubactions.svg';
import gitSvg from './stack icons/git.svg';
import githubSvg from './stack icons/github.svg';
import antigravitySvg from './stack icons/google-antigravity.svg';
import codexSvg from './stack icons/codex-light.svg';
import claudeSvg from './stack icons/claude.svg';
import htmlSvg from './stack icons/html.svg';
import cssSvg from './stack icons/css.svg';

const IconImg = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-115"
    loading="lazy"
  />
);

export const Tools = {
  // Frontend
  'React': {
    category: 'Frontend',
    icon: <IconImg src={reactSvg} alt="React" />,
  },
  'JavaScript': {
    category: 'Frontend',
    icon: <IconImg src={jsSvg} alt="JavaScript" />,
  },
  'Tailwind CSS': {
    category: 'Frontend',
    icon: <IconImg src={tailwindSvg} alt="Tailwind CSS" />,
  },
  'Vite': {
    category: 'Frontend',
    icon: <IconImg src={viteSvg} alt="Vite" />,
  },
  'Bootstrap': {
    category: 'Frontend',
    icon: <IconImg src={bootstrapSvg} alt="Bootstrap" />,
  },
  'HTML': {
    category: 'Frontend',
    icon: <IconImg src={htmlSvg} alt="HTML" />,
  },
  'CSS': {
    category: 'Frontend',
    icon: <IconImg src={cssSvg} alt="CSS" />,
  },

  // Backend & APIs
  'PHP': {
    category: 'Backend & APIs',
    icon: <IconImg src={phpSvg} alt="PHP" />,
  },
  'Laravel': {
    category: 'Backend & APIs',
    icon: <IconImg src={laravelSvg} alt="Laravel" />,
  },
  'Node.js': {
    category: 'Backend & APIs',
    icon: <IconImg src={nodeSvg} alt="Node.js" />,
  },
  'REST': {
    category: 'Backend & APIs',
    icon: <IconImg src={restSvg} alt="REST API" />,
  },

  // Databases & Backend Services
  'MySQL': {
    category: 'Databases & Backend Services',
    icon: <IconImg src={mysqlSvg} alt="MySQL" />,
  },
  'PostgreSQL': {
    category: 'Databases & Backend Services',
    icon: <IconImg src={postgresqlSvg} alt="PostgreSQL" />,
  },
  'Supabase': {
    category: 'Databases & Backend Services',
    icon: <IconImg src={supabaseSvg} alt="Supabase" />,
  },

  // Infrastructure & DevOps
  'Apache': {
    category: 'Infrastructure & DevOps',
    icon: <IconImg src={apacheSvg} alt="Apache" />,
  },
  'GitHub Actions': {
    category: 'Infrastructure & DevOps',
    icon: <IconImg src={githubactionsSvg} alt="GitHub Actions" />,
  },

  // Development Tools
  'Git': {
    category: 'Development Tools',
    icon: <IconImg src={gitSvg} alt="Git" />,
  },
  'GitHub': {
    category: 'Development Tools',
    icon: <IconImg src={githubSvg} alt="GitHub" />,
  },
  'Antigravity': {
    category: 'Development Tools',
    icon: <IconImg src={antigravitySvg} alt="Antigravity" />,
  },
  'Codex': {
    category: 'Development Tools',
    icon: <IconImg src={codexSvg} alt="Codex" />,
  },
  'Claude': {
    category: 'Development Tools',
    icon: <IconImg src={claudeSvg} alt="Claude" />,
  },
};
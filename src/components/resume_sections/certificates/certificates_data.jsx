// Certificate image assets
import MentalHealthImg from '@/components/resume_sections/certificates/certimg/10 Keys to Mental Health at Work - Support Wellbeing with AI Tools.webp';
import EnterpriseArchImg from '@/components/resume_sections/certificates/certimg/AI x Enterprise Architecture - Powering Emerging Tech.webp';
import NetAddressingImg from '@/components/resume_sections/certificates/certimg/Network Addressing and Basic Troubleshooting.webp';
import NetBasicsImg from '@/components/resume_sections/certificates/certimg/Networking Basics.webp';
import NetDevicesImg from '@/components/resume_sections/certificates/certimg/Networking Devices and Initial Configuration.webp';
import SqlImg from '@/components/resume_sections/certificates/certimg/SQL.webp';
import phpImg from '@/components/resume_sections/certificates/certimg/PHP.webp';
import pythonImg from '@/components/resume_sections/certificates/certimg/PYTHON.webp';
import htmlcssImg from '@/components/resume_sections/certificates/certimg/HTML-CSS.webp';
import ProjectMgmtImg from '@/components/resume_sections/certificates/certimg/Understanding Project management from basic to advance.webp';
import ChatGptAgentImg from '@/components/resume_sections/certificates/certimg/Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI.webp';
import CyberSecurityImg from '@/components/resume_sections/certificates/certimg/Usage of AI Tools in Cyber Security.webp';

// Issuing Organization SVG Icons
import ciscoSvg from '@/components/resume_sections/certificates/orgs/cisco.svg';
import koenigSvg from '@/components/resume_sections/certificates/orgs/koenig solutions.svg';
import testdomeSvg from '@/components/resume_sections/certificates/orgs/testdome.svg';

export const CiscoIcon = (props) => (
  <img src={ciscoSvg} alt="Cisco" className="tool-icon-img size-5 object-contain" {...props} />
);

export const TestDomeIcon = (props) => (
  <img src={testdomeSvg} alt="TestDome" className="tool-icon-img size-5 object-contain" {...props} />
);

export const KoenigIcon = (props) => (
  <img src={koenigSvg} alt="Koenig Solutions" className="tool-icon-img size-5 object-contain" {...props} />
);

export const GoogleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12" />
  </svg>
);

export const CERTIFICATE_CATEGORIES = [
  {
    category: 'Networking & Infrastructure',
    description: 'Foundational networking concepts, IP addressing, device setup, and troubleshooting.',
    items: [
      {
        id: 'net-basics',
        title: 'Networking Basics',
        org: 'Cisco',
        image: NetBasicsImg,
        icon: CiscoIcon,
        issuedDate: '2023-10-01',
        link: 'https://www.credly.com/badges/edd17204-5b97-4023-935f-dc5c4facca34',
      },
      {
        id: 'net-addressing',
        title: 'Network Addressing and Basic Troubleshooting',
        org: 'Cisco',
        image: NetAddressingImg,
        icon: CiscoIcon,
        issuedDate: '2023-11-01',
        link: 'https://www.credly.com/badges/e9a134fe-7332-40d3-b9d0-a87ca8bb00ee',
      },
      {
        id: 'net-devices',
        title: 'Networking Devices and Initial Configuration',
        org: 'Cisco',
        image: NetDevicesImg,
        icon: CiscoIcon,
        issuedDate: '2024-03-01',
        link: 'https://www.credly.com/badges/ede259f1-8047-494a-b372-262df72b4ef1',
      },
    ],
  },
  {
    category: 'Databases & Web Technologies',
    description: 'Relational database concepts, server-side development, and frontend fundamentals.',
    items: [
      {
        id: 'sql-testdome',
        title: 'SQL',
        org: 'TestDome',
        image: SqlImg,
        icon: TestDomeIcon,
        issuedDate: '2026-07-01',
        link: 'https://www.testdome.com/certificates/c523462eabb34a45a4d48a55822c798b',
      },
      {
        id: 'php-testdome',
        title: 'PHP',
        org: 'TestDome',
        image: phpImg,
        icon: TestDomeIcon,
        issuedDate: '2026-08-19',
        link: 'https://www.testdome.com/certificates/8be7dc5ac42d4fb195d649f551edd55d',
      },
      {
        id: 'html/css-testdome',
        title: 'HTML/CSS',
        org: 'TestDome',
        image: htmlcssImg,
        icon: TestDomeIcon,
        issuedDate: '2026-08-19',
        link: 'https://www.testdome.com/certificates/c08ebc6cfc4445acb03e8c7302469005',
      },
    ],
  },
  {
    category: 'Webinars & Workshops',
    description: 'Technical sessions on autonomous AI agents, enterprise architecture, cyber security, and project management.',
    items: [
      {
        id: 'chatgpt-agent',
        title: 'Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI',
        org: 'Koenig Solutions',
        image: ChatGptAgentImg,
        icon: KoenigIcon,
        issuedDate: '2025-09-01',
        link: 'no link',
      },
      {
        id: 'enterprise-arch',
        title: 'AI x Enterprise Architecture - Powering Emerging Tech',
        org: 'Koenig Solutions',
        image: EnterpriseArchImg,
        icon: KoenigIcon,
        issuedDate: '2025-09-01',
        link: 'no link',
      },
      {
        id: 'cyber-security',
        title: 'Usage of AI Tools in Cyber Security',
        org: 'Koenig Solutions',
        image: CyberSecurityImg,
        icon: KoenigIcon,
        issuedDate: '2025-09-01',
        link: 'no link',
      },
      {
        id: 'project-mgmt',
        title: 'Understanding Project Management from Basic to Advance',
        org: 'Koenig Solutions',
        image: ProjectMgmtImg,
        icon: KoenigIcon,
        issuedDate: '2025-09-01',
        link: 'no link',
      },
      {
        id: 'mental-health',
        title: '10 Keys to Mental Health at Work - Support Wellbeing with AI Tools',
        org: 'Koenig Solutions',
        image: MentalHealthImg,
        icon: KoenigIcon,
        issuedDate: '2025-09-01',
        link: 'no link',
      },
    ],
  },
];
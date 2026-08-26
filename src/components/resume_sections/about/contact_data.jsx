import ResumeImg from '@/components/resume_sections/about/resume.webp';
import LinkedInImg from '@/components/resume_sections/about/linkedin.webp';
import GitHubImg from '@/components/resume_sections/about/github.webp';
import GmailImg from '@/components/resume_sections/about/gmail.webp';
import ResumePDF from '@/components/resume_sections/about/resumes/GCNU - RESUME v13.pdf';

import githubSvg from './contact icons/github.svg';
import gmailSvg from './contact icons/gmail-2026.svg';
import linkedinSvg from './contact icons/linkedin.svg';
import resumeSvg from './contact icons/resume pdf.svg';

export const CONTACT_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Jingjing-20',
    description: 'View my open-source work.',
    previewImage: GitHubImg,
    color: '#24292F',
    icon: <img src={githubSvg} alt="GitHub" className="tool-icon-img" />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gian-carlo-ulep-003490346/',
    description: 'Connect with me professionally.',
    previewImage: LinkedInImg,
    color: '#0A66C2',
    icon: <img src={linkedinSvg} alt="LinkedIn" className="tool-icon-img" />,
  },
  {
    id: 'gmail',
    label: 'Gmail',
    email: 'jingjing0527004@gmail.com',
    description: 'Send me an email.',
    previewImage: GmailImg,
    color: '#EA4335',
    icon: <img src={gmailSvg} alt="Gmail" className="tool-icon-img" />,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: ResumePDF,
    description: 'Download my resume PDF.',
    previewImage: ResumeImg,
    color: '#EF5350',
    icon: <img src={resumeSvg} alt="Resume" className="tool-icon-img" />,
  },
];

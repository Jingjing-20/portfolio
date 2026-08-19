import PGNOImg from '@/components/resume_sections/experience/pgno.png';

export const EXPERIENCES = [
  {
    step: 1,
    company: 'Provincial Government of Negros Occidental',
    logo: PGNOImg,
    logoInitials: 'PG',
    employmentType: 'Internship',
    durationMonths: '4 mos',
    location: 'Bacolod, Negros Occidental, Philippines',
    workMode: 'On-site',
    role: 'Software Developer',
    dateRange: 'Feb 2026 – May 2026',
    description: [
      'Developed GSO-ULPMMS, a centralized platform for managing provincial lots and properties, integrating property monitoring, document management, beneficiary tracking, and geographic visualization.',
    ],
    keyContributions: [
      'Improved property management by developing a system for lot allocation and property donations',
      'Simplified payment processing by implementing beneficiary and amortization tracking',
      'Enhanced property monitoring by integrating interactive maps using Leaflet',
      'Reduced manual paperwork by developing a secure document management system',
      'Optimized reporting by implementing Excel import and export functionality',
      'Improved decision-making by designing dashboards with real-time statistics',
      'Strengthened system security by implementing role-based access control and user authentication'
    ],
  },
];

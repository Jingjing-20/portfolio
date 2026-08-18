import { chmsuagrmImages } from '@/components/resume_sections/projects/chmsuagrm_ss';
import { pgsoulpmmsImages } from '@/components/resume_sections/projects/pgsoulpmms_ss';
import { mockupsData } from '@/components/resume_sections/projects/mockups_data';
import chmsuagrmCover from '@/components/resume_sections/projects/chmsuagrm_cover.png';
import pgsoulpmmsCover from '@/components/resume_sections/projects/pgsoulpmms_cover.png';

export const PROJECT_CATEGORIES = [
  {
    category: 'Deployed',
    description: 'Production systems actively serving end users in real-world environments.',
    items: [
      {
        id: 'chmsuagrm',
        title: 'Integrated Online Platform for Academic Grade and Report Management',
        organization: 'Carlos Hilado Memorial State University - Alijis',
        description:
          'A centralized web-based academic information system designed to automate grade computation, QR-based attendance tracking, academic record management, and report generation through role-based access control for administrators, faculty, and students.',
        details: [
          'Created an academic management system for Carlos Hilado Memorial State University.',
          'Built separate dashboards for administrators, faculty, and students.',
          'Managed student, faculty, enrollment, program, and section records.',
          'Reduced manual grading by adding automatic grade computation.',
          'Allowed students to check grades and enrollment status online.',
          'Used QR codes to make attendance recording faster and easier.',
          'Sent email notifications for account verification and password recovery.',
          'Generated PDF and Excel reports for school records.',
        ],
        images: chmsuagrmImages,
        coverImage: chmsuagrmCover,
      },
      {
        id: 'pgsoulpmms',
        title: 'Unified Lot and Property Management and Monitoring',
        organization:
          'Provincial Government of Negros Occidental : General Services Office - Property Management Division',
        description:
          'A provincial-scale property management platform designed to monitor government-owned housing lots and assets, featuring interactive lot mapping, beneficiary and payment tracking, document management, real-time analytics, bulk data processing, and official report generation.',
        details: [
          'Developed a digital platform for managing government housing lots and property assets.',
          'Built separate modules for lot management and property management.',
          'Tracked beneficiaries, lot assignments, and payment records.',
          'Added document management and duplicate transaction checking.',
          'Used Leaflet.js to display lot boundaries and property locations.',
          'Created dashboards with charts and real-time statistics.',
          'Supported bulk operations through Excel import and export features.',
          'Generated print-ready reports for official records.',
        ],
        images: pgsoulpmmsImages,
        coverImage: pgsoulpmmsCover,
      },
    ],
  },
  {
    category: 'Mockups',
    description: 'Design concepts and interface prototypes available for development or licensing.',
    items: mockupsData,
  },
];

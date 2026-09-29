import { chmsuagrmImages } from '@/components/resume_sections/projects/chmsuagrm/chmsuagrm_ss';
import { pgsoulpmmsImages } from '@/components/resume_sections/projects/pgsoulpmms/pgsoulpmms_ss';
import { mockupsData } from '@/components/resume_sections/projects/mockups/mockups_data';
import { personalData } from '@/components/resume_sections/projects/personal/personal_data';
import chmsuagrmCover from '@/components/resume_sections/projects/chmsuagrm/chmsuagrm_cover.webp';
import pgsoulpmmsCover from '@/components/resume_sections/projects/pgsoulpmms/pgsoulpmms_cover.webp';

export const PROJECT_CATEGORIES = [
  {
    category: 'Deployed',
    description: 'Production systems actively serving end users in real-world environments.',
    items: [
      {
        id: 'chmsuagrm',
        name: 'CHMSU Grade & Records',
        title: 'Integrated Online Platform for Academic Grade and Report Management',
        type: 'Carlos Hilado Memorial State University - Alijis',
        organization: 'Carlos Hilado Memorial State University - Alijis',
        description:
          'A centralized web-based academic information system designed to automate grade computation, QR-based attendance tracking, academic record management, and report generation through role-based access control for administrators, faculty, and students.',
        category: 'Academic Information System',
        details: [
          'Built separate dashboards for administrators, faculty, and students.',
          'Managed student, faculty, enrollment, program, and section records.',
          'Reduced manual grading by adding automatic grade computation.',
          'Allowed students to check grades and enrollment status online.',
          'Used QR codes to make attendance recording faster and easier.',
          'Sent email notifications for account verification and password recovery.',
          'Generated PDF and Excel reports for school records.',
        ],
        images: chmsuagrmImages,
        previewImage: chmsuagrmCover,
        coverImage: chmsuagrmCover,
      },
      {
        id: 'pgsoulpmms',
        name: 'PGSO Lot & Property',
        title: 'Unified Lot and Property Management and Monitoring',
        type: 'PGNO – GSO, Property Management Division',
        organization:
          'PGNO – GSO, Property Management Division',
        description:
          'A provincial-scale property management platform designed to monitor government-owned housing lots and assets, featuring interactive lot mapping, beneficiary and payment tracking, document management, real-time analytics, bulk data processing, and official report generation.',
        category: 'Property Management Platform',
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
        previewImage: pgsoulpmmsCover,
        coverImage: pgsoulpmmsCover,
      },
    ],
  },
  {
    category: 'Mockups',
    description: 'Design concepts and interface prototypes available for development or licensing.',
    items: mockupsData,
  },
  {
    category: 'Personal',
    description: 'Side projects, explorations, and personal builds developed for learning and fun.',
    items: personalData,
  },
];

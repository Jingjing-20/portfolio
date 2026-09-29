import CHMSUAGRM_dashboard from '@/components/resume_sections/projects/deployed/chmsuagrm/dashboard.webp';
import CHMSUAGRM_index from '@/components/resume_sections/projects/deployed/chmsuagrm/index.webp';
import CHMSUAGRM_signin from '@/components/resume_sections/projects/deployed/chmsuagrm/signin form.webp';
import CHMSUAGRM_enrollments from '@/components/resume_sections/projects/deployed/chmsuagrm/enrollments.webp';
import CHMSUAGRM_enrollment_request from '@/components/resume_sections/projects/deployed/chmsuagrm/enrollment request.webp';
import CHMSUAGRM_assigned_class from '@/components/resume_sections/projects/deployed/chmsuagrm/assigned class.webp';
import CHMSUAGRM_attendance_qr from '@/components/resume_sections/projects/deployed/chmsuagrm/attendance qr scanning.webp';
import CHMSUAGRM_student_qr from '@/components/resume_sections/projects/deployed/chmsuagrm/student qr.webp';
import chmsuagrmCover from '@/components/resume_sections/projects/deployed/chmsuagrm/chmsuagrm_cover.webp';

import PGSOULPMMS_home from '@/components/resume_sections/projects/deployed/pgsoulpmms/Home page.webp';
import PGSOULPMMS_lot_signin from '@/components/resume_sections/projects/deployed/pgsoulpmms/Lot Signin Page.webp';
import PGSOULPMMS_property_signin from '@/components/resume_sections/projects/deployed/pgsoulpmms/Property Signin Page.webp';
import PGSOULPMMS_interactive_mapping from '@/components/resume_sections/projects/deployed/pgsoulpmms/Interactive Mapping.webp';
import PGSOULPMMS_details_monitoring from '@/components/resume_sections/projects/deployed/pgsoulpmms/Details Monitoring.webp';
import PGSOULPMMS_centralized_oversight from '@/components/resume_sections/projects/deployed/pgsoulpmms/Centralized Oversight.webp';
import PGSOULPMMS_financial_admin from '@/components/resume_sections/projects/deployed/pgsoulpmms/Financial Administration.webp';
import PGSOULPMMS_document_repo from '@/components/resume_sections/projects/deployed/pgsoulpmms/Document Repository.webp';
import PGSOULPMMS_spatial_tracking from '@/components/resume_sections/projects/deployed/pgsoulpmms/Spatial Tracking.webp';
import PGSOULPMMS_locality_insights from '@/components/resume_sections/projects/deployed/pgsoulpmms/Locality Insights.webp';
import PGSOULPMMS_unified_filing from '@/components/resume_sections/projects/deployed/pgsoulpmms/Unified Filing.webp';
import PGSOULPMMS_asset_control from '@/components/resume_sections/projects/deployed/pgsoulpmms/Asset Control.webp';
import pgsoulpmmsCover from '@/components/resume_sections/projects/deployed/pgsoulpmms/pgsoulpmms_cover.webp';

export const chmsuagrmImages = [
  { src: CHMSUAGRM_index, alt: 'Index' },
  { src: CHMSUAGRM_signin, alt: 'Signin' },
  { src: CHMSUAGRM_dashboard, alt: 'Dashboard' },
  { src: CHMSUAGRM_enrollments, alt: 'Enrollments' },
  { src: CHMSUAGRM_enrollment_request, alt: 'Enrollment Request' },
  { src: CHMSUAGRM_assigned_class, alt: 'Assigned Class' },
  { src: CHMSUAGRM_attendance_qr, alt: 'QR Scanning' },
  { src: CHMSUAGRM_student_qr, alt: 'Student QR' },
];

export const pgsoulpmmsImages = [
  { src: PGSOULPMMS_home, alt: 'Home' },
  { src: PGSOULPMMS_lot_signin, alt: 'Lot Signin' },
  { src: PGSOULPMMS_property_signin, alt: 'Property Signin' },
  { src: PGSOULPMMS_interactive_mapping, alt: 'Interactive Mapping' },
  { src: PGSOULPMMS_details_monitoring, alt: 'Details Monitoring' },
  { src: PGSOULPMMS_centralized_oversight, alt: 'Centralized Oversight' },
  { src: PGSOULPMMS_financial_admin, alt: 'Financial Administration' },
  { src: PGSOULPMMS_document_repo, alt: 'Document Repository' },
  { src: PGSOULPMMS_spatial_tracking, alt: 'Spatial Tracking' },
  { src: PGSOULPMMS_locality_insights, alt: 'Locality Insights' },
  { src: PGSOULPMMS_unified_filing, alt: 'Unified Filing' },
  { src: PGSOULPMMS_asset_control, alt: 'Asset Control' },
];

export const deployedData = [
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
      'Role-based dashboards for administrators, faculty, and students.',
      'Automatic grade computation reducing manual grading work.',
      'QR-code-based attendance recording.',
      'Student self-service access to grades and enrollment status online.',
      'Email notifications for account verification and password recovery.',
      'PDF and Excel report generation for official school records.',
    ],
    stack: [
      'Frontend: React, TypeScript, Vite, Tailwind CSS, daisyUI',
      'Backend: Node.js, Express',
      'Database: MySQL / PostgreSQL',
      'Reports: PDF Generation (jsPDF), Excel export (SheetJS)',
      'Attendance: QR Code scanning library',
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
    organization: 'PGNO – GSO, Property Management Division',
    description:
      'A provincial-scale property management platform designed to monitor government-owned housing lots and assets, featuring interactive lot mapping, beneficiary and payment tracking, document management, real-time analytics, bulk data processing, and official report generation.',
    category: 'Property Management Platform',
    details: [
      'Separate modules for lot management and property asset management.',
      'Beneficiary tracking, lot assignments, and payment records.',
      'Interactive Leaflet.js maps showing lot boundaries and locations.',
      'Document management repository with duplicate transaction detection.',
      'Real-time analytics dashboards with charts and statistics.',
      'Bulk Excel import and export operations.',
      'Print-ready official report generation.',
    ],
    stack: [
      'Frontend: React, TypeScript, Vite, Tailwind CSS, daisyUI',
      'Mapping: Leaflet.js with interactive lot boundaries',
      'Backend: Node.js, Express',
      'Database: MySQL / PostgreSQL',
      'Data Processing: SheetJS Excel import/export',
    ],
    images: pgsoulpmmsImages,
    previewImage: pgsoulpmmsCover,
    coverImage: pgsoulpmmsCover,
  },
];

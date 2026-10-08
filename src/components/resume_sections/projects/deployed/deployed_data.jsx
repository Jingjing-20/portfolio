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

export const mdsImages = [];

export const deployedData = [
  {
    id: 'chmsuagrm',
    name: 'CHMSU Grade & Records',
    title: 'Academic Grade and Report Management',
    type: 'Academic Management',
    organization: 'Carlos Hilado Memorial State University - Alijis',
    summary: 'Comprehensive academic management system centralizing student records, grades, and attendance with QR-based tracking.',
    description:
      'A comprehensive academic management system built to centralize and streamline institutional data for Carlos Hilado Memorial State University - Alijis Campus. Developed locally using XAMPP and successfully deployed via Hostinger web hosting service.',
    purpose:
      'Optimize academic processes and improve transparency by providing centralized student record management, automated grade calculations, QR-based attendance tracking, and efficient report generation to enhance accuracy and reduce manual work in academic administration.',
    category: 'Academic Information System',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'XAMPP', 'Hostinger'],
    details: [
      'Created an academic management system for Carlos Hilado Memorial State University',
      'Built separate dashboards for administrators, faculty, and students',
      'Managed student, faculty, enrollment, program, and section records',
      'Reduced manual grading by adding automatic grade computation',
      'Allowed students to check academic records, grades and enrollment status online',
      'Used QR codes to make attendance recording faster and easier',
      'Sent email notifications for account verification and password recovery',
      'Generated PDF and Excel reports for school records',
    ],
    images: chmsuagrmImages,
    previewImage: chmsuagrmCover,
    coverImage: chmsuagrmCover,
  },
  /*{
    id: 'mds',
    name: 'MDS Memo Distribution',
    title: 'Memo Distribution and Document Management System',
    type: 'MDS (Memo Distribution System)',
    organization: 'Internal Office Workflow',
    description:
      'A memo distribution and document management system with QR code generation capabilities for tracking and distributing internal memos and documents across departments and offices.',
    purpose:
      'Digitize memo creation and distribution workflows by enabling QR-based document tracking and verification, centralizing memo management and archiving, and facilitating inter-departmental communication with complete audit trails.',
    category: 'Document Management System',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    details: [
      'Memo creation, display, and distribution management',
      'QR code generation for unique memo tracking and verification',
      'Secure user authentication and session management',
      'Department and office organization with employee management',
      'Employee CRUD operations for managing records and positions',
      'Email integration for memo distribution via PHPMailer',
      'PDF report generation using FPDF',
      'File upload and document attachment management',
      'Modal-based notification system for user alerts',
      'Centralized dashboard with memo statistics and activity monitoring',
      'QR code scanning interface for document verification',
      'Server-side DataTables processing for efficient data handling',
    ],
    images: mdsImages,
    previewImage: undefined,
    coverImage: undefined,
  },*/
  {
    id: 'pgsoulpmms',
    name: 'PGSO Lot & Property',
    title: 'Property Management and Monitoring',
    type: 'Property Management',
    organization: 'PGNO – GSO, Property Management Division',
    summary: 'Digital platform for managing government housing lots and property assets with interactive mapping and document tracking.',
    description:
      'A digital platform for the Provincial General Services Office - Property Management Division to manage government housing lots and property assets with integrated tracking, documentation, and interactive mapping capabilities. Built as a local area network (LAN) based system using XAMPP, designed for office-based access through wired network connections.',
    purpose:
      'Modernize management of all provincial properties including housing lots, buildings, and land through a centralized system integrating lot status tracking, awardee records, payment transactions, contract monitoring, asset mapping, and legal document organization to ensure transparency, efficient resource allocation, and data-driven oversight.',
    category: 'Property Management Platform',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'React', 'Vite', 'Leaflet.js', 'XAMPP'],
    details: [
      'Developed a digital platform for managing government housing lots and property assets',
      'Built separate modules for lot management and property management',
      'Tracked beneficiaries, lot assignments, and payment records',
      'Added document management and duplicate transaction checking',
      'Used Leaflet.js to display lot boundaries and property locations via imported GeoJSON',
      'Created dashboards with charts and real-time statistics',
      'Supported bulk operations through Excel import and export features',
      'Generated print-ready reports for official records',
    ],
    images: pgsoulpmmsImages,
    previewImage: pgsoulpmmsCover,
    coverImage: pgsoulpmmsCover,
  },
];

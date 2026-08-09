import { useState } from 'react';
import { FolderFiles } from '@/components/animate-ui/icons/folder-files';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

import CHMSUAGRM_dashboard from '@/assets/projects/chmsuagrm/dashboard.png';
import CHMSUAGRM_index from '@/assets/projects/chmsuagrm/index.png';
import CHMSUAGRM_signin from '@/assets/projects/chmsuagrm/signin form.png';
import CHMSUAGRM_profile from '@/assets/projects/chmsuagrm/profile.png';
import CHMSUAGRM_students from '@/assets/projects/chmsuagrm/students.png';
import CHMSUAGRM_faculties from '@/assets/projects/chmsuagrm/faculties.png';
import CHMSUAGRM_courses from '@/assets/projects/chmsuagrm/courses.png';
import CHMSUAGRM_programs from '@/assets/projects/chmsuagrm/programs.png';
import CHMSUAGRM_sections from '@/assets/projects/chmsuagrm/sections.png';
import CHMSUAGRM_departments from '@/assets/projects/chmsuagrm/departments.png';
import CHMSUAGRM_periods from '@/assets/projects/chmsuagrm/periods.png';
import CHMSUAGRM_positions from '@/assets/projects/chmsuagrm/positions .png';
import CHMSUAGRM_enrollments from '@/assets/projects/chmsuagrm/enrollments.png';
import CHMSUAGRM_enrollment_request from '@/assets/projects/chmsuagrm/enrollment request.png';
import CHMSUAGRM_assigned_class from '@/assets/projects/chmsuagrm/assigned class.png';
import CHMSUAGRM_attendance_qr from '@/assets/projects/chmsuagrm/attendance qr scanning.jpg';
import CHMSUAGRM_student_qr from '@/assets/projects/chmsuagrm/student qr.png';
import CHMSUAGRM_class_assessments from '@/assets/projects/chmsuagrm/class assessments.png';
import CHMSUAGRM_class_exams from '@/assets/projects/chmsuagrm/class exams.png';
import CHMSUAGRM_class_participations from '@/assets/projects/chmsuagrm/class participations.png';
import CHMSUAGRM_class_projects from '@/assets/projects/chmsuagrm/class projects.png';
import CHMSUAGRM_class_term_grades from '@/assets/projects/chmsuagrm/class term grades.png';
import CHMSUAGRM_class_grade_breakdowns from '@/assets/projects/chmsuagrm/class grade breakdowns.png';
import CHMSUAGRM_grade_components from '@/assets/projects/chmsuagrm/grade components.png';
import CHMSUAGRM_student_assessment from '@/assets/projects/chmsuagrm/student assessment breakdown.png';
import CHMSUAGRM_student_exams from '@/assets/projects/chmsuagrm/student exams breakdown.png';
import CHMSUAGRM_student_participation from '@/assets/projects/chmsuagrm/student participation breakdown.png';
import CHMSUAGRM_student_projects from '@/assets/projects/chmsuagrm/student projects breakdown.png';
import CHMSUAGRM_student_term_grades from '@/assets/projects/chmsuagrm/student term grades breakdown.png';

import PGSOULPMMS_home from '@/assets/projects/pgsoulpmms/Home page.jpg';
import PGSOULPMMS_lot_signin from '@/assets/projects/pgsoulpmms/Lot Signin Page.jpg';
import PGSOULPMMS_property_signin from '@/assets/projects/pgsoulpmms/Property Signin Page.jpg';
import PGSOULPMMS_interactive_mapping from '@/assets/projects/pgsoulpmms/Interactive Mapping.jpg';
import PGSOULPMMS_details_monitoring from '@/assets/projects/pgsoulpmms/Details Monitoring.jpg';
import PGSOULPMMS_centralized_oversight from '@/assets/projects/pgsoulpmms/Centralized Oversight.jpg';
import PGSOULPMMS_financial_admin from '@/assets/projects/pgsoulpmms/Financial Administration.jpg';
import PGSOULPMMS_document_repo from '@/assets/projects/pgsoulpmms/Document Repository.jpg';
import PGSOULPMMS_spatial_tracking from '@/assets/projects/pgsoulpmms/Spatial Tracking.jpg';
import PGSOULPMMS_locality_insights from '@/assets/projects/pgsoulpmms/Locality Insights.jpg';
import PGSOULPMMS_unified_filing from '@/assets/projects/pgsoulpmms/Unified Filing.jpg';
import PGSOULPMMS_asset_control from '@/assets/projects/pgsoulpmms/Asset Control.jpg';

const stackIcons = {
  'Leaflet': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M17.69 0c-.355.574-8.432 4.74-10.856 8.649c-2.424 3.91-3.116 6.988-2.237 9.882s2.559 2.763 3.516 3.717c.958.954 2.257 2.113 4.332 1.645c2.717-.613 5.335-2.426 6.638-7.508s.448-9.533-.103-11.99A35 35 0 0 0 17.69 0m-.138.858l-9.22 21.585l-.574-.577Z"/>
      </svg>
    ),
  },
  'MySQL': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M20.422 17.337c-1.088-.03-1.932.081-2.64.379c-.203.082-.53.082-.557.338c.11.108.122.284.218.433c.163.27.449.635.707.824l.87.622c.531.325 1.13.514 1.647.838c.299.19.598.433.898.636c.152.108.244.284.435.352v-.041c-.095-.122-.123-.297-.217-.433l-.409-.392a6.4 6.4 0 0 0-1.415-1.365c-.435-.298-1.387-.703-1.564-1.203l-.027-.03c.299-.03.653-.136.939-.217c.463-.121.884-.095 1.36-.216l.653-.19v-.12c-.245-.244-.422-.569-.68-.798a18 18 0 0 0-2.245-1.663c-.422-.27-.966-.447-1.415-.676c-.164-.081-.435-.122-.53-.257c-.246-.297-.381-.69-.558-1.041l-1.116-2.353c-.245-.527-.395-1.054-.694-1.54c-1.4-2.3-2.925-3.692-5.265-5.058c-.503-.284-1.101-.406-1.738-.554l-1.02-.055c-.218-.094-.436-.351-.626-.473c-.775-.487-2.775-1.541-3.347-.151c-.368.878.544 1.743.854 2.19c.231.31.53.662.694 1.014c.091.23.122.473.217.716c.218.595.422 1.258.708 1.812c.152.284.312.582.503.839c.109.151.3.216.34.46c-.19.27-.204.675-.313 1.014c-.49 1.528-.3 3.42.395 4.545c.218.338.731 1.082 1.428.798c.613-.244.476-1.014.653-1.69c.041-.162.014-.27.095-.379v.03l.558 1.123c.422.662 1.157 1.352 1.769 1.812c.326.243.584.662.992.81v-.04h-.026c-.082-.121-.205-.176-.314-.27a6.6 6.6 0 0 1-.707-.812a17.4 17.4 0 0 1-1.523-2.46c-.218-.42-.409-.879-.585-1.298c-.083-.162-.083-.406-.218-.487c-.205.297-.503.555-.654.92c-.258.58-.285 1.297-.38 2.041c-.055.014-.03 0-.055.03c-.435-.107-.585-.554-.748-.932c-.408-.96-.476-2.501-.123-3.61c.096-.284.504-1.177.341-1.447c-.082-.257-.354-.405-.504-.608a5.5 5.5 0 0 1-.49-.865c-.325-.758-.489-1.596-.843-2.353c-.163-.352-.449-.717-.68-1.041c-.259-.365-.544-.622-.748-1.055c-.068-.151-.163-.392-.054-.554c.026-.108.081-.152.19-.176c.176-.151.68.04.857.121c.503.203.925.392 1.347.676c.19.135.394.392.64.46h.285c.436.095.925.03 1.333.152c.72.23 1.374.567 1.96.933a12 12 0 0 1 4.244 4.624c.163.311.23.595.38.92c.287.662.64 1.338.926 1.987c.286.636.558 1.285.966 1.812c.204.284 1.02.433 1.387.582c.272.12.694.23.94.378c.461.284.924.609 1.359.92c.217.162.898.5.939.77zM6.548 5.588a2.2 2.2 0 0 0-.557.068v.03h.027c.109.216.3.365.435.555l.313.649l.027-.03c.19-.136.286-.352.286-.676c-.082-.095-.095-.19-.163-.284c-.082-.135-.259-.203-.368-.311" clipRule="evenodd"/>
      </svg>
    ),
  },
  'PHP': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209q.086-.457-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z"/>
      </svg>
    ),
  },
  'Laravel': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M31.963 9.12c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a2 2 0 0 0-.162-.205a1 1 0 0 0-.088-.072a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a.7.7 0 0 0-.187.191a1 1 0 0 0-.064.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085a1 1 0 0 0-.037.265v5.382l-4 2V5.385a1 1 0 0 0-.037-.265c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a1 1 0 0 0-.063-.086a.7.7 0 0 0-.187-.191a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a1 1 0 0 0-.088.072a1 1 0 0 0-.1.119a1 1 0 0 0-.063.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085A1 1 0 0 0 0 5.385v19a1 1 0 0 0 .553.894l6 3l6 3c.014.007.03.005.046.011a.9.9 0 0 0 .802 0c.015-.006.032-.004.046-.01l12-6a1 1 0 0 0 .553-.895v-5.382l5.447-2.724a1 1 0 0 0 .553-.894v-6a1 1 0 0 0-.037-.265M9.236 21.385l4.211-2.106h.001L19 16.503l3.764 1.882L13 23.267ZM24 13.003v3.764l-4-2v-3.764Zm1-5.5l3.764 1.882L25 11.267l-3.764-1.882ZM8 19.767V9.003l4-2v10.764ZM7 3.503l3.764 1.882L7 7.267L3.236 5.385Zm-5 3.5l4 2v16.764l-4-2Zm6 16l4 2v3.764l-4-2Zm16 .764l-10 5v-3.764l10-5Zm6-9l-4 2v-3.764l4-2Z"/>
      </svg>
    ),
  },
  'React': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" fill="currentColor"/>
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
  },
  'Tailwind CSS': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/>
      </svg>
    ),
  },
  'JavaScript': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583"/>
      </svg>
    ),
  },
};

const PROJECTS = [
  {
    id: 'chmsuagrm',
    title: 'Integrated Online Platform for Academic Grade and Report Management',
    organization: 'Carlos Hilado Memorial State University - Alijis',
    description:
      'A comprehensive academic management system built to centralize and streamline institutional data.',
    features: [
      'Created an academic management system for Carlos Hilado Memorial State University.',
      'Built separate dashboards for administrators, faculty, and students.',
      'Managed student, faculty, enrollment, program, and section records.',
      'Reduced manual grading by adding automatic grade computation.',
      'Allowed students to check grades and enrollment status online.',
      'Used QR codes to make attendance recording faster and easier.',
      'Sent email notifications for account verification and password recovery.',
      'Generated PDF and Excel reports for school records.',
    ],
    stack: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'JavaScript'],
    images: [
      { src: CHMSUAGRM_dashboard, alt: 'Dashboard' },
      { src: CHMSUAGRM_index, alt: 'Index' },
      { src: CHMSUAGRM_signin, alt: 'Signin form' },
      { src: CHMSUAGRM_profile, alt: 'Profile' },
      { src: CHMSUAGRM_students, alt: 'Students' },
      { src: CHMSUAGRM_faculties, alt: 'Faculties' },
      { src: CHMSUAGRM_courses, alt: 'Courses' },
      { src: CHMSUAGRM_programs, alt: 'Programs' },
      { src: CHMSUAGRM_sections, alt: 'Sections' },
      { src: CHMSUAGRM_departments, alt: 'Departments' },
      { src: CHMSUAGRM_periods, alt: 'Periods' },
      { src: CHMSUAGRM_positions, alt: 'Positions' },
      { src: CHMSUAGRM_enrollments, alt: 'Enrollments' },
      { src: CHMSUAGRM_enrollment_request, alt: 'Enrollment request' },
      { src: CHMSUAGRM_assigned_class, alt: 'Assigned class' },
      { src: CHMSUAGRM_attendance_qr, alt: 'Attendance QR scanning' },
      { src: CHMSUAGRM_student_qr, alt: 'Student QR' },
      { src: CHMSUAGRM_class_assessments, alt: 'Class assessments' },
      { src: CHMSUAGRM_class_exams, alt: 'Class exams' },
      { src: CHMSUAGRM_class_participations, alt: 'Class participations' },
      { src: CHMSUAGRM_class_projects, alt: 'Class projects' },
      { src: CHMSUAGRM_class_term_grades, alt: 'Class term grades' },
      { src: CHMSUAGRM_class_grade_breakdowns, alt: 'Class grade breakdowns' },
      { src: CHMSUAGRM_grade_components, alt: 'Grade components' },
      { src: CHMSUAGRM_student_assessment, alt: 'Student assessment breakdown' },
      { src: CHMSUAGRM_student_exams, alt: 'Student exams breakdown' },
      { src: CHMSUAGRM_student_participation, alt: 'Student participation breakdown' },
      { src: CHMSUAGRM_student_projects, alt: 'Student projects breakdown' },
      { src: CHMSUAGRM_student_term_grades, alt: 'Student term grades breakdown' },
    ],
  },
  {
    id: 'pgsoulpmms',
    title: 'Unified Lot and Property Management and Monitoring',
    organization:
      'Provincial Government of Negros Occidental : General Services Office - Property Management Division',
    description:
      'A provincial-scale digital platform developed to manage and monitor government housing lots and property assets.',
    features: [
      'Developed a digital platform for managing government housing lots and property assets.',
      'Built separate modules for lot management and property management.',
      'Tracked beneficiaries, lot assignments, and payment records.',
      'Added document management and duplicate transaction checking.',
      'Used Leaflet.js to display lot boundaries and property locations.',
      'Created dashboards with charts and real-time statistics.',
      'Supported bulk operations through Excel import and export features.',
      'Generated print-ready reports for official records.',
    ],
    stack: ['Leaflet', 'MySQL', 'PHP', 'Tailwind CSS', 'JavaScript'],
    images: [
      { src: PGSOULPMMS_home, alt: 'Home page' },
      { src: PGSOULPMMS_lot_signin, alt: 'Lot Signin Page' },
      { src: PGSOULPMMS_property_signin, alt: 'Property Signin Page' },
      { src: PGSOULPMMS_interactive_mapping, alt: 'Interactive Mapping' },
      { src: PGSOULPMMS_details_monitoring, alt: 'Details Monitoring' },
      { src: PGSOULPMMS_centralized_oversight, alt: 'Centralized Oversight' },
      { src: PGSOULPMMS_financial_admin, alt: 'Financial Administration' },
      { src: PGSOULPMMS_document_repo, alt: 'Document Repository' },
      { src: PGSOULPMMS_spatial_tracking, alt: 'Spatial Tracking' },
      { src: PGSOULPMMS_locality_insights, alt: 'Locality Insights' },
      { src: PGSOULPMMS_unified_filing, alt: 'Unified Filing' },
      { src: PGSOULPMMS_asset_control, alt: 'Asset Control' },
    ],
  },
];

const outlineButtonWithLabelClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2',
  'border bg-background hover:bg-accent hover:text-accent-foreground',
  'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  'transition-[box-shadow,_color,_background-color,_border-color]',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0',
  'text-sm font-medium'
);

const outlineButtonClasses = cn(
  'inline-flex items-center justify-center rounded-md size-9',
  'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
  'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  'transition-[box-shadow,_color,_background-color,_border-color]',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0'
);

function ImageIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <title>image</title>
      <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z"/>
    </svg>
  );
}

function FeaturesIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <title>list-filled</title>
      <path fill="currentColor" fillRule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h6V5H4zm7 0h1V5h-1zm-1 2.5H4v-1h6zm1 0h1v-1h-1zM10 11H4v-1h6zm1 0h1v-1h-1z" clipRule="evenodd"/>
    </svg>
  );
}

function ChevronLeftIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function ChevronRightIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

function ImageCarousel({ images, startIndex = 0 }) {
  const [index, setIndex] = useState(startIndex);
  const total = images.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative overflow-hidden rounded-md border border-gray-400 bg-base-300/30 h-[300px] flex flex-col flex-shrink-0">
      <div className="flex-1 flex items-center justify-center w-full p-2 md:p-4 min-h-0">
        <img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="h-full w-full object-contain"
        />
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className={cn(
              outlineButtonClasses,
              'absolute left-3 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-background/80 hover:bg-accent hover:text-accent-foreground border-border'            )}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className={cn(
              outlineButtonClasses,
              'absolute right-3 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-background/60'
            )}
          >
            <ChevronRightIcon />
          </button>
        </>
      )}

      <div className="border-t border-gray-400 p-1.5 md:p-2 text-[10px] md:text-xs text-base-content flex items-center justify-between flex-shrink-0">
        <span className="truncate">{images[index].alt}</span>
        <span className="tabular-nums">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}

function ImagesDialog({ project, open, onClose }) {
  if (!project) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Screenshots</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed">{project.title}</DialogDescription>
        </div>
        <div className="flex-1 min-h-0">
          <ImageCarousel images={project.images ?? []} />
        </div>
      </DialogPanel>
    </Dialog>
  );
}

function FeaturesDialog({ project, open, onClose }) {
  if (!project) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
      <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Features</DialogTitle>
          <hr></hr>
          <DialogDescription className="text-xs md:text-sm leading-relaxed">{project.title}</DialogDescription>
        </div>

        <div className="max-h-[500px] overflow-y-auto border border-gray-600 dark:border-gray-400 rounded-md">
          <ul className="space-y-2 p-1.5 md:p-2">
            {(project.features ?? []).map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-[10px] md:text-xs leading-relaxed"
              >
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default function Projects() {
  const [imagesProject, setImagesProject] = useState(null);
  const [featuresProject, setFeaturesProject] = useState(null);

  return (
    <section id="projects" className="scroll-mt-24">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
            Projects
          </h2>

          <p className="text-[10px] md:text-xs leading-relaxed text-base-content/70">
            Selected work and personal builds
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600/20 shadow-xl">
          <AnimateIcon animateOnHover>
            <FolderFiles size={20} className="h-5 w-5" />
          </AnimateIcon>
        </div>
      </header>

      <div className="space-y-8 md:space-y-10">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className=""
          >
            <div className="space-y-1">
              <h3 className="text-xs md:text-sm leading-relaxed font-base font-semibold text-base-content">
                {project.title}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {project.organization}
              </p>
              <ul className="list-disc list-outside text-[10px] md:text-xs text-muted-foreground space-y-3 leading-relaxed pl-5">
                <li className="pl-1">{project.description}</li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className={outlineButtonWithLabelClasses}
                  onClick={() => setImagesProject(project)}
                  aria-label="Screenshots"
                >
                  <ImageIcon size={16} />
                  <span className="text-[8px] mmd:text-[10px] font-medium text-base-content">
                    Screenshots
                  </span>
                </button>
                <button
                  type="button"
                  className={outlineButtonWithLabelClasses}
                  onClick={() => setFeaturesProject(project)}
                  aria-label="Features"
                >
                  <FeaturesIcon size={16} />
                  <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                    Features
                  </span>
                </button>
              </div>
            </div>

            {project.stack?.length ? (
              <div className="pt-3">
                <h4 className="text-[10px] md:text-xs font-medium text-base-content mb-2">Tools:</h4>
                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => {
                    const stackIcon = stackIcons[tech];
                    if (!stackIcon) return null;
                    return (
                      <div
                        key={tech}
                        className={cn(
                          outlineButtonWithLabelClasses,
                          'cursor-default'
                        )}
                      >
                        {stackIcon.icon}
                        <span className="text-[8px] md:text-[10px] font-medium text-base-content">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <ImagesDialog
        project={imagesProject}
        open={imagesProject !== null}
        onClose={() => setImagesProject(null)}
      />
      <FeaturesDialog
        project={featuresProject}
        open={featuresProject !== null}
        onClose={() => setFeaturesProject(null)}
      />
    </section>
  );
}
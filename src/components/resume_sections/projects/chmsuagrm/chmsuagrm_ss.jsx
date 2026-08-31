import CHMSUAGRM_dashboard from '@/components/resume_sections/projects/chmsuagrm/dashboard.webp';
import CHMSUAGRM_index from '@/components/resume_sections/projects/chmsuagrm/index.webp';
import CHMSUAGRM_signin from '@/components/resume_sections/projects/chmsuagrm/signin form.webp';
import CHMSUAGRM_enrollments from '@/components/resume_sections/projects/chmsuagrm/enrollments.webp';
import CHMSUAGRM_enrollment_request from '@/components/resume_sections/projects/chmsuagrm/enrollment request.webp';
import CHMSUAGRM_assigned_class from '@/components/resume_sections/projects/chmsuagrm/assigned class.webp';
import CHMSUAGRM_attendance_qr from '@/components/resume_sections/projects/chmsuagrm/attendance qr scanning.webp';
import CHMSUAGRM_student_qr from '@/components/resume_sections/projects/chmsuagrm/student qr.webp';

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

export const chmsuagrmFeatures = [
  'Created an academic management system for Carlos Hilado Memorial State University.',
  'Built separate dashboards for administrators, faculty, and students.',
  'Managed student, faculty, enrollment, program, and section records.',
  'Reduced manual grading by adding automatic grade computation.',
  'Allowed students to check grades and enrollment status online.',
  'Used QR codes to make attendance recording faster and easier.',
  'Sent email notifications for account verification and password recovery.',
  'Generated PDF and Excel reports for school records.',
];

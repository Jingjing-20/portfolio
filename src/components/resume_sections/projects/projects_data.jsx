import { deployedData } from '@/components/resume_sections/projects/deployed/deployed_data';
import { mockupsData } from '@/components/resume_sections/projects/mockups/mockups_data';
import { personalData } from '@/components/resume_sections/projects/personal/personal_data';

export const PROJECT_CATEGORIES = [
  {
    category: 'Deployed',
    description: 'Production systems actively serving end users in real-world environments.',
    items: deployedData,
  },
  {
    category: 'Personal',
    description: 'Side projects, explorations, and personal builds developed for learning and fun.',
    items: personalData,
  },
  {
    category: 'Mockups',
    description: 'Design concepts and interface prototypes available for development or licensing.',
    items: mockupsData,
  },
];

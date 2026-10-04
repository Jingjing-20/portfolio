import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

export function ExperienceDialog({ experience, open, onClose }) {
  if (!experience) return null;

  // Display only first 10 major skills in dialog
  const MAX_DIALOG_SKILLS = 10;
  const dialogSkills = experience.skills?.slice(0, MAX_DIALOG_SKILLS) || [];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-3 md:px-0 p-4 md:p-6 max-w-md w-full">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-xs md:text-sm font-bold">
            {experience.company || 'Experience Details'}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-[10px] md:text-xs text-base-content">
            <p className="text-[10px] md:text-xs text-base-content/80">
              Role :
            </p>
            <span className='font-extrabold'>{experience.role}</span>
          </DialogDescription>
        </div>

        {/* Skills List */}
        <div className="space-y-1">
          <p className="text-[10px] md:text-xs text-base-content/80">
            Skills & Technologies :
          </p>
          <div className="overflow-y-auto pr-1">
            {dialogSkills.map((skill, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-3 p-1 rounded-md',
                  'text-[10px] md:text-xs font-medium text-base-content'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-base-content/80 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export { ExperienceDialog as DetailsDialog };
export default ExperienceDialog;


import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

export function ExperienceDialog({ experience, open, onClose }) {
  if (!experience) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-3 md:px-0 p-4 md:p-6 max-w-sm w-full">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-xs md:text-sm">
            {experience.role || 'Experience Details'}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-[10px] md:text-xs text-base-content">
            {experience.company}
          </DialogDescription>
        </div>

        {/* Skills List */}
        <div className="space-y-1">
          <p className="text-[10px] md:text-xs text-base-content/50">
            Skills & Technologies
          </p>
          <div className="max-h-[300px] overflow-y-auto pr-1 space-y-1">
            {experience.skills?.map((skill, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-3 p-1 rounded-md',
                  'text-[10px] md:text-xs font-medium text-base-content'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-base-content/50 shrink-0" />
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


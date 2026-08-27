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
      <DialogPanel className="gap-4 px-3 md:px-0 p-4 md:p-6 max-w-md w-full">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed font-semibold">
            {experience.role || 'Experience Details'}
          </DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content/80">
            {experience.company}
          </DialogDescription>
        </div>

        {/* Skills List */}
        <div className="space-y-2">
          <p className="text-[10px] md:text-xs font-semibold text-base-content/70 tracking-wider uppercase">
            Skills & Technologies
          </p>
          <div className="max-h-[300px] overflow-y-auto pr-1 space-y-2">
            {experience.skills?.map((skill, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-md shadow-sm',
                  'bg-textured border-2 border-solid border-gray-300 dark:border-white/20 hover:border-double',
                  'text-[10px] md:text-xs font-medium text-base-content'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-base-content/60 shrink-0" />
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


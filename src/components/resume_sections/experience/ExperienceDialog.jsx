import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';

export function DetailsDialog({ experience, open, onClose }) {
  if (!experience) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">Details</DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">
            {experience.company}
          </DialogDescription>
        </div>

        <div className="max-h-[350px] overflow-y-auto border border-gray-300 dark:border-white/20 rounded-md">
          <div className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-3 leading-relaxed text-base-content">
            <div>
              <p className="font-semibold mb-1.5">Description:</p>
              <div className="space-y-1.5">
                {(experience.description ?? []).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold mb-1.5">Key Contributions:</p>
              <ul className="space-y-1.5 md:space-y-2">
                {(experience.keyContributions ?? []).map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="inline-block">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

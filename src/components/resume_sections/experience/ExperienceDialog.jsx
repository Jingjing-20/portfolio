import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';

export function KeyContributionsDialog({ contributions, company, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 px-2 md:px-0 p-4 md:p-6 max-w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle className="text-sm md:text-base leading-relaxed">
            Key Contributions
          </DialogTitle>
          <hr />
          <DialogDescription className="text-xs md:text-sm leading-relaxed text-base-content">
            {company}
          </DialogDescription>
        </div>
        <div className="max-h-[350px] overflow-y-auto border border-gray-600 dark:border-gray-400 rounded-md">
          <ul className="p-1.5 md:p-2 text-[10px] md:text-xs space-y-1.5 md:space-y-2 leading-relaxed text-base-content">
            {contributions.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="inline-block">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export default function SectionSkeleton({ icon: Icon, className }) {
  return (
    <div className={cn('flex flex-col items-center gap-4 py-10', className)}>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/60">
        <Icon size={28} className="h-7 w-7 text-muted-foreground/70" />
      </div>
      <div className="flex w-full max-w-md flex-col gap-2.5">
        <Skeleton className="mx-auto h-4 w-4/5" />
        <Skeleton className="mx-auto h-4 w-3/5" />
        <Skeleton className="mx-auto h-4 w-2/5" />
      </div>
    </div>
  );
}

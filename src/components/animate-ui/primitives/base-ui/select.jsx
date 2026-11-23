import * as React from 'react';
import { Select as BaseSelect } from '@base-ui/react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const SelectRoot = BaseSelect.Root;
const SelectPortal = BaseSelect.Portal;
const SelectPositioner = React.forwardRef(function SelectPositioner(
  { className, sideOffset = 4, alignItemWithTrigger = false, ...props },
  ref
) {
  return (
    <BaseSelect.Positioner
      ref={ref}
      sideOffset={sideOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      className={cn('z-50', className)}
      {...props}
    />
  );
});

const SelectTrigger = React.forwardRef(function SelectTrigger(
  { className, children, ...props },
  ref
) {
  return (
    <BaseSelect.Trigger
      ref={ref}
      className={cn(
        'w-full flex items-center justify-between rounded-md p-2 text-[10px] md:text-xs text-base-content bg-theme',
        'border border-solid border-gray-300 dark:border-white/20',
        'focus:border-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary',
        'cursor-pointer hover:border-black/60 dark:hover:border-white/60 transition-all select-none',
        className
      )}
      {...props}
    >
      {children}
    </BaseSelect.Trigger>
  );
});

const SelectValue = React.forwardRef(function SelectValue(
  { className, ...props },
  ref
) {
  return (
    <BaseSelect.Value
      ref={ref}
      className={cn('truncate text-left flex-1', className)}
      {...props}
    />
  );
});

const SelectIcon = React.forwardRef(function SelectIcon(
  { className, children, ...props },
  ref
) {
  return (
    <BaseSelect.Icon
      ref={ref}
      className={cn('shrink-0 text-base-content/50 ml-1.5', className)}
      {...props}
    >
      {children || <ChevronDown className="h-3 w-3 md:h-3.5 md:w-3.5" />}
    </BaseSelect.Icon>
  );
});

const SelectPopup = React.forwardRef(function SelectPopup(
  { className, children, ...props },
  ref
) {
  return (
    <BaseSelect.Popup
      ref={ref}
      className={cn(
        'bg-textured border border-black/50 dark:border-white/50 shadow-2xl rounded-md p-1',
        'min-w-[var(--anchor-width)] overflow-y-auto max-h-60',
        'outline-none animate-in fade-in zoom-in-95 duration-150',
        className
      )}
      {...props}
    >
      {children}
    </BaseSelect.Popup>
  );
});

const SelectList = React.forwardRef(function SelectList(
  { className, ...props },
  ref
) {
  return (
    <BaseSelect.List
      ref={ref}
      className={cn('space-y-0.5 outline-none', className)}
      {...props}
    />
  );
});

const SelectItem = React.forwardRef(function SelectItem(
  { className, children, ...props },
  ref
) {
  return (
    <BaseSelect.Item
      ref={ref}
      className={cn(
        'flex items-center justify-between px-2 py-1.5 rounded text-[9px] md:text-[10.5px]',
        'text-base-content cursor-pointer transition-colors outline-none select-none',
        'data-[highlighted]:bg-base-content data-[highlighted]:text-base-100',
        'data-[selected]:font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </BaseSelect.Item>
  );
});

const SelectItemText = React.forwardRef(function SelectItemText(
  { className, ...props },
  ref
) {
  return (
    <BaseSelect.ItemText
      ref={ref}
      className={cn('truncate', className)}
      {...props}
    />
  );
});

const SelectItemIndicator = React.forwardRef(function SelectItemIndicator(
  { className, children, ...props },
  ref
) {
  return (
    <BaseSelect.ItemIndicator
      ref={ref}
      className={cn('shrink-0 ml-2 text-[9px] md:text-xs', className)}
      {...props}
    >
      {children || <Check className="h-3 w-3" />}
    </BaseSelect.ItemIndicator>
  );
});

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  List: SelectList,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  Group: BaseSelect.Group,
  GroupLabel: BaseSelect.GroupLabel,
  Separator: BaseSelect.Separator,
  Arrow: BaseSelect.Arrow,
};

export default Select;

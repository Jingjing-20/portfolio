import { Tabs as TabsPrimitive } from "@animate-ui/react/primitives/base-ui/tabs";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("group/tabs flex gap-3 data-horizontal:flex-col w-full", className)}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex items-center justify-center rounded-md p-1 border border-gray-300 dark:border-white/20 bg-base-content/5 text-base-content/70",
  {
    variants: {
      variant: {
        default: "bg-base-content/5",
        line: "gap-1 bg-transparent border-b rounded-none p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex items-center justify-center gap-1.5 rounded px-2.5 py-1 text-[9px] md:text-[10.5px] font-medium whitespace-nowrap",
        "text-base-content/60 hover:text-base-content transition-all cursor-pointer outline-none select-none",
        "data-active:bg-base-content data-active:text-base-100 data-active:font-bold data-active:shadow-xs",
        "[&[data-active]]:hover:text-base-100",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none animate-in fade-in duration-150", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };

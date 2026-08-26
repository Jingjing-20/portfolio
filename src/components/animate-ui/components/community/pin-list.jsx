'use client';;
import * as React from 'react';
import { motion, LayoutGroup } from 'motion/react';
import { cn } from '@/lib/utils';

const openDialogBtn = cn(
  'flex items-center justify-center size-8 rounded-full flex-shrink-0',
  'bg-white/80 dark:bg-black/80 backdrop-blur-sm',
  'border border-gray-300 dark:border-white/30',
  'shadow-md hover-open-icon'
);

const orgLogo = cn(
  'rounded-lg p-2 flex-shrink-0',
  'shadow-xl inline-flex items-center justify-center',
  'bg-textured border border-gray-300 dark:border-white/20'
);

function PinList({
  items,
  transition = { stiffness: 320, damping: 20, mass: 0.8, type: 'spring' },

  className,
  unpinnedSectionClassName,
  onItemClick,
  ...props
}) {
  const unpinned = items.filter((u) => !u.pinned);

  const handleItemClick = (id) => {
    if (onItemClick) {
      const item = items.find((u) => u.id === id);
      if (item) onItemClick(item);
    }
  };

  const OpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" />
    </svg>
  );


  return (
    <motion.div className={cn('', className)} {...props}>


      <LayoutGroup>
        <div className={cn('grid grid-cols-2 lg:grid-cols-3 gap-3 relative', unpinnedSectionClassName)}>
          {unpinned.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`item-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              transition={transition}
              className="border-3 border-solid border-gray-300 dark:border-white/30 hover:border-double flex items-center justify-between gap-5 rounded-xl bg-theme p-1 md:p-2 group cursor-pointer hover-list-item">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className={orgLogo}>
                  <item.icon />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] md:text-xs lg:text-sm font-semibold truncate">{item.name}</div>
                  <div className="text-[8px] md:text-[10px] lg:text-xs text-neutral-500 dark:text-neutral-400 font-medium truncate">
                    {item.info}
                  </div>
                </div>
              </div>
              <div className={openDialogBtn}>
                <OpenIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </motion.div>
  );
}

export { PinList };

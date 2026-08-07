'use client';;
import * as React from 'react';
import { motion } from 'motion/react';

import { getVariants, useAnimateIconContext, IconWrapper } from '@/components/animate-ui/icons/icon';

const animations = {
  default: {
    folder: {
      initial: { scale: 1, y: 0 },
      animate: {
        scale: [1, 1.05, 1],
        y: [0, -2, 1, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
  }
};

function IconComponent({
  size,
  viewBox = '0 0 16 16',
  strokeWidth = 1,
  ...props
}) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      {...props}
      variants={variants.folder}
      initial="initial"
      animate={controls}>
      <path d="M3.5 4.5v-2h9V6m-10 2h11m-11-3.5v8h11V6h-6L6 4.5z" />
    </motion.svg>
  );
}

function FolderFiles(props) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, FolderFiles, FolderFiles as FolderFilesIcon };

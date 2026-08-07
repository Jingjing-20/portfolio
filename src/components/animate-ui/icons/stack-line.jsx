'use client';;
import * as React from 'react';
import { motion } from 'motion/react';

import { getVariants, useAnimateIconContext, IconWrapper } from '@/components/animate-ui/icons/icon';

const animations = {
  default: {
    layer1: {
      initial: { y: 0, scaleY: 1 },
      animate: {
        y: [0, -3, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
    layer2: {
      initial: { y: 0 },
      animate: {
        y: [0, -1.5, 0],
        transition: { duration: 0.6, ease: 'easeInOut', delay: 0.08 },
      },
    },
    layer3: {
      initial: { y: 0 },
      animate: {
        y: [0, -0.5, 0],
        transition: { duration: 0.6, ease: 'easeInOut', delay: 0.16 },
      },
    },
  }
};

function IconComponent({
  size,
  viewBox = '0 0 24 24',
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
      {...props}>
      <motion.g variants={variants.layer3} initial="initial" animate={controls}>
        <path
          fill="currentColor"
          d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05z"
        />
      </motion.g>
      <motion.g variants={variants.layer2} initial="initial" animate={controls}>
        <path
          fill="currentColor"
          d="m20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35z"
        />
      </motion.g>
      <motion.g variants={variants.layer1} initial="initial" animate={controls}>
        <path
          fill="currentColor"
          d="M12.514 2.109l8.771 5.262a.5.5 0 0 1 0 .858L12 13L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"
        />
      </motion.g>
    </motion.svg>
  );
}

function StackLine(props) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, StackLine, StackLine as StackLineIcon };

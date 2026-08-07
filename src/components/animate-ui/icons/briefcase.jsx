'use client';;
import * as React from 'react';
import { motion } from 'motion/react';

import { getVariants, useAnimateIconContext, IconWrapper } from '@/components/animate-ui/icons/icon';

const animations = {
  default: {
    paths: {
      initial: { y: 0, x: 0 },
      animate: {
        y: [0, -3, 2, 0],
        x: [0, 1, -1, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
    handle: {
      initial: { y: 0 },
      animate: {
        y: [0, -4, 2, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
    stripe: {
      initial: { pathLength: 1 },
      animate: {
        pathLength: [0.1, 1],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
  }
};

function IconComponent({
  size,
  viewBox = '0 0 24 24',
  strokeWidth = 2,
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      {...props}>
      <motion.g
        variants={variants.paths}
        initial="initial"
        animate={controls}>
        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <motion.g variants={variants.handle}>
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </motion.g>
        <circle cx="12" cy="12" r="0.01" />
        <motion.path
          variants={variants.stripe}
          initial="initial"
          animate={controls}
          d="M3 13a20 20 0 0 0 18 0"
        />
      </motion.g>
    </motion.svg>
  );
}

function Briefcase(props) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, Briefcase, Briefcase as BriefcaseIcon };

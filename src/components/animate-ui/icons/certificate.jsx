'use client';;
import * as React from 'react';
import { motion } from 'motion/react';

import { getVariants, useAnimateIconContext, IconWrapper } from '@/components/animate-ui/icons/icon';

const animations = {
  default: {
    body: {
      initial: { scale: 1, rotate: 0 },
      animate: {
        scale: [1, 1.02, 1],
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
    ribbon: {
      initial: { y: 0 },
      animate: {
        y: [0, 2, -1, 0],
        transition: { duration: 0.6, ease: 'easeInOut', delay: 0.1 },
      },
    },
    seal: {
      initial: { scale: 1 },
      animate: {
        scale: [1, 1.1, 1],
        transition: { duration: 0.5, ease: 'easeInOut' },
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
        variants={variants.body}
        initial="initial"
        animate={controls}>
        <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73" />
        <path d="M6 9h12M6 12h3m-3 3h2" />
      </motion.g>
      <motion.g
        variants={variants.seal}
        initial="initial"
        animate={controls}>
        <circle cx="15" cy="15" r="3" />
      </motion.g>
      <motion.g
        variants={variants.ribbon}
        initial="initial"
        animate={controls}>
        <path d="M13 17.5V22l2-1.5l2 1.5v-4.5" />
      </motion.g>
    </motion.svg>
  );
}

function Certificate(props) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, Certificate, Certificate as CertificateIcon };

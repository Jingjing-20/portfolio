'use client';;
import * as React from 'react';
import { motion } from 'motion/react';

import { getVariants, useAnimateIconContext, IconWrapper } from '@/components/animate-ui/icons/icon';

const animations = {
  default: {
    icon: {
      initial: { scale: 1, rotate: 0 },
      animate: {
        scale: [1, 1.08, 1],
        rotate: [0, -3, 3, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      },
    },
  }
};

function IconComponent({
  size,
  viewBox = '0 0 512 512',
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
      {...props}
      variants={variants.icon}
      initial="initial"
      animate={controls}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"
      />
    </motion.svg>
  );
}

function AboutInfo(props) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, AboutInfo, AboutInfo as AboutInfoIcon };

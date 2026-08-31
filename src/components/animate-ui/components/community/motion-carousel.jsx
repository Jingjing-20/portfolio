'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const carouselButtonClasses = cn(
  'shadow-xl inline-flex items-center justify-center rounded-md p-2',
  'bg-textured border border-gray-300 dark:border-white/20',
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  'disabled:pointer-events-none disabled:opacity-50',
  'cursor-pointer hover-theme-switch transition-all duration-200'
);

const useEmblaControls = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, []);

  const onSelect = React.useCallback((api) => {
    updateSelectionState(api);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel(props) {
  const { slides = [], options, className } = props;
  const emblaOptions = React.useMemo(
    () => ({
      align: 'center',
      loop: true,
      ...options,
    }),
    [options]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div
      className={cn(
        'w-full space-y-4 [--slide-height:10rem] sm:[--slide-height:14rem] md:[--slide-height:18rem] [--slide-spacing:1.5rem] [--slide-size:60%] sm:[--slide-size:55%] md:[--slide-size:55%]',
        className
      )}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;
            const isImage = (typeof slide === 'object' && slide !== null && slide.src) || typeof slide === 'string';
            const src = typeof slide === 'object' ? slide.src : slide;
            const alt = typeof slide === 'object' ? slide.alt : `Slide ${index + 1}`;

            return (
              <motion.div
                key={index}
                className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                <motion.div
                  className="size-full flex items-center justify-center select-none overflow-hidden rounded-xl bg-base-300/30"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={transition}
                >
                  {isImage ? (
                    <img
                      src={src}
                      alt={alt || `Slide ${index + 1}`}
                      className="size-full object-contain pointer-events-none select-none"
                    />
                  ) : (
                    <span className="text-3xl md:text-5xl font-semibold select-none">
                      {slide ?? index + 1}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={onPrev}
          disabled={prevDisabled}
          className={carouselButtonClasses}
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex flex-wrap justify-center items-center gap-2">
          {scrollSnaps.map((_, index) => {
            const slide = slides[index];
            const label = typeof slide === 'object' && slide?.alt ? slide.alt : `Slide ${index + 1}`;
            return (
              <DotButton
                key={index}
                label={label}
                selected={index === selectedIndex}
                onClick={() => onDotClick(index)}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className={carouselButtonClasses}
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-primary text-primary-foreground text-xs md:text-sm font-medium"
      animate={{
        width: selected ? 'auto' : 12,
        height: selected ? 28 : 12,
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? 'blur(0)' : 'blur(4px)',
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

export { MotionCarousel };
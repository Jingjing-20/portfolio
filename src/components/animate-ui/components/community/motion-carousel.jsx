'use client';
import * as React from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api) => {
    if (!api) return;
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

function MotionCarousel({
  slides = [],
  options = { loop: false, align: 'center' },
  className,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className={cn(
        'w-full space-y-4 [--slide-height:16rem] sm:[--slide-height:22rem] md:[--slide-height:28rem] lg:[--slide-height:34rem] [--slide-spacing:1rem] md:[--slide-spacing:1.5rem] [--slide-size:88%] sm:[--slide-size:82%] md:[--slide-size:78%]',
        className
      )}
    >
      <div className="overflow-hidden py-2" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[var(--slide-spacing)]">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;
            const isImage = typeof slide === 'object' && slide !== null && 'src' in slide;

            return (
              <motion.div
                key={index}
                className="h-[var(--slide-height)] pl-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                <motion.div
                  className="size-full flex flex-col items-center justify-center select-none rounded-xl overflow-hidden shadow-xl bg-textured border-3 border-solid border-gray-300 dark:border-white/20 transition-colors"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.65,
                  }}
                  transition={transition}
                >
                  {isImage ? (
                    <div className="relative w-full h-full flex flex-col bg-base-300/30">
                      <div className="flex-1 flex items-center justify-center p-2 sm:p-4 min-h-0 overflow-hidden">
                        <img
                          src={slide.src}
                          alt={slide.alt || `Slide ${index + 1}`}
                          className="h-full w-full object-contain pointer-events-none rounded-md"
                          loading="lazy"
                        />
                      </div>
                      {slide.alt && (
                        <div className="border-t border-gray-300 dark:border-white/10 px-3 py-2 text-center bg-base-200/50 flex-shrink-0 flex items-center justify-between">
                          <p className="text-[10px] md:text-xs font-medium text-base-content/80 truncate">
                            {slide.alt}
                          </p>
                          <span className="text-[10px] md:text-xs text-base-content/60 tabular-nums">
                            {index + 1} / {slides.length}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="size-full flex items-center justify-center text-3xl md:text-5xl font-semibold">
                      {typeof slide === 'number' ? slide + 1 : slide}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 px-1">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={prevDisabled}
          className="rounded-md border-gray-300 dark:border-white/20 hover:border-gray-800 dark:hover:border-white/70 cursor-pointer shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 max-w-[70%] py-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={
                slides[index]?.alt
                  ? `${index + 1}. ${slides[index].alt}`
                  : `Slide ${index + 1}`
              }
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={nextDisabled}
          className="rounded-md border-gray-300 dark:border-white/20 hover:border-gray-800 dark:hover:border-white/70 cursor-pointer shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </Button>
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
      className={cn(
        'flex cursor-pointer select-none items-center justify-center rounded-full border border-gray-300 dark:border-white/20 text-xs font-medium transition-colors',
        selected
          ? 'bg-primary text-primary-foreground shadow-md'
          : 'bg-base-300/60 hover:bg-base-300 text-base-content/70'
      )}
      animate={{
        width: selected ? 'auto' : 12,
        height: selected ? 26 : 12,
        paddingLeft: selected ? 10 : 0,
        paddingRight: selected ? 10 : 0,
      }}
      transition={transition}
    >
      {selected ? (
        <motion.span
          layout
          initial={false}
          className="block whitespace-nowrap text-[10px] md:text-xs font-medium max-w-[160px] truncate"
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0)',
          }}
          transition={transition}
        >
          {label}
        </motion.span>
      ) : null}
    </motion.button>
  );
}

export { MotionCarousel };


import { useEffect, useRef, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let isScheduled = false;

    const handleScroll = () => {
      if (!isScheduled) {
        rafRef.current = requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrollPosition = window.scrollY;
            const elementPosition = scrollPosition + rect.top;
            const parallaxOffset = (scrollPosition - elementPosition) * speed;
            setOffset(parallaxOffset);
          }
          isScheduled = false;
        });
        isScheduled = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed]);

  return { ref, offset };
};

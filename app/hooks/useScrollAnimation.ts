import { useEffect, useRef } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Attaches scroll-reveal behaviour to the returned ref.
 * The element must have the `scroll-reveal` CSS class applied in JSX.
 * When it enters the viewport, `is-visible` is added — CSS handles the rest.
 */
export const useScrollAnimation = (options: Options = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible (e.g. above the fold on first load)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold:  options.threshold  ?? 0.08,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref as React.RefObject<HTMLDivElement>;
};

import { useEffect, useRef } from 'react';

export default function SilverLines({ intensity = 0.16 }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = null;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        // parallax translation — left and right move at slightly different rates
        if (leftRef.current) leftRef.current.style.transform = `translateY(${-(y * intensity)}px) rotate(1deg)`;
        if (rightRef.current) rightRef.current.style.transform = `translateY(${-(y * intensity * 1.25)}px) rotate(-1deg)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once to set initial position
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [intensity]);

  return (
    <div className="silver-lines pointer-events-none" aria-hidden>
      <svg ref={leftRef} className="silver-line left" viewBox="0 0 120 800" preserveAspectRatio="none">
        <path d="M20 0 C40 100, 0 200, 20 300 C40 400, 0 500, 20 600 C40 700, 0 800, 20 900" stroke="silver" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg ref={rightRef} className="silver-line right" viewBox="0 0 120 800" preserveAspectRatio="none">
        <path d="M100 0 C80 100, 120 200, 100 300 C80 400, 120 500, 100 600 C80 700, 120 800, 100 900" stroke="silver" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

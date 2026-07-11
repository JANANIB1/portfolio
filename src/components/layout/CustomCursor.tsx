import { useEffect, useRef, useState } from 'react';

/**
 * A small accent-colored dot with a soft trailing glow. Disabled entirely on
 * touch/coarse-pointer devices so it never gets in the way on mobile.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFine);
    if (isFine) document.documentElement.classList.add('cursor-active');
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let glowX = 0;
    let glowY = 0;
    let targetX = 0;
    let targetY = 0;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      const el = document.elementFromPoint(targetX, targetY);
      setInteractive(Boolean(el?.closest('a, button, [role="button"], input, textarea')));
    }

    let frame: number;
    function animateGlow() {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }
      frame = requestAnimationFrame(animateGlow);
    }

    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-xl transition-[width,height] duration-300"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[91] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-[width,height] duration-200"
        style={{
          width: interactive ? 14 : 6,
          height: interactive ? 14 : 6,
          willChange: 'transform',
        }}
      />
    </>
  );
}

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer-fine desktop devices
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const inner = innerRef.current;
    if (!cursor || !inner) return;

    // Hide default OS cursor on desktop
    document.documentElement.classList.add('custom-cursor-active');

    let isVisible = false;
    let isHovered = false;
    let isClicked = false;

    const updateInnerTransform = () => {
      const scale = isClicked ? 0.85 : isHovered ? 1.2 : 1;
      const rotate = isHovered ? -12 : -8;
      inner.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
    };

    // Instant zero-lag positioning on hardware compositor layer
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = '1';
      }
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseDown = () => {
      isClicked = true;
      updateInnerTransform();
    };

    const handleMouseUp = () => {
      isClicked = false;
      updateInnerTransform();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], select, label, .cursor-pointer, [data-cursor-interactive], .glass-card-hover'
      );
      const shouldHover = Boolean(interactive);
      if (isHovered !== shouldHover) {
        isHovered = shouldHover;
        updateInnerTransform();
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[999999] select-none opacity-0 will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.2s ease',
      }}
    >
      <div
        ref={innerRef}
        className="pointer-events-none will-change-transform"
        style={{
          transform: 'scale(1) rotate(-8deg)',
          transformOrigin: '28% 12%', // Anchors the tip of the lotus precisely to the cursor point
          transition: 'transform 0.16s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <svg
          width="32"
          height="26"
          viewBox="0 0 110 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(64,56,63,0.22))',
            transform: 'translate(-28%, -12%)',
          }}
        >
          {/* Central Petal */}
          <path
            d="M55 2 C68 22 72 46 55 68 C38 46 42 22 55 2 Z"
            fill="#D380B8"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Left Petal */}
          <path
            d="M3 27 C20 22 41 38 42 68 C24 58 13 42 3 27 Z"
            fill="#D380B8"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Right Petal */}
          <path
            d="M107 27 C90 22 69 38 68 68 C86 58 97 42 107 27 Z"
            fill="#D380B8"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

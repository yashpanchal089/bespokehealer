import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Exact mouse coordinate (zero lag)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Only activate on pointer-fine desktop devices
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    // Hide default OS cursor on desktop
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], select, label, .cursor-pointer, [data-cursor-interactive], .glass-card-hover'
      );
      setIsHovered(Boolean(interactive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
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
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden select-none">
      {/* Pure Lotus Flower Cursor (No circle ring, no trails) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          // Position apex tip of center petal at the mouse point with natural 15-degree pointer tilt
          translateX: '-35%',
          translateY: '-10%',
        }}
        animate={{
          scale: isClicked ? 0.88 : isHovered ? 1.15 : 1,
          rotate: isHovered ? -12 : -8,
        }}
        transition={{
          duration: 0.15,
          ease: 'easeOut',
        }}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <svg
          width="32"
          height="26"
          viewBox="0 0 110 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_2px_5px_rgba(64,56,63,0.25)]"
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
      </motion.div>
    </div>
  );
};

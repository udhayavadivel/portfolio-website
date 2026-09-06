'use client';

import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (!mounted || isMobile) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(0,245,255,0.8)] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 w-9 h-9 border border-neon-cyan rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 bg-neon-cyan/10' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x - 18}px, ${position.y - 18}px)`,
        }}
      />
    </>
  );
}

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(computedStyle.cursor === 'pointer');
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', updateCursorType);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', updateCursorType);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`transition-all duration-200 text-4xl ${
          isPointer ? 'scale-125 rotate-12' : 'scale-100'
        }`}
      >
        😺
      </div>
    </div>
  );
};

export default CustomCursor;
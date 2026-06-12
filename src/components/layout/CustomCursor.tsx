import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isProject, setIsProject] = useState(false);

  const dotX = useSpring(0, { damping: 20, stiffness: 300 });
  const dotY = useSpring(0, { damping: 20, stiffness: 300 });
  
  const outlineX = useSpring(0, { damping: 30, stiffness: 200 });
  const outlineY = useSpring(0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      outlineX.set(e.clientX - 20);
      outlineY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      const isProjectArea = target.closest('.group.cursor-none');

      setIsHovering(!!isInteractive);
      setIsProject(!!isProjectArea);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [dotX, dotY, outlineX, outlineY]);

  return (
    <>
      <motion.div 
        className="custom-cursor hidden md:block" 
        style={{ 
          x: dotX, 
          y: dotY, 
          scale: isProject ? 8 : isHovering ? 4 : 1,
          backgroundColor: isProject ? 'rgba(255,255,255,0.1)' : 'white',
          mixBlendMode: isProject ? 'normal' : 'difference',
          backdropFilter: isProject ? 'blur(4px)' : 'none'
        }}
      >
        {isProject && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[2px] font-bold text-white uppercase tracking-tighter">View</span>
          </div>
        )}
      </motion.div>
      <motion.div 
        className="custom-cursor-outline hidden md:block" 
        style={{ 
          x: outlineX, 
          y: outlineY, 
          scale: (isHovering || isProject) ? 1.5 : 1,
          opacity: (isHovering || isProject) ? 0 : 1
        }}
      />
    </>
  );
}

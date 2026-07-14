import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-indigo-500 rounded-full mix-blend-difference pointer-events-none z-[9999]"
      animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
};
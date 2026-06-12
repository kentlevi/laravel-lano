import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-between py-20 pointer-events-none"
        >
          <div className="container mx-auto px-6 h-full flex flex-col justify-between items-center text-black">
             <div className="text-[10px] uppercase tracking-[0.5em] font-black">
                Portfolio / v2.0
             </div>

             <div className="flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-8xl md:text-[12vw] font-display font-black tracking-tighter leading-none"
                >
                  {counter}%
                </motion.div>
                <div className="w-48 h-px bg-black/10 mt-4 relative overflow-hidden">
                   <motion.div 
                     className="absolute inset-0 bg-black"
                     initial={{ x: '-100%' }}
                     animate={{ x: `${counter - 100}%` }}
                   />
                </div>
             </div>

             <div className="flex flex-col items-center gap-4">
                <div className="text-[10px] uppercase tracking-[0.5em] font-black animate-pulse">
                   Initializing Experience
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/50">
                   Laravel Lano / Digital Artist
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'motion/react';

const letterAnimation = {
  initial: { y: 400, transform: 'skewY(10deg)' },
  animate: (i: number) => ({
    y: 0,
    transform: 'skewY(0deg)',
    transition: {
      duration: 1.5,
      delay: 0.1 * i,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

export default function Hero() {
  const line1 = "Frontend".split("");
  const line2 = "Developer".split("");

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Mask/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <span className="text-[12px] uppercase tracking-[0.5em] text-muted-foreground font-bold">
              Based in Cebu, Philippines
            </span>
          </motion.div>
          
          <div className="relative mb-8 flex flex-col items-center">
            <h1 className="text-[14vw] md:text-[12vw] font-display font-black leading-[0.8] tracking-tighter flex overflow-hidden">
               {line1.map((char, i) => (
                 <motion.span 
                   key={i} 
                   custom={i} 
                   variants={letterAnimation} 
                   initial="initial" 
                   animate="animate"
                   className="inline-block"
                 >
                   {char === " " ? "\u00A0" : char}
                 </motion.span>
               ))}
            </h1>
            <h1 className="text-[14vw] md:text-[12vw] font-display font-black leading-[0.8] tracking-tighter flex overflow-hidden">
               {line2.map((char, i) => (
                 <motion.span 
                   key={i} 
                   custom={i + line1.length} 
                   variants={letterAnimation} 
                   initial="initial" 
                   animate="animate"
                   className="inline-block text-muted-foreground"
                 >
                   {char === " " ? "\u00A0" : char}
                 </motion.span>
               ))}
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm md:text-base text-muted-foreground max-w-lg mb-12 leading-relaxed uppercase tracking-widest text-center">
              Building Modern Web Experiences Through Code, Design, and AI-Assisted Workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <a
                href="#projects"
                className="group relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest transition-all hover:bg-white/90"
              >
                Explore Work
                <span className="absolute inset-0 border border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-6 flex items-center gap-4 text-muted-foreground"
      >
        <div className="w-12 h-px bg-muted-foreground/30" />
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 right-6 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono whitespace-nowrap">
           Available for hire 2026
        </span>
      </motion.div>
    </section>
  );
}

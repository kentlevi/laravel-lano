import { motion } from 'motion/react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Major Projects', value: '5+' },
  { label: 'Mobile-First Apps', value: '100%' },
  { label: 'Accessibility focus', value: 'WCAG' },
];

const focusAreas = [
  'Angular & React',
  'TypeScript Expertise',
  'SPA Architecture',
  'UI Component Systems',
  'Performance Optimization',
  'AI Integration',
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8">Editorial / 01</h2>
            <h3 className="text-6xl md:text-8xl font-display font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Crafting Digital <span className="text-muted-foreground">Stories</span>
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-tight uppercase font-medium">
              Frontend Developer specializing in creating immersive, high-performance web experiences through modern architecture and AI-assisted precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 pt-12 lg:pt-40"
          >
            <div className="space-y-12">
               <p className="text-lg text-muted-foreground leading-relaxed">
                 I believe that great design is not just what you see, but how it feels to interact with. My philosophy centers on a balance between technical robustness and aesthetic elegance. Based in Cebu, I've spent over 3 years refining my craft across Angular, React, and TypeScript ecosystems.
               </p>
               
               <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/10">
                  {stats.map((stat, i) => (
                    <div key={i} className="group cursor-default">
                       <div className="text-4xl font-display font-black mb-2 flex items-baseline gap-1">
                         {stat.value}
                       </div>
                       <div className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">
                         {stat.label}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

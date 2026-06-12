import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Dinnox IT Solution',
    role: 'Frontend Developer',
    period: 'March 2023 – Present',
    description: 'Leading frontend initiatives and building scalable web applications with a focus on component modularity and performance.',
    highlights: [
      'Developed reusable Angular and React UI components',
      'Reduced code duplication by 40%',
      'Built responsive layouts from Figma',
      'Implemented accessibility standards',
      'Created Jasmine unit tests',
      'Used AI tools to accelerate development workflows'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-48 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8">History / 02</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9]">
               Professional <span className="text-muted-foreground">Path</span>
            </h3>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono whitespace-nowrap text-muted-foreground">
             Cebu, Philippines Based
          </div>
        </div>

        <div className="max-w-5xl ml-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-16 border-t border-white/5 first:border-t-0 flex flex-col md:flex-row gap-8 md:gap-20"
            >
              <div className="md:w-1/4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground pt-2">
                {exp.period}
              </div>
              
              <div className="md:w-3/4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                   <h4 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase group-hover:text-white transition-colors">
                     {exp.role}
                   </h4>
                   <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                     @ {exp.company}
                   </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-white/5">
                      <div className="text-[10px] font-mono text-muted-foreground pt-0.5">0{i+1}</div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

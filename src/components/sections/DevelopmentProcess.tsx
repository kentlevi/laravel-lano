import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding goals, user requirements, and defining technical specifications.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Transforming Figma designs into high-fidelity, responsive, and pixel-perfect layouts.'
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Building stable, scalable and efficient frontend architectures using modern frameworks.'
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Rigorous testing, accessibility audits, and performance tuning for peak delivery.'
  }
];

export default function DevelopmentProcess() {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8">Process / 04</h2>
          <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9]">
             Workflow <span className="text-muted-foreground">Philosophy</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="p-12 bg-black group hover:bg-zinc-900 transition-colors cursor-default"
            >
              <div className="text-[10px] font-mono text-muted-foreground mb-12">
                [{step.num}]
              </div>
              <h4 className="text-3xl font-display font-black mb-6 uppercase tracking-tighter">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-wide">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Zap, Bug, FileText, Component } from 'lucide-react';

const aiFeatures = [
  {
    icon: <Zap size={24} />,
    title: 'Development Speed',
    desc: 'Accelerating the coding process with intelligent suggestions and boilerplate generation.'
  },
  {
    icon: <Bug size={24} />,
    title: 'Testing & QA',
    desc: 'Using AI to generate comprehensive test cases and identify potential edge cases.'
  },
  {
    icon: <Component size={24} />,
    title: 'Component Design',
    desc: 'Streamlining UI development through AI-assisted component modularization.'
  },
  {
    icon: <FileText size={24} />,
    title: 'Documentation',
    desc: 'Automating the creation of clear, concise, and structured code documentation.'
  }
];

export default function AISection() {
  return (
    <section className="py-24 md:py-48 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8">Intelligence / 05</h2>
            <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9]">
               The Machine <br /> <span className="text-muted-foreground">Collaborator</span>
            </h3>
          </div>
          <p className="text-xl text-muted-foreground max-w-sm uppercase font-medium leading-tight tracking-tight">
            I leverage state-of-the-art AI tools to enhance every stage of the development lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {aiFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-default"
            >
              <div className="text-white mb-8 group-hover:text-muted-foreground transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-wide">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-8">
           {['OpenAI', 'Google Gemini', 'GitHub Copilot', 'Vertex AI'].map(brand => (
             <span key={brand} className="text-xs font-mono uppercase tracking-[0.5em] text-muted-foreground hover:text-white transition-colors cursor-pointer">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
}

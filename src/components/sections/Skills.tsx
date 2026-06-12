import { motion } from 'motion/react';
import { 
  Code2, 
  Layers, 
  Workflow, 
  Cpu, 
  Layout, 
  CheckCircle2,
  GitBranch,
  Search
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Core',
    icon: <Code2 className="text-accent" />,
    skills: ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap']
  },
  {
    title: 'Architecture & State',
    icon: <Layers className="text-accent" />,
    skills: ['NgRx', 'Micro Frontends', 'Component Architecture', 'Redux', 'RXJS']
  },
  {
    title: 'AI Development',
    icon: <Cpu className="text-accent" />,
    skills: ['Google Gemini', 'OpenAI API', 'Codex', 'ChatGPT', 'AI Workflows']
  },
  {
    title: 'Workflow & Tools',
    icon: <Workflow className="text-accent" />,
    skills: ['Git', 'Azure DevOps', 'Agile Scrum', 'Figma', 'Asana']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-bold mb-4">Technical Stack</h2>
          <h3 className="text-4xl font-display font-bold tracking-tight">Expertise & Technologies</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-background border border-white/5 rounded-3xl hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-muted-foreground hover:bg-accent hover:text-black transition-colors border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
           <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-bold mb-4">Academic Background</h2>
            <h3 className="text-4xl font-display font-bold tracking-tight text-gradient">Education</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-background border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
               <GraduationCap size={32} />
            </div>
            
            <div className="flex-1">
              <div className="text-accent font-bold text-lg mb-1">Bachelor of Science in Information Technology</div>
              <h4 className="text-2xl font-display font-bold mb-2">Cebu Technological University</h4>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin size={16} />
                <span>Ginatilan Extension Campus</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Focused on software engineering, web development systems, and information architecture. Graduated with a strong foundation in algorithmic thinking and modern programming paradigms.
              </p>
            </div>

            <div className="px-6 py-2 bg-secondary rounded-full text-sm font-bold border border-white/5 whitespace-nowrap">
               Completed 2023
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

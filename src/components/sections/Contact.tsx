import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'lanolaravel@gmail.com',
    href: 'mailto:lanolaravel@gmail.com'
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '0961 538 6631',
    href: 'tel:09615386631'
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Cebu, Philippines',
    href: '#'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-8">Contact / 03</h2>
            <h3 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-12 uppercase leading-[0.9]">
              Let's Build <br />
              Something <span className="text-muted-foreground">Great</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-12 leading-tight uppercase font-medium max-w-md">
              Available for selected freelance opportunities and collaborations.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.href}
                  className="flex items-center gap-6 p-6 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="text-muted-foreground group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-lg font-medium font-display uppercase tracking-tight">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-zinc-900/50 border-white/5 rounded-none">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pl-1">Name</label>
                    <Input placeholder="Your Name" className="bg-black/40 border-white/10 focus:border-white transition-all h-16 px-6 rounded-none uppercase text-xs tracking-widest" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pl-1">Email</label>
                    <Input placeholder="your@email.com" className="bg-black/40 border-white/10 focus:border-white transition-all h-16 px-6 rounded-none uppercase text-xs tracking-widest" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pl-1">Project Details</label>
                  <Textarea placeholder="Tell me about your project..." className="bg-black/40 border-white/10 focus:border-white transition-all min-h-[200px] p-6 rounded-none uppercase text-xs tracking-widest leading-loose" />
                </div>

                <button className="w-full py-6 bg-white text-black font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all hover:bg-zinc-200">
                   Send Message <ArrowRight size={20} />
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

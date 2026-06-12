import { motion } from 'motion/react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/laravel-lano', label: 'LinkedIn' },
  { icon: <Github size={20} />, href: '#', label: 'GitHub' },
];

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6 leading-tight">
              Building Digital Experiences <br />
              <span className="text-accent">That Matter.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {footerLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-muted-foreground hover:text-white font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Laravel Lano. All rights reserved. Built with Vite, React & AI.
          </div>

          <div className="flex items-center gap-6">
             {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-black transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
             ))}
             <button 
               onClick={scrollToTop}
               className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-white/5 transition-all"
               aria-label="Scroll to top"
             >
               <ArrowUp size={20} />
             </button>
          </div>
        </div>
      </div>

      {/* Decorative text background */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/2 pointer-events-none select-none whitespace-nowrap">
        LARAVEL LANO
      </div>
    </footer>
  );
}

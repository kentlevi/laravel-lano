import { useRef, useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

import projectImg1 from '@/assets/images/project_texture_1_1781228262176.jpg';
import projectImg2 from '@/assets/images/project_texture_2_1781228279277.jpg';
import projectImg3 from '@/assets/images/project_texture_3_1781228294949.jpg';
import projectImg4 from '@/assets/images/project_texture_4_1781228309726.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Cariton',
    type: 'Interactive Kiosk / AI',
    description: 'Transforming food ordering through AI-powered semantic search and high-performance ordering systems built with Angular.',
    image: projectImg1,
    tag: '01'
  },
  {
    title: 'PresencePro',
    type: 'AI Coaching Platform',
    description: 'Real-time feedback systems for leadership development, integrating OpenAI for personalized growth trajectories.',
    image: projectImg2,
    tag: '02'
  },
  {
    title: 'Kabrita',
    type: 'E-Learning Excellence',
    description: 'A clean, accessible, and highly responsive educational portal focused on user success and performance.',
    image: projectImg3,
    tag: '03'
  },
  {
    title: 'Bohol Municipal',
    type: 'Gov-Tech Solution',
    description: 'Digitizing municipal services with a focus on ease of use, accessibility, and robust information architecture.',
    image: projectImg4,
    tag: '04'
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const ctx = gsap.context(() => {
      const horizontalScroll = gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollContainer.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      // Parallax effect for images
      const images = gsap.utils.toArray<HTMLElement>('.project-image');
      images.forEach((img) => {
        gsap.to(img, {
          x: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            containerAnimation: horizontalScroll,
            start: 'left right',
            end: 'right left',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="bg-black">
      <div className="h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold mb-4">Case Studies</h2>
          <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter">Selected <span className="text-muted-foreground">Works</span></h3>
        </div>

        <div ref={scrollRef} className="flex gap-12 px-6 w-max items-end">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="w-[85vw] md:w-[65vw] lg:w-[50vw] flex-shrink-0 group cursor-none"
            >
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden border border-white/5">
                <div className="absolute top-8 left-8 z-20 text-6xl font-display font-black text-white group-hover:text-white transition-colors">
                  {project.tag}
                </div>
                
                {/* Parallax Image Container */}
                <div className="absolute inset-x-[-50px] inset-y-0 project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700 select-none grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/40 to-transparent opacity-90" />
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center p-12 pointer-events-none">
                   <h4 className="text-[6vw] font-display font-black tracking-tighter text-center uppercase text-white drop-shadow-2xl">
                     {project.title}
                   </h4>
                </div>

                <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="max-w-[70%]">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-3">{project.title} / {project.type}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <button className="w-16 h-16 bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors border border-transparent">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center px-4">
                 <h4 className="text-3xl font-display font-black tracking-tight uppercase">{project.title}</h4>
                 <div className="h-px bg-white/10 flex-1 mx-12" />
                 <span className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground">{project.type}</span>
              </div>
            </div>
          ))}
          
          <div className="w-[50vw] flex items-center px-20">
             <div className="max-w-md">
               <h4 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-8 line-tight">Next Level <br /> <span className="text-muted-foreground">Digital Products</span></h4>
               <a href="#contact" className="group flex items-center gap-6 text-sm font-bold uppercase tracking-[0.4em] hover:gap-10 transition-all border-b border-white/20 pb-4">
                  Start a project <ArrowRight size={20} />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


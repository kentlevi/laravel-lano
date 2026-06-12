import { motion } from 'motion/react';

interface InfiniteMarqueeProps {
  items?: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const defaultPhrases = [
  'FRONTEND ARCHITECT',
  'CREATIVE TECHNOLOGIST',
  'UI/UX RESCUE',
  'AI-INTEGRATED SYSTEMS',
  'MICRO-FRONTENDS',
  'ENGINEERING MEETS DESIGN',
  'DIGITAL PRODUCTS DESIGN',
  'BASED IN CEBU, PH',
];

export default function InfiniteMarquee({
  items = defaultPhrases,
  speed = 25,
  direction = 'left',
}: InfiniteMarqueeProps) {
  // Multiply items to ensure seamless infinite looping without gaps
  const doubledItems = [...items, ...items, ...items, ...items];

  const animateX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="relative w-full py-6 md:py-10 bg-black border-y border-white/5 overflow-hidden select-none cursor-default">
      <motion.div
        animate={{ x: animateX }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-12 md:gap-20 w-max pr-12 md:pr-20"
      >
        {doubledItems.map((phrase, idx) => (
          <div key={idx} className="flex items-center gap-12 md:gap-20 text-white font-display">
            <span className="text-3xl md:text-5xl font-black uppercase tracking-[0.25em] text-outline">
              {phrase}
            </span>
            <span className="w-4 h-4 md:w-6 md:h-6 bg-white rotate-45 shrink-0 block opacity-40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

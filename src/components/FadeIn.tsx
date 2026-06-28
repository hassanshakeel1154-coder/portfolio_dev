import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const transition = (delay: number, duration: number) => ({
  delay,
  duration,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
});

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  style,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={transition(delay, duration)}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

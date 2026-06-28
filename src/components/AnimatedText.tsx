import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function AnimatedChar({ char, progress, start, end }: CharProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const display = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0 select-none" aria-hidden="true">{display}</span>
      <motion.span className="absolute inset-0" style={{ opacity }} aria-hidden="true">
        {display}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={`relative ${className}`} aria-label={text} style={style}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + 1 / characters.length;
        return (
          <AnimatedChar
            key={i}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    number: '01',
    category: 'Client Project',
    name: 'Body Pulse Gym',
    liveUrl: 'https://body-pulse-gym.netlify.app/',
    images: [
      '/images/projects/body-pulse-gym-1.png',
      '/images/projects/body-pulse-gym-2.png',
      '/images/projects/body-pulse-gym-3.png',
    ],
  },
  {
    number: '02',
    category: 'Personal Brand',
    name: 'HS Digital Zone',
    liveUrl: 'https://hs-digital-zone.netlify.app/',
    images: [
      '/images/projects/hs-digital-zone-1.png',
      '/images/projects/hs-digital-zone-2.png',
      '/images/projects/hs-digital-zone-3.png',
    ],
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Personal Portfolio',
    liveUrl: 'https://hassanshakeel1154-coder.github.io/',
    images: [
      '/images/projects/portfolio-1.png',
      '/images/projects/portfolio-2.png',
      '/images/projects/portfolio-3.png',
    ],
  },
];

const TOTAL = projects.length;
// Each card sticks at its own top offset — last card is highest in the stack
const CARD_OFFSET = 28; // px shift per card so they fan out visibly
const CARD_STICKY_TOP = 96; // matches md:top-32 ≈ 96px

interface CardProps {
  project: (typeof projects)[0];
  index: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, progress }: CardProps) {
  // Last card stays at 1; earlier cards shrink slightly as later cards stack on top
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;

  // Scale runs from 1.0 (when this card enters the sticky zone) to targetScale (by end of scroll)
  const scale = useTransform(
    progress,
    [index / TOTAL, 1],
    [1, targetScale]
  );

  const stickyTop = CARD_STICKY_TOP + index * CARD_OFFSET;

  return (
    /*
     * The sticky div IS the scroll spacer. Its h-[85vh] height means it occupies
     * 85vh of scroll distance before the next card takes over.
     * position:sticky makes it pin at `stickyTop` while its parent scrolls past.
     */
    <div
      className="sticky h-[85vh]"
      style={{ top: `${stickyTop}px` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="
          h-full w-full
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8
          flex flex-col gap-4 md:gap-6
          overflow-hidden
        "
      >
        {/* ── Top row: number / category / name / live button ── */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 flex-shrink-0">
          {/* Number */}
          <span
            className="hero-heading font-black leading-none flex-shrink-0"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            {project.number}
          </span>

          {/* Category + project name */}
          <div className="flex flex-col gap-0.5 flex-1 min-w-0">
            <span
              className="text-[#D7E2EA] font-light uppercase tracking-widest opacity-60"
              style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.95rem)' }}
            >
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(1rem, 2.8vw, 2.4rem)' }}
            >
              {project.name}
            </span>
          </div>

          {/* Live project link */}
          <div className="ml-auto flex-shrink-0">
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* ── Image grid — fills remaining height ── */}
        <div className="flex gap-3 md:gap-4 flex-1 min-h-0">
          {/* Left column: 2 stacked images */}
          <div className="flex flex-col gap-3 md:gap-4 min-h-0" style={{ width: '40%' }}>
            <img
              src={project.images[0]}
              alt={`${project.name} — view 1`}
              loading="lazy"
              width={800}
              height={500}
              className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px] flex-shrink-0"
              style={{ height: 'clamp(110px, 14vw, 210px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} — view 2`}
              loading="lazy"
              width={800}
              height={500}
              className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px] flex-1 min-h-0"
            />
          </div>

          {/* Right column: 1 tall image */}
          <div className="flex-1 min-h-0">
            <img
              src={project.images[2]}
              alt={`${project.name} — view 3`}
              loading="lazy"
              width={600}
              height={900}
              className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  /*
   * offset: ['start start', 'end start']
   *   → progress = 0  when container TOP hits viewport TOP   (cards start stacking)
   *   → progress = 1  when container BOTTOM hits viewport TOP (all cards scrolled past)
   * This gives the full scroll distance for the scale transform to play out.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section
      id="projects"
      className="
        bg-[#0C0C0C]
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14
        relative z-10
        px-5 sm:px-8 md:px-10
        pt-20 sm:pt-24 md:pt-32
        pb-32
      "
      /*
       * NO overflow:hidden or overflow:clip here — that would break
       * position:sticky on the child cards.
       */
    >
      {/* Section heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/*
       * This div is the useScroll target. Its total natural height =
       * TOTAL × 85vh, which gives enough scroll distance for all cards
       * to stack, overlap, and scale before the section ends.
       */}
      <div ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

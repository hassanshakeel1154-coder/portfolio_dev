import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const aboutText =
  "I'm a BS Data Analytics student and the founder of HS Digital Zone, a freelance studio offering web design and Meta Ads management to local and international clients. I focus on clean, conversion-driven websites and data-backed ad campaigns, i truly enjoy helping small businesses and brands stand out online. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative corner SVG icons */}

      {/* Top-left: Web / Laptop icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="10" y="20" width="80" height="50" rx="6" stroke="#D7E2EA" strokeWidth="3" />
          <rect x="0" y="70" width="100" height="8" rx="4" fill="#D7E2EA" opacity="0.3" />
          <path d="M30 45 L45 35 L55 50 L65 38" stroke="#B600A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="65" cy="38" r="3" fill="#B600A8" />
        </svg>
      </FadeIn>

      {/* Bottom-left: Bar chart / Data icon */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[100px] sm:w-[140px] md:w-[180px] opacity-25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="15" y="55" width="14" height="35" rx="3" fill="#D7E2EA" opacity="0.5" />
          <rect x="35" y="35" width="14" height="55" rx="3" fill="#7621B0" opacity="0.7" />
          <rect x="55" y="20" width="14" height="70" rx="3" fill="#B600A8" opacity="0.7" />
          <rect x="75" y="42" width="14" height="48" rx="3" fill="#D7E2EA" opacity="0.4" />
          <line x1="10" y1="92" x2="95" y2="92" stroke="#D7E2EA" strokeWidth="2" strokeOpacity="0.4" />
        </svg>
      </FadeIn>

      {/* Top-right: Growth / Ad icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="38" stroke="#B600A8" strokeWidth="3" opacity="0.5" />
          <path d="M30 60 L45 40 L55 52 L68 30" stroke="#D7E2EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="68,30 80,28 76,40" fill="#B600A8" opacity="0.8" />
          <circle cx="30" cy="60" r="3" fill="#D7E2EA" opacity="0.6" />
          <circle cx="45" cy="40" r="3" fill="#D7E2EA" opacity="0.6" />
          <circle cx="55" cy="52" r="3" fill="#D7E2EA" opacity="0.6" />
        </svg>
      </FadeIn>

      {/* Bottom-right: Code / Terminal icon */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[130px] sm:w-[170px] md:w-[220px] opacity-25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="8" y="15" width="84" height="70" rx="8" stroke="#D7E2EA" strokeWidth="2.5" opacity="0.4" />
          <circle cx="22" cy="28" r="4" fill="#BE4C00" opacity="0.8" />
          <circle cx="36" cy="28" r="4" fill="#B600A8" opacity="0.8" />
          <circle cx="50" cy="28" r="4" fill="#7621B0" opacity="0.8" />
          <path d="M28 52 L18 62 L28 72" stroke="#D7E2EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 52 L52 62 L42 72" stroke="#B600A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M56 52 L70 72" stroke="#7621B0" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </svg>
      </FadeIn>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph + button */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const navLinks = ['About', 'Services', 'Projects', 'Contact'];

/** Shared portrait image so we don't repeat the attributes twice */
function Portrait() {
  return (
    /* isolation:isolate stops the nearby gradient heading from colour-bleeding onto the photo */
    <div style={{ isolation: 'isolate' }}>
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
      >
        <img
          src="/images/portrait.jpeg"
          alt="Hassan – Web Designer & Digital Marketer"
          width={520}
          height={780}
          className="w-full h-auto object-cover object-top select-none pointer-events-none"
          style={{ mixBlendMode: 'normal', filter: 'none' }}
          draggable={false}
        />
      </Magnet>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      /*
       * Mobile  (<sm): natural height — content flows top-to-bottom without gaps.
       * sm+           : full-viewport height — portrait is absolute at the bottom.
       */
      className="relative flex flex-col sm:min-h-screen"
      style={{ overflowX: 'clip' }}
    >
      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* ── Hero Heading ── */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center
            text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
            mt-2 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m hassan
        </h1>
      </FadeIn>

      {/*
       * ── MOBILE portrait (below sm) ──
       * Lives in normal document flow so it sits right below the heading.
       * Hidden on sm+ where the absolute version takes over.
       */}
      <FadeIn delay={0.6} y={30} className="sm:hidden flex justify-center mt-6 px-10 relative z-10">
        <Portrait />
      </FadeIn>

      {/* ── Bottom bar ── */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 mt-8 sm:mt-auto">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a web designer &amp; meta ads manager driven by crafting striking, conversion-focused brands
          </p>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/*
       * ── DESKTOP / TABLET portrait (sm+) ──
       * Absolutely positioned at the bottom-centre exactly as before.
       * Hidden on mobile where the in-flow version above is used instead.
       */}
      <FadeIn
        delay={0.6}
        y={30}
        className="hidden sm:block absolute left-1/2 -translate-x-1/2 z-10
          w-[360px] md:w-[440px] lg:w-[520px]
          bottom-0"
      >
        <Portrait />
      </FadeIn>
    </section>
  );
}

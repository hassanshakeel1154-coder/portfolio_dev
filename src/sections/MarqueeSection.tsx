import { useEffect, useRef, useState } from 'react';

const marqueeImages = Array.from({ length: 10 }, (_, i) => `/images/marquee/work-${i + 1}.png`);

const row1 = [...marqueeImages.slice(0, 5), ...marqueeImages.slice(0, 5), ...marqueeImages.slice(0, 5)];
const row2 = [...marqueeImages.slice(5), ...marqueeImages.slice(5), ...marqueeImages.slice(5)];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      {/* Row 1 — moves right */}
      <div
        className="flex gap-3 mb-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {row1.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Work sample ${(i % 5) + 1}`}
            loading="lazy"
            width={420}
            height={270}
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: '420px', height: '270px' }}
          />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {row2.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Work sample ${(i % 5) + 6}`}
            loading="lazy"
            width={420}
            height={270}
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: '420px', height: '270px' }}
          />
        ))}
      </div>
    </section>
  );
}

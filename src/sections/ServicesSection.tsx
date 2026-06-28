import FadeIn from '../components/FadeIn';

const services = [
  {
    number: '01',
    name: 'Web Design & Development',
    description:
      'Designing and building modern, responsive websites with clean UI/UX, using tools like React, Bolt.new, and Tailwind, deployed via Netlify or GitHub Pages.',
  },
  {
    number: '02',
    name: 'Meta Ads Management',
    description:
      'Planning, launching, and optimizing Facebook & Instagram ad campaigns for local and international clients, with a focus on real leads and measurable ROI.',
  },
  {
    number: '03',
    name: 'Data Analytics',
    description:
      'Applying Python, Excel, and statistical analysis (BS Data Analytics coursework + Google Advanced Data Analytics Capstone) to turn raw data into clear business decisions.',
  },
  {
    number: '04',
    name: 'Brand & Gig Presence',
    description:
      'Building consistent brand identity across portfolios, Fiverr gigs, and social proof — pricing structures, thumbnails, and client-facing presentation.',
  },
  {
    number: '05',
    name: 'Freelance Consulting',
    description:
      'Helping boutiques, gyms, dental clinics, and small businesses establish a strong digital presence end-to-end, from website to ad strategy, under HS Digital Zone.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              {/* Name + description */}
              <div className="flex flex-col justify-center gap-2 md:gap-3 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

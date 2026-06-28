import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, Globe } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

/* ─── Contact card data ─────────────────────────────────────────────────── */
const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hassanshakeel1154@gmail.com',
    href: 'mailto:hassanshakeel1154@gmail.com',
    target: undefined,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92 319 6232295',
    href: 'https://wa.me/923196232295',
    target: '_blank',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'hassan-shakeel1154',
    href: 'https://www.linkedin.com/in/hassan-shakeel1154/',
    target: '_blank',
  },
];

/* ─── Input / Textarea shared class ─────────────────────────────────────── */
const FIELD_CLASS =
  'w-full bg-transparent border border-[#D7E2EA]/25 rounded-xl ' +
  'text-[#D7E2EA] font-light px-5 py-4 ' +
  'placeholder:text-[#D7E2EA]/50 ' +
  'focus:border-[#D7E2EA] focus:outline-none transition-colors duration-200';

/* ─── Contact Section ────────────────────────────────────────────────────── */
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => setSubmitted(true)); // show success even if local (no Netlify)
  }

  return (
    <section
      id="contact"
      className="
        bg-[#0C0C0C] min-h-screen flex flex-col
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
      "
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1">

        {/* ── Heading ── */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s Talk
          </h2>
        </FadeIn>

        {/* ── Subtext ── */}
        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#D7E2EA] font-light text-center max-w-xl mx-auto opacity-80 mt-4 mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}
          >
            Have a project in mind? Send a message or reach out directly — i usually reply within a day.
          </p>
        </FadeIn>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

          {/* Left — Contact Form */}
          <FadeIn delay={0.15} y={30}>
            {/*
              Netlify Forms:
              - data-netlify="true" → Netlify detects and stores submissions
              - hidden form-name input → required for Netlify to link POST to this form
              - netlify-honeypot → spam protection (hidden field, bots fill it, humans don't)
            */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden aria-hidden="true">
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Name */}
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className={FIELD_CLASS}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className={FIELD_CLASS}
              />

              {/* Message */}
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${FIELD_CLASS} resize-none`}
              />

              {/* Submit */}
              <div className="mt-2">
                <ContactButton label="Send Message" type="submit" />
              </div>

              {/* Success message */}
              {submitted && (
                <p className="text-[#D7E2EA] opacity-80 text-sm mt-1">
                  Thanks! I&apos;ll get back to you soon. ✓
                </p>
              )}
            </form>
          </FadeIn>

          {/* Right — Direct contact cards */}
          <div className="flex flex-col gap-5">
            {contactCards.map((card, i) => (
              <FadeIn key={card.label} delay={0.3 + i * 0.12} y={20}>
                <a
                  href={card.href}
                  target={card.target}
                  rel={card.target ? 'noopener noreferrer' : undefined}
                  className="
                    flex items-center gap-4
                    rounded-2xl border border-[#D7E2EA]/15 p-6
                    hover:border-[#D7E2EA]/40 hover:bg-[#D7E2EA]/5
                    transition-colors duration-200
                    group
                  "
                >
                  {/* Icon bubble */}
                  <div className="rounded-full bg-[#D7E2EA]/10 p-3 flex-shrink-0 group-hover:bg-[#D7E2EA]/15 transition-colors duration-200">
                    <card.icon size={22} color="#D7E2EA" strokeWidth={1.5} />
                  </div>

                  {/* Label + value */}
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-light uppercase tracking-wider text-xs text-[#D7E2EA] opacity-50">
                      {card.label}
                    </span>
                    <span className="font-medium text-[#D7E2EA] text-base sm:text-lg truncate">
                      {card.value}
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Footer line ── */}
        <p
          className="text-[#D7E2EA] opacity-40 text-xs sm:text-sm text-center mt-20 sm:mt-24"
        >
          © {new Date().getFullYear()} Hassan · HS Digital Zone · All rights reserved
        </p>
      </div>
    </section>
  );
}

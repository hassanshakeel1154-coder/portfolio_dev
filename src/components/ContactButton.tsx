interface ContactButtonProps {
  /** Rendered label — defaults to "Contact Me" */
  label?: string;
  /** When provided, renders a <button> with this type instead of an <a> */
  type?: 'submit' | 'button' | 'reset';
  /** href for link variant — defaults to #contact */
  href?: string;
  onClick?: () => void;
}

const BUTTON_STYLE: React.CSSProperties = {
  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
  outline: '2px solid white',
  outlineOffset: '-3px',
};

const BUTTON_CLASS =
  'inline-block rounded-full font-medium uppercase tracking-widest text-white cursor-pointer ' +
  'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 ' +
  'text-xs sm:text-sm md:text-base ' +
  'transition-transform duration-200 hover:scale-105 active:scale-95';

export default function ContactButton({
  label = 'Contact Me',
  type,
  href = '#contact',
  onClick,
}: ContactButtonProps) {
  if (type) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={BUTTON_CLASS}
        style={BUTTON_STYLE}
      >
        {label}
      </button>
    );
  }

  return (
    <a href={href} className={BUTTON_CLASS} style={BUTTON_STYLE}>
      {label}
    </a>
  );
}

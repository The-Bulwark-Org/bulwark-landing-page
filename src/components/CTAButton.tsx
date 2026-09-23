interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function CTAButton({ href, onClick, children }: CTAButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="cta-button"
        id="cta-waitlist-link"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="cta-button"
      onClick={onClick}
      id="cta-waitlist-btn"
    >
      {children}
    </button>
  );
}

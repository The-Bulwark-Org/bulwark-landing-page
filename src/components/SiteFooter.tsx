import { CTAButton } from './CTAButton';

const socials = [
  {
    label: 'X',
    href: '#',
    icon: '/assets/X-icon.svg',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: '/assets/linkedin-icon.svg',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: '/assets/IG-icon.svg',
  },
];

interface SiteFooterProps {
  onJoinWaitlist: () => void;
}

export function SiteFooter({ onJoinWaitlist }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <h2 className="site-footer__title">Take your first step</h2>

        <CTAButton onClick={onJoinWaitlist}>Join Waitlist</CTAButton>

        <ul className="site-footer__socials">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                className="site-footer__social"
                href={social.href}
                aria-label={social.label}
              >
                <img src={social.icon} alt="" aria-hidden="true" draggable={false} />
              </a>
            </li>
          ))}
        </ul>
        <div style={{ border: '2px solid #222222', borderRadius: '9999px', padding: '0 25px', display: 'inline-block' }}>
          <img
            className="site-footer__sign"
            src="/assets/Frame 2147235097-white.svg"
            alt="With love from Bulwark"
            draggable={false}
          />
        </div>
      </div>

      <div className="site-footer__mark" aria-hidden="true">
        <img src="/assets/Container (1).svg" alt="" draggable={false} />
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const menuLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
];

const socialLinks = [
  { label: 'X (Formally Twitter)', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
];

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export function Header({ onJoinWaitlist }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="site-header__brand" href="#hero" aria-label="Bulwark — home">
          <Logo className="site-header__logo" src="/assets/logo-white.svg" />
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a className="site-nav__pill" href="#faq">
            FAQ
          </a>
          <a className="site-nav__pill" href="#blog">
            Blog
          </a>
          <button
            type="button"
            className="site-nav__pill site-nav__pill--cta"
            onClick={() => {
              closeMenu();
              onJoinWaitlist();
            }}
          >
            Join Waitlist
          </button>

          {menuOpen ? (
            <button
              className="site-nav__close"
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <img src="/assets/close-icon.svg" alt="" aria-hidden="true" draggable={false} />
            </button>
          ) : (
            <button
              className="site-nav__menu"
              type="button"
              aria-label="Open menu"
              aria-expanded={false}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <img src="/assets/menu-3-line.svg" alt="" aria-hidden="true" draggable={false} />
            </button>
          )}
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu__group">
            <p className="mobile-menu__label">Nav</p>
            <ul className="mobile-menu__links">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu__group">
            <p className="mobile-menu__label">Socials</p>
            <ul className="mobile-menu__links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu__sign">
            <span className="mobile-menu__sign-pill">
              <img
                src="/assets/Frame 2147235097-white.svg"
                alt="With love from Bulwark"
                draggable={false}
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

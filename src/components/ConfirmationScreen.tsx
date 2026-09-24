import { useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { SuccessBadge } from './SuccessBadge';

interface ConfirmationScreenProps {
  isAnimating?: boolean;
}

export function ConfirmationScreen({ isAnimating = false }: ConfirmationScreenProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!isAnimating) {
      window.scrollTo(0, 0);
    }
    // Move focus to headline when animation finishes (1650ms) or immediately if settled
    const delay = isAnimating ? 1700 : 80;
    const timer = setTimeout(() => {
      headlineRef.current?.focus({ preventScroll: true });
    }, delay);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <section
      className={`screen3-section ${isAnimating ? 'is-animating' : 'is-settled'}`}
      id="confirmation"
      aria-label="Waitlist Confirmation"
    >

      {/* 2. Logo lockup — identical to Screen 1 */}
      <Logo className="logo" />

      {/* 3+4+5. Success content block */}
      <div className="screen3__content">
        {/* Success badge: 105px ring, 89px holographic disc, bevel checkmark, 2 sparkles */}
        <div className="screen3__badge">
          <SuccessBadge isAnimating={isAnimating} />
        </div>

        {/* aria-live polite wrapper — announces headline + subcopy after animation */}
        <div aria-live="polite" className="screen3__text-live">
          <h1
            ref={headlineRef}
            tabIndex={-1}
            className="screen3__headline"
          >
            You are in
          </h1>

          <p className="screen3__subcopy">
            You'll be the first to know about Bulwark when we launch.
          </p>
        </div>
      </div>

      {/* 6. Bushes — same asset, same position as Screen 1 */}
      <img
        src="/assets/grass.svg"
        alt=""
        aria-hidden="true"
        width={633}
        height={192}
        className="screen3__bushes"
        draggable={false}
      />
    </section>
  );
}

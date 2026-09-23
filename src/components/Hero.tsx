import { Logo } from './Logo';
import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <main className="hero" id="hero">
      {/* 1. Logo lockup */}
      <Logo className="logo" />

      {/* 2 + 3. Text block + CTA */}
      <div className="hero__content">
        <h1 className="hero__headline">
          Become the best version of yourself
        </h1>
        <p className="hero__subtext">
          You don't have to do this alone. Take the first step toward
          breaking free from pornography addiction and building a healthier future.
        </p>
        <CTAButton href="#">Join our waitlist</CTAButton>
      </div>

      {/* 4. Illustration – decorative, cropped at bottom */}
      <img
        src="/assets/grass.svg"
        alt=""
        aria-hidden="true"
        width={633}
        height={192}
        className="hero__illustration"
        draggable={false}
      />
    </main>
  );
}

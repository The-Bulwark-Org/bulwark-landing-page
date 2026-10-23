import { CTAButton } from './CTAButton';

interface AboutSectionProps {
  onJoinWaitlist: () => void;
}

export function AboutSection({ onJoinWaitlist }: AboutSectionProps) {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      {/* 1. Full-bleed banner image */}
      <div className="about__media">
        <picture>
          <source media="(max-width: 767px)" srcSet="/assets/Section-mobile.png" />
          <img
            src="/assets/Section.png"
            alt="Three friends laughing together outdoors"
            draggable={false}
          />
        </picture>
      </div>

      {/* 2. Heading + CTA + supporting copy */}
      <div className="about__inner">
        <h2 className="about__heading" id="about-heading">
          <span className="about__line">Hey! we know change is difficult.</span>{' '}
          <span className="about__line">
            Your recovery shouldn&rsquo;t be.
          </span>
        </h2>

        <div className="about__cta">
          <CTAButton onClick={onJoinWaitlist}>Join Waitlist</CTAButton>
        </div>

        <div className="about__body">
          <p>
            Breaking a habit isn&rsquo;t simply about having more willpower.
            There <br /> are patterns behind the moments you struggle: stress, boredom, <br />
            loneliness, routines, and triggers that make old habits hard to <br />
            change.
          </p>
          <p>
            Bulwark helps you understand those patterns, prepare for difficult <br />
            moments, and build better habits over time.
          </p>
          <p>No judgment. Just practical support.</p>
        </div>
      </div>
    </section>
  );
}

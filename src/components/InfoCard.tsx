import { DotRow } from './DotRow';

export function InfoCard() {
  return (
    <article className="info-card">
      {/* 1. Top row: 16 white circles */}
      <DotRow count={16} />

      {/* 2. Heading */}
      <h1 className="info-card__heading">
        Heyyy we know change is difficult. Your recovery shouldn't be.
      </h1>

      {/* 3. Body copy */}
      <div className="info-card__body">
        <p>
          Breaking a habit isn't simply about having more willpower. There are
          patterns behind the moments you struggle: stress, boredom, loneliness,
          routines, and triggers that make old habits hard to change.
        </p>
        <p>
          Bulwark helps you understand those patterns, prepare for difficult
          moments, and build better habits over time.
        </p>
        <p>No judgment. Just practical support.</p>
      </div>

      {/* 4. Sign-off right-aligned row */}
      <div className="info-card__signoff">
        <div className="info-card__signoff-wrapper">
          <img
            src="/assets/Frame 2147235097.svg"
            alt="with heart from Bulwark"
            width={170}
            height={64}
            className="info-card__signoff-img"
            draggable={false}
          />
          <img
            src="/assets/Vector 3.svg"
            alt=""
            aria-hidden="true"
            width={54}
            height={17}
            className="info-card__squiggle"
            draggable={false}
          />
        </div>
      </div>
    </article>
  );
}

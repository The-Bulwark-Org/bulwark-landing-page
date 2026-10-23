export function JourneySection() {
  return (
    <section className="journey">
      <h2 className="sr-only journey__sr">Start your journey with Bulwark</h2>

      <div className="journey__copy">
        <p className="journey__kicker">
          You don&rsquo;t have to be perfect to start.
        </p>
        <h2 className="journey__heading">Start your journey with Bulwark</h2>
      </div>

      <img
        className="journey__art journey__art--wide"
        src="/assets/Section.svg"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <img
        className="journey__art journey__art--trees"
        src="/assets/Journey-trees.svg"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    </section>
  );
}

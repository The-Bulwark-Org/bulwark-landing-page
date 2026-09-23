import { Logo } from './Logo';
import { InfoCard } from './InfoCard';
import { WaitlistForm } from './WaitlistForm';

export function WaitlistSection() {
  return (
    <section className="waitlist-section" id="waitlist">
      <div className="waitlist-panel">
        <div className="waitlist-column">
          {/* 1. Logo (~64px from top) */}
          <Logo className="waitlist-logo" />

          {/* 2. Info Card */}
          <InfoCard />

          {/* 3. Email Form (~24px below card) */}
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

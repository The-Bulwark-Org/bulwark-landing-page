import { useState } from 'react';
import { Logo } from './Logo';
import { InfoCard } from './InfoCard';
import { WaitlistForm } from './WaitlistForm';
import { ConfirmationScreen } from './ConfirmationScreen';

interface WaitlistSectionProps {
  onConfirmed?: () => void;
}

export function WaitlistSection({ onConfirmed }: WaitlistSectionProps) {
  const [phase, setPhase] = useState<'form' | 'animating'>('form');

  const handleSuccess = () => {
    setPhase('animating');
    // Animation sequence finishes at ~1650ms; trigger confirmed state
    setTimeout(() => {
      onConfirmed?.();
    }, 1700);
  };

  return (
    <section
      className={`waitlist-section ${phase === 'animating' ? 'waitlist-section--animating' : ''}`}
      id="waitlist"
    >
      {/* Screen 3 overlays during animation sequence */}
      {phase === 'animating' && <ConfirmationScreen isAnimating={true} />}

      <div className="waitlist-panel">
        <div className="waitlist-column">
          {/* 1. Logo */}
          <Logo className="waitlist-logo" />

          <div className="waitlist-card-wrapper">
            {/* 2. Info Card */}
            <InfoCard />

            {/* 3. Email Form */}
            <WaitlistForm onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
}

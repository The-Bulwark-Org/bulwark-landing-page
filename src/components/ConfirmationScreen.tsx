import { useEffect } from 'react';
import { scrollToInstant } from '../scrollToInstant';

interface ConfirmationScreenProps {
  /** Returns to the landing page. Omitted by legacy callers. */
  onClose?: () => void;
  /** Kept for backwards compatibility with the old animated intro. */
  isAnimating?: boolean;
}

export function ConfirmationScreen({ onClose }: ConfirmationScreenProps) {
  useEffect(() => {
    scrollToInstant(0);
  }, []);

  useEffect(() => {
    if (!onClose) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <section className="wl-page wl-page--confirm" aria-label="Waitlist confirmation">
      <div className="wl-page__media">
        <img
          className="wl-page__img"
          src="/assets/waitlist-confirmed-crowd.png"
          alt="A group of friends holding hands in a circle on a sunlit hilltop"
          draggable={false}
        />
        <button
          type="button"
          className="wl-page__close"
          aria-label="Close and return to the home page"
          onClick={onClose}
        >
          <img src="/assets/close-icon.svg" alt="" aria-hidden="true" draggable={false} />
        </button>
      </div>

      <div className="wl-page__panel">
        <div className="wl-page__content">
          <img
            className="wl-confirm__badge"
            src="/assets/Committed%20Badge.svg"
            alt=""
            aria-hidden="true"
            draggable={false}
          />

          <h1 className="wl-confirm__title">You have taken your first step.</h1>

          <p className="wl-confirm__text">
            We'll let you know when something worth showing is ready. Thanks for your
            patience.
          </p>
        </div>
      </div>
    </section>
  );
}

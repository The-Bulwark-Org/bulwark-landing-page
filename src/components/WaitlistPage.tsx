import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { scrollToInstant } from '../scrollToInstant';

interface WaitlistPageProps {
  onClose: () => void;
  onConfirmed: () => void;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistPage({ onClose, onConfirmed }: WaitlistPageProps) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInvalidShake, setIsInvalidShake] = useState(false);

  useEffect(() => {
    scrollToInstant(0);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const flagInvalid = (message: string) => {
    setErrorMessage(message);
    setIsInvalidShake(true);
    setTimeout(() => setIsInvalidShake(false), 350);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (errorMessage) setErrorMessage('');
    if (isInvalidShake) setIsInvalidShake(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const value = email.trim();

    if (!emailPattern.test(value)) {
      flagInvalid('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        status?: string;
        message?: string;
        errors?: { email?: string[] };
      };

      if (!response.ok) {
        flagInvalid(
          data.errors?.email?.[0] ||
            (response.status === 429
              ? 'Too many attempts. Please try again in a minute.'
              : data.message) ||
            'Something went wrong. Please try again.'
        );
        return;
      }

      onConfirmed();
    } catch {
      flagInvalid('Unable to connect to server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="wl-page" aria-label="Join the Bulwark waitlist">
      <div className="wl-page__media">
        <img
          className="wl-page__img"
          src="/assets/waitlist-crowd.png"
          alt="A group of friends laughing together in front of a church"
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
          <h1 className="wl-page__title">
            We will keep you
            <br />
            updated.
          </h1>

          <p className="wl-page__text">
            We are introducing Bulwark a new way that helps you understand patterns,
            prepare for difficult moments, and build better habits over time.
          </p>

          <form className="wl-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="waitlist-page-email" className="sr-only">
              Email address
            </label>

            <input
              id="waitlist-page-email"
              className={`wl-input${isInvalidShake ? ' wl-input--invalid' : ''}`}
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={handleChange}
              autoComplete="email"
              disabled={isSubmitting}
              aria-invalid={!!errorMessage}
              aria-describedby={errorMessage ? 'waitlist-page-error' : undefined}
            />

            <button type="submit" className="wl-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Committing…' : 'Commit'}
            </button>
          </form>

          {errorMessage && (
            <p className="wl-error" id="waitlist-page-error" role="alert">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

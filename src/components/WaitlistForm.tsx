import { useState, type FormEvent, type ChangeEvent } from 'react';

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInvalidShake, setIsInvalidShake] = useState(false);

  const validateEmail = (val: string): boolean => {
    if (!val.trim()) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val.trim());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
    if (statusMessage && !isSuccess) {
      setStatusMessage('');
    }
    if (isInvalidShake) {
      setIsInvalidShake(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatusMessage('');
      setIsInvalidShake(true);
      setTimeout(() => {
        setIsInvalidShake(false);
      }, 350);
      return;
    }

    setErrorMessage('');
    setStatusMessage('');
    setIsSubmitting(true);

    try {
      // Minimum 500ms delay so button pulsing dots never flicker
      await new Promise((resolve) => setTimeout(resolve, 600));

      setIsSuccess(true);
      setStatusMessage("You're in. We'll be in touch.");
      setEmail('');

      // Trigger transition to Screen 3
      onSuccess?.();
    } catch {
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="waitlist-form-wrapper">
      <form
        className="waitlist-form"
        onSubmit={handleSubmit}
        noValidate
        aria-describedby="waitlist-status"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>

        <div className={`waitlist-pill ${isInvalidShake ? 'waitlist-pill--invalid' : ''}`}>
          <input
            id="waitlist-email"
            type="email"
            className="waitlist-pill__input"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            required
            autoComplete="email"
            disabled={isSubmitting}
            aria-invalid={!!errorMessage}
          />
          <button
            type="submit"
            className="waitlist-pill__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="waitlist-pulsing-dots" aria-label="Loading">
                <span />
                <span />
                <span />
              </span>
            ) : (
              'Join now'
            )}
          </button>
        </div>
      </form>

      {/* Inline validation error message */}
      {errorMessage && (
        <p className="waitlist-error" id="waitlist-error-msg">
          {errorMessage}
        </p>
      )}

      {/* Status aria-live region */}
      <div
        id="waitlist-status"
        aria-live="polite"
        className={`waitlist-status ${isSuccess ? 'waitlist-status--success' : ''}`}
      >
        {statusMessage}
      </div>
    </div>
  );
}

type FaqItem = {
  question: string;
  answer: string[];
};

const faqs: FaqItem[] = [
  {
    question: 'What is Bulwark?',
    answer: [
      'Bulwark is a recovery companion for people quitting porn. It combines reliable progress tracking, practical tools for handling urges, and optional real accountability with someone you trust.',
    ],
  },
  {
    question: 'Why does Bulwark exist?',
    answer: [
      'Most recovery apps in this space break trust. They note the real price, let streaks and check-ins fail silently, and lock basic crisis tools behind a paywall. Bulwark was built to do the basics honestly and reliably in a category where that is rare.',
    ],
  },
  {
    question: 'Is my data private?',
    answer: [
      'Yes. Bulwark is private by design. Your check-ins, journal, and progress stay yours. You control what you share and with whom. Nothing about your recovery is public.',
    ],
  },
  {
    question: 'Is Bulwark therapy?',
    answer: [
      'No. Bulwark is a recovery and habit-support companion. It is not a substitute for professional medical or mental-health care. It works well alongside therapy.',
    ],
  },
  {
    question: 'What is free and what is paid?',
    answer: [
      'The panic button, crisis tools, and basic check-in are free forever. They are never gated.',
      'The full recovery program (insights, personalized routines, and optional accountability sharing) is paid: $249 per year with a 14-day free trial, or $9.99 per month with no commitment.',
    ],
  },
  {
    question: 'Which platform is Bulwark being built for?',
    answer: ['Bulwark is currently being built for iOS and Android.'],
  },
];

export function FaqSection({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <h2 className="faq__title" id="faq-heading">
        Frequently asked questions.
      </h2>

      <button className="faq__talk" type="button" onClick={onJoinWaitlist}>
        Talk to a human
        <img
          src="/assets/customer-service-2-line.svg"
          alt=""
          aria-hidden="true"
          draggable={false}
        />
      </button>

      <dl className="faq__list">
        {faqs.map((item) => (
          <div className="faq__item" key={item.question}>
            <dt className="faq__q">{item.question}</dt>
            <dd className="faq__a">
              {item.answer.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

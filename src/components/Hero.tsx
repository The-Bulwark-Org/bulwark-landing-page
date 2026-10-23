import type { CSSProperties } from 'react';
import { Header } from './Header';
import { CTAButton } from './CTAButton';

type Flower = {
  src: string;
  style: CSSProperties;
};

type Avatar = {
  src: string;
  alt: string;
  flowers: Flower[];
};

const avatars: Avatar[] = [
  {
    src: '/assets/Avatar.png',
    alt: 'Person smiling with their hands on their face',
    flowers: [
      { src: '/assets/flower.svg', style: { top: '-12%', left: '46%', width: '28%', transform: 'rotate(-8deg)' } },
      { src: '/assets/flower2.svg', style: { bottom: '-18%', left: '12%', width: '35%', transform: 'rotate(12deg)' } },
    ],
  },
  {
    src: '/assets/Avatar (1).png',
    alt: 'A parent holding a smiling baby',
    flowers: [
      { src: '/assets/flower3.svg', style: { top: '14%', right: '82%', width: '22%', transform: 'rotate(-10deg)' } },
      { src: '/assets/flower.svg', style: { bottom: '-12%', left: '30%', width: '28%', transform: 'rotate(18deg)' } },
    ],
  },
  {
    src: '/assets/Avatar (2).png',
    alt: 'A person laughing with their eyes closed',
    flowers: [
      { src: '/assets/flower.svg', style: { top: '-3%', left: '1%', width: '32%', transform: 'rotate(-18deg)' } },
      { src: '/assets/flower4.svg', style: { bottom: '-2%', right: '-2%', width: '26%', transform: 'rotate(8deg)' } },
    ],
  },
  {
    src: '/assets/Avatar (3).png',
    alt: 'A person smiling against a bright blue sky',
    flowers: [
      { src: '/assets/flower.svg', style: { top: '70%', left: '-4%', width: '30%', transform: 'rotate(14deg)' } },
      { src: '/assets/flower4.svg', style: { top: '-4%', right: '8%', width: '26%', transform: 'rotate(-12deg)' } },
    ],
  },
  {
    src: '/assets/Avatar (4).png',
    alt: 'A person smiling warmly',
    flowers: [
      { src: '/assets/flower.svg', style: { top: '60%', left: '0%', width: '30%', transform: 'rotate(-22deg)' } },
      { src: '/assets/flower2.svg', style: { bottom: '2%', right: '2%', width: '30%', transform: 'rotate(16deg)' } },
    ],
  },
];

interface HeroProps {
  onJoinWaitlist: () => void;
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <main className="hero" id="hero">
      <Header onJoinWaitlist={onJoinWaitlist} />

      {/* 1. Floating avatar gallery with decorative flowers */}
      <div className="hero__gallery" aria-hidden="false">
        {avatars.map((avatar, index) => (
          <div key={index} className="avatar">
            <img
              className="avatar__img"
              src={avatar.src}
              alt={avatar.alt}
              draggable={false}
            />
            {avatar.flowers.map((flower, i) => (
              <img
                key={i}
                className="avatar__flower"
                src={flower.src}
                alt=""
                aria-hidden="true"
                style={flower.style}
                draggable={false}
              />
            ))}
          </div>
        ))}
      </div>

      {/* 2. Headline + closing CTA */}
      <div className="hero__footer">
        <h1 className="hero__headline">
          Become the best version of{' '}
          <span className="hero__underline">
            yourself
            <img
              className="hero__underline-img"
              src="/assets/Vector 3.svg"
              alt=""
              aria-hidden="true"
              draggable={false}
            />
          </span>
        </h1>

        <div className="hero__aside">
          <p className="hero__subtext">
            Take the first step toward building a healthier future.
          </p>
          <CTAButton onClick={onJoinWaitlist}>Join Waitlist</CTAButton>
        </div>
      </div>
    </main>
  );
}

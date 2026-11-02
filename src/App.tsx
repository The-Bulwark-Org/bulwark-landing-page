import { useLayoutEffect, useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { FaqSection } from './components/FaqSection';
import { BlogsSection } from './components/BlogsSection';
import { SiteFooter } from './components/SiteFooter';
import { WaitlistPage } from './components/WaitlistPage';
import { ConfirmationScreen } from './components/ConfirmationScreen';
import { BlogPage } from './components/BlogPage';
import { BlogArticlePage } from './components/BlogArticlePage';
import { scrollToInstant } from './scrollToInstant';

type View = 'landing' | 'waitlist' | 'confirmed';

function App() {
  const [view, setView] = useState<View>('landing');
  const landingScroll = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (view === 'landing' && landingScroll.current !== null) {
      const target = landingScroll.current;
      landingScroll.current = null;
      // Force layout for the freshly mounted landing page before restoring,
      // otherwise scrollTo clamps against the previous (shorter) document.
      void document.documentElement.scrollHeight;
      scrollToInstant(target);
    }
  }, [view]);

  const openWaitlist = () => {
    landingScroll.current = window.scrollY;
    setView('waitlist');
  };

  const closeWaitlist = () => setView('landing');

  if (view === 'confirmed') {
    return <ConfirmationScreen onClose={closeWaitlist} />;
  }

  if (view === 'waitlist') {
    return <WaitlistPage onClose={closeWaitlist} onConfirmed={() => setView('confirmed')} />;
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/blog') {
    return <BlogPage onJoinWaitlist={openWaitlist} />;
  }

  if (pathname === '/blog/slip-isnt-day-one-24-hours-after-relapse') {
    return <BlogArticlePage onJoinWaitlist={openWaitlist} />;
  }

  return (
    <div className="page-dark">
      <Hero onJoinWaitlist={openWaitlist} />
      <AboutSection onJoinWaitlist={openWaitlist} />
      <JourneySection />
      <FaqSection onJoinWaitlist={openWaitlist} />
      <BlogsSection />
      <SiteFooter onJoinWaitlist={openWaitlist} />
    </div>
  );
}

export default App;

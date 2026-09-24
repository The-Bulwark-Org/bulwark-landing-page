import { useState } from 'react';
import { Hero } from './components/Hero';
import { WaitlistSection } from './components/WaitlistSection';
import { ConfirmationScreen } from './components/ConfirmationScreen';

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (isConfirmed) {
    return <ConfirmationScreen isAnimating={false} />;
  }

  return (
    <>
      <Hero />
      <WaitlistSection onConfirmed={() => setIsConfirmed(true)} />
    </>
  );
}

export default App;

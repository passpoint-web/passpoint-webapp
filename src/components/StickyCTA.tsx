
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleGetStarted = () => {
    window.open('https://passpoint-go-webapp.onrender.com/auth/signup', '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-4 max-w-sm relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-primary-foreground/70 hover:text-primary-foreground"
        >
          <X size={16} />
        </button>
        <h3 className="font-semibold mb-2">Ready to expand across Africa?</h3>
        <p className="text-sm mb-3 opacity-90">
          Get started with Passpoint's unified API today.
        </p>
        <Button
          onClick={handleGetStarted}
          variant="secondary"
          size="sm"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;

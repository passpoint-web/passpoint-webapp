
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '' 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0)';
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Set initial styles
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    switch (direction) {
      case 'up':
        element.style.transform = 'translate3d(0, 30px, 0)';
        break;
      case 'down':
        element.style.transform = 'translate3d(0, -30px, 0)';
        break;
      case 'left':
        element.style.transform = 'translate3d(30px, 0, 0)';
        break;
      case 'right':
        element.style.transform = 'translate3d(-30px, 0, 0)';
        break;
    }

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;

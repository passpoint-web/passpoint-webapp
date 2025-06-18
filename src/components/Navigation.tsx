
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'starter-pack', 'advantage', 'onboarding'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo - Optimized for mobile */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center hover:scale-105 transition-transform duration-200 z-50 touch-manipulation"
          aria-label="Passpoint Home"
        >
          <img
            src="/lovable-uploads/b6ae95bc-73f8-4f1c-a25c-a920e93e73d6.png"
            alt="Passpoint logo"
            className="h-7 sm:h-8 w-auto"
            style={{ display: "block" }}
            loading="eager"
          />
        </button>

        {/* Desktop CTA Buttons - Better mobile spacing */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
          <a
            href="/manifesto"
            className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors touch-manipulation"
          >
            Manifesto
          </a>
          <a
            href="https://go.mypasspoint.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors border border-slate-200 rounded-md hover:border-slate-300 hover:bg-slate-50 touch-manipulation min-h-[44px] flex items-center"
          >
            Login
          </a>
          <a
            href="https://go.mypasspoint.com/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 text-white rounded-md font-medium text-xs hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-sm touch-manipulation min-h-[44px] flex items-center"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button - Larger touch target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 text-slate-600 hover:text-slate-900 z-50 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - Improved UX */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu Panel */}
          <div className="lg:hidden fixed inset-x-0 top-full bg-white z-40 border-t border-slate-200 shadow-lg">
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="space-y-3">
                <a
                  href="/manifesto"
                  className="block py-4 px-4 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Manifesto
                </a>
                <a
                  href="https://go.mypasspoint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-4 px-4 text-base font-medium text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="https://go.mypasspoint.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-4 bg-slate-900 text-white rounded-lg font-medium text-base hover:bg-slate-800 transition-colors text-center touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;

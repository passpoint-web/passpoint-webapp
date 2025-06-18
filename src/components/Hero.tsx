
import { ArrowDown, CheckCircle2, ArrowRight } from "lucide-react";
import LogoRow from "./LogoRow";
import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";
import AnimatedBackground from "./AnimatedBackground";
import NetworkPattern from "./NetworkPattern";
import FloatingElements from "./FloatingElements";

// Using the actual partner logos
const logos = [
  { src: "/lovable-uploads/21dd8cee-aaf4-4c74-9e14-aa314e775b53.png", alt: "PayQin" },
  { src: "/lovable-uploads/d4639335-5dfd-495e-a26f-c8e51d03e142.png", alt: "Eversend" },
  { src: "/lovable-uploads/b1fa5e90-f050-4b07-8c01-dd5ac50cc5d4.png", alt: "Maplerad" },
  { src: "/lovable-uploads/4b52de1d-d552-468c-aef0-ea6111a57df2.png", alt: "TransFi" },
  { src: "/lovable-uploads/5aebdc7a-60a0-4ef0-a7e8-a7aaafc90014.png", alt: "Fuspay" },
  { src: "/lovable-uploads/6fe2e531-825f-4664-b027-dedd21693eab.png", alt: "1XBET" },
];

const Hero = () => (
  <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-slate-50/50 to-gray-100/30 overflow-hidden w-full pt-28 antialiased" id="hero">
    {/* Softened Background Layers */}
    <AnimatedBackground />
    <NetworkPattern />
    <FloatingElements />
    
    {/* More subtle background pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjFmNWY5IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-5"></div>
    
    {/* Passpoint brand accent shapes */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-brand-200/30 to-brand-300/25 rounded-full blur-3xl opacity-60 animate-pulse"></div>
    <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-br from-brand-100/35 to-brand-200/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    <div className="w-full px-4 sm:px-6 lg:px-16 2xl:px-20 py-8 relative z-10">
      <div className="text-center max-w-7xl mx-auto">
        {/* Enhanced Main Headline */}
        <ScrollReveal delay={200}>
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-1 mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-900 font-black">One API,{" "}</span>
              <span className="relative inline-block group">
                <span className="font-black relative z-10 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-600 bg-clip-text text-transparent">
                  One Africa
                </span>
                {/* Passpoint brand glow effects */}
                <div className="absolute -inset-6 bg-gradient-to-r from-brand-100/20 via-brand-200/30 to-brand-100/20 rounded-3xl opacity-30 blur-2xl -z-10 group-hover:opacity-40 transition-all duration-700"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-200/15 via-brand-300/25 to-brand-200/15 rounded-2xl opacity-20 blur-xl -z-5 animate-pulse"></div>
                {/* Brand floating elements */}
                <div className="absolute -top-3 -right-3 w-3 h-3 bg-brand-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-3 -left-3 w-2.5 h-2.5 bg-brand-600 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
              </span>
              <span className="text-gray-900 animate-fade-in font-black" style={{ animationDelay: '0.3s' }}>.</span>
            </h1>
            
            {/* Brand decorative elements */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-brand-400 to-brand-300 opacity-50 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
                <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-brand-300 via-brand-400 to-transparent opacity-50 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced Subheadline */}
        <ScrollReveal delay={300}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-5xl mx-auto font-medium px-2">
            We provide the infrastructure and tools you need to launch and scale your payment operations across Africa and the G20 countries with{" "}
            <span className="text-gray-900 font-bold relative bg-gradient-to-r from-brand-50 to-brand-100 px-2 py-1 rounded-lg border border-brand-200/50">
              complete ease
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-brand-300 to-brand-400 rounded-full opacity-40"></div>
            </span>
            .
          </p>
        </ScrollReveal>

        {/* Enhanced Stats - with brand colors */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 max-w-5xl mx-auto px-2">
            <div className="text-center group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200/60 hover:shadow-lg hover:border-brand-200/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider leading-tight">Payment Methods</p>
            </div>
            <div className="text-center group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200/60 hover:shadow-lg hover:border-brand-200/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                <AnimatedCounter end={1} suffix="B+" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider leading-tight">Transaction Value</p>
            </div>
            <div className="text-center group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200/60 hover:shadow-lg hover:border-brand-200/40 transition-all duration-300 hover:-translate-y-1 sm:col-span-1 col-span-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                <AnimatedCounter end={40} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider leading-tight">Countries</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced CTA Buttons */}
        <ScrollReveal delay={500}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
            <a
              href="https://go.mypasspoint.com/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg group touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
            </a>
            <a
              href="https://calendar.app.google/ewSe3pYQ9i4RcRAj6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold text-base sm:text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-105 shadow-sm touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              Schedule Demo
            </a>
          </div>
        </ScrollReveal>

        {/* Enhanced Partner Logos - brand background */}
        <ScrollReveal delay={600}>
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-12 max-w-7xl mx-auto overflow-hidden border border-gray-200/40 shadow-sm">
            {/* Brand background effects */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-100/25 to-brand-200/20 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-200/20 to-brand-100/25 rounded-full opacity-30 blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-sm sm:text-base font-semibold text-slate-600 mb-4 sm:mb-6 lg:mb-8 uppercase tracking-wider text-center">
                Trusted by reputable brands
              </p>
              {/* Improved mobile logo container */}
              <div className="w-full overflow-hidden">
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full px-2">
                  {logos.map(({ src, alt }, idx) => (
                    <div
                      key={alt + idx}
                      className="h-10 w-16 sm:h-12 sm:w-20 md:h-14 md:w-24 lg:h-16 lg:w-28 xl:h-18 xl:w-32 2xl:h-20 2xl:w-36 flex-shrink-0 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-slate-200/60 sm:border-2 flex items-center justify-center grayscale-0 hover:grayscale-0 hover:scale-110 hover:shadow-xl hover:border-brand-300/40 transition-all duration-500 ease-out animate-fade-in p-2 sm:p-2.5 md:p-3 lg:p-3.5 cursor-pointer group"
                      style={{
                        animationDelay: `${0.1 * idx}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="h-full w-auto max-w-full object-contain filter brightness-100 contrast-110 saturate-110 group-hover:brightness-110 group-hover:contrast-125 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.logo-fallback')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'logo-fallback text-gray-700 text-xs font-bold text-center flex items-center justify-center w-full h-full';
                            fallback.textContent = alt;
                            parent.appendChild(fallback);
                          }
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </div>
);

export default Hero;

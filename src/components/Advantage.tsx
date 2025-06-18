
import React from "react";
import { Globe, Navigation, Monitor, TrendingUp, Building2, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import NetworkPattern from "./NetworkPattern";

const advantages = [
  {
    icon: <Globe className="text-[#00AEEF]" size={32} />, 
    title: "A Single African Market",
    desc: "Unified pay-ins and payouts across all African countries."
  },
  {
    icon: <Navigation className="text-[#00AEEF]" size={32} />, 
    title: "Smart Routing",
    desc: "Optimize every transaction for cost, speed, and reliability"
  },
  {
    icon: <Monitor className="text-[#00AEEF]" size={32} />, 
    title: "Live Transaction Control",
    desc: "Instant transaction monitoring and immediate issue resolution."
  },
  {
    icon: <TrendingUp className="text-[#00AEEF]" size={32} />, 
    title: "Increased Profit Margins",
    desc: "Competitive pricing, reduced transaction costs, faster payments and scalable operations."
  },
  {
    icon: <Building2 className="text-[#00AEEF]" size={32} />, 
    title: "Scale Across Africa",
    desc: "Expand seamlessly across African markets with lower operational costs and unified infrastructure."
  },
  {
    icon: <Zap className="text-[#00AEEF]" size={32} />, 
    title: "Global Market Access",
    desc: "Connect to international markets and benefit from global trade opportunities."
  },
];

const Advantage = () => (
  <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden" id="advantage">
    {/* Enhanced Background */}
    <NetworkPattern className="opacity-20" />
    
    {/* Floating gradient orbs */}
    <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00AEEF]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight px-2">
            The Passpoint Advantage
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-blue-600 mx-auto rounded-full"></div>
        </div>
      </ScrollReveal>
      
      {/* Balanced 2x3 grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((a, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100/50 hover:border-[#00AEEF]/20 hover:-translate-y-2 h-full flex flex-col touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 via-transparent to-blue-100/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00AEEF]/10 to-blue-100/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {React.cloneElement(a.icon, { 
                    size: window.innerWidth < 640 ? 24 : 32 
                  })}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#00AEEF] transition-colors duration-300 leading-tight">
                  {a.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed flex-grow">
                  {a.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Advantage;

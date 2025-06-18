
import React from "react";
import { Package, Building2, Shield, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import NetworkPattern from "./NetworkPattern";

const starterFeatures = [
  {
    icon: <Package className="text-[#00AEEF]" size={28} />,
    title: "Collections & Payouts",
    desc: "Connect to 30+ payment methods for seamless collections and instant disbursements"
  },
  {
    icon: <Building2 className="text-[#00AEEF]" size={28} />,
    title: "Treasury Services",
    desc: "Efficient exchange between exotic African currencies and global pairs. One platform and one dashboard to manage them all."
  },
  {
    icon: <Shield className="text-[#00AEEF]" size={28} />,
    title: "Country-Specific Compliance",
    desc: "Local and international standards, regulatory frameworks and seamless integration with local payment systems."
  },
];

const StarterPack = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-slate-50/80 to-gray-50/40 relative overflow-hidden" id="starter-pack">
    {/* Enhanced Background */}
    <NetworkPattern className="opacity-30" />
    
    {/* Subtle animated elements */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-200/20 to-gray-300/20 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-gray-300/20 to-gray-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#00AEEF]/10 rounded-full text-sm font-medium text-[#00AEEF] mb-6 sm:mb-8 border border-[#00AEEF]/20">
            <Package size={16} />
            <span>Complete Solution</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 leading-tight px-2">
            Your African Expansion
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#0080b8] bg-clip-text text-transparent">
              Starter Pack
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Everything you need to launch, scale, and succeed across African markets. One API, one contract, infinite possibilities.
          </p>
        </ScrollReveal>
      </div>

      {/* Mobile-optimized cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {starterFeatures.map((feature, index) => (
          <ScrollReveal key={index} delay={300 + index * 100}>
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-[#00AEEF]/20 transition-all duration-500 hover:-translate-y-2 touch-manipulation">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#00AEEF]/10 rounded-xl group-hover:bg-[#00AEEF]/20 transition-colors duration-300 flex-shrink-0">
                  {React.cloneElement(feature.icon, { 
                    size: window.innerWidth < 640 ? 24 : 28 
                  })}
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#00AEEF] transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {feature.desc}
              </p>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={600}>
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <a
            href="https://go.mypasspoint.com/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-4 sm:py-5 bg-slate-900 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg group touch-manipulation min-h-[48px]"
          >
            Start Your Integration
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StarterPack;

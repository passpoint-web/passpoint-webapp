
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Quote, Zap, Globe, TrendingUp, Shield, Users, ArrowRight, ExternalLink, CheckCircle2, Star, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-50/30 to-brand-100/20">
      {/* Enhanced Navigation with brand colors */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-brand-200/30 shadow-sm">
        <div className="flex justify-between items-center max-w-5xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-all duration-300 group"
          >
            <div className="p-2 rounded-full bg-brand-50 group-hover:bg-brand-100 transition-colors border border-brand-200/50">
              <ArrowLeft size={18} />
            </div>
            <span className="font-medium">Back to Home</span>
          </Link>
          <img
            src="/lovable-uploads/b6ae95bc-73f8-4f1c-a25c-a920e93e73d6.png"
            alt="Passpoint logo"
            className="h-8 sm:h-10 w-auto"
          />
        </div>
      </nav>

      {/* Hero Section with brand gradient */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Enhanced background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-900/5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-brand-400/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-600/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6 border border-brand-200/50">
                <Quote size={16} />
                <span>Our Vision</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-slate-900">A Unified Payment</span>
                <br />
                <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                  Infrastructure for Africa
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-700 mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* Opening Statement with brand colors */}
        <ScrollReveal delay={200}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-brand-100 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Reality</h2>
              </div>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p className="text-xl font-medium text-slate-900">Africa is not a country.</p>
                <p>It's <span className="font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-lg">54 nations</span> with <span className="font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-lg">42 currencies</span>, <span className="font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-lg">200+ payment methods</span>, and no central switch to connect them all.</p>
                <p>This fragmentation costs businesses dearly. It traps economic potential behind walls of complexity. It makes scaling across the continent a puzzle with too many pieces.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Core Belief with enhanced brand gradient */}
        <ScrollReveal delay={300}>
          <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-8 sm:p-12 text-white mb-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Zap className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Core Belief</h2>
              </div>
              <blockquote className="text-2xl sm:text-3xl font-bold leading-tight mb-6">
                "We Believe This Fragmentation Must End."
              </blockquote>
              <p className="text-lg text-brand-100">
                We see an Africa where money moves as freely as ideas. Where businesses can thrive without borders.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Vision Cards with brand accents */}
        <ScrollReveal delay={400}>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-200">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-brand-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seamless Growth</h3>
              <p className="text-slate-700">Where a business in Kenya can pay suppliers in Nigeria as easily as those across town.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-200">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-brand-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Equality</h3>
              <p className="text-slate-700">Where African companies can trade with global nations on equal footing.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced sections with brand colors */}
        <ScrollReveal delay={500}>
          <div className="bg-red-50 rounded-3xl p-8 sm:p-12 border-l-4 border-red-500 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="text-red-600" size={20} />
              </div>
              The Current Reality
            </h2>
            <div className="space-y-4 text-lg text-slate-700">
              <p>Even established African payment providers operate in silos, treating each market as a separate entity.</p>
              <p>Global providers build for Western standards first, then awkwardly retrofit their solutions for African markets.</p>
              <div className="bg-red-100 p-4 rounded-xl border-l-4 border-red-400">
                <p className="font-semibold text-red-800">The result? Businesses waste time and money navigating chaotic treasury operations, inconsistent regulations, and unreliable local rails.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Our Solution with brand colors */}
        <ScrollReveal delay={600}>
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 sm:p-12 border border-brand-200 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Commitment</h2>
            </div>
            <p className="text-lg text-slate-700 mb-6">
              We are building the unified payments infrastructure that Africa deserves. We will painstakingly build it, one corridor at a time.
            </p>
            <div className="grid gap-4">
              {[
                "A single API connecting every national pay-in and payout method across the continent",
                "A bridge linking African businesses to G20 economies—60% of Africa's trade",
                "A system that makes expansion across Africa 50% cheaper and faster"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/60 p-4 rounded-xl border border-brand-200/50">
                  <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-white" size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Advantages with improved design */}
        <ScrollReveal delay={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-brand-100 mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center">
                <Star className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">The Passpoint Advantage</h2>
            </div>
            <div className="grid gap-4">
              {[
                "Smart payment routing that understands local conditions",
                "Collections that work across diverse economies", 
                "Payouts that reach every corner of the continent",
                "Currency conversion that respects the value of each nation's money",
                "Compliance that navigates complex regulatory environments"
              ].map((advantage, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors border border-brand-100">
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-slate-700 font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Promise with brand styling */}
        <ScrollReveal delay={800}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8">Our Promise</h2>
            <div className="space-y-4 text-lg">
              <p>We won't retrofit Western solutions to African problems.</p>
              <p>We won't treat each African nation as an isolated market.</p>
              <p>We won't accept the status quo of fragmentation and inefficiency.</p>
              <div className="mt-8 p-6 bg-brand-500/20 rounded-2xl border border-brand-400/30 backdrop-blur-sm">
                <p className="text-xl font-bold">Instead, we will build bridges where others see borders.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced CTA with brand colors */}
        <ScrollReveal delay={900}>
          <div className="text-center bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Join Us In Building A Unified Financial Future For Africa</h2>
            <p className="text-xl mb-8 text-brand-100">Passpoint. One API. One Africa. Infinite Possibilities.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-xl font-semibold text-lg hover:bg-brand-50 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Start Building with Passpoint
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href="https://calendar.app.google/ewSe3pYQ9i4RcRAj6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Schedule a Demo
                <ExternalLink className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default Manifesto;

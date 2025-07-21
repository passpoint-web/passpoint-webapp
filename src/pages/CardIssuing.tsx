import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { CreditCard, Globe, TrendingUp, Zap, Shield, Users, Droplets, RotateCw, Activity } from 'lucide-react';
import EnhancedCard from '@/components/EnhancedCard';
import EnhancedButton from '@/components/EnhancedButton';

const CardIssuing = () => {
  const cardTypes = [
    { name: "Virtual Card", color: "bg-gradient-to-br from-amber-100 to-amber-200", textColor: "text-amber-800" },
    { name: "Debit Card", color: "bg-gradient-to-br from-purple-300 to-purple-400", textColor: "text-white" },
    { name: "Prepaid Card", color: "bg-gradient-to-br from-slate-700 to-slate-800", textColor: "text-white" },
    { name: "Credit Card", color: "bg-gradient-to-br from-slate-800 to-slate-900", textColor: "text-white" }
  ];

  const keyFeatures = [
    "3-D Secure & Tokenization",
    "Real-time funding",
    "Global coverage",
    "Single API integration",
    "Revenue sharing",
    "24/7 support"
  ];

  return (
    <div className="bg-background min-h-screen">
      <header>
        <Navigation />
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Issue cards globally in days
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Launch your card program across Africa, US, Europe, LATAM and Asia with a single API. Virtual, prepaid, debit, and credit cards.
              </p>
              <div className="flex justify-center mb-8">
                <a 
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Amopc4RAhujeNfsCm2lXMQmhWxp86FNx3j0FIy3pYzjNXn50OcuwqoAJLwgG2YZOifMxsuAJA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnhancedButton size="lg">
                    Talk to Sales
                  </EnhancedButton>
                </a>
              </div>
              
              {/* Apple Pay & Google Pay Support */}
              <div className="flex justify-center">
                <div className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl px-8 py-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">A</span>
                        </div>
                        <span className="font-medium text-slate-700">Apple Pay</span>
                      </div>
                      <span className="text-slate-400">•</span>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                        <span className="font-medium text-slate-700">Google Pay</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm text-green-600 font-medium">✓ Supported</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <EnhancedCard className="p-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CreditCard className="h-8 w-8 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Global cards at scale
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Serve global consumers and businesses with Mastercard and Visa from a single integration. No additional work needed to launch new countries or regions.
                    </p>
                  </div>
                </div>
              </EnhancedCard>
              
              <EnhancedCard className="p-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Earn revenue
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Earn a share of revenue from every card transaction.
                    </p>
                  </div>
                </div>
              </EnhancedCard>
            </div>

            {/* Key Features */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {keyFeatures.map((feature, index) => (
                  <span key={index} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-700">
                    ✓ {feature}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* Smart Liquidity Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Droplets className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Just-in-Time Liquidity Management</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
                Smarter liquidity: one pool,<br />
                no idle funds, real-time control
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Funds are debited from your pool position only when transactions are authorised. No idle funds in cards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Single Pool */}
              <EnhancedCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 mx-auto">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">One Pool of Funds</h3>
                <p className="text-slate-600 leading-relaxed">
                  Centralize your liquidity in a single, unified pool. No more fragmented balances across multiple cards.
                </p>
              </EnhancedCard>

              {/* Real-time Control */}
              <EnhancedCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-6 mx-auto">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Real-time Control</h3>
                <p className="text-slate-600 leading-relaxed">
                  Monitor and control your liquidity in real-time. Instant visibility into all transactions and balances.
                </p>
              </EnhancedCard>

              {/* No Idle Funds */}
              <EnhancedCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl mb-6 mx-auto">
                  <RotateCw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Zero Idle Funds</h3>
                <p className="text-slate-600 leading-relaxed">
                  Funds are debited from your pool position only when transactions are authorised. No idle funds in cards.
                </p>
              </EnhancedCard>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a 
                href="https://go.mypasspoint.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EnhancedButton size="lg">
                  Experience Smart Liquidity
                </EnhancedButton>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
};

export default CardIssuing;
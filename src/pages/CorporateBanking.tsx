import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { 
  CreditCard, 
  Globe, 
  Wallet, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Zap,
  Lock,
  Building2,
  Smartphone,
  Target,
  Award,
  DollarSign,
  PiggyBank,
  Clock,
  Layers,
  MessageSquare,
  PlayCircle
} from 'lucide-react';
import EnhancedCard from '@/components/EnhancedCard';
import EnhancedButton from '@/components/EnhancedButton';

const CorporateBanking = () => {
  const features = [
    {
      icon: Globe,
      title: "Send Payments Globally",
      description: "Simple cross-border payments to partners, vendors, and employees in Africa and G20 countries.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Wallet,
      title: "Hold & Manage Multi-Currency Balances", 
      description: "Open balances in USD, EUR, GBP, KES, NGN, etc. Avoid unnecessary conversions.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      icon: CreditCard,
      title: "Smarter Spending with Virtual Cards",
      description: "Instantly issue cards, set limits, and track spend — all from your dashboard.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50"
    }
  ];

  const benefits = [
    { text: "Intuitive dashboard", icon: Smartphone, color: "text-blue-500" },
    { text: "Hold and convert multiple currencies", icon: DollarSign, color: "text-emerald-500" },
    { text: "Real-time transaction tracking and controls", icon: BarChart3, color: "text-purple-500" },
    { text: "Secure, role-based access", icon: Lock, color: "text-red-500" },
    { text: "Built for businesses operating across Africa and global markets", icon: Target, color: "text-indigo-500" }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Growing businesses", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, value: "Africa + G20", label: "Markets supported", color: "from-emerald-500 to-teal-500" },
    { icon: Shield, value: "Bank-grade", label: "Security", color: "from-purple-500 to-indigo-500" },
    { icon: BarChart3, value: "Real-time", label: "Tracking", color: "from-orange-500 to-red-500" }
  ];

  const additionalFeatures = [
    { icon: TrendingUp, title: "Smart Analytics", description: "Advanced insights and reporting tools", color: "from-pink-500 to-rose-500" },
    { icon: Zap, title: "Instant Processing", description: "Lightning-fast transaction processing", color: "from-yellow-500 to-amber-500" },
    { icon: Building2, title: "Enterprise Grade", description: "Built for large-scale operations", color: "from-slate-500 to-gray-500" },
    { icon: Award, title: "Compliance Ready", description: "Meet all regulatory requirements", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="bg-background min-h-screen">
      <header>
        <Navigation />
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-32 sm:pt-40 sm:pb-40 relative overflow-hidden bg-white">
          {/* Floating 3D Elements inspired by reference */}
          <div className="absolute top-20 left-1/4 w-32 h-64 bg-gradient-to-br from-brand-300 to-brand-500 rounded-3xl opacity-20 rotate-12 blur-sm animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-1/3 w-24 h-48 bg-gradient-to-br from-brand-secondary to-brand-400 rounded-3xl opacity-25 -rotate-12 blur-sm animate-[float_6s_ease-in-out_infinite_1s]"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-40 bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl opacity-15 rotate-45 blur-sm animate-[float_7s_ease-in-out_infinite_2s]"></div>
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="animate-fade-in space-y-8">
                <h1 className="text-display-md font-black text-foreground leading-tight">
                  Enterprise Banking for <br />
                  <span className="text-brand-gradient">
                    Africa and the G20
                  </span>
                </h1>
                <p className="text-body-xl text-muted-foreground leading-relaxed max-w-xl">
                  Set up local accounts and wallet in TZS, KES, NGN, USD and more. Send and receive payments, manage multi-currency balances, and control corporate spend. Operate with ease across Africa and the G20 from one enterprise-grade dashboard.
                </p>
                

                <button 
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://go.mypasspoint.com/dashboard', '_blank', 'noopener,noreferrer')}
                >
                  Start your enterprise account
                </button>
              </div>
              
              <div className="relative animate-fade-in lg:justify-self-end">
                {/* Platform Extract - Currency Conversion Interface */}
                <div className="relative">
                  <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl"></div>
                    
                    <div className="relative z-10 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Convert Currency</h3>
                        <p className="text-muted-foreground">Select your source currency and amount to convert it directly to your preferred destination currency.</p>
                      </div>
                      
                      
                      {/* Conversion Details */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Amount that will be converted</label>
                          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="text-3xl font-bold text-foreground">₦2,000,000</div>
                              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">🇳🇬</span>
                                </div>
                                <span className="font-medium">NGN</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-green-600">Wallet Balance : ₦5,412,512.00</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">We will convert</span>
                            <span className="text-foreground font-medium">₦ 2,000,000.00</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Current Rate</span>
                            <span className="text-foreground font-medium">0.000653034</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Amount you will receive</label>
                          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="text-3xl font-bold text-foreground">$1,306.06</div>
                              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border">
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">🇺🇸</span>
                                </div>
                                <span className="font-medium">USD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access & Team Management Section */}
        <section className="py-32 sm:py-40 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                {/* 3D Icon - Unified Dashboard illustration */}
                <div className="flex items-center justify-center h-80">
                  <div className="relative">
                    {/* Main Dashboard Card */}
                    <div className="w-40 h-56 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl transform perspective-1000 rotate-y-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-transparent rounded-3xl"></div>
                      
                      {/* Dashboard Grid */}
                      <div className="absolute inset-6 grid grid-cols-2 gap-2">
                        <div className="bg-white/20 rounded-lg border border-white/30"></div>
                        <div className="bg-white/20 rounded-lg border border-white/30"></div>
                        <div className="bg-white/20 rounded-lg border border-white/30"></div>
                        <div className="bg-white/20 rounded-lg border border-white/30"></div>
                      </div>
                      
                      {/* Central Hub Indicator */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg"></div>
                    </div>
                    
                     {/* Floating Currency Symbols - Enhanced Interactive */}
                     <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-xl animate-[float_3s_ease-in-out_infinite] flex items-center justify-center text-white font-bold text-sm hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                       <span className="group-hover:animate-pulse">$</span>
                     </div>
                     <div className="absolute -bottom-4 -left-8 w-10 h-10 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full shadow-xl animate-[float_4s_ease-in-out_infinite_1s] flex items-center justify-center text-white font-bold text-xs hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                       <span className="group-hover:animate-pulse">₦</span>
                     </div>
                     <div className="absolute top-1/4 -right-12 w-8 h-8 bg-gradient-to-br from-pink-300 to-red-400 rounded-full shadow-xl animate-[float_3.5s_ease-in-out_infinite_0.5s] flex items-center justify-center text-white font-bold text-xs hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                       <span className="group-hover:animate-pulse">€</span>
                     </div>
                     <div className="absolute -top-2 left-1/4 w-9 h-9 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full shadow-xl animate-[float_3.8s_ease-in-out_infinite_1.5s] flex items-center justify-center text-white font-bold text-xs hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                       <span className="group-hover:animate-pulse">TZS</span>
                     </div>
                     <div className="absolute bottom-1/4 -right-10 w-10 h-10 bg-gradient-to-br from-purple-300 to-violet-400 rounded-full shadow-xl animate-[float_4.2s_ease-in-out_infinite_0.8s] flex items-center justify-center text-white font-bold text-xs hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                       <span className="group-hover:animate-pulse">KES</span>
                     </div>
                     <div className="absolute top-3/4 -left-6 w-7 h-7 bg-gradient-to-br from-indigo-300 to-blue-400 rounded-full shadow-xl animate-[float_3.2s_ease-in-out_infinite_2s] flex items-center justify-center text-white font-bold text-xs hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                       <span className="group-hover:animate-pulse">£</span>
                     </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <h2 className="text-display-sm font-black text-foreground leading-tight">
                  Everything in One Place
                </h2>
                <p className="text-body-xl text-muted-foreground leading-relaxed max-w-xl">
                  Operating across Africa has never been easier. View and manage all your currencies from a single, easy-to-use account. Move money between them effortlessly.
                </p>

                <button 
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://go.mypasspoint.com/dashboard', '_blank', 'noopener,noreferrer')}
                >
                  Start managing currencies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Features Section */}
        <section className="py-32 sm:py-40 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
            <h2 className="text-heading-xl font-bold text-foreground mb-12 leading-tight">
              Everything you need to <br />
              <span className="text-brand-gradient">
                grow globally
              </span>
            </h2>
            
            {/* Simple benefits list */}
            <div className="space-y-6 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://go.mypasspoint.com/dashboard', '_blank', 'noopener,noreferrer')}
              >
                Get started today
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-full blur-xl animate-[float_5s_ease-in-out_infinite_1s]"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Ready to Transform Your Business?
            </div>
            <h2 className="text-heading-lg font-bold text-white mb-6">
              Get started in minutes
            </h2>
            <p className="text-body-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already managing their global finances with Passpoint.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton 
                size="lg" 
                className="group w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 relative overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl"
                onClick={() => window.open('https://go.mypasspoint.com/dashboard', '_blank', 'noopener,noreferrer')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Create an Account
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </EnhancedButton>
              <EnhancedButton 
                size="lg" 
                className="group w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 relative overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl"
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Amopc4RAhujeNfsCm2lXMQmhWxp86FNx3j0FIy3pYzjNXn50OcuwqoAJLwgG2YZOifMxsuAJA', '_blank')}
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Schedule a Demo
                </span>
              </EnhancedButton>
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

export default CorporateBanking;
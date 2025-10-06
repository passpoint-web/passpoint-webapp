import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, FileText, Shield, CreditCard, AlertTriangle, Scale, Users, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Terms = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "about", title: "About Us", icon: Users },
    { id: "kyc", title: "KYC Requirements", icon: Shield },
    { id: "payments", title: "Customer Payments", icon: CreditCard },
    { id: "fees", title: "Fees & Pricing", icon: Database },
    { id: "security", title: "Security & Fraud", icon: Lock },
    { id: "disputes", title: "Disputes & Resolution", icon: Scale },
    { id: "uk-services", title: "UK Services", icon: FileText },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <img
            src="/lovable-uploads/b6ae95bc-73f8-4f1c-a25c-a920e93e73d6.png"
            alt="Passpoint logo"
            className="h-10 w-auto"
          />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-16 flex gap-8">
        {/* Table of Contents - Desktop Sidebar */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-32">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-blue-600" size={20} />
                Terms Overview
              </h3>
              <nav className="space-y-1">
                {sections.map(({ id, title, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg transition-all duration-200 group ${
                      activeSection === id
                        ? 'bg-blue-50 text-blue-900 border border-blue-200 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon 
                      size={16} 
                      className={`transition-colors ${
                        activeSection === id
                          ? 'text-blue-600'
                          : 'text-slate-400 group-hover:text-blue-600'
                      }`} 
                    />
                    <span className="text-sm font-medium">{title}</span>
                    {activeSection === id && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                <FileText className="text-green-600" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Clear guidelines for using Passpoint's payment infrastructure and services
              </p>
            </div>
          </ScrollReveal>

          {/* Important Notice */}
          <ScrollReveal delay={100}>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-amber-800">
                    By signing up for an account on <strong>www.mypasspoint.com</strong> or any of our affiliated websites and services, you are deemed a <strong>merchant</strong> and agree to these Terms of Service. Please read these terms carefully before signing up.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {/* About Us */}
            <ScrollReveal delay={200}>
              <section id="about" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">About Passpoint</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Passpoint Technologies Inc.</strong> is a global payment infrastructure provider that enables businesses to connect to multiple pay-in and payout methods across Africa and the G20 through a single API. We operate as an independent contractor providing access to payment services. We do not control, endorse, or assume liability for the legality or quality of any goods or services paid for using our infrastructure.
                </p>
              </section>
            </ScrollReveal>

            {/* Key Responsibilities Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={300}>
                <div id="kyc" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Shield className="text-green-600" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">KYC Requirements</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    You are solely responsible for verifying the identity of your customers, ensuring they are authorized to perform transactions, and maintaining proof of delivery and related records.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div id="payments" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <CreditCard className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Payment Processing</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Process payments only when authorized by customers. We handle approved transactions through card networks and issuing banks with full compliance.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Fees and Services */}
            <ScrollReveal delay={500}>
              <section id="fees" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Database className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Fees & Pricing</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What's Included</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Value Added Tax (VAT)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Processor charges
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Bank charges
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        SAAS fee (where applicable)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Payment Terms</h4>
                    <p className="text-slate-700">
                      Default Fees are outlined in the Pricing section of our Merchant Service Agreement (available upon request from our Business Development team) and may be revised from time to time with a minimum of five (5) days' notice. Settlement amounts will be net of applicable fees, chargebacks, and refunds. Use of Passpoint services constitutes acceptance of our standard terms, conditions, and fees, unless otherwise agreed in a signed agreement.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Security & Compliance */}
            <ScrollReveal delay={600}>
              <section id="security" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <Lock className="text-red-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Security & Fraud Controls</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Passpoint uses commercially reasonable measures (technical, administrative, and physical) to protect your data and payment information. However, we cannot guarantee that unauthorized parties will never breach our security.
                  </p>
                  <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-slate-900 mb-2">Your Responsibilities</h4>
                    <ul className="space-y-1 text-slate-700">
                      <li>• Use all security features provided by Passpoint</li>
                      <li>• Notify us immediately of suspicious activity</li>
                      <li>• Maintain secure account credentials</li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Important Policies Grid */}
            <div id="disputes" className="grid md:grid-cols-3 gap-6 scroll-mt-24">
              <ScrollReveal delay={700}>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="text-orange-600" size={18} />
                    Error Reporting
                  </h4>
                  <p className="text-sm text-slate-700">
                    Report transaction errors within <strong>45 days</strong>. We'll investigate and rectify validated errors promptly.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CreditCard className="text-blue-600" size={18} />
                    Chargebacks
                  </h4>
                  <p className="text-sm text-slate-700">
                    You're liable for all chargeback costs. We may deduct amounts from your account or future payouts.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={900}>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Scale className="text-purple-600" size={18} />
                    Governing Law
                  </h4>
                  <p className="text-sm text-slate-700">
                    Governed by Delaware, USA laws. Claims must be filed within one year.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Services in the United Kingdom - Notice */}
            <ScrollReveal delay={1000}>
              <section id="uk-services" className="bg-blue-50 border-l-4 border-indigo-600 rounded-xl p-6 scroll-mt-24">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <FileText className="text-indigo-600" size={18} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-slate-900 mb-2">Services in the United Kingdom</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Passpoint does not actively market, promote, or advertise its services within the United Kingdom. Any UK-based business that engages with Passpoint does so on its own initiative, acknowledging that the engagement was not prompted by any targeted communication or solicitation from Passpoint or its affiliates.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Call to Action */}
            <ScrollReveal delay={1100}>
              <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Payments?</h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Join thousands of businesses streamlining their payment operations with Passpoint's comprehensive infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://passpoint-go-webapp.onrender.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Get Started Now
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 border border-slate-400 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <ArrowLeft className="rotate-180" size={20} />
                    Back to Home
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Terms;

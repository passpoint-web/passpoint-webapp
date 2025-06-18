import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "preface", title: "Preface", icon: FileText },
    { id: "about", title: "About Us", icon: Users },
    { id: "agreement", title: "Agreement", icon: Shield },
    { id: "registration", title: "Registration", icon: Database },
    { id: "security", title: "Account Security", icon: Lock },
    { id: "compliance", title: "Data Compliance", icon: Eye },
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
                <Shield className="text-blue-600" size={20} />
                Quick Navigation
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Privacy Policy & Business Terms
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Protecting your business data and ensuring transparency in our practices
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {/* Preface */}
            <ScrollReveal delay={200}>
              <section id="preface" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Preface</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your business's privacy is important to us. This privacy policy outlines the types of personal information we collect, how we use and protect that information, and the choices your business has regarding your data. We are committed to maintaining the confidentiality, integrity, and security of your business information and ensuring transparency in our practices. Please read this policy carefully to understand how we handle your data and how your business can exercise its privacy rights.
                </p>
              </section>
            </ScrollReveal>

            {/* About Us */}
            <ScrollReveal delay={300}>
              <section id="about" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">About Us</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Passpoint Technologies Inc.</strong> ("Passpoint", "we", "us", or "our") is a payment infrastructure provider that connects African and global pay-in and payout methods through a unified API. We facilitate secure and compliant payment processing for businesses operating within and outside Africa. Passpoint acts as an independent service provider and does not control, endorse, or assume liability for the legality or delivery of goods or services purchased through our infrastructure. We do not guarantee user identities or the completion of transactions.
                </p>
              </section>
            </ScrollReveal>

            {/* Agreement */}
            <ScrollReveal delay={400}>
              <section id="agreement" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-purple-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Agreement</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  These Terms constitute a binding agreement between your business and Passpoint. It outlines Passpoint's obligations and your responsibilities, including the potential risks involved in using our services. Your continued use of this website or any of our services confirms your acceptance of this Agreement.
                </p>
              </section>
            </ScrollReveal>

            {/* Remaining sections with enhanced styling */}
            <ScrollReveal delay={500}>
              <section id="registration" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Database className="text-orange-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Registration</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  To use Passpoint, your business must register for an account by providing necessary details such as business name, address, phone number, and email. We may verify this information directly or via third-party services. We reserve the right to approve or reject account applications based on our risk assessment.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-slate-900 mb-3">Change of Information</h3>
                  <p className="text-slate-700">
                    If your business undergoes a change in any of the details provided during registration—including but not limited to your business name, address, banking partner, or services offered—you agree to notify Passpoint within 14 days of such change. Contact from unregistered or unverified email addresses or phone numbers may be ignored for security reasons.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Additional sections in a grid layout for better organization */}
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={600}>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Lock className="text-red-600" size={20} />
                    Representation & Warranties
                  </h3>
                  <p className="text-slate-700 mb-4">Your business represents and warrants to Passpoint that:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      It has full authority and legal right to enter into and fulfill this agreement.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      It is duly incorporated and authorized to operate under the laws of its jurisdiction.
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Eye className="text-indigo-600" size={20} />
                    Age Restriction
                  </h3>
                  <p className="text-slate-700">
                    Passpoint's services are not intended for individuals under the age of 18. We do not knowingly process transactions for or with individuals below this age.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Continue with remaining content in organized sections */}
            <ScrollReveal delay={750}>
              <section id="security" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Account Security</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your business is responsible for safeguarding account credentials. Sharing passwords is prohibited, and any losses due to unauthorized access resulting from such practices shall not be the responsibility of Passpoint. We recommend using PINs and password-protected devices and avoiding the sharing of devices for accessing Passpoint services.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <section id="compliance" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Data Compliance and Security</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your business agrees to comply with the Payment Card Industry Data Security Standard (PCI DSS) and applicable data privacy regulations. While your business retains ownership of all customer data, you grant Passpoint a non-exclusive, royalty-free, global license to:
                </p>
                <ul className="text-lg text-slate-700 space-y-2">
                  <li>• Provide and improve our services</li>
                  <li>• Conduct anonymized internal analytics</li>
                  <li>• Respond to legal requests and fulfill compliance obligations</li>
                  <li>• Act on any other lawful consent your customers provide</li>
                </ul>
                <p className="text-lg text-slate-700">
                  For more information on PCI DSS, please visit <a href="https://www.pcisecuritystandards.org" className="text-primary hover:underline">www.pcisecuritystandards.org</a>.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={850}>
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-purple-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Software License</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Passpoint grants your business a revocable, non-exclusive, non-transferable license to use its APIs, SDKs, and software tools, including any updates and replacements. You agree not to reverse-engineer, modify, distribute, or publish any part of our software. Upon termination of this Agreement, all usage must cease immediately.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={900}>
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Database className="text-orange-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Trademark License</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We grant your business limited rights to use the <strong>Passpoint</strong> name and logo solely in connection with our services. You may not register or claim ownership over any Passpoint trademark or branding element. Upon termination, all usage and display of the trademarks must be discontinued immediately.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={950}>
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <Lock className="text-red-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Intellectual Property</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This Agreement does not transfer any intellectual property rights. All proprietary rights to Passpoint's services and systems remain with Passpoint. Any tools, materials, or processes provided are licensed, not sold.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Publicity</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your business grants Passpoint permission to use your company name and logo in promotional materials, case studies, and on our website. This does not constitute an endorsement of your services.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={1050}>
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Confidential Information</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Both parties agree to protect any exchanged confidential information, including business plans, systems, technical processes, or proprietary strategies. Confidential information:
                </p>
                <ul className="text-lg text-slate-700 space-y-2">
                  <li>• Must not be disclosed without prior written consent</li>
                  <li>• Must only be shared with employees or agents who need to know</li>
                  <li>• Must be protected with at least the same standard of care used for your own sensitive data</li>
                </ul>
                <p className="text-lg text-slate-700 leading-relaxed">Exceptions include information that:</p>
                <ul className="text-lg text-slate-700 space-y-2">
                  <li>• Was already public at the time of disclosure</li>
                  <li>• Becomes public through no fault of the recipient</li>
                  <li>• Was already known to the recipient lawfully</li>
                  <li>• Was independently developed by the recipient</li>
                </ul>
              </section>
            </ScrollReveal>

            {/* Call to Action */}
            <ScrollReveal delay={800}>
              <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of businesses already using Passpoint to streamline their payment operations across Africa and beyond.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ArrowLeft className="rotate-180" size={20} />
                  Back to Home
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy;

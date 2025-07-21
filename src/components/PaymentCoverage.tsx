import React from 'react';
import ScrollReveal from './ScrollReveal';
import { CreditCard, Smartphone, Building, DollarSign } from 'lucide-react';

interface PaymentMethod {
  type: string;
  providers?: string[];
}

interface Country {
  name: string;
  currency: string;
  flag: string;
  paymentMethods: PaymentMethod[];
}

const countries: Country[] = [
  {
    name: "Nigeria",
    currency: "NGN",
    flag: "🇳🇬",
    paymentMethods: [
      { type: "Bank Transfer" }
    ]
  },
  {
    name: "Kenya", 
    currency: "KES",
    flag: "🇰🇪",
    paymentMethods: [
      { type: "Mobile Money", providers: ["Mpesa", "Airtel", "Tkash"] },
      { type: "Bank Payouts" }
    ]
  },
  {
    name: "Tanzania",
    currency: "TZS", 
    flag: "🇹🇿",
    paymentMethods: [
      { type: "Mobile Money", providers: ["Tigo", "Vodafone", "Airtel", "Halotel"] },
      { type: "Bank Payouts" }
    ]
  },
  {
    name: "Ivory Coast",
    currency: "XOF",
    flag: "🇨🇮", 
    paymentMethods: [
      { type: "Mobile Money", providers: ["MTN", "Moov", "Orange", "Wave"] }
    ]
  },
  {
    name: "Benin",
    currency: "XOF",
    flag: "🇧🇯",
    paymentMethods: [
      { type: "Mobile Money", providers: ["MTN", "CELTIS"] }
    ]
  },
  {
    name: "Senegal", 
    currency: "XOF",
    flag: "🇸🇳",
    paymentMethods: [
      { type: "Mobile Money", providers: ["Wave", "Espresso", "Orange", "Free"] }
    ]
  },
  {
    name: "Burkina Faso",
    currency: "XOF",
    flag: "🇧🇫",
    paymentMethods: [
      { type: "Mobile Money", providers: ["Orange", "Moov", "Coris"] }
    ]
  },
  {
    name: "Togo",
    currency: "XOF", 
    flag: "🇹🇬",
    paymentMethods: [
      { type: "Mobile Money", providers: ["TMoney", "Moov"] }
    ]
  },
  {
    name: "Mali",
    currency: "XOF",
    flag: "🇲🇱", 
    paymentMethods: [
      { type: "Mobile Money", providers: ["Orange", "Moov", "Sama"] }
    ]
  },
  {
    name: "USA",
    currency: "USD",
    flag: "🇺🇸",
    paymentMethods: [
      { type: "Virtual Account" },
      { type: "ACH" },
      { type: "RTP" },
      { type: "FedNow" },
      { type: "FedWire" }
    ]
  }
];

const getPaymentIcon = (paymentType: string) => {
  if (paymentType.includes("Mobile") || paymentType.includes("Momo")) {
    return <Smartphone className="h-4 w-4" />;
  }
  if (paymentType.includes("Bank") || paymentType.includes("ACH") || paymentType.includes("Fed")) {
    return <Building className="h-4 w-4" />;
  }
  if (paymentType.includes("Virtual")) {
    return <CreditCard className="h-4 w-4" />;
  }
  return <DollarSign className="h-4 w-4" />;
};

const PaymentCoverage = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              🌍 Unified Africa-G20 Payment Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-slate-900">Accept Payments From</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">54 Countries</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Accept payments from customers across Africa and G20 countries with one simple integration. Send money anywhere, receive payments everywhere.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative">
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 w-max">
                {countries.map((country, index) => (
                  <div
                    key={country.name}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
                  >
                    {/* Country Header */}
                    <div className="p-6 border-b border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{country.flag}</span>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-900">
                              {country.name}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">
                              {country.currency}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="p-6">
                      <h4 className="font-medium text-slate-900 mb-4 flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                        Payment Methods
                      </h4>
                      <div className="space-y-3">
                        {country.paymentMethods.map((method, methodIndex) => (
                          <div
                            key={methodIndex}
                            className="bg-slate-50 rounded-lg p-3"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              {getPaymentIcon(method.type)}
                              <span className="font-medium text-slate-800 text-sm">
                                {method.type}
                              </span>
                            </div>
                            {method.providers && (
                              <div className="flex flex-wrap gap-1">
                                {method.providers.map((provider, providerIndex) => (
                                  <span
                                    key={providerIndex}
                                    className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium"
                                  >
                                    {provider}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-6">
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <span>← Scroll to explore more countries →</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-white/10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Expand to New Markets in Minutes
                </h3>
                <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                  Start collecting payments across African countries and G20 markets today. One API, multiple currencies, speedy settlements
                </p>
                <a
                  href="https://go.mypasspoint.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Started Today
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PaymentCoverage;
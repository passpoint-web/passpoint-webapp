import React, { useState, useMemo } from 'react';
import { Search, MapPin, CreditCard, Smartphone, Building, DollarSign, Filter, Globe, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PaymentMethod {
  type: string;
  providers?: Array<{
    name: string;
    logo?: string;
  }>;
  icon: string;
}

interface Country {
  name: string;
  currency: string;
  flag: string;
  region: string;
  paymentMethods: PaymentMethod[];
  totalProviders: number;
}

const countries: Country[] = [
  {
    name: "Nigeria",
    currency: "NGN",
    flag: "🇳🇬",
    region: "West Africa",
    totalProviders: 2,
    paymentMethods: [
      { type: "Virtual Accounts", icon: "card" },
      { type: "Bank Payouts", icon: "bank" }
    ]
  },
  {
    name: "Kenya", 
    currency: "KES",
    flag: "🇰🇪",
    region: "East Africa",
    totalProviders: 4,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "Mpesa", logo: "/lovable-uploads/884accdd-b3fc-411d-9765-9c6ebb5a260e.png" },
        { name: "Airtel", logo: "/lovable-uploads/692d4a26-65e5-4205-8add-bd45f0766ed7.png" },
        { name: "Tkash", logo: "/lovable-uploads/e00410e7-7539-4cfd-b092-a30870becf0c.png" }
      ], icon: "mobile" },
      { type: "Bank Payouts", icon: "bank" }
    ]
  },
  {
    name: "Tanzania",
    currency: "TZS", 
    flag: "🇹🇿",
    region: "East Africa",
    totalProviders: 5,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "Tigo", logo: "/lovable-uploads/e00410e7-7539-4cfd-b092-a30870becf0c.png" },
        { name: "Vodafone", logo: "/lovable-uploads/bb111226-ef34-4d69-bf76-b70a41de0761.png" },
        { name: "Airtel", logo: "/lovable-uploads/692d4a26-65e5-4205-8add-bd45f0766ed7.png" },
        { name: "Halotel", logo: "/lovable-uploads/2410642c-8ded-4033-bedf-c3304538943f.png" }
      ], icon: "mobile" },
      { type: "Bank Payouts", icon: "bank" }
    ]
  },
  {
    name: "Ivory Coast",
    currency: "XOF",
    flag: "🇨🇮", 
    region: "West Africa",
    totalProviders: 4,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "MTN", logo: "/lovable-uploads/906683fe-c2ee-45be-a1f9-b788eb81ff38.png" },
        { name: "Moov", logo: "/lovable-uploads/6fc7ec6e-0086-41da-b1d4-798c8c3ae87a.png" },
        { name: "Orange", logo: "/lovable-uploads/81041c88-7452-46ef-b44e-2b8e49acc3f6.png" },
        { name: "Wave", logo: "/lovable-uploads/1fbcbbf5-f226-44c0-abd8-f951c3480fa5.png" }
      ], icon: "mobile" }
    ]
  },
  {
    name: "Benin",
    currency: "XOF",
    flag: "🇧🇯",
    region: "West Africa",
    totalProviders: 2,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "MTN", logo: "/lovable-uploads/906683fe-c2ee-45be-a1f9-b788eb81ff38.png" },
        { name: "CELTIS", logo: "/lovable-uploads/1fbcbbf5-f226-44c0-abd8-f951c3480fa5.png" }
      ], icon: "mobile" }
    ]
  },
  {
    name: "Senegal", 
    currency: "XOF",
    flag: "🇸🇳",
    region: "West Africa",
    totalProviders: 4,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "Wave", logo: "/lovable-uploads/1fbcbbf5-f226-44c0-abd8-f951c3480fa5.png" },
        { name: "Xpress", logo: "/lovable-uploads/d0a2baf6-49d3-4763-bb86-2bd10967364f.png" },
        { name: "Orange", logo: "/lovable-uploads/81041c88-7452-46ef-b44e-2b8e49acc3f6.png" },
        { name: "Free", logo: "/lovable-uploads/8ac429f9-bf4c-4f07-91d0-cccc9fac1b22.png" }
      ], icon: "mobile" }
    ]
  },
  {
    name: "Burkina Faso",
    currency: "XOF",
    flag: "🇧🇫",
    region: "West Africa",
    totalProviders: 3,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "Orange", logo: "/lovable-uploads/81041c88-7452-46ef-b44e-2b8e49acc3f6.png" },
        { name: "Moov", logo: "/lovable-uploads/6fc7ec6e-0086-41da-b1d4-798c8c3ae87a.png" },
        { name: "Coris", logo: "/lovable-uploads/275c9a27-a36b-4c88-8478-d3d2653708e3.png" }
      ], icon: "mobile" }
    ]
  },
  {
    name: "Togo",
    currency: "XOF", 
    flag: "🇹🇬",
    region: "West Africa",
    totalProviders: 2,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "TMoney", logo: "/lovable-uploads/01867d79-b159-43d9-9c6c-c79f53b0a50a.png" },
        { name: "Moov", logo: "/lovable-uploads/6fc7ec6e-0086-41da-b1d4-798c8c3ae87a.png" }
      ], icon: "mobile" }
    ]
  },
  {
    name: "Mali",
    currency: "XOF",
    flag: "🇲🇱", 
    region: "West Africa",
    totalProviders: 3,
    paymentMethods: [
      { type: "Mobile Money", providers: [
        { name: "Orange", logo: "/lovable-uploads/81041c88-7452-46ef-b44e-2b8e49acc3f6.png" },
        { name: "Moov", logo: "/lovable-uploads/6fc7ec6e-0086-41da-b1d4-798c8c3ae87a.png" },
        { name: "Sama", logo: "/lovable-uploads/24167f2a-b306-46d0-a06b-8a0717b232b3.png" }
      ], icon: "mobile" }
    ]
  },
  {
    name: "USA",
    currency: "USD",
    flag: "🇺🇸",
    region: "G20",
    totalProviders: 5,
    paymentMethods: [
      { type: "Virtual Account", icon: "card" },
      { type: "ACH", icon: "bank" },
      { type: "RTP", icon: "bank" },
      { type: "FedNow", icon: "bank" },
      { type: "FedWire", icon: "bank" }
    ]
  }
];

const regions = ["All Regions", "West Africa", "East Africa", "G20"];

const getPaymentIcon = (iconType: string) => {
  switch (iconType) {
    case "mobile":
      return <Smartphone className="h-5 w-5" />;
    case "bank":
      return <Building className="h-5 w-5" />;
    case "card":
      return <CreditCard className="h-5 w-5" />;
    default:
      return <DollarSign className="h-5 w-5" />;
  }
};

const PaymentCoveragePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.paymentMethods.some(method => 
                            method.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            method.providers?.some(provider => 
                              provider.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                          );
      
      const matchesRegion = selectedRegion === "All Regions" || country.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const totalCountries = countries.length; // 10 countries
  const totalPaymentMethods = 34; // 34+ payment methods across all providers
  const totalCurrencies = new Set(countries.map(country => country.currency)).size; // Unique currencies

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
                <Globe className="w-4 h-4 mr-2" />
                Unified Africa-G20 Payment Infrastructure
              </Badge>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Accept payments from customers across Africa and G20 countries with one simple integration. Send money anywhere, receive payments everywhere.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-2">{totalCountries}</div>
                <div className="text-slate-600">Countries</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-2">{totalPaymentMethods}+</div>
                <div className="text-slate-600">Payment Methods</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-2">{totalCurrencies}</div>
                <div className="text-slate-600">Currencies</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search countries, currencies, or payment methods..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full border-slate-200 focus:border-primary"
                  />
                </div>
                
                <div className="flex gap-2 w-full lg:w-auto">
                  <Filter className="text-slate-400 h-5 w-5 mt-2.5" />
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <Button
                        key={region}
                        variant={selectedRegion === region ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedRegion(region)}
                        className="whitespace-nowrap"
                      >
                        {region}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCountries.map((country, index) => (
                <div
                  key={country.name}
                  className={`bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                    hoveredCard === country.name ? 'ring-2 ring-primary ring-opacity-50' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(country.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Country Header */}
                  <div className="relative p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl filter drop-shadow-lg">{country.flag}</span>
                        <div>
                          <h3 className="font-bold text-xl">
                            {country.name}
                          </h3>
                          <p className="text-slate-300 font-medium">
                            {country.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-300" />
                      <span className="text-sm text-slate-300">{country.region}</span>
                    </div>
                    
                    {/* Animated background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className="w-full h-full bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Payment Methods
                      <Badge variant="secondary" className="ml-auto">
                        {country.totalProviders} providers
                      </Badge>
                    </h4>
                    
                    <div className="space-y-4">
                      {country.paymentMethods.map((method, methodIndex) => (
                        <div
                          key={methodIndex}
                          className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                              {getPaymentIcon(method.icon)}
                            </div>
                            <span className="font-semibold text-slate-800">
                              {method.type}
                            </span>
                          </div>
                          
                          {method.providers && (
                            <div className="grid grid-cols-2 gap-2">
                              {method.providers.map((provider, providerIndex) => (
                                <div
                                  key={providerIndex}
                                  className="bg-white border border-slate-200 rounded-lg p-3 hover:border-primary/30 transition-colors duration-200 flex items-center gap-2"
                                >
                                   <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden">
                                     <img
                                       src={provider.logo}
                                       alt={`${provider.name} logo`}
                                       className="w-full h-full object-contain"
                                       onError={(e) => {
                                         const target = e.target as HTMLImageElement;
                                         target.style.display = 'none';
                                         const parent = target.parentElement;
                                         if (parent) {
                                           parent.innerHTML = `<span class="text-xs font-semibold text-slate-600">${provider.name.substring(0, 2).toUpperCase()}</span>`;
                                         }
                                       }}
                                     />
                                   </div>
                                  <span className="font-medium text-slate-800 text-sm">
                                    {provider.name}
                                  </span>
                                </div>
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
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={600}>
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Go Global?
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Start collecting payments across African countries and G20 markets today. One API, multiple currencies, speedy settlements.
                </p>
                <a
                  href="https://go.mypasspoint.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
              
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-30 translate-y-30"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentCoveragePage;
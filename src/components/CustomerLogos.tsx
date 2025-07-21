
import ScrollReveal from './ScrollReveal';

const CustomerLogos = () => {
  const customerLogos = [
    { name: "TechCorp Africa", logo: "https://via.placeholder.com/120x60/f0f0f0/666666?text=TechCorp" },
    { name: "Digital Bank", logo: "https://via.placeholder.com/120x60/f0f0f0/666666?text=DigitalBank" },
    { name: "AfriPay", logo: "https://via.placeholder.com/120x60/f0f0f0/666666?text=AfriPay" },
    { name: "Mobile Money Co", logo: "https://via.placeholder.com/120x60/f0f0f0/666666?text=MobileMoney" },
    { name: "Fintech Solutions", logo: "https://via.placeholder.com/120x60/f0f0f0/666666?text=FintechSol" },
    { name: "E-Settlement", logo: "/lovable-uploads/3c9aa6da-8016-43c7-8716-c6fd36777b0b.png" },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50/50 to-gray-100/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-600 mb-6 uppercase tracking-wide">
              Trusted by Reputable Brands
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {customerLogos.map((customer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/60 hover:shadow-md hover:border-brand-200/40 transition-all duration-300 hover:scale-105 w-full flex items-center justify-center min-h-[80px]"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-full max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <span className="font-semibold text-slate-700">40+</span> companies trust Passpoint 
              for their African payment infrastructure
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CustomerLogos;

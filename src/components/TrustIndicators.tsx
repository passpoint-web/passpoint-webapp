
import ScrollReveal from "./ScrollReveal";

const TrustIndicators = () => {
  const licenses = [
    {
      name: "FINTRAC CANAFE",
      description: "Financial Transactions and Reports Analysis Centre of Canada",
      logo: "/lovable-uploads/8510123e-6a2e-469c-a9aa-fe5e84f67c59.png"
    },
    {
      name: "Ministry of Finance Poland",
      description: "Licensed by the Republic of Poland",
      logo: "/lovable-uploads/8fdd4de7-49a9-485c-aee7-f25fff92cb1c.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwQUVFRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              We are Licensed & Certified by
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              regulatory bodies worldwide, proof of our highest standards of security and compliance.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {licenses.map((license, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 hover:scale-105 hover:bg-white hover:border-[#00AEEF]/20 cursor-pointer"
              >
                <div className="w-32 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-[#00AEEF]/5 group-hover:to-[#00AEEF]/10 transition-all duration-500 p-4">
                  <img 
                    src={license.logo} 
                    alt={license.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#00AEEF] transition-colors duration-300">
                  {license.name}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {license.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustIndicators;

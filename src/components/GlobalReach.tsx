
import { Globe, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GlobalReach = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-20"></div>
      
      {/* Gradient Sphere */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-gradient-to-br from-[#00AEEF]/20 via-purple-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full text-sm font-medium text-[#00AEEF] mb-8 border border-[#00AEEF]/20">
              <Globe size={16} />
              <span>Global Infrastructure</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Across Africa and{" "}
              <span className="bg-gradient-to-r from-[#00AEEF] to-purple-400 bg-clip-text text-transparent">
                Beyond
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
              A payment infrastructure built for Africa should cater for every rail in Africa and the 
              continent's business partners. That's why Passpoint also provides direct corridors on a 
              global level, where most of Africa's trade happens, allowing African businesses to 
              reciprocate import and export.
            </p>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal delay={300}>
            <div className="bg-gradient-to-r from-[#00AEEF]/10 to-purple-500/10 rounded-3xl p-12 border border-[#00AEEF]/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Scale Your Business Globally?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join African businesses already using Passpoint to expand their reach across the continent and beyond.
              </p>
              <a
                href="https://go.mypasspoint.com/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Take Your Business Outside Africa
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 opacity-60"></div>
      <div className="absolute top-20 right-20 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-blue-600 opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-red-600 opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-60"></div>
    </section>
  );
};

export default GlobalReach;

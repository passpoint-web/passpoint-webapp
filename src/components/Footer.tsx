import { ArrowUpRight, Youtube, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4 md:col-span-1">
              <img
                src="/lovable-uploads/b6ae95bc-73f8-4f1c-a25c-a920e93e73d6.png"
                alt="Passpoint logo"
                className="h-10 w-auto"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                One API, One Africa. Connecting all national pay-in and payout methods across Africa and globally.
              </p>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://www.youtube.com/@my_passpoint" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800/60 hover:bg-[#00AEEF] text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube size={16} className="group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://www.instagram.com/mypasspoint_/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800/60 hover:bg-[#00AEEF] text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={16} className="group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://www.facebook.com/people/Passpoint/61550867155374/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800/60 hover:bg-[#00AEEF] text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={16} className="group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://x.com/MyPasspoint" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800/60 hover:bg-[#00AEEF] text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:animate-pulse">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white mb-3 relative">
                Company
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#00AEEF] rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/manifesto" 
                    className="group text-gray-300 hover:text-[#00AEEF] transition-all duration-300 text-sm flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Manifesto</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white mb-3 relative">
                Resources
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#00AEEF] rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/privacy" 
                    className="group text-gray-300 hover:text-[#00AEEF] transition-all duration-300 text-sm flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms" 
                    className="group text-gray-300 hover:text-[#00AEEF] transition-all duration-300 text-sm flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Terms of Service</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white mb-3 relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#00AEEF] rounded-full"></div>
              </h3>
              <div className="space-y-3">
                {/* Email */}
                <div className="group">
                  <div className="flex items-start space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                    <Mail size={14} className="text-[#00AEEF] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <a 
                      href="mailto:info@mypasspoint.co" 
                      className="text-gray-300 hover:text-[#00AEEF] transition-colors text-sm font-medium break-all"
                      aria-label="Send email to info@mypasspoint.co"
                    >
                      info@mypasspoint.co
                    </a>
                  </div>
                </div>

                {/* Addresses */}
                <div className="space-y-2">
                  <div className="group">
                    <div className="flex items-start space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                      <MapPin size={14} className="text-[#00AEEF] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <a
                        href="https://maps.google.com/?q=8+The+Green+Suite+R+Dover+DE+19901+United+States"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#00AEEF] transition-colors text-xs leading-relaxed group-hover:underline"
                        aria-label="View Dover, DE office location on Google Maps"
                      >
                        8 The Green Suite R Dover, DE 19901, United States
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                      <MapPin size={14} className="text-[#00AEEF] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <a
                        href="https://maps.google.com/?q=Karolkowa+30+01-207+Warszawa+Poland"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#00AEEF] transition-colors text-xs leading-relaxed group-hover:underline"
                        aria-label="View Warsaw, Poland office location on Google Maps"
                      >
                        Karolkowa 30, 01-207 Warszawa, POLAND
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                      <MapPin size={14} className="text-[#00AEEF] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <a
                        href="https://maps.google.com/?q=Abidjan+Cocody+Les+II+Plateaux+7e+Tranche+Lot+4159+Ilot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#00AEEF] transition-colors text-xs leading-relaxed group-hover:underline"
                        aria-label="View Abidjan, Ivory Coast office location on Google Maps"
                      >
                        Abidjan, Cocody, Les II Plateaux, 7e Tranche, Lot N°4159, Ilot
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                      <MapPin size={14} className="text-[#00AEEF] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <a
                        href="https://maps.google.com/?q=186A+Corporation+Drive+Dolphin+Estate+Ikoyi+Lagos+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#00AEEF] transition-colors text-xs leading-relaxed group-hover:underline"
                        aria-label="View Lagos, Nigeria office location on Google Maps"
                      >
                        186A Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="border-t border-gray-700/50 mt-12 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs">
                © 2024 Passpoint. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-[#00AEEF] transition-colors text-xs hover:underline"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-[#00AEEF] transition-colors text-xs hover:underline"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;

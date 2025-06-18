
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating payment icons with Passpoint brand colors */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
          <div className="w-4 h-3 bg-white rounded-sm"></div>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-20 animate-float opacity-15" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-6 bg-gradient-to-r from-brand-400 to-brand-500 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 animate-float opacity-25" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 border-2 border-brand-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-2/3 right-1/4 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <div className="w-7 h-7 bg-gradient-to-br from-brand-300 to-brand-400 rounded-lg transform rotate-45"></div>
      </div>

      {/* Connecting lines with brand colors */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#009EC5" stopOpacity="0" />
            <stop offset="50%" stopColor="#009EC5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#009EC5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 100 200 Q 400 100 800 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 200 500 Q 600 300 900 400"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
};

export default FloatingElements;

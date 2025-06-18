
const NetworkPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Passpoint brand animated gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-brand-200/12 via-brand-300/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-brand-100/8 via-brand-200/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-brand-300/6 via-brand-200/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Brand network nodes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="networkGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="#009EC5" opacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#networkGrid)" />
      </svg>

      {/* Brand floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-brand-400/15 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-6 h-6 border border-brand-300/12 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-brand-400/12 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default NetworkPattern;

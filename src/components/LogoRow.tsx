
import React from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogoRowProps {
  logos: Logo[];
}

const LogoRow: React.FC<LogoRowProps> = ({ logos }) => (
  <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full max-w-6xl mx-auto px-2 sm:px-4">
    {logos.map(({ src, alt }, idx) => (
      <div
        key={alt + idx}
        className="h-10 w-16 sm:h-12 sm:w-20 md:h-16 md:w-28 lg:h-18 lg:w-32 xl:h-20 xl:w-36 2xl:h-22 2xl:w-40 flex-shrink-0 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-slate-100 sm:border-2 flex items-center justify-center grayscale-0 hover:grayscale-0 hover:scale-110 hover:shadow-xl hover:border-slate-300 transition-all duration-500 ease-out animate-fade-in p-1.5 sm:p-2 md:p-3 cursor-pointer group"
        style={{
          animationDelay: `${0.1 * idx}s`,
          animationFillMode: 'both',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-auto max-w-full object-contain filter brightness-100 contrast-110 saturate-110 group-hover:brightness-110 group-hover:contrast-125 transition-all duration-300"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.logo-fallback')) {
              const fallback = document.createElement('div');
              fallback.className = 'logo-fallback text-gray-700 text-xs font-bold';
              fallback.textContent = alt;
              parent.appendChild(fallback);
            }
          }}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

export default LogoRow;

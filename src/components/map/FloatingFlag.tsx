
import React from 'react';

interface FloatingFlagProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  flagType: 'nigeria' | 'france' | 'usa' | 'eu' | 'germany';
  animationDelay?: string;
}

const flagComponents = {
  nigeria: (
    <div className="w-8 h-8 rounded-full bg-green-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-white w-1/3"></div>
      <div className="absolute right-0 inset-y-0 bg-green-600 w-1/3"></div>
    </div>
  ),
  france: (
    <div className="w-8 h-8 rounded-full overflow-hidden relative bg-blue-600">
      <div className="absolute inset-0 bg-red-500"></div>
      <div className="absolute inset-0 bg-blue-600" style={{ clipPath: 'polygon(0 0, 50% 0, 0 50%)' }}></div>
      <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 0 50%)' }}></div>
      <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(100% 50%, 100% 100%, 50% 100%, 0 50%)' }}></div>
    </div>
  ),
  usa: (
    <div className="w-8 h-8 rounded-full overflow-hidden relative bg-red-500">
      <div className="absolute inset-0 bg-red-500"></div>
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-red-500"></div>
      <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-white"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-red-500"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-blue-900"></div>
      <div className="absolute left-1/12 top-1/12 text-white text-xs">★</div>
    </div>
  ),
  eu: (
    <div className="w-8 h-8 rounded-full overflow-hidden relative bg-blue-500">
      <div className="absolute inset-0 bg-blue-500"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center">
          <div className="text-yellow-400 text-xs">★</div>
        </div>
      </div>
    </div>
  ),
  germany: (
    <div className="w-8 h-8 rounded-full overflow-hidden relative">
      <div className="absolute inset-0 bg-red-600"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-600"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-yellow-400"></div>
      <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-black rounded-full"></div>
    </div>
  )
};

const FloatingFlag: React.FC<FloatingFlagProps> = ({ position, flagType, animationDelay = '0s' }) => {
  return (
    <div 
      className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg animate-float"
      style={{ ...position, animationDelay }}
    >
      {flagComponents[flagType]}
    </div>
  );
};

export default FloatingFlag;

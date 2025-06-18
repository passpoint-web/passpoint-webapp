
import React from 'react';
import ContinentDots from './map/ContinentDots';
import ConnectionLines from './map/ConnectionLines';
import FloatingFlag from './map/FloatingFlag';

const AnimatedWorldMap = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden flex items-center justify-center">
      {/* Main Globe Container */}
      <div className="relative w-80 h-80">
        {/* Globe Background with Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-purple-700 opacity-90 shadow-2xl">
          {/* Hexagonal Dot Pattern Overlay */}
          <svg
            viewBox="0 0 320 320"
            className="absolute inset-0 w-full h-full rounded-full"
            style={{ clipPath: 'circle(50%)' }}
          >
            <ContinentDots continent="africa" />
            <ContinentDots continent="europe" />
            <ContinentDots continent="asia" />
            <ContinentDots continent="namerica" />
            <ContinentDots continent="samerica" />
            <ContinentDots continent="oceania" />
            <ConnectionLines />
          </svg>

          {/* Globe highlight effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"></div>
        </div>
      </div>

      {/* Floating Country Flags */}
      <FloatingFlag 
        position={{ top: '12px', left: '12px' }} 
        flagType="nigeria" 
      />
      
      <FloatingFlag 
        position={{ top: '8px', right: '16px' }} 
        flagType="france" 
        animationDelay="1s"
      />
      
      <FloatingFlag 
        position={{ bottom: '16px', right: '12px' }} 
        flagType="usa" 
        animationDelay="2s"
      />
      
      <FloatingFlag 
        position={{ bottom: '8px', left: '16px' }} 
        flagType="eu" 
        animationDelay="1.5s"
      />
      
      <FloatingFlag 
        position={{ top: '20px', left: '50%', transform: '-translate-x-1/2' }} 
        flagType="germany" 
        animationDelay="0.5s"
      />

      {/* Orbital rings effect */}
      <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute inset-4 rounded-full border border-white/5 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
    </div>
  );
};

export default AnimatedWorldMap;


import React from 'react';

const ConnectionLines = () => {
  const lines = [
    { path: "M160,140 Q120,100 100,120", duration: "4s" },
    { path: "M170,130 Q150,80 160,100", duration: "3.5s" },
    { path: "M180,150 Q220,120 250,140", duration: "5s" },
    { path: "M150,180 Q120,200 110,220", duration: "4.5s" }
  ];

  return (
    <g stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none">
      {lines.map((line, index) => (
        <path
          key={index}
          d={line.path}
          strokeDasharray="4,4"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            values="8;0;8" 
            dur={line.duration} 
            repeatCount="indefinite" 
          />
        </path>
      ))}
    </g>
  );
};

export default ConnectionLines;

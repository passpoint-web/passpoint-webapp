
import React from 'react';

interface ContinentDotsProps {
  continent: 'africa' | 'europe' | 'asia' | 'namerica' | 'samerica' | 'oceania';
}

interface ContinentConfig {
  rows: number;
  cols: number;
  baseX: number;
  baseY: number;
  spacing: { x: number; y: number };
  radius: number;
  opacity: number;
  fill: string;
  animationDur: string;
  maxX?: number;
  maxY?: number;
  minX?: number;
}

const continentConfigs: Record<ContinentDotsProps['continent'], ContinentConfig> = {
  africa: {
    rows: 12,
    cols: 8,
    baseX: 140,
    baseY: 120,
    spacing: { x: 8, y: 7 },
    radius: 2,
    opacity: 0.8,
    fill: 'rgba(255, 255, 255, 0.9)',
    animationDur: '2s'
  },
  europe: {
    rows: 4,
    cols: 6,
    baseX: 145,
    baseY: 80,
    spacing: { x: 6, y: 5 },
    radius: 1.5,
    opacity: 0.6,
    fill: 'rgba(255, 255, 255, 0.7)',
    animationDur: '2.5s'
  },
  asia: {
    rows: 8,
    cols: 12,
    baseX: 190,
    baseY: 90,
    spacing: { x: 7, y: 6 },
    radius: 1.5,
    opacity: 0.5,
    fill: 'rgba(255, 255, 255, 0.6)',
    animationDur: '3s',
    maxX: 300,
    maxY: 180
  },
  namerica: {
    rows: 8,
    cols: 10,
    baseX: 60,
    baseY: 70,
    spacing: { x: 6, y: 7 },
    radius: 1.5,
    opacity: 0.4,
    fill: 'rgba(255, 255, 255, 0.5)',
    animationDur: '2.8s',
    minX: 30,
    maxX: 140,
    maxY: 150
  },
  samerica: {
    rows: 8,
    cols: 4,
    baseX: 90,
    baseY: 180,
    spacing: { x: 8, y: 8 },
    radius: 1.5,
    opacity: 0.4,
    fill: 'rgba(255, 255, 255, 0.5)',
    animationDur: '2.2s',
    maxY: 280
  },
  oceania: {
    rows: 3,
    cols: 5,
    baseX: 240,
    baseY: 220,
    spacing: { x: 6, y: 6 },
    radius: 1,
    opacity: 0.3,
    fill: 'rgba(255, 255, 255, 0.4)',
    animationDur: '2.7s'
  }
};

const ContinentDots: React.FC<ContinentDotsProps> = ({ continent }) => {
  const config = continentConfigs[continent];

  const dots = [];
  for (let row = 0; row < config.rows; row++) {
    for (let col = 0; col < config.cols; col++) {
      const x = config.baseX + col * config.spacing.x + (row % 2) * (config.spacing.x / 2);
      const y = config.baseY + row * config.spacing.y;
      
      // Apply continent-specific boundaries
      if (config.maxX && x > config.maxX) continue;
      if (config.maxY && y > config.maxY) continue;
      if (config.minX && x < config.minX) continue;
      
      const opacity = Math.random() * 0.6 + 0.4;
      const delay = Math.random() * 3;
      
      dots.push(
        <circle
          key={`${continent}-${row}-${col}`}
          cx={x}
          cy={y}
          r={config.radius}
          fill={config.fill}
          opacity={opacity}
        >
          <animate 
            attributeName="opacity" 
            values={`${opacity};${opacity * 1.5};${opacity}`} 
            dur={config.animationDur} 
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
          {continent === 'africa' && (
            <animate 
              attributeName="r" 
              values="2;3;2" 
              dur="3s" 
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
          )}
        </circle>
      );
    }
  }

  return (
    <g opacity={config.opacity}>
      {dots}
    </g>
  );
};

export default ContinentDots;

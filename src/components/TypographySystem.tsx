
import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const Heading = ({ level, children, className, gradient = false }: HeadingProps) => {
  const baseClasses = "font-bold tracking-tight leading-tight";
  const gradientClasses = gradient ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent" : "text-gray-900";
  
  const levelClasses = {
    1: "text-5xl md:text-6xl lg:text-7xl mb-8",
    2: "text-4xl md:text-5xl mb-6",
    3: "text-3xl md:text-4xl mb-5",
    4: "text-2xl md:text-3xl mb-4",
    5: "text-xl md:text-2xl mb-3",
    6: "text-lg md:text-xl mb-2"
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(baseClasses, levelClasses[level], gradientClasses, className)}>
      {children}
    </Tag>
  );
};

interface BodyTextProps {
  size?: 'sm' | 'base' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

const BodyText = ({ size = 'base', children, className, muted = false }: BodyTextProps) => {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  
  const colorClasses = muted ? "text-gray-600" : "text-gray-900";
  const baseClasses = "leading-relaxed";

  return (
    <p className={cn(baseClasses, sizeClasses[size], colorClasses, className)}>
      {children}
    </p>
  );
};

export { Heading, BodyText };


import React from 'react';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const EnhancedCard = ({ children, className, hover = true, gradient = false }: EnhancedCardProps) => {
  const baseClasses = "bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 transition-all duration-500";
  const hoverClasses = hover ? "hover:shadow-2xl hover:shadow-blue-100/50 hover:scale-105 hover:bg-white hover:border-[#00AEEF]/20 cursor-pointer group" : "";
  const gradientClasses = gradient ? "bg-gradient-to-br from-white via-blue-50/30 to-white" : "";

  return (
    <div className={cn(baseClasses, hoverClasses, gradientClasses, className)}>
      {children}
    </div>
  );
};

export default EnhancedCard;

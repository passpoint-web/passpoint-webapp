
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  showArrow?: boolean;
  children: React.ReactNode;
}

const EnhancedButton = ({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  showArrow = false,
  className, 
  children, 
  disabled,
  ...props 
}: EnhancedButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#00AEEF] to-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 focus:ring-blue-500/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600 before:to-[#00AEEF] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    secondary: "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg hover:shadow-xl hover:shadow-gray-500/25 focus:ring-gray-500/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-800 before:to-gray-900 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    outline: "border-2 border-[#00AEEF] text-[#00AEEF] bg-white hover:bg-[#00AEEF] hover:text-white hover:shadow-lg hover:shadow-blue-500/25 focus:ring-blue-500/50",
    ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500/50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : null}
        {children}
        {showArrow && !loading ? (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        ) : null}
      </span>
    </button>
  );
};

export default EnhancedButton;

import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  href, 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 disabled:bg-blue-300 disabled:dark:bg-blue-800 disabled:text-gray-500 disabled:dark:text-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 disabled:bg-gray-300 disabled:dark:bg-gray-800 disabled:text-gray-500 disabled:dark:text-gray-400 disabled:cursor-not-allowed',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 disabled:border-gray-300 disabled:dark:border-gray-800 disabled:text-gray-500 disabled:dark:text-gray-400 disabled:cursor-not-allowed'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

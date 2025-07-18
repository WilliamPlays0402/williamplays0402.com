import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{title}</h3>
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

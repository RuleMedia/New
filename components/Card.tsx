
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-lg shadow-cyan-500/10 p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

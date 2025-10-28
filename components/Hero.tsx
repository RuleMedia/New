
import React from 'react';

interface HeroProps {
  onBuyNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyNow }) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gray-900 opacity-80 z-10"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-cyan-500/20 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron text-white uppercase tracking-wider leading-tight">
          The <span className="text-cyan-400">Future</span> is Here.
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Welcome to the world's number one crypto website experience. DApps, NFTs, News, and Web3 Domains, all in one place.
        </p>
        <div className="mt-12">
          <button 
            onClick={onBuyNow}
            className="bg-cyan-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-cyan-400 transition duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/50"
          >
            Own This Domain
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

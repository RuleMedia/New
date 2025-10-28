
import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  setActiveView: (view: ViewType) => void;
  onBuyNow: () => void;
}

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ setActiveView, onBuyNow }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold font-orbitron text-white tracking-widest cursor-pointer" onClick={() => window.location.reload()}>
          Blockchain<span className="text-cyan-400">Takeover</span>
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink onClick={() => setActiveView('dapps')}>DApps</NavLink>
          <NavLink onClick={() => setActiveView('nfts')}>NFTs</NavLink>
          <NavLink onClick={() => setActiveView('news')}>News</NavLink>
          <NavLink onClick={() => setActiveView('domains')}>Domains</NavLink>
        </nav>
        <button 
          onClick={onBuyNow}
          className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-400 transition duration-300 shadow-md shadow-cyan-500/50 hover:shadow-cyan-400/50"
        >
          Buy Now
        </button>
      </div>
    </header>
  );
};

export default Header;

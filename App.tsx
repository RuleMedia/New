
import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import DAppsView from './components/DAppsView';
import NFTsView from './components/NFTsView';
import NewsView from './components/NewsView';
import DomainsView from './components/DomainsView';
import Footer from './components/Footer';
import BuyNowModal from './components/BuyNowModal';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType | 'hero'>('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSetView = (view: ViewType) => {
    setActiveView('hero'); // Reset to hero to trigger fade out
    setTimeout(() => setActiveView(view), 300); // then fade in new view
  };

  const renderView = () => {
    switch (activeView) {
      case 'dapps':
        return <DAppsView />;
      case 'nfts':
        return <NFTsView />;
      case 'news':
        return <NewsView />;
      case 'domains':
        return <DomainsView />;
      case 'hero':
      default:
        return <Hero onBuyNow={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
       <style>{`
        .view-transition {
          transition: opacity 0.3s ease-in-out;
        }
        .view-enter {
          opacity: 0;
        }
        .view-exit {
          opacity: 1;
        }
        .view-active {
          opacity: 1;
        }
       `}</style>

      <Header setActiveView={handleSetView} onBuyNow={() => setIsModalOpen(true)} />
      
      <main className="pt-20">
        <div className={`view-transition ${activeView === 'hero' ? 'view-exit view-active' : 'view-enter'}`}>
          {activeView === 'hero' && <Hero onBuyNow={() => setIsModalOpen(true)} />}
        </div>
        
        {activeView !== 'hero' && (
           <div className={`view-transition ${activeView !== 'hero' ? 'view-enter view-active' : 'view-exit'}`}>
             {renderView()}
           </div>
        )}

      </main>

      <Footer />
      
      <BuyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;

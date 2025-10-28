
import React, { useState, useEffect } from 'react';
import { DApp } from '../types';
import { generateDApps } from '../services/geminiService';
import Card from './Card';
import Spinner from './Spinner';

const DAppCard: React.FC<{ dApp: DApp }> = ({ dApp }) => (
  <Card>
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <div className="text-xs inline-block bg-cyan-500/20 text-cyan-300 font-bold px-3 py-1 rounded-full mb-3">{dApp.category}</div>
        <h3 className="text-xl font-bold text-white mb-2 font-orbitron">{dApp.name}</h3>
        <p className="text-gray-400 text-sm">{dApp.description}</p>
      </div>
      <button className="mt-6 w-full bg-gray-700 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
        Launch App
      </button>
    </div>
  </Card>
);

const DAppsView: React.FC = () => {
  const [dApps, setDApps] = useState<DApp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDApps = async () => {
      setLoading(true);
      const data = await generateDApps();
      setDApps(data);
      setLoading(false);
    };
    fetchDApps();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-2 font-orbitron">Featured DApps</h2>
      <p className="text-center text-gray-400 mb-12">Explore the cutting-edge of decentralized applications.</p>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dApps.map((dApp, index) => (
            <DAppCard key={index} dApp={dApp} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DAppsView;

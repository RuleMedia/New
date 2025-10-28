
import React, { useState } from 'react';
import Spinner from './Spinner';

const DomainsView: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    setSearching(true);
    setResult(null);
    setTimeout(() => {
      setResult(`${domain}.eth`);
      setSearching(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-2 font-orbitron">Web3 Domain Search</h2>
      <p className="text-center text-gray-400 mb-12">Claim your identity in the decentralized world.</p>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="flex items-center bg-gray-800/50 border border-cyan-400/30 rounded-full p-2 shadow-lg">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
            placeholder="find-your-name"
            className="w-full bg-transparent text-white placeholder-gray-500 text-lg px-6 py-2 focus:outline-none"
          />
          <span className="text-gray-500 text-lg mr-4">.eth</span>
          <button 
            type="submit"
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-colors duration-300 disabled:opacity-50"
            disabled={searching || !domain}
          >
            Search
          </button>
        </form>

        <div className="mt-8 min-h-[100px]">
          {searching && <Spinner />}
          {result && (
            <div className="bg-gray-800/50 backdrop-blur-md border border-cyan-400/50 rounded-lg p-6 text-center animate-fade-in">
              <p className="text-lg text-green-400">Congratulations!</p>
              <h3 className="text-3xl font-bold text-white my-2 font-orbitron">{result}</h3>
              <p className="text-gray-300 mb-6">is available!</p>
              <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors duration-300">
                Register Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainsView;

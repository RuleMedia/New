
import React, { useState, useEffect } from 'react';
import { NFT } from '../types';
import { generateNFTs } from '../services/geminiService';
import Card from './Card';
import Spinner from './Spinner';

const NFTCard: React.FC<{ nft: NFT; index: number }> = ({ nft, index }) => (
  <Card className="overflow-hidden">
    <img src={`https://picsum.photos/seed/${nft.name.replace(/\s/g, '')}/500/500`} alt={nft.name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-white font-orbitron">{nft.name}</h3>
      <p className="text-sm text-gray-400 mb-4">by {nft.creator}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-cyan-400">{nft.price} ETH</p>
        <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-400 transition-colors duration-300">
          Place Bid
        </button>
      </div>
    </div>
  </Card>
);

const NFTsView: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      const data = await generateNFTs();
      setNfts(data);
      setLoading(false);
    };
    fetchNFTs();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-2 font-orbitron">NFT Marketplace</h2>
      <p className="text-center text-gray-400 mb-12">Discover, collect, and sell extraordinary NFTs.</p>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {nfts.map((nft, index) => (
            <NFTCard key={index} nft={nft} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NFTsView;

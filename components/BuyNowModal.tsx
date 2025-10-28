import React from 'react';

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyNowModal: React.FC<BuyNowModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-gray-800 border border-cyan-400 rounded-lg shadow-2xl shadow-cyan-500/20 w-full max-w-lg m-4 transform transition-all duration-300 scale-100">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold font-orbitron text-white">
              Acquire <span className="text-cyan-400">BlockchainTakeover.com</span>
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
          </div>
          <p className="text-gray-300 mb-6">
            This premium domain is available for purchase. Secure a powerful brand name for your Web3 venture and dominate the future of the decentralized web.
          </p>
          <div className="space-y-4">
            <p className="text-gray-200">
                <strong>Serious inquiries only.</strong>
            </p>
            <p className="text-gray-200">
                To initiate the acquisition process, please contact us via email:
            </p>
            <a 
              href="mailto:Rulelifestyle@gmail.com?subject=Inquiry%20to%20Purchase%20BlockchainTakeover.com"
              className="block w-full text-center bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition duration-300 shadow-md shadow-cyan-500/50 text-lg"
            >
              Rulelifestyle@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
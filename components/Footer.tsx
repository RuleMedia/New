
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-cyan-400/20 mt-24">
            <div className="container mx-auto px-6 py-8 text-center text-gray-400">
                <p className="font-orbitron text-lg">Blockchain<span className="text-cyan-400">Takeover</span>.com</p>
                <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved. The future is decentralized.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">Telegram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

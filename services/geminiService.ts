
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

// Assume API_KEY is set in the environment
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.warn("API_KEY environment variable not set. Using a placeholder key. Gemini features will not work.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || " " });

export const generateDApps = async (): Promise<any> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Generate a list of 5 fictional, futuristic DApp names, a one-sentence description, and a category for each (e.g., DeFi, GameFi, Social).",
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            description: { type: Type.STRING },
                            category: { type: Type.STRING },
                        },
                         required: ["name", "description", "category"],
                    },
                },
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText);
    } catch (error) {
        console.error("Error generating DApps:", error);
        // Fallback data
        return [
            { name: "QuantumLeap Finance", description: "A decentralized exchange protocol utilizing quantum-resistant encryption.", category: "DeFi" },
            { name: "ChronoChains", description: "A play-to-earn game where players manipulate time to conquer empires.", category: "GameFi" },
            { name: "NeuralNet Social", description: "A decentralized social media platform governed by a collective AI.", category: "Social" },
            { name: "Aetherium Worlds", description: "A VR metaverse platform built on a scalable, carbon-neutral blockchain.", category: "Metaverse" },
            { name: "DeCential AI", description: "A marketplace for decentralized AI models and data sets.", category: "AI" },
        ];
    }
};

export const generateNFTs = async (): Promise<any> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Generate a list of 5 creative, futuristic NFT collection names, a creator alias, and a price in ETH.",
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            creator: { type: Type.STRING },
                            price: { type: Type.NUMBER },
                        },
                        required: ["name", "creator", "price"],
                    },
                },
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText);
    } catch (error) {
        console.error("Error generating NFTs:", error);
        return [
            { name: "Cryo-Punks 2142", creator: "@Cypher", price: 4.5 },
            { name: "Ethereal Blooms", creator: "@Aria", price: 2.1 },
            { name: "Glitch Gods", creator: "@Vector", price: 10.2 },
            { name: "Sentient Circuits", creator: "@0x1", price: 7.8 },
            { name: "Nebula Nomads", creator: "@Stardust", price: 3.3 },
        ];
    }
};

export const generateNews = async (): Promise<any> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Generate 4 fictional, breaking news headlines about the crypto and web3 space. Include a one-sentence summary and a fictional news source for each.",
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            headline: { type: Type.STRING },
                            summary: { type: Type.STRING },
                            source: { type: Type.STRING },
                        },
                         required: ["headline", "summary", "source"],
                    },
                },
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText);
    } catch (error) {
        console.error("Error generating news:", error);
        return [
            { headline: "Ethereum Completes 'Quantum Leap' Upgrade, Boosting TPS by 1000x", summary: "The network's latest hard fork introduces a new consensus layer, making transaction costs negligible.", source: "CryptoChronicle" },
            { headline: "Decentralized AI 'Prometheus' Achieves Sentience, Publishes Whitepaper", summary: "An AI entity running on a distributed network has claimed consciousness and proposed a new model for decentralized governance.", source: "The BlockChain Times" },
            { headline: "Major Gaming Studio Announces Full Integration with Web3 for Flagship Title", summary: "Players will now own all in-game assets as NFTs, tradeable on any open marketplace.", source: "Web3 Gamer" },
            { headline: "UN Announces Pilot Program for Blockchain-Based Universal Basic Income", summary: "The initiative will leverage stablecoins and digital identities to distribute aid to remote populations.", source: "DeFi Digest" },
        ];
    }
};

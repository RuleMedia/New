
export type DApp = {
  name: string;
  description: string;
  category: string;
};

export type NFT = {
  name: string;
  creator: string;
  price: number;
  imageUrl: string;
};

export type NewsArticle = {
  headline: string;
  summary: string;
  source: string;
};

export type ViewType = 'dapps' | 'nfts' | 'news' | 'domains';

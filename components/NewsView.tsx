
import React, { useState, useEffect } from 'react';
import { NewsArticle } from '../types';
import { generateNews } from '../services/geminiService';
import Card from './Card';
import Spinner from './Spinner';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <Card>
    <span className="text-xs font-semibold text-cyan-400 uppercase">{article.source}</span>
    <h3 className="text-lg font-bold text-white mt-2 mb-3 font-orbitron">{article.headline}</h3>
    <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
    <a href="#" className="font-semibold text-cyan-400 hover:text-cyan-300">Read More &rarr;</a>
  </Card>
);

const NewsView: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data = await generateNews();
      setArticles(data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-2 font-orbitron">Latest News</h2>
      <p className="text-center text-gray-400 mb-12">Stay ahead of the curve with real-time crypto intelligence.</p>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsView;

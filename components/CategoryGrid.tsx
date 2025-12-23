
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/prompts';
import { MessageSquare, Image, Youtube, Search, Briefcase, Share2, TrendingUp } from 'lucide-react';

const icons: Record<string, any> = {
  MessageSquare, Image, Youtube, Search, Briefcase, Share2, TrendingUp
};

export const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CATEGORIES.map((cat) => {
        const Icon = icons[cat.icon] || MessageSquare;
        return (
          <Link
            key={cat.id}
            to={`/category/${cat.slug}`}
            className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon size={24} />
            </div>
            <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {cat.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

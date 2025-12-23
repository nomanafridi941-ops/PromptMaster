
import React from 'react';
import { Prompt } from '../types';
import { Copy, ArrowRight, MessageSquare, Image, Youtube, Search, Briefcase, Share2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromptCardProps {
  prompt: Prompt;
  onCopy: (text: string) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'ChatGPT': return <MessageSquare size={16} />;
    case 'Midjourney': return <Image size={16} />;
    case 'YouTube': return <Youtube size={16} />;
    case 'SEO': return <Search size={16} />;
    case 'Fiverr/Upwork': return <Briefcase size={16} />;
    case 'Social Media': return <Share2 size={16} />;
    case 'Marketing': return <TrendingUp size={16} />;
    default: return <MessageSquare size={16} />;
  }
};

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, onCopy }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold rounded-full border border-brand-100 dark:border-brand-800">
          {getCategoryIcon(prompt.category)}
          <span>{prompt.category}</span>
        </span>
        {prompt.isNew && (
          <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
            New
          </span>
        )}
      </div>

      <Link to={`/prompt/${prompt.id}`} className="block">
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors line-clamp-1">
          {prompt.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 min-h-[40px]">
          {prompt.description}
        </p>
      </Link>

      <div className="flex items-center space-x-2 mt-auto">
        <button
          onClick={() => onCopy(prompt.content)}
          className="flex-1 flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600 p-2.5 rounded-xl transition-all font-medium text-sm"
        >
          <Copy size={16} />
          <span>Copy Prompt</span>
        </button>
        <Link
          to={`/prompt/${prompt.id}`}
          className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600 rounded-xl transition-all"
        >
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Tags hidden on small screens */}
      <div className="hidden sm:flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {prompt.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] text-slate-400">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

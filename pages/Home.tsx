
import React, { useState, useMemo } from 'react';
import { PROMPTS } from '../data/prompts';
import { PromptCard } from '../components/PromptCard';
import { CategoryGrid } from '../components/CategoryGrid';
import { Toast } from '../components/Toast';
import { Sparkles, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastVisible(true);
  };

  const filteredPrompts = useMemo(() => {
    if (!searchTerm) return PROMPTS.sort((a, b) => b.popularity - a.popularity).slice(0, 6);
    return PROMPTS
      .filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .slice(0, 9);
  }, [searchTerm]);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section - SEO Optimized */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-square bg-brand-500/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>
        <div className="max-w-5xl mx-auto text-center px-4 space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles size={14} className="text-brand-500" />
            <span>500+ Expert Prompts • Free Access • Instant Copy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            The Ultimate <span className="text-brand-600">AI Prompt Hub</span> for Professionals
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop guessing. Start copying. Access our massive library of hand-curated prompts for ChatGPT, Midjourney, SEO, and Freelancing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['No Signup Required', '100% Tested', 'Copy & Paste Ready'].map(feat => (
              <div key={feat} className="flex items-center space-x-2 text-sm font-bold text-slate-500">
                <CheckCircle size={18} className="text-brand-500" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="relative max-w-3xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="text-slate-400 group-focus-within:text-brand-500 transition-colors" size={24} />
            </div>
            <input
              type="text"
              placeholder="Search prompts (e.g., 'Fiverr Gig', 'YouTube Hook')..."
              className="w-full pl-16 pr-6 py-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-2xl focus:border-brand-500 focus:outline-none transition-all dark:text-white text-lg font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black tracking-tight">Explore Specialist Libraries</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Choose a niche below to find hundreds of prompts designed for your specific business needs.
          </p>
        </div>
        <CategoryGrid />
      </section>

      {/* Global Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full bg-slate-100 dark:bg-slate-900 h-28 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 flex items-center justify-center">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Advertisement Space</span>
        </div>
      </div>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">
              {searchTerm ? `Search Results (${filteredPrompts.length})` : 'Popular This Week'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">Hand-picked templates for maximum productivity.</p>
          </div>
          {!searchTerm && (
            <Link to="/category/all" className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-black text-sm hover:scale-105 transition-transform">
              <span>View Full Library</span>
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} onCopy={handleCopy} />
          ))}
          {filteredPrompts.length === 0 && (
            <div className="col-span-full text-center py-20 bg-slate-100 dark:bg-slate-900 rounded-3xl">
              <p className="text-slate-500 italic">No prompts found matching your criteria. Try another keyword!</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-brand-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/20 blur-[80px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">500+</div>
              <div className="text-brand-100 text-sm font-bold uppercase tracking-wider">Active Prompts</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">50k+</div>
              <div className="text-brand-100 text-sm font-bold uppercase tracking-wider">Monthly Users</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-brand-100 text-sm font-bold uppercase tracking-wider">Free Forever</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">24/7</div>
              <div className="text-brand-100 text-sm font-bold uppercase tracking-wider">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      <Toast 
        message="Prompt copied successfully!" 
        isVisible={toastVisible} 
        onClose={() => setToastVisible(false)} 
      />
    </div>
  );
};

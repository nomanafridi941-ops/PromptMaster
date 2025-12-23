import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROMPTS, CATEGORIES } from '../data/prompts';
import { Toast } from '../components/Toast';
import { PromptCard } from '../components/PromptCard';
import { Copy, Calendar, Eye, Info, Lightbulb, ChevronRight, Share2, Bookmark } from 'lucide-react';

export const PromptPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  const prompt = PROMPTS.find(p => p.id === id);
  const category = CATEGORIES.find(c => c.id === prompt?.category);

  if (!prompt) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold mb-4">Prompt not found</h2>
        <button onClick={() => navigate('/')} className="text-brand-600 hover:underline">Return Home</button>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setToastVisible(true);
  };

  const relatedPrompts = PROMPTS
    .filter(p => p.category === prompt.category && p.id !== prompt.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Dynamic Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
        <Link to="/" className="hover:text-brand-600">Home</Link>
        <ChevronRight size={14} />
        <Link to={`/category/${category?.slug}`} className="hover:text-brand-600">{category?.title}</Link>
        <ChevronRight size={14} />
        <span className="text-slate-900 dark:text-white font-bold truncate max-w-[200px]">{prompt.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-black mb-4 leading-tight">{prompt.title}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {prompt.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {prompt.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Copy Area */}
          <div className="bg-white dark:bg-slate-900 border-2 border-brand-100 dark:border-brand-900/50 rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/5">
            <div className="bg-brand-50 dark:bg-brand-900/20 px-6 py-4 flex justify-between items-center border-b border-brand-100 dark:border-brand-900/50">
              <span className="text-xs font-black text-brand-600 dark:text-brand-400 flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                <span>PROMPT TEMPLATE</span>
              </span>
              <button 
                onClick={handleCopy}
                className="flex items-center space-x-2 bg-brand-600 text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 active:scale-95"
              >
                <Copy size={16} />
                <span>Copy to Clipboard</span>
              </button>
            </div>
            <div className="p-8">
              <div className="relative group">
                <pre className="whitespace-pre-wrap text-lg text-slate-800 dark:text-slate-200 font-mono leading-relaxed bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 select-all">
                  {prompt.content}
                </pre>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold flex items-center space-x-2">
                <Info size={18} className="text-brand-500" />
                <span>Strategy & Use Case</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {prompt.useCase || "Apply this prompt when you need consistent, professional results without manual drafting."}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold flex items-center space-x-2">
                <Lightbulb size={18} className="text-amber-500" />
                <span>Expert Tips</span>
              </h3>
              <ul className="space-y-3">
                {prompt.tips?.map((tip, i) => (
                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="space-y-8">
          <div className="sticky top-24 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-8">
              <div className="space-y-6">
                <h3 className="font-black text-xl">Prompt Metadata</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Last Updated</span>
                    </span>
                    <span className="font-bold">{prompt.createdAt}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center space-x-2">
                      <Eye size={16} />
                      <span>Views Today</span>
                    </span>
                    <span className="font-bold text-brand-600">{(prompt.popularity * 12).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center space-x-2">
                      <Bookmark size={16} />
                      <span>Saves</span>
                    </span>
                    <span className="font-bold">{(prompt.popularity * 3).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full py-4 bg-brand-600 text-white rounded-2xl font-black text-sm hover:bg-brand-700 transition shadow-lg shadow-brand-500/20 flex items-center justify-center space-x-2">
                  <Bookmark size={18} />
                  <span>Save to My Library</span>
                </button>
                <button className="w-full py-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-center space-x-2">
                  <Share2 size={18} />
                  <span>Share with Friends</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Related Section */}
      {relatedPrompts.length > 0 && (
        <section className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black">Explore More {category?.title}</h2>
            <Link to={`/category/${category?.slug}`} className="text-brand-600 font-bold hover:underline text-sm flex items-center space-x-1">
              <span>See All</span>
              <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPrompts.map(p => (
              <PromptCard key={p.id} prompt={p} onCopy={() => {
                navigator.clipboard.writeText(p.content);
                setToastVisible(true);
              }} />
            ))}
          </div>
        </section>
      )}

      <Toast 
        message="Prompt copied to clipboard!" 
        isVisible={toastVisible} 
        onClose={() => setToastVisible(false)} 
      />
    </div>
  );
};

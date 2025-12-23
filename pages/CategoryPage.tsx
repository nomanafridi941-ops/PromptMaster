import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, PROMPTS } from '../data/prompts';
import { PromptCard } from '../components/PromptCard';
import { Toast } from '../components/Toast';
import { ChevronRight, Info, Search as SearchIcon, Sparkles, Loader2 } from 'lucide-react';
import { generatePrompts, isAIConfigured } from '../services/aiService';
import { Prompt } from '../types';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams();
  const [toastVisible, setToastVisible] = useState(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'newest'>('popularity');
  const [localSearch, setLocalSearch] = useState('');
  const [generatedPrompts, setGeneratedPrompts] = useState<Prompt[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasSearchGenerated, setHasSearchGenerated] = useState(false);

  const category = CATEGORIES.find(c => c.slug === slug);

  const staticPrompts = PROMPTS.filter(p => !category || p.category === category.id);
  const allPrompts = [...staticPrompts, ...generatedPrompts];

  // Auto-generate prompts if no prompts available and AI is configured
  useEffect(() => {
    const shouldGenerate = category && 
                          allPrompts.length === 0 && 
                          isAIConfigured() && 
                          !isGenerating && 
                          generatedPrompts.length === 0;
    
    if (shouldGenerate) {
      setIsGenerating(true);
      generatePrompts({ category: category.id, count: 6 })
        .then(prompts => {
          if (prompts.length > 0) {
            setGeneratedPrompts(prompts);
          }
        })
        .finally(() => setIsGenerating(false));
    }
  }, [category, allPrompts.length, isGenerating, generatedPrompts.length]);

  const filteredPrompts = useMemo(() => {
    return allPrompts
      .filter(p => 
        p.title.toLowerCase().includes(localSearch.toLowerCase()) || 
        p.description.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(localSearch.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === 'popularity') return b.popularity - a.popularity;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [allPrompts, localSearch, sortBy, category?.id]);

  // Generate prompts based on search query when no results found
  useEffect(() => {
    const shouldGenerateFromSearch = localSearch.trim().length > 2 && 
                                     filteredPrompts.length === 0 && 
                                     isAIConfigured() && 
                                     !isGenerating &&
                                     !hasSearchGenerated;
    
    if (shouldGenerateFromSearch) {
      setIsGenerating(true);
      setHasSearchGenerated(true);
      generatePrompts({ 
        category: category?.id || 'ChatGPT', 
        count: 5,
        searchQuery: localSearch 
      })
        .then(prompts => {
          if (prompts.length > 0) {
            setGeneratedPrompts(prev => [...prev, ...prompts]);
          }
        })
        .finally(() => setIsGenerating(false));
    }
    
    // Reset flag when search changes
    if (localSearch.trim().length <= 2) {
      setHasSearchGenerated(false);
    }
  }, [localSearch, filteredPrompts.length, isGenerating, hasSearchGenerated, category]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastVisible(true);
  };

  const handleSkipGeneration = () => {
    setIsGenerating(false);
    setHasSearchGenerated(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumbs for SEO */}
      <nav className="flex items-center space-x-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-brand-600 flex-shrink-0">Home</Link>
        <ChevronRight size={14} className="flex-shrink-0" />
        <span className="text-slate-900 dark:text-white font-bold flex-shrink-0">{category?.title || 'All AI Prompts'}</span>
      </nav>

      <div className="space-y-6">
        <div className="flex items-center space-x-3 text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest">
          <Sparkles size={16} />
          <span>Premium Library</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          {category?.title || 'Professional AI Prompts'} <span className="text-brand-600">Library</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Boost your productivity and improve AI outputs with our curated list of {allPrompts.length} high-quality {category?.title || 'AI'} templates. 
          All prompts are battle-tested for ChatGPT, Midjourney, and Claude.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <div className="relative flex-1 w-full group">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={18} />
            <input 
              type="text"
              placeholder={`Search ${category?.title || 'prompts'} by keyword...`}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-brand-500 shadow-sm transition-all"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <select 
              className="w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 px-4 py-3 rounded-2xl text-sm font-bold focus:outline-none focus:border-brand-500 shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(
          (isGenerating || (allPrompts.length === 0 && isAIConfigured()))
        ) ? (
          <div className="col-span-full text-center py-24 bg-gradient-to-br from-brand-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-[2.5rem] border-2 border-brand-200 dark:border-slate-700">
            <div className="relative inline-block mb-6">
              <Loader2 className="animate-spin text-brand-600 dark:text-brand-400" size={48} />
              <Sparkles className="absolute -top-2 -right-2 text-amber-500 animate-pulse" size={20} />
            </div>
            <p className="text-slate-900 dark:text-white font-bold text-xl mb-2">
              {localSearch ? `Generating Prompts for "${localSearch}"...` : 'Creating Perfect Prompts...'}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
              {localSearch ? 'Our AI is crafting custom prompts based on your search.' : `Our AI is crafting ${category?.title || 'custom'} prompts for you.`}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 mb-6">
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <button 
              onClick={handleSkipGeneration}
              className="mt-4 px-6 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Skip and Browse Manually →
            </button>
          </div>
        ) : filteredPrompts.length > 0 ? (
          filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} onCopy={handleCopy} />
          ))
        ) : (
          <div className="col-span-full text-center py-24 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 font-bold text-lg">
              {localSearch ? `No prompts found for "${localSearch}"` : 'No prompts found matching your query.'}
            </p>
            {isAIConfigured() && localSearch.length > 0 && (
              <p className="text-slate-400 text-sm mt-2">Prompts will generate automatically in a moment...</p>
            )}
            <button onClick={() => setLocalSearch('')} className="mt-4 text-brand-600 font-bold hover:underline">Clear search filters</button>
          </div>
        )}
      </div>

      {/* SEO Article Block */}
      <section className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 space-y-10 shadow-sm relative overflow-hidden">
        <div className="max-w-4xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">How to optimize your results with {category?.title || 'AI Prompts'}</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-loose space-y-6">
            <p>
              In the rapidly evolving world of artificial intelligence, the quality of your output is 100% dependent on the quality of your input. 
              Our <strong>{category?.title || 'AI Prompts'}</strong> library is meticulously designed using industry-standard frameworks 
              like <strong>Chain-of-Thought (CoT)</strong> and <strong>Persona-Based Prompting</strong>. 
            </p>
            <p>
              Whether you are using ChatGPT for <strong>SEO Content Writing</strong>, generating scripts for <strong>YouTube growth</strong>, 
              or drafting <strong>Upwork Proposals</strong>, these templates act as your unfair advantage. By providing specific context 
              and constraints, you prevent the AI from generating generic or "hallucinated" responses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
              <div className="bg-brand-50 dark:bg-brand-900/10 p-6 rounded-2xl border border-brand-100 dark:border-brand-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Step 1: Copy Template</h4>
                <p className="text-sm">Select any prompt from our {category?.title} list and hit the copy button for an instant clipboard save.</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Step 2: Fill Variables</h4>
                <p className="text-sm">Identify bracketed placeholders like [TOPIC] or [KEYWORD] and replace them with your specific data.</p>
              </div>
            </div>
            <p>
              By utilizing our specialized <strong>{category?.title}</strong> templates, you can reduce your workload by up to 70%. 
              Our community of freelancers and marketers consistently reports better AI results, higher client satisfaction, 
              and faster project turnaround times using these exact copy-paste structures.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-2 text-sm font-bold text-slate-500">
              <Info size={18} className="text-brand-500" />
              <span>Free for all users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-bold text-slate-500">
              <Sparkles size={18} className="text-amber-500" />
              <span>Optimized for GPT-4o & Claude 3.5</span>
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


import React from 'react';
import { Target, Zap, Shield, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-black">We help creators <span className="text-brand-600">tame the AI</span>.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          AI tools like ChatGPT and Midjourney are only as good as the prompts you give them. 
          PromptMaster AI Hub was founded to bridge the gap between "good enough" and "perfection."
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center">
            <Target size={24} />
          </div>
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To provide the most comprehensive, easy-to-use, and effective library of AI prompts for entrepreneurs, 
            marketers, and artists globally. We believe high-quality AI results shouldn't require a computer science degree.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <h3 className="text-2xl font-bold">The Vision</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            As AI evolves, prompting becomes more nuanced. We're here to evolve with you, 
            curating the latest strategies for models like GPT-5, Midjourney V7, and beyond.
          </p>
        </div>
      </div>

      <section className="bg-slate-900 text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Users size={200} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Built for Productivity</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Shield className="text-brand-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-lg">Curated with Integrity</h4>
                <p className="text-slate-400 text-sm">Every prompt is tested manually before being added to our database to ensure it delivers value.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="text-brand-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-lg">Performance Focused</h4>
                <p className="text-slate-400 text-sm">We focus on prompts that actually save you time, whether you're writing code or scripts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center pt-10">
        <h2 className="text-3xl font-bold mb-8">Join the Community</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-brand-50 transition-colors">Twitter (X)</a>
          <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-brand-50 transition-colors">Discord Server</a>
          <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-brand-50 transition-colors">YouTube Tutorials</a>
        </div>
      </section>
    </div>
  );
};

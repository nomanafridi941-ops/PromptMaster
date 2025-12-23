
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { PromptPage } from './pages/PromptPage';
import { CategoryPage } from './pages/CategoryPage';
import { About } from './pages/About';
// Added Share2 to the lucide-react imports
import { Menu, X, Moon, Sun, Github, Search, Bookmark, Zap, Share2 } from 'lucide-react';

const Header: React.FC<{ darkMode: boolean, toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Prompts', path: '/category/all' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 glass-effect border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:rotate-12 transition-transform">
            <Zap className="text-white" size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tight">Prompt<span className="text-brand-600">Master</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-bold transition-colors ${location.pathname === link.path ? 'text-brand-600' : 'text-slate-600 dark:text-slate-400 hover:text-brand-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-all">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="flex items-center space-x-2 px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20">
            <Bookmark size={16} />
            <span>My Library</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-bold text-slate-800 dark:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl flex-1 flex justify-center">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="p-3 bg-brand-600 text-white rounded-xl flex-1 font-bold">My Library</button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 mt-auto transition-colors">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2 space-y-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
            <Zap className="text-white" size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tight dark:text-white">Prompt<span className="text-brand-600">Master</span></span>
        </Link>
        <p className="text-slate-500 dark:text-slate-400 max-sm leading-relaxed">
          The ultimate resource for high-quality AI prompts. Helping creators, marketers, and developers harness the power of artificial intelligence.
        </p>
        <div className="flex items-center space-x-4">
          <a href="#" className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-brand-600 transition-colors"><Github size={20} /></a>
          <a href="#" className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-brand-600 transition-colors"><Share2 size={20} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Categories</h4>
        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/category/chatgpt-prompts" className="hover:text-brand-600">ChatGPT Prompts</Link></li>
          <li><Link to="/category/image-ai-prompts" className="hover:text-brand-600">Midjourney AI</Link></li>
          <li><Link to="/category/seo-prompts" className="hover:text-brand-600">SEO & Content</Link></li>
          <li><Link to="/category/marketing-prompts" className="hover:text-brand-600">Marketing Strategy</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/about" className="hover:text-brand-600">About Us</Link></li>
          <li><a href="#" className="hover:text-brand-600">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-brand-600">Terms of Service</a></li>
          <li><a href="#" className="hover:text-brand-600">Contact Support</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
      &copy; {new Date().getFullYear()} PromptMaster AI Hub. All rights reserved. Built for the future of creativity.
    </div>
  </footer>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('prompt_master_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('prompt_master_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prompt/:id" element={<PromptPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

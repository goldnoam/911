import React, { useState, useMemo, useEffect } from 'react';
import { EMERGENCY_CONTACTS, CATEGORY_TRANSLATIONS, UI_TRANSLATIONS } from './constants';
import { EmergencyCard } from './components/EmergencyCard';
import { Search, Phone, Info, Moon, Sun, Globe, Mail } from 'lucide-react';
import { Category, Language } from './types';

export default function App() {
  // Initialize state from local storage or defaults
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');
  
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
       const saved = localStorage.getItem('app_lang') as Language;
       return saved || 'he';
    }
    return 'he';
  });

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_theme');
      if (saved) return saved === 'dark';
      // Default to true (dark mode) if no preference saved
      return true;
    }
    return true;
  });

  // Effects for DOM updates
  useEffect(() => {
    // Dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('app_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('app_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    // Direction & Lang persistence
    const dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('app_lang', language);
  }, [language]);

  const categories = Object.values(Category);

  const filteredContacts = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase().trim();
    if (!lowerSearch && selectedCategory === 'ALL') return EMERGENCY_CONTACTS;

    return EMERGENCY_CONTACTS.filter(contact => {
      // Search in name, description, number, and keywords
      const nameMatch = Object.values(contact.name).some(n => n.toLowerCase().includes(lowerSearch));
      const descMatch = Object.values(contact.description).some(d => d.toLowerCase().includes(lowerSearch));
      const numberMatch = contact.number.includes(lowerSearch);
      const keywordMatch = contact.keywords?.some(k => k.toLowerCase().includes(lowerSearch));
      
      // Search in Category name (sub-category search)
      const categoryNameMatch = Object.values(CATEGORY_TRANSLATIONS[contact.category]).some(
        catName => catName.toLowerCase().includes(lowerSearch)
      );
      
      const matchesSearch = !lowerSearch || nameMatch || descMatch || numberMatch || keywordMatch || categoryNameMatch;
      const matchesCategory = selectedCategory === 'ALL' || contact.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'he') return 'en';
      if (prev === 'en') return 'ru';
      return 'he';
    });
  };

  return (
    <div className="min-h-screen pb-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Phone size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 dark:text-white leading-none">
                  {UI_TRANSLATIONS.appTitle[language]}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {UI_TRANSLATIONS.appSubtitle[language]}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-1 font-bold text-sm border border-gray-200 dark:border-gray-600"
                aria-label="Change Language"
              >
                <Globe size={18} />
                <span className="uppercase">{language}</span>
              </button>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors border border-gray-200 dark:border-gray-600"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder={UI_TRANSLATIONS.searchPlaceholder[language]}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-xl py-3 px-10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all text-lg"
            />
            <Search className={`absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 ${language === 'he' ? 'right-3' : 'left-3'}`} size={20} />
          </div>
        </div>
      </header>

      {/* Category Filters */}
      <div className="max-w-4xl mx-auto px-4 py-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSearchTerm('');
            }}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              selectedCategory === 'ALL' 
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {UI_TRANSLATIONS.all[language]}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchTerm('');
              }}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {CATEGORY_TRANSLATIONS[cat][language]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-4xl mx-auto px-4">
        {filteredContacts.length > 0 ? (
          <div key={`${selectedCategory}-${language}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContacts.map((contact) => (
              <EmergencyCard key={contact.id} contact={contact} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400 animate-fade-in">
            <Info className="mx-auto mb-2 h-12 w-12 text-gray-300 dark:text-gray-600" />
            <p className="text-lg">{UI_TRANSLATIONS.noResults[language]}</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('ALL')}}
              className="text-blue-600 dark:text-blue-400 font-bold mt-2 hover:underline"
            >
              {UI_TRANSLATIONS.clearFilter[language]}
            </button>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400 dark:text-gray-500 text-sm pb-8 px-4">
        <p className="mb-2">{UI_TRANSLATIONS.disclaimer[language]}</p>
        <a 
          href="mailto:gold.noam@gmail.com" 
          className="inline-flex items-center gap-1.5 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <Mail size={14} />
          {UI_TRANSLATIONS.sendFeedback[language]}
        </a>
      </footer>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Share2, Check, Copy, Shield, Ambulance, Flame, Zap, Siren, ShieldAlert, Building2, PhoneCall, HeartHandshake, Lock, Stethoscope, Activity, Ear, Heart, Landmark } from 'lucide-react';
import { EmergencyContact, Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';

interface EmergencyCardProps {
  contact: EmergencyContact;
  language: Language;
}

// Map strings to Icon components
const IconMap: Record<string, React.ElementType> = {
  Shield, Ambulance, Flame, Zap, Siren, ShieldAlert, Building2, PhoneCall, HeartHandshake, Lock, Stethoscope, Activity, Ear, Heart, Landmark
};

export const EmergencyCard: React.FC<EmergencyCardProps> = ({ contact, language }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    // Check if Web Share API is supported and context is secure
    setCanShare(
      typeof navigator !== 'undefined' && 
      !!navigator.share && 
      (window.isSecureContext || window.location.hostname === 'localhost')
    );
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const Icon = IconMap[contact.iconName] || Phone;
  const name = contact.name[language];
  const description = contact.description[language];

  const handleAction = async () => {
    if (canShare) {
      try {
        await navigator.share({
          title: name,
          text: `${name}: ${contact.number}\n${description}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      handleCopy();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${name}: ${contact.number}`);
    
    setShowTooltip(true);
    
    // Clear any pending timers to handle rapid clicks
    if (timerRef.current) clearTimeout(timerRef.current);

    // Schedule exit
    timerRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const handleNumberClick = () => {
    const text = UI_TRANSLATIONS.dialConfirm[language];
    if (window.confirm(`${text} ${contact.number}?`)) {
      window.location.href = `tel:${contact.number}`;
    }
  };

  // Determine colors based on the colorClass prop with Dark Mode support
  const getColors = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-900/50 hover:border-red-400 dark:hover:border-red-700';
      case 'blue': return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/50 hover:border-blue-400 dark:hover:border-blue-700';
      case 'orange': return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-900/50 hover:border-orange-400 dark:hover:border-orange-700';
      case 'yellow': return 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-900/50 hover:border-yellow-400 dark:hover:border-yellow-700';
      case 'green': return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-900/50 hover:border-green-400 dark:hover:border-green-700';
      case 'purple': return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-900/50 hover:border-purple-400 dark:hover:border-purple-700';
      case 'indigo': return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-900/50 hover:border-indigo-400 dark:hover:border-indigo-700';
      case 'pink': return 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-900/50 hover:border-pink-400 dark:hover:border-pink-700';
      case 'rose': return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-900/50 hover:border-rose-400 dark:hover:border-rose-700';
      case 'teal': return 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-900/50 hover:border-teal-400 dark:hover:border-teal-700';
      case 'stone': return 'bg-stone-50 text-stone-700 border-stone-200 dark:bg-stone-900/20 dark:text-stone-300 dark:border-stone-900/50 hover:border-stone-400 dark:hover:border-stone-700';
      case 'sky': return 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-900/50 hover:border-sky-400 dark:hover:border-sky-700';
      case 'slate': return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500';
      default: return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 hover:border-gray-400';
    }
  };

  const getButtonColor = (color: string) => {
     switch (color) {
      case 'red': return 'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600';
      case 'blue': return 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600';
      case 'orange': return 'bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600';
      case 'yellow': return 'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600';
      case 'green': return 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600';
      case 'indigo': return 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600';
      case 'pink': return 'bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600';
      case 'rose': return 'bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600';
      case 'teal': return 'bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600';
      case 'stone': return 'bg-stone-600 hover:bg-stone-700 dark:bg-stone-700 dark:hover:bg-stone-600';
      case 'sky': return 'bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600';
      case 'slate': return 'bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600';
      default: return 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600';
    }
  }

  const cardStyle = getColors(contact.colorClass);
  const btnStyle = getButtonColor(contact.colorClass);
  const isCopied = showTooltip;

  return (
    <div className={`rounded-xl border-2 p-4 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between h-full animate-fade-in ${cardStyle}`}>
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-full bg-white dark:bg-gray-800 dark:bg-opacity-50 bg-opacity-60`}>
                <Icon size={24} strokeWidth={2.5} />
             </div>
             <h3 className="text-xl font-bold">{name}</h3>
          </div>
          <button 
             onClick={handleNumberClick}
             className="text-2xl font-black tracking-widest text-right hover:opacity-75 transition-opacity underline decoration-dotted decoration-2 underline-offset-4 cursor-pointer"
             dir="ltr"
             title={`${UI_TRANSLATIONS.callNow[language]} ${contact.number}`}
          >
             {contact.number}
          </button>
        </div>
        <p className="text-sm opacity-90 font-medium mb-4 pr-1 leading-tight">
          {description}
        </p>
      </div>

      <div className="flex gap-2 mt-auto items-stretch">
        <a 
          href={`tel:${contact.number}`}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white font-bold text-lg shadow-sm active:scale-95 transition-transform ${btnStyle}`}
        >
          <Phone size={20} fill="currentColor" />
          <span>{UI_TRANSLATIONS.callNow[language]}</span>
        </a>
        
        <div className="relative">
          <div 
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded-lg shadow-xl whitespace-nowrap z-20 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom ${showTooltip ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-2 scale-95'}`}
          >
            {UI_TRANSLATIONS.numberCopied[language]}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
          </div>
          <button 
            onClick={handleAction}
            className={`h-full p-3 rounded-lg border transition-all duration-200 active:scale-95 min-w-[3.5rem] flex items-center justify-center
              ${isCopied 
                ? 'bg-green-100 border-green-500 text-green-700 dark:bg-green-900/40 dark:border-green-500 dark:text-green-300 scale-105' 
                : 'bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-40 hover:bg-opacity-80 dark:hover:bg-opacity-60 border-current text-current'
              }`}
            aria-label={canShare ? UI_TRANSLATIONS.share[language] : UI_TRANSLATIONS.copy[language]}
            title={canShare ? UI_TRANSLATIONS.share[language] : UI_TRANSLATIONS.copy[language]}
          >
            {isCopied ? <Check size={24} strokeWidth={3} /> : (canShare ? <Share2 size={24} /> : <Copy size={24} />)}
          </button>
        </div>
      </div>
    </div>
  );
};
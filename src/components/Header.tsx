import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onMenuClick: () => void;
}

export default function Header({ currentPage, onPageChange, onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // We'll keep the transparency for the hero pages but use the prototype's color palette
  const isTransparent = (currentPage === 'menu' || currentPage === 'story') && !isScrolled;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/10'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className={`scale-95 active:scale-90 transition-transform md:hidden ${
              isTransparent ? 'text-surface' : 'text-primary'
            }`}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button 
            onClick={() => onPageChange('menu')}
            className={`flex items-center gap-3 transition-all duration-500 ${
              isTransparent ? 'text-surface' : 'text-primary hover:opacity-80'
            }`}
          >
            <img 
              src="https://lh3.googleusercontent.com/a-/ALV-UjXQ_sez0lgOqtTDOwseozipIISqx_P9zwROUK5FsWY5NrKwE1U=s360-w360-h360" 
              alt="Latin Bakery Transparent Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-lg object-cover shadow-sm"
            />
            <span className="text-2xl md:text-3xl font-serif font-bold">Latin Bakery</span>
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: 'menu', label: 'Menu' },
            { id: 'story', label: 'Our Story' },
            { id: 'locations', label: 'Locations' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`relative transition-all duration-300 pb-1 font-bold text-sm uppercase tracking-wider ${
                isTransparent 
                  ? 'text-surface/70 hover:text-surface' 
                  : currentPage === item.id 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://latin-bakery.square.site/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 ${
              isTransparent 
                ? 'bg-surface text-primary hover:bg-surface/90 shadow-xl' 
                : 'bg-primary text-on-primary hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95'
            }`}
          >
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
}

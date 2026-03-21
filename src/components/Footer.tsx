import { Instagram, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-surface-container w-full py-12 mt-20 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <button 
            onClick={() => onPageChange('menu')}
            className="flex items-center gap-3 font-serif text-2xl font-bold text-secondary hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://lh3.googleusercontent.com/a-/ALV-UjXQ_sez0lgOqtTDOwseozipIISqx_P9zwROUK5FsWY5NrKwE1U=s360-w360-h360" 
              alt="Latin Bakery Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-lg object-cover shadow-sm"
            />
            <span>Latin Bakery Willard</span>
          </button>
          <p className="text-sm opacity-80 mt-2 text-on-surface">© 2024 Latin Bakery Willard. A Family Legacy.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button 
            onClick={() => onPageChange('menu')}
            className="text-sm font-medium text-on-surface hover:text-primary transition-colors"
          >
            Menu
          </button>
          <button 
            onClick={() => onPageChange('story')}
            className="text-sm font-medium text-on-surface hover:text-primary transition-colors"
          >
            Our Story
          </button>
          <button 
            onClick={() => onPageChange('locations')}
            className="text-sm font-medium text-on-surface hover:text-primary transition-colors"
          >
            Locations
          </button>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://www.instagram.com/latin.bakery.oh/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm hover:shadow-md transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.facebook.com/latin.bakery.ohio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm hover:shadow-md transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="mailto:general@latinbakery.site" 
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm hover:shadow-md transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

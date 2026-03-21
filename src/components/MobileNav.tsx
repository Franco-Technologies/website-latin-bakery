import { motion, AnimatePresence } from 'motion/react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function MobileNav({ isOpen, onClose, currentPage, onPageChange }: MobileNavProps) {
  const navItems = [
    { id: 'menu', label: 'Menu', icon: 'restaurant_menu' },
    { id: 'story', label: 'Our Story', icon: 'auto_stories' },
    { id: 'locations', label: 'Locations', icon: 'location_on' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[60] md:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[280px] bg-surface z-[70] md:hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <div className="flex items-center gap-3 text-primary font-serif font-bold text-xl">
                <img 
                  src="https://picsum.photos/seed/latin-bakery-logo/100/100" 
                  alt="Latin Bakery Logo" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-lg object-cover shadow-sm"
                />
                <span>Latin Bakery</span>
              </div>
              <button 
                onClick={onClose}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex-grow p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                    currentPage === item.id 
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  <span className={`material-symbols-outlined ${currentPage === item.id ? 'fill-icon' : ''}`}>
                    {item.icon}
                  </span>
                  <span className="text-lg">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-6 border-t border-outline-variant space-y-4">
              <a 
                href="https://latin-bakery-willard.square.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-on-primary w-full py-4 rounded-2xl font-bold shadow-lg shadow-primary/20"
              >
                Order Online
              </a>
              <p className="text-center text-xs text-on-surface-variant opacity-60">
                © 2024 Latin Bakery Willard
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

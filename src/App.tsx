/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import OurStory from './components/OurStory';
import Locations from './components/Locations';
import Hero from './components/Hero';
import StoryLink from './components/StoryLink';
import { PRODUCTS } from './constants';
import { Category } from './types';

type Page = 'menu' | 'story' | 'locations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('menu');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const renderPage = () => {
    switch (currentPage) {
      case 'story':
        return <OurStory />;
      case 'locations':
        return <Locations />;
      case 'menu':
      default:
        return (
          <>
            <Hero />
            <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
              <StoryLink onPageChange={setCurrentPage} />
              
              <div id="menu" className="scroll-mt-24">
                <FilterSection 
                  activeCategory={activeCategory} 
                  onCategoryChange={setActiveCategory} 
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage} 
        onPageChange={(p) => setCurrentPage(p as Page)} 
        onMenuClick={() => setIsSidebarOpen(true)}
      />
      
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
            <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
              <Newsletter />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={(p) => setCurrentPage(p as Page)} />
      
      <MobileNav 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage} 
        onPageChange={(p) => setCurrentPage(p as Page)} 
      />
    </div>
  );
}

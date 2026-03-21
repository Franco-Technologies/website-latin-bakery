import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: string;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-surface-container-low rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_20px_40px_rgba(30,28,16,0.06)]"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-container-highest">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isPopular && (
          <div className="absolute top-3 right-3">
            <span className="bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-3 py-1 rounded-full shadow-sm">Popular</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-serif text-on-surface">{product.name}</h3>
          <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>
        <motion.a 
          href={product.squareUrl || "https://latin-bakery.square.site/"}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="material-symbols-outlined text-lg">shopping_cart</span>
          Order on Square
        </motion.a>
        <p className="text-[10px] text-center mt-2 text-on-surface-variant opacity-60">
          Secure checkout via Square
        </p>
      </div>
    </motion.div>
  );
}

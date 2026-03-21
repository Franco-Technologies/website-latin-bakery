import { Category } from '../types';

interface FilterSectionProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function FilterSection({ activeCategory, onCategoryChange }: FilterSectionProps) {
  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'combo', label: 'Combos' },
    { id: 'bread', label: 'Bakery' },
    { id: 'lightFood', label: 'Savory' },
    { id: 'hotDessert', label: 'Hot Desserts' },
    { id: 'coldDessert', label: 'Cold Desserts' },
    { id: 'bebidas', label: 'Drinks' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'packageFood', label: 'Grocery' },
  ];

  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-2">Our Fresh Daily Menu</h1>
          <p className="text-on-surface-variant max-w-md leading-relaxed">Artisanal Latin flavors crafted with tradition and heart in the heart of Willard, Ohio.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 items-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <div className="ml-2 w-px h-6 bg-outline-variant/30 hidden md:block"></div>
          <button className="flex items-center gap-2 text-on-surface-variant text-sm font-medium ml-2 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">sort</span>
            Sort by
          </button>
        </div>
      </div>
    </section>
  );
}

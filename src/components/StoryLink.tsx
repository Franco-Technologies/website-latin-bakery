import { motion } from 'motion/react';

interface StoryLinkProps {
  onPageChange: (page: string) => void;
}

export default function StoryLink({ onPageChange }: StoryLinkProps) {
  return (
    <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface-container-low p-12 rounded-[3rem] shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface">The Heart of Our Bakery</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Our story is a family legacy born from the vibrant cultures of the Dominican Republic and Venezuela. 
            It's a journey that began with a simple desire to share the authentic flavors of our homelands with our new community in Willard, Ohio.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => onPageChange('story')}
            className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl hover:shadow-secondary/20 active:scale-95 flex items-center justify-center gap-3"
          >
            Read Our Story
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          
          <div className="flex items-center gap-4 text-on-surface-variant">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/person-${i}/100/100`} 
                    alt="Customer" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">Loved by the Willard community</p>
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipMnMeLYROTyaLzLOhUXmOuwS7scOW_xg-Lx4S8Z=s680-w680-h510-rw" 
            alt="The man behind the flour"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-8">
            <p className="text-surface font-serif italic text-xl">"Heritage in every bite."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

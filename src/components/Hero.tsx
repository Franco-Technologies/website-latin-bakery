import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/p/AF1QipOyi3-WtKtnns80ewzQKz10okhSmdjl_lk7FfKW=s1200" 
          alt="Latin Bakery fresh bread"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-on-surface/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-32 pb-16">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold text-surface leading-[1.1] mb-6 drop-shadow-lg"
          >
            Authentic <span className="text-yellow-400">Flavors</span>, <br />
            Family <span className="text-blue-400">Traditions</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-surface/90 font-medium mb-10 leading-relaxed max-w-lg drop-shadow-md"
          >
            Experience the warmth of the Dominican Republic and Venezuela in the heart of Willard, Ohio.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="https://latin-bakery.square.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 active:scale-95 text-center"
            >
              Order for Pickup
            </a>
            <a 
              href="#menu" 
              className="bg-surface/10 backdrop-blur-md border border-surface/20 text-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-surface/20 transition-all active:scale-95 text-center"
            >
              Explore Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

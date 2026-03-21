import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24 pb-24"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipOyi3-WtKtnns80ewzQKz10okhSmdjl_lk7FfKW=s1200" 
            alt="Bakery interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center pt-32 pb-16">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold text-surface mb-6 drop-shadow-lg"
            >
              Heritage in Every Bite
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-surface/90 font-medium drop-shadow-md"
            >
              Bringing the authentic, warm flavors of the Dominican Republic and Venezuela to the heart of Willard, Ohio.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-8 max-w-7xl mx-auto w-full space-y-24">
        {/* Narrative Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-on-surface">The Man Behind the Flour & Faith 🥖🙏</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed italic">
              "16 years ago, my father moved to this country with his children and a heart full of hope. He faced language barriers, moved through many states, and overcame hurdles that would have made anyone else give up."
            </p>
          </div>
          
          <div className="space-y-6 text-on-surface-variant">
            <p className="text-lg leading-relaxed">
              Did he start as a baker? Not even close! Latin Bakery didn’t start from a lifelong career; it started from a need and a divine direction from the Lord to share our culture, our flavors, and our love.
            </p>
            <p className="text-lg leading-relaxed">
              Through every challenge before and after opening these doors, he has stood firm in his faith and resilience. Today, my siblings and I look at him with so much admiration. He learned every recipe from scratch, pivoted when things got tough, and transformed into the best Capuchino baker I know!
            </p>
            <p className="text-lg leading-relaxed font-medium text-primary">
              Next time you see him behind the counter, grabbing your cannolis, or perfecting the palmeritas, know that you’re seeing the face of determination. We love you, Pa!
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[500px] aspect-[500/498] rounded-2xl overflow-hidden shadow-2xl border border-surface-container">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flatin.bakery.ohio%2Fposts%2Fpfbid0y3wQmQFfgDRoCaqrVchQvaRzy7XcQW61KfqBdNujU6sFSGaaZKaynrbqy2TkZw7Bl&show_text=false&width=500" 
              width="100%" 
              height="100%" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface-container rounded-3xl p-12 md:p-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-on-surface mb-4">Our Values</h2>
          <p className="text-on-surface-variant">What makes Latin Bakery Willard special isn't just our recipes—it's the heritage we bake into every batch.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
              <span className="material-symbols-outlined text-3xl">history_edu</span>
            </div>
            <h3 className="text-xl font-bold font-serif">Heritage</h3>
            <p className="text-on-surface-variant">We honor our roots in the Dominican Republic and Venezuela, bringing authentic island and South American flavors to Ohio.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
              <span className="material-symbols-outlined text-3xl">family_restroom</span>
            </div>
            <h3 className="text-xl font-bold font-serif">Family</h3>
            <p className="text-on-surface-variant">As a family-owned business, we treat every customer like a guest in our own home, serving you with warmth and care.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold font-serif">Community</h3>
            <p className="text-on-surface-variant">We're proud to be part of the Willard community, providing a space where cultures meet and stories are shared over a sweet treat.</p>
          </div>
        </div>
      </section>
    </div>
  </motion.div>
  );
}

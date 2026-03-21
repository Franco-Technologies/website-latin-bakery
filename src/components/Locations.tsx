import { motion } from 'motion/react';

export default function Locations() {
  const location = {
    id: 'willard',
    name: 'Latin Bakery Willard',
    address: '113 Blossom Centre Blvd, Willard, OH 44890',
    phone: '(567) 227-9007',
    hours: [
      { day: 'Mon - Fri', time: '8:00 AM - 7:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
      { day: 'Sunday', time: 'Closed' }
    ],
    description: 'Our flagship location in the heart of Willard. Come for the fresh bread, stay for the community.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOLeB1e9OvKDcedFquCpIgFcvZidWip8d3ABu_Y=s680-w680-h510-rw',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-16 pb-24 pt-32"
    >
      <div className="px-4 md:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-on-surface mb-4">Visit Us</h1>
          <p className="text-on-surface-variant text-lg">Come smell the aroma of fresh dough at our Willard location.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-container-low rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img 
                src={location.image} 
                alt={location.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="text-2xl font-serif font-bold text-on-surface mb-2">{location.name}</h2>
                <p className="text-on-surface-variant">{location.description}</p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-on-surface hover:text-primary transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">location_on</span>
                  <span className="underline-offset-4 group-hover:underline">{location.address}</span>
                </a>
                <a 
                  href={`tel:${location.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                  <span className="underline-offset-4 group-hover:underline">{location.phone}</span>
                </a>
                <a 
                  href="mailto:general@latinbakery.site"
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                  <span className="underline-offset-4 group-hover:underline">general@latinbakery.site</span>
                </a>
                <div className="flex items-start gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div className="flex flex-col">
                    {location.hours.map((h, i) => (
                      <div key={i} className="flex justify-between gap-4">
                        <span className="font-medium">{h.day}:</span>
                        <span className="text-on-surface-variant">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-primary text-on-primary font-bold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">directions</span>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <section className="bg-surface-container-highest rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 grayscale">
            <img 
              src="https://picsum.photos/seed/map-willard/1200/600" 
              alt="Map background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="z-10 text-center p-8 bg-surface/80 backdrop-blur-sm rounded-2xl shadow-xl">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">map</span>
            <h3 className="text-xl font-bold font-serif mb-2">Interactive Map Coming Soon</h3>
            <p className="text-on-surface-variant">We're currently baking a new map experience for you.</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

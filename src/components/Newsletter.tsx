export default function Newsletter() {
  return (
    <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-surface-container p-8 md:p-12 rounded-2xl flex flex-col justify-center">
        <h2 className="text-3xl font-serif font-bold text-on-surface mb-4">Join Our Baking Family</h2>
        <p className="text-on-surface-variant mb-8 max-w-lg">Get notified when we pull fresh batches of Conchas out of the oven and receive exclusive weekend offers.</p>
        <form 
          action="https://squareup.com/outreach/s7rdTP/subscribe" 
          method="POST" 
          target="_blank"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input 
            className="flex-grow bg-surface border-none rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/40 transition-all outline-none shadow-sm" 
            placeholder="Your email address" 
            type="email"
            name="email_address"
            required
          />
          <input type="hidden" name="embed" value="true" />
          <button 
            type="submit"
            className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:bg-on-secondary-fixed transition-colors shadow-md active:scale-95 transform"
          >
            Subscribe
          </button>
        </form>
      </div>
      
      <div className="bg-primary p-8 rounded-2xl text-on-primary flex flex-col justify-between overflow-hidden relative shadow-lg">
        <div className="z-10">
          <h3 className="text-2xl font-serif font-bold mb-2">Visit Us Today</h3>
          <p className="opacity-90">113 Blossom Centre Blvd, Willard, OH</p>
          <p className="opacity-90 text-sm mt-1">(567) 227-9007</p>
        </div>
        <div className="z-10 mt-8">
          <p className="font-bold">Mon - Fri: 8 AM - 7 PM</p>
          <p className="opacity-80">Sat: 9 AM - 6 PM</p>
          <p className="opacity-80">Sun: Closed</p>
        </div>
        <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[180px] opacity-10 pointer-events-none">
          bakery_dining
        </span>
      </div>
    </section>
  );
}

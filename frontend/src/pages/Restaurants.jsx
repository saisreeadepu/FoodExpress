import React from 'react';
import { motion } from 'framer-motion';
import PopularRestaurants from '../components/PopularRestaurants';
import { Search } from 'lucide-react';

const Restaurants = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins pb-24">
      {/* Animated Hero Header */}
      <section 
        className="relative pt-40 pb-32 text-white overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 z-0 bg-darkHero/70 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wider mb-6 uppercase shadow-lg backdrop-blur-md">Partner Directory</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">
              Discover <span className="text-primary">Top Rated</span> Restaurants
            </h1>
            <p className="text-xl text-gray-200 font-light mb-10 drop-shadow-md">
              From local hidden gems to Michelin-starred dining, explore our curated list of partners ready to deliver to your door.
            </p>

            {/* Decorative Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search for restaurants, cuisines, or dishes..." 
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
              <button className="absolute inset-y-2 right-2 bg-primary hover:bg-yellow-400 text-darkHero font-bold px-6 rounded-full transition-colors shadow-md">
                Search
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-t-[3rem] pt-12 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-12"
        >
          <PopularRestaurants />
        </motion.div>
      </div>
    </div>
  );
};

export default Restaurants;

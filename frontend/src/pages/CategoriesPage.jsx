import React from 'react';
import { motion } from 'framer-motion';
import Categories from '../components/Categories';

const CategoriesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins pb-24">
      {/* Animated Hero Header */}
      <section 
        className="relative pt-40 pb-32 text-white overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-darkHero/80 via-darkHero/60 to-darkHero/90 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">
              Crave It? <span className="text-primary">We Have It.</span>
            </h1>
            <p className="text-xl text-gray-200 font-light drop-shadow-md">
              Explore our wide variety of food categories. From spicy Asian fusions to comforting Italian classics, your next favorite meal is just a click away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100"
        >
          <Categories />
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;

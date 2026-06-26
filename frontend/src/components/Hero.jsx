import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  
  useEffect(() => {
    const phrases = ["Search for 'Sushi'...", "Search for 'Burgers'...", "Search for 'Pizza'..."];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const fullPhrase = phrases[currentPhrase];
      
      if (isDeleting) {
        setPlaceholder(fullPhrase.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setPlaceholder(fullPhrase.substring(0, currentChar + 1));
        currentChar++;
      }

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentChar === fullPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500;
      }

      timeoutId = setTimeout(type, typingSpeed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center justify-center">
      
      {/* Full Background Video */}
      <video 
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-110 contrast-110"
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 z-0"></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10 text-center">
        
        {/* Centered Content */}
        <motion.div 
          className="w-full max-w-4xl flex flex-col items-center mt-12" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-[1.15] mb-6">
            Order <span className="text-lime-400">Healthy And Fresh Food</span> <span className="text-primary">Anytime</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Discover delicious meals from your favorite restaurants and get them delivered fresh to your doorstep.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div variants={itemVariants} className={`bg-white rounded-full p-2 flex items-center transition-all duration-300 w-full max-w-2xl mx-auto ${isFocused ? 'shadow-2xl ring-4 ring-primary/50 scale-105' : 'shadow-lg'}`}>
            <input 
              type="text" 
              placeholder={placeholder || "Search..."}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-grow px-4 py-3 text-gray-800 text-lg focus:outline-none bg-transparent"
            />
            <button className="bg-primary hover:bg-yellow-500 text-darkHero p-4 rounded-full transition transform hover:scale-105">
              <Search size={24} className="font-bold" />
            </button>
          </motion.div>

          {/* Popular Categories */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-300 font-medium text-lg hidden sm:block">Popular:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Pizza', 'Burger', 'Chicken', 'Biryani'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => setSearchValue(item)}
                  className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-darkHero cursor-pointer transition-colors duration-300 border border-gray-600/50 hover:border-primary"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Hero Shape Divider (Organic Blob) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, ShieldCheck, ArrowRight, TrendingUp, Clock, MapPin, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen overflow-hidden font-poppins">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-40 text-white overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-darkHero/80 backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#f8fafc] to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold tracking-wider mb-6 uppercase shadow-lg backdrop-blur-md">Our Journey</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Revolutionizing <span className="text-primary drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">Food Delivery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light drop-shadow-md">
              We started with a vision to connect local food lovers with the finest culinary experiences, delivering quality and convenience right to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 mb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-darkHero mb-2">500+</div>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Restaurant Partners</p>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">50k+</div>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Happy Customers</p>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="text-4xl md:text-5xl font-black text-darkHero mb-2">1M+</div>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Orders Delivered</p>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">4.9</div>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Average Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-yellow-300 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src="/about-us-img.jpg" 
                  alt="Our culinary mission" 
                  className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover transform transition duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 hidden md:block transform transition hover:-translate-y-2">
                  <div className="flex items-center gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <Target className="text-primary" size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-1">Our Mission</h4>
                      <p className="text-gray-500">Delivering excellence daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Crafting the Ultimate <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-darkHero to-primary">Dining Experience</span>
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                FoodExpress isn't just a delivery service; it's a commitment to culinary excellence. We've bridged the gap between premium local restaurants and food enthusiasts, ensuring that high-quality meals are accessible anytime, anywhere.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Curated selection of top-tier restaurants",
                  "Advanced real-time GPS order tracking",
                  "Strict quality and hygiene standards",
                  "24/7 dedicated customer support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-primary" size={24} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8">
                <Link to="/restaurants" className="inline-flex items-center gap-3 bg-darkHero hover:bg-gray-900 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                  Explore Restaurants
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={22} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our DNA</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Core Values</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Value 1 */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-10 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 group text-center"
            >
              <div className="bg-primary/10 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-6">
                <Heart className="text-primary" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Obsession</h3>
              <p className="text-gray-500 leading-relaxed font-light">Every decision we make starts with our customers. We strive to exceed expectations and deliver joy with every single order.</p>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-10 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 group text-center"
            >
              <div className="bg-blue-500/10 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 group-hover:-rotate-6">
                <ShieldCheck className="text-blue-500" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uncompromising Quality</h3>
              <p className="text-gray-500 leading-relaxed font-light">We partner strictly with top-rated vendors who adhere to the highest standards of culinary excellence and hygiene.</p>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-10 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 group text-center"
            >
              <div className="bg-green-500/10 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 group-hover:rotate-6">
                <Users className="text-green-500" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Communities</h3>
              <p className="text-gray-500 leading-relaxed font-light">By supporting local restaurants and providing flexible earning opportunities for our delivery partners, we build stronger cities.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 relative overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-darkHero/70 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 flex justify-center" style={{ perspective: "1000px" }}>
          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 100, translateZ: -100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, translateZ: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02, z: 50 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 md:p-20 rounded-[3rem] shadow-[0_32px_64px_rgba(0,0,0,0.5)] max-w-5xl w-full text-center relative overflow-hidden"
          >
            {/* Glass Highlights */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent z-0"></div>

            <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Experience</span> the Best?
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                Join thousands of satisfied foodies. Elevate your dining experience with just a few clicks today.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
                style={{ transform: "translateZ(50px)" }}
              >
                <Link to="/restaurants" className="relative group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-primary to-yellow-500 text-darkHero px-14 py-6 rounded-full font-black text-xl shadow-[0_20px_40px_rgba(250,204,21,0.3)] overflow-hidden border border-yellow-400/50">
                  <span className="relative z-10">Order Now</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                  <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

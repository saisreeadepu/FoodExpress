import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'Food Enthusiast', comment: 'The best food delivery service I have ever used. Fast, reliable, and the food is always hot!', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
  { id: 2, name: 'Michael Smith', role: 'Regular Customer', comment: 'I love the variety of restaurants available. The app is so easy to use and the customer service is great.', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
  { id: 3, name: 'Emily Davis', role: 'Local Guide', comment: 'Delivery is always on time, and the quality of food is exactly as it is in the restaurant. Highly recommend!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' }
];

const Testimonials = () => {
  return (
    <section 
      className="py-20 text-gray-900 relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-md border border-gray-100 p-8 rounded-2xl w-full md:w-[350px] shadow-xl relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-6 left-8 bg-primary text-darkHero text-4xl leading-none font-serif rounded-full w-12 h-12 flex items-center justify-center">"</div>
              
              <div className="flex items-center text-yellow-400 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed italic">
                {testimonial.comment}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full border-2 border-primary object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-xs text-primary">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

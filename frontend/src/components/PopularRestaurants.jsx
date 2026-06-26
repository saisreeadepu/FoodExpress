import React, { useState, useEffect } from 'react';
import { Star, Clock, Heart, ArrowRight } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

const restaurants = [
  { id: 1, name: 'Burger King', category: 'Fast Food', rating: 4.8, time: '30-40 min', price: '₹₹', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Pizza Hut', category: 'Italian', rating: 4.5, time: '40-50 min', price: '₹₹₹', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'KFC Chicken', category: 'Fast Food', rating: 4.6, time: '25-35 min', price: '₹₹', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Sushi Palace', category: 'Japanese', rating: 4.9, time: '45-60 min', price: '₹₹₹₹', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Taco Bell', category: 'Mexican', rating: 4.3, time: '20-30 min', price: '₹', img: 'https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Taj Mahal Curries', category: 'Indian', rating: 4.8, time: '35-50 min', price: '₹₹₹', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 7, name: 'The Vegan Bowl', category: 'Healthy', rating: 4.7, time: '15-25 min', price: '₹₹', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 8, name: 'Noodles & Co', category: 'Asian', rating: 4.4, time: '25-35 min', price: '₹', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

const PopularRestaurants = () => {
  const [checkoutRestaurant, setCheckoutRestaurant] = useState(null);

  useEffect(() => {
    if (checkoutRestaurant) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [checkoutRestaurant]);

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our <span className="text-primary">Partners</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] transition-all duration-500 transform hover:-translate-y-2 group relative border border-gray-100 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Image & Heart */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img 
                  src={restaurant.img} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md transform hover:scale-110 z-10">
                  <Heart size={20} />
                </button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-darkHero/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white shadow-md z-10">
                  {restaurant.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-extrabold text-xl text-gray-900 leading-tight">{restaurant.name}</h3>
                  <div className="flex items-center bg-gray-100 px-2.5 py-1 rounded-lg text-sm text-gray-800 font-bold shadow-inner">
                    <Star size={14} className="mr-1 text-yellow-500 fill-current" /> {restaurant.rating}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-6 font-medium gap-3">
                  <span className="flex items-center bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    <Clock size={14} className="mr-1.5 text-primary" /> {restaurant.time}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-600 font-bold tracking-wider">{restaurant.price}</span>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => setCheckoutRestaurant({ ...restaurant, price: '₹450' })} // Mocking a standard order price for restaurants
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-primary to-yellow-400 hover:to-yellow-500 text-darkHero rounded-xl font-black transition-all duration-300 shadow-[0_4px_15px_rgba(250,204,21,0.2)] hover:shadow-[0_8px_20px_rgba(250,204,21,0.4)] transform group-hover:scale-[1.02]"
                  >
                    Order Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={!!checkoutRestaurant} 
        onClose={() => setCheckoutRestaurant(null)} 
        item={checkoutRestaurant} 
      />
    </section>
  );
};

export default PopularRestaurants;

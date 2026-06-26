import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';

const foods = [
  { id: 1, name: 'Double Cheese Margherita', price: '₹350', rating: 4.8, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Spicy Chicken Burger', price: '₹250', rating: 4.6, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Pasta Carbonara', price: '₹450', rating: 4.7, img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Strawberry Shake', price: '₹150', rating: 4.5, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

const FeaturedFood = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Foods</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <button className="text-primary font-semibold hover:underline hidden md:block">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foods.map((food, index) => (
            <div 
              key={food.id} 
              className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
                <img 
                  src={food.img} 
                  alt={food.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-3">
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition transform hover:scale-110">
                    <Heart size={20} />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition transform hover:scale-110">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{food.name}</h3>
                <div className="flex items-center text-sm text-yellow-500 font-bold ml-2">
                  <Star size={14} className="fill-current mr-1" /> {food.rating}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-800">{food.price}</span>
                <button className="bg-gray-800 hover:bg-primary text-white p-2 rounded-lg transition">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFood;

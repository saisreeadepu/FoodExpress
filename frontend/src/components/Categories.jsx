import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

const categories = [
  { 
    id: 1, 
    name: 'Pizza', 
    count: '120 Restaurants', 
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 101, name: 'Margherita Classic', price: '₹350', rating: 4.8, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Fresh basil, mozzarella, and San Marzano tomatoes.' },
      { id: 102, name: 'Pepperoni Blast', price: '₹450', rating: 4.9, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Double pepperoni with a spicy marinara base.' },
      { id: 103, name: 'Truffle Mushroom', price: '₹550', rating: 4.7, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Earthy mushrooms, truffle oil, and white sauce.' },
      { id: 104, name: 'BBQ Chicken Supreme', price: '₹480', rating: 4.6, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Grilled chicken, red onions, and smoky BBQ drizzle.' }
    ]
  },
  { 
    id: 2, 
    name: 'Broast', 
    count: '85 Restaurants', 
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 201, name: 'Spicy Broast Meal', price: '₹280', rating: 4.6, img: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: '3 pcs spicy fried chicken with garlic dip and fries.' },
      { id: 202, name: 'Family Broast Bucket', price: '₹850', rating: 4.8, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: '12 pcs classic broast, family fries, coleslaw, and buns.' },
      { id: 203, name: 'Crispy Wings Box', price: '₹320', rating: 4.7, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: '8 spicy breaded wings served with honey mustard.' },
      { id: 204, name: 'Broast Tenders Combo', price: '₹350', rating: 4.5, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: '5 boneless breast tenders, curly fries, and ranch.' }
    ]
  },
  { 
    id: 3, 
    name: 'Chicken', 
    count: '200 Restaurants', 
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 301, name: 'Chicken 65', price: '₹220', rating: 4.7, img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Spicy, deep-fried chicken starter.' },
      { id: 302, name: 'Butter Chicken', price: '₹340', rating: 4.9, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Rich, creamy, tomato-based curry.' },
      { id: 303, name: 'Chicken Tikka Masala', price: '₹320', rating: 4.8, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Roasted marinated chicken chunks in a spiced curry sauce.' },
      { id: 304, name: 'Tandoori Chicken Half', price: '₹280', rating: 4.6, img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Yogurt & spice marinated chicken cooked in a clay oven.' }
    ]
  },
  { 
    id: 4, 
    name: 'Burgers', 
    count: '150 Restaurants', 
    img: '/burger.webp',
    products: [
      { id: 401, name: 'Smash Cheeseburger', price: '₹180', rating: 4.8, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Double smashed patty, American cheese, secret sauce.' },
      { id: 402, name: 'Crispy Chicken Burger', price: '₹200', rating: 4.5, img: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Buttermilk fried chicken breast, spicy mayo, pickles.' },
      { id: 403, name: 'Spicy Jalapeno Burger', price: '₹220', rating: 4.7, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Beef patty topped with pepper jack and fiery jalapeños.' },
      { id: 404, name: 'Truffle Mushroom Swiss', price: '₹250', rating: 4.9, img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Gourmet beef patty, sautéed mushrooms, Swiss cheese, truffle mayo.' }
    ]
  },
  { 
    id: 5, 
    name: 'Shakes', 
    count: '60 Restaurants', 
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 501, name: 'Oreo Mudslide', price: '₹150', rating: 4.6, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Thick vanilla blend with crushed Oreos and fudge.' },
      { id: 502, name: 'Strawberry Dream', price: '₹140', rating: 4.4, img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Made with real strawberries and topped with whipped cream.' },
      { id: 503, name: 'Classic Chocolate Malt', price: '₹160', rating: 4.8, img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Old-school rich chocolate malted shake.' },
      { id: 504, name: 'Caramel Hazelnut Blast', price: '₹180', rating: 4.7, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Vanilla bean ice cream, caramel syrup, roasted hazelnuts.' }
    ]
  },
  { 
    id: 6, 
    name: 'Sandwiches', 
    count: '90 Restaurants', 
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 601, name: 'Club Sandwich', price: '₹220', rating: 4.5, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Triple decker with roast chicken, egg, and bacon.' },
      { id: 602, name: 'Grilled Cheese Tomato', price: '₹150', rating: 4.7, img: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Sharp cheddar and roasted tomatoes on sourdough.' },
      { id: 603, name: 'Philly Cheesesteak', price: '₹280', rating: 4.9, img: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Thinly sliced ribeye, melted provolone, grilled onions.' },
      { id: 604, name: 'Turkey BLT', price: '₹190', rating: 4.6, img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Smoked turkey breast, crispy bacon, lettuce, and tomato.' }
    ]
  },
  { 
    id: 7, 
    name: 'Pasta', 
    count: '110 Restaurants', 
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 701, name: 'Creamy Alfredo', price: '₹320', rating: 4.6, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Fettuccine in a rich butter and parmesan sauce.' },
      { id: 702, name: 'Spicy Arrabbiata', price: '₹290', rating: 4.8, img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Penne tossed in a fiery garlic and tomato sauce.' },
      { id: 703, name: 'Classic Bolognese', price: '₹350', rating: 4.9, img: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Spaghetti with slow-cooked rich meat ragu.' },
      { id: 704, name: 'Pesto Mac & Cheese', price: '₹310', rating: 4.7, img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Gourmet macaroni baked with fresh basil pesto and three cheeses.' }
    ]
  },
  { 
    id: 8, 
    name: 'Desserts', 
    count: '140 Restaurants', 
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    products: [
      { id: 801, name: 'Chocolate Lava Cake', price: '₹190', rating: 4.9, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Warm molten chocolate center, served with vanilla ice cream.' },
      { id: 802, name: 'New York Cheesecake', price: '₹210', rating: 4.7, img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Classic dense and creamy cheesecake with a graham cracker crust.' },
      { id: 803, name: 'Tiramisu Cup', price: '₹250', rating: 4.8, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Authentic Italian coffee-flavored dessert in a jar.' },
      { id: 804, name: 'Red Velvet Brownie', price: '₹150', rating: 4.6, img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', desc: 'Fudgy red velvet brownie topped with cream cheese frosting.' }
    ]
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState(null);

  useEffect(() => {
    if (selectedCategory || checkoutItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedCategory, checkoutItem]);

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Explore by <span className="text-primary">Category</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id} 
              onClick={() => setSelectedCategory(category)}
              className="group cursor-pointer flex flex-col items-center bg-gradient-to-br from-[#4A3018]/90 to-[#2A1808]/90 backdrop-blur-2xl border border-amber-500/20 p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(69,26,3,0.3)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.3)] hover:from-[#5C3D1E]/95 hover:to-[#38200A]/95 transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative Gold Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[4px] border-amber-700/40 group-hover:border-amber-400 transition-all duration-500 transform group-hover:scale-105 mb-6 relative z-10">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={category.img} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-extrabold text-2xl text-amber-50 group-hover:text-amber-400 transition-colors duration-300 relative z-10">{category.name}</h3>
              <div className="mt-3 px-4 py-1.5 bg-amber-900/30 backdrop-blur-sm rounded-full border border-amber-500/20 relative z-10 group-hover:bg-amber-400/20 transition-colors duration-300">
                <p className="text-xs text-amber-200 group-hover:text-amber-300 font-bold tracking-wide uppercase">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Products Modal Overlay */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-darkHero/70 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            ></div>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col border border-white/20"
            >
              {/* Modal Header */}
              <div className="relative h-48 md:h-64 overflow-hidden bg-gray-900 flex-shrink-0">
                <img src={selectedCategory.img} alt={selectedCategory.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-darkHero to-transparent"></div>
                
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-darkHero p-2 rounded-full transition-colors shadow-lg"
                >
                  <X size={24} />
                </button>

                <div className="absolute bottom-6 left-8 z-10">
                  <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{selectedCategory.name}</h2>
                  <p className="text-primary font-bold mt-2 tracking-wider uppercase text-sm">{selectedCategory.products.length} Products Available</p>
                </div>
              </div>

              {/* Modal Body: Products List */}
              <div className="p-8 overflow-y-auto bg-gray-50 custom-scrollbar flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                  {selectedCategory.products.map((product) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h4>
                            <div className="flex items-center gap-1 text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
                              <Star className="text-yellow-500 fill-current" size={14} />
                              {product.rating}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2 leading-snug">{product.desc}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-black text-xl text-darkHero">{product.price}</span>
                          <button 
                            onClick={() => setCheckoutItem(product)}
                            className="flex items-center gap-2 bg-gradient-to-r from-primary to-yellow-400 hover:to-yellow-500 text-darkHero px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                          >
                            <ShoppingCart size={16} />
                            Order
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={!!checkoutItem} 
        onClose={() => setCheckoutItem(null)} 
        item={checkoutItem} 
      />
    </section>
  );
};

export default Categories;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChefHat, Flame, X, CheckCircle } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Authentic Hyderabadi Chicken Biryani",
    category: "Indian Cuisine",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "The legendary, aromatic basmati rice dish layered with marinated chicken and cooked to perfection on 'dum'.",
    prepTime: "90 mins",
    difficulty: "Hard",
    ingredients: [
      "1 kg chicken, cut into medium pieces",
      "3 cups premium basmati rice, soaked",
      "1 cup plain yogurt (curd)",
      "3 large onions, thinly sliced and deep-fried (birista)",
      "2 tbsp ginger-garlic paste",
      "Whole spices: cardamom, cloves, cinnamon, bay leaves, shahi jeera",
      "Biryani masala powder",
      "Fresh mint and coriander leaves",
      "Saffron soaked in warm milk",
      "Ghee and oil"
    ],
    process: [
      "Marinate the chicken with yogurt, ginger-garlic paste, half the fried onions, mint, coriander, biryani masala, and whole spices. Let it rest for at least 2 hours.",
      "Boil the soaked basmati rice in heavily salted water with a few whole spices until it is 70% cooked. Drain the water.",
      "In a heavy-bottomed pot, spread the marinated chicken evenly at the base.",
      "Layer the partially cooked rice over the raw chicken.",
      "Top with the remaining fried onions, fresh herbs, saffron milk, and generous drizzles of ghee.",
      "Seal the pot with dough or a tight lid and cook on high heat for 10 minutes, then lower the heat to a minimum and cook on 'dum' for 40 minutes.",
      "Let it rest for 10 minutes before gently mixing and serving hot with raita."
    ]
  },
  {
    id: 2,
    title: "Rich & Spicy Mutton Biryani",
    category: "Indian Cuisine",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Tender, fall-off-the-bone mutton cooked with fragrant spices and long-grain basmati rice.",
    prepTime: "120 mins",
    difficulty: "Hard",
    ingredients: [
      "1 kg tender mutton on the bone",
      "3 cups aged basmati rice",
      "1 cup thick yogurt",
      "Fried onions (birista) from 4 onions",
      "Special whole garam masala",
      "Kashmiri red chili powder & turmeric",
      "Fresh ginger and garlic paste",
      "Coriander and mint leaves",
      "Saffron water and kewra essence",
      "Pure desi ghee"
    ],
    process: [
      "Tenderize the mutton by marinating it with raw papaya paste (optional), yogurt, ginger-garlic paste, red chili powder, turmeric, and salt for 4-6 hours.",
      "In a pressure cooker, partially cook the mutton with a little water until it is 80% tender.",
      "Parboil the basmati rice with whole spices and salt until 75% done.",
      "In a large, heavy vessel (handi), layer the cooked mutton with its thick gravy at the bottom.",
      "Spread the parboiled rice on top. Sprinkle fried onions, mint, coriander, saffron water, kewra, and ghee.",
      "Seal the handi tightly and cook on 'dum' over a very low flame for 30-40 minutes.",
      "Serve piping hot with mirchi ka salan and onion raita."
    ]
  },
  {
    id: 3,
    title: "Restaurant-Style Chicken 65",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "A spicy, deep-fried chicken starter originating from Chennai. Crispy on the outside, juicy inside.",
    prepTime: "40 mins",
    difficulty: "Medium",
    ingredients: [
      "500g boneless chicken, bite-sized cubes",
      "2 tbsp thick yogurt",
      "1 tbsp Kashmiri red chili powder",
      "1 tbsp ginger-garlic paste",
      "1 tsp coriander powder & 1/2 tsp garam masala",
      "1/2 lemon, juiced",
      "2 tbsp cornflour & 1 tbsp rice flour",
      "1 egg",
      "Curry leaves and slit green chilies for tempering",
      "Oil for deep frying"
    ],
    process: [
      "Clean and pat dry the chicken pieces.",
      "In a bowl, mix yogurt, red chili powder, ginger-garlic paste, coriander powder, garam masala, lemon juice, and salt. Add the chicken and marinate for 30 minutes.",
      "Before frying, mix the egg, cornflour, and rice flour into the marinated chicken to create a thick coating.",
      "Heat oil in a deep pan. Drop the chicken pieces in one by one and fry on medium heat until golden and crispy. Remove and drain on paper towels.",
      "In a separate pan, heat 1 tbsp oil. Sauté slit green chilies, lots of fresh curry leaves, and a dash of garlic until fragrant.",
      "Toss the fried chicken in this tempering for 1 minute until coated with the spicy, aromatic flavor. Serve hot."
    ]
  },
  {
    id: 4,
    title: "Crispy Spicy Chicken Lollipops",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "The ultimate party snack! Frenched chicken winglets coated in a spicy red batter and deep-fried.",
    prepTime: "35 mins",
    difficulty: "Medium",
    ingredients: [
      "10 chicken winglets, frenched (meat pushed to one end)",
      "1 tbsp soy sauce",
      "1 tbsp dark chili sauce",
      "1 tbsp ginger-garlic paste",
      "1/2 tsp black pepper powder",
      "1/4 cup all-purpose flour (maida)",
      "1/4 cup cornflour",
      "1 tsp Kashmiri red chili powder (for color)",
      "1 egg",
      "Oil for deep frying"
    ],
    process: [
      "Prepare the chicken lollipops by pushing the meat to the top of the bone if not already bought frenched.",
      "In a bowl, mix soy sauce, chili sauce, ginger-garlic paste, black pepper, and salt. Marinate the lollipops in this for 20 minutes.",
      "In a separate bowl, prepare a thick batter using flour, cornflour, Kashmiri chili powder, a pinch of salt, the egg, and a little water.",
      "Heat oil in a deep kadhai on medium-high heat.",
      "Dip each marinated chicken lollipop into the batter, ensuring the meaty part is well-coated, while holding the bone.",
      "Carefully drop them into the hot oil. Fry for 8-10 minutes until deeply golden, crispy, and cooked through.",
      "Serve hot with Schezwan sauce or garlic mayonnaise."
    ]
  },
  {
    id: 5,
    title: "Classic Margherita Pizza",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Master the art of the perfect Neapolitan-style Margherita pizza with our step-by-step guide.",
    prepTime: "45 mins",
    difficulty: "Medium",
    ingredients: [
      "2 cups 00 flour",
      "1/2 tsp active dry yeast",
      "San Marzano tomatoes",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Extra virgin olive oil"
    ],
    process: [
      "Prepare the dough by mixing flour, yeast, salt, and water. Knead for 10 minutes until smooth.",
      "Let the dough rise in a warm place for at least 24 hours for the best flavor.",
      "Crush the San Marzano tomatoes with a pinch of salt to create the base sauce.",
      "Stretch the dough into a 12-inch circle, spread the sauce, and add torn mozzarella.",
      "Bake in a preheated pizza oven at 800°F (or your home oven at max temp on a pizza stone) until crust is blistered.",
      "Garnish with fresh basil and a drizzle of olive oil immediately after baking."
    ]
  },
  {
    id: 6,
    title: "Gourmet Smash Cheeseburger",
    category: "American",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn how to make the ultimate juicy, crispy-edged smash burger at home.",
    prepTime: "20 mins",
    difficulty: "Easy",
    ingredients: [
      "1 lb ground beef (80/20)",
      "4 brioche buns",
      "American cheese slices",
      "Special burger sauce",
      "Dill pickles",
      "Butter for toasting"
    ],
    process: [
      "Divide the ground beef into loosely packed 2oz meatballs. Do not overwork the meat.",
      "Butter and toast the brioche buns on a hot griddle until golden brown.",
      "Place the meatballs on a smoking hot cast-iron skillet and smash them flat with a heavy spatula.",
      "Season generously with salt and pepper. Cook for 2 minutes until a deep crust forms.",
      "Flip the patties, immediately place a slice of cheese on each, and cook for 1 more minute.",
      "Stack two patties on a bun, top with pickles and secret sauce, and serve immediately."
    ]
  },
  {
    id: 7,
    title: "The Ultimate Avocado Salad Bowl",
    category: "Healthy Living",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "A nutrient-packed, incredibly vibrant salad bowl that takes only minutes to prepare.",
    prepTime: "15 mins",
    difficulty: "Easy",
    ingredients: [
      "2 ripe avocados, sliced",
      "Mixed spring greens",
      "Cherry tomatoes, halved",
      "Red onion, thinly sliced",
      "Feta cheese crumbles",
      "Lemon vinaigrette dressing"
    ],
    process: [
      "Wash and thoroughly dry the mixed greens to ensure the dressing adheres properly.",
      "Slice the avocados, tomatoes, and red onions.",
      "Arrange the greens as a base in a wide, shallow bowl.",
      "Beautifully layer the avocado slices, tomatoes, and onions on top.",
      "Sprinkle generously with feta cheese.",
      "Drizzle the lemon vinaigrette right before serving and toss lightly."
    ]
  },
  {
    id: 8,
    title: "Decadent Chocolate Lava Cake",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "The perfect molten chocolate core surrounded by a rich, fluffy cake.",
    prepTime: "25 mins",
    difficulty: "Medium",
    ingredients: [
      "1/2 cup unsalted butter",
      "6 oz high-quality dark chocolate",
      "2 large eggs + 2 egg yolks",
      "1/4 cup sugar",
      "Pinch of salt",
      "2 tbsp all-purpose flour"
    ],
    process: [
      "Preheat the oven to 425°F (220°C). Butter and lightly flour four ramekins.",
      "Melt the butter and dark chocolate together in a double boiler until smooth.",
      "In a separate bowl, whisk the eggs, egg yolks, sugar, and salt until thick and pale.",
      "Fold the melted chocolate mixture into the egg mixture until combined.",
      "Gently fold in the flour until just incorporated. Do not overmix.",
      "Divide the batter into ramekins and bake for exactly 12 minutes. The edges should be firm but the center jiggly.",
      "Invert onto a plate, dust with powdered sugar, and serve with vanilla ice cream."
    ]
  }
];

// Variants for staggered text "writing" animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

const Blog = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedRecipe) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedRecipe]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-24 font-poppins relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            The FoodExpress <span className="text-primary">Recipes</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of delicious recipes with step-by-step instructions.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                {/* Spinning plate animation for recipes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[120%] h-[120%] rounded-full overflow-hidden shadow-2xl"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-darkHero shadow-lg uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-6 mb-4 text-gray-500 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    {post.prepTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={16} className="text-red-500" />
                    {post.difficulty}
                  </div>
                </div>

                <h3 className="font-extrabold text-2xl text-gray-900 mb-4 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

                {/* Actions */}
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedRecipe(post)}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-yellow-400 hover:to-yellow-500 text-darkHero font-black py-4 px-6 rounded-2xl transition-all duration-300 shadow-[0_8px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_12px_25px_rgba(250,204,21,0.5)] transform group-hover:scale-[1.02]"
                  >
                    <ChefHat size={22} />
                    Open Full Recipe
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Recipe Modal Overlay */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Dark Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-darkHero/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedRecipe(null)}
            ></div>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row border border-white/20"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-6 right-6 z-20 bg-white/50 backdrop-blur-md hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              {/* Left Column: Spinning 3D Food Plate */}
              <div className="w-full md:w-2/5 bg-gradient-to-br from-gray-50 to-gray-200 p-12 flex flex-col items-center justify-center relative overflow-hidden border-r border-gray-100">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-8 relative z-10 text-center tracking-tight leading-tight">
                  {selectedRecipe.title}
                </h3>

                <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
                  <div className="absolute inset-0 bg-black/10 rounded-full blur-2xl transform translate-y-10 scale-90"></div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img 
                      src={selectedRecipe.image} 
                      alt={selectedRecipe.title} 
                      className="w-full h-full object-cover scale-110"
                    />
                  </motion.div>
                </div>
                
                <div className="flex gap-6 mt-12 relative z-10">
                  <div className="bg-white px-5 py-3 rounded-2xl shadow-md flex flex-col items-center">
                    <Clock className="text-primary mb-1" size={24} />
                    <span className="text-xs text-gray-500 font-bold uppercase">{selectedRecipe.prepTime}</span>
                  </div>
                  <div className="bg-white px-5 py-3 rounded-2xl shadow-md flex flex-col items-center">
                    <Flame className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-gray-500 font-bold uppercase">{selectedRecipe.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: "Writing Content" Animation Details */}
              <div className="w-full md:w-3/5 p-8 md:p-14 overflow-y-auto bg-white custom-scrollbar">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants} className="mb-10">
                    <h4 className="text-xl font-black text-darkHero mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                      <CheckCircle className="text-primary" size={24} /> 
                      Ingredients
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedRecipe.ingredients.map((item, idx) => (
                        <motion.li 
                          variants={itemVariants}
                          key={idx} 
                          className="text-gray-700 flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl shadow-sm border border-gray-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="font-medium text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-black text-darkHero mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                      <ChefHat className="text-primary" size={24} /> 
                      Step-by-Step Process
                    </h4>
                    <ol className="space-y-6">
                      {selectedRecipe.process.map((step, idx) => (
                        <motion.li 
                          variants={itemVariants}
                          key={idx} 
                          className="flex gap-5 group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-darkHero text-white flex items-center justify-center font-black shadow-md group-hover:bg-primary group-hover:text-darkHero transition-colors duration-300">
                            {idx + 1}
                          </div>
                          <p className="pt-2 text-gray-600 leading-relaxed font-medium">{step}</p>
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-12 text-center">
                     <p className="text-primary font-bold italic">Bon Appétit! Enjoy your meal.</p>
                  </motion.div>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;

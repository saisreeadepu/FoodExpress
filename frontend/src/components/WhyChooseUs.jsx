import React from 'react';
import { Truck, Utensils, CreditCard, ShieldCheck } from 'lucide-react';

const features = [
  { id: 1, icon: <Truck size={40} className="text-primary mb-4" />, title: 'Fast Delivery', desc: 'Get your food delivered in under 30 minutes, hot and fresh.' },
  { id: 2, icon: <Utensils size={40} className="text-primary mb-4" />, title: 'Fresh Food', desc: 'We only partner with restaurants that guarantee fresh ingredients.' },
  { id: 3, icon: <CreditCard size={40} className="text-primary mb-4" />, title: 'Secure Payments', desc: 'Multiple payment options with industry-leading security.' },
  { id: 4, icon: <ShieldCheck size={40} className="text-primary mb-4" />, title: 'Best Quality', desc: 'Rated #1 in food quality by our loyal customers across the city.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-300/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We don't just deliver food; we deliver an experience. Here is why thousands of customers choose FoodExpress every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 transition duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-block p-4 bg-gray-50 rounded-full group-hover:bg-primary/10 transition duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

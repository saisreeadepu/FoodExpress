import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 font-poppins relative bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
      {/* Light Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-lg z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wider mb-4 uppercase shadow-sm">Reach Out</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight drop-shadow-sm">
            Get in <span className="text-primary drop-shadow-md">Touch</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-medium text-lg">
            Have a question, feedback, or need support? Our team is available and ready to help you with your FoodExpress experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8"
        >
          {/* Left Side: Contact Information Cards */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-primary/20 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-sm">
                <MapPin className="text-primary group-hover:text-darkHero" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Our Headquarters</h4>
              <p className="text-gray-600 font-medium">123 Food Street, Tasty City<br/>Foodland, FL 12345</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-primary/20 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-sm">
                <Phone className="text-primary group-hover:text-darkHero" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 font-medium">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2 group flex gap-4">
              <div className="flex-1">
                 <div className="bg-primary/20 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-sm">
                    <Mail className="text-primary group-hover:text-darkHero" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 font-medium text-sm">support@foodexpress.com</p>
              </div>
               <div className="flex-1">
                 <div className="bg-primary/20 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-sm">
                    <Clock className="text-primary group-hover:text-darkHero" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-600 font-medium text-sm">Mon-Sun<br/>8AM - 11PM</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Light Glassmorphism Form */}
          <motion.div variants={itemVariants} className="lg:w-2/3 bg-white/60 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <h2 className="text-3xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="How can we help you today?" 
                  className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="6" 
                  placeholder="Write your message here..." 
                  className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm resize-none custom-scrollbar"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-yellow-400 hover:to-yellow-500 text-darkHero font-black py-5 px-8 rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_12px_25px_rgba(250,204,21,0.5)] transform hover:-translate-y-1 mt-8"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

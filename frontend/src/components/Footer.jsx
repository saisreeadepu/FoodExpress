import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Us */}
          <div data-aos="fade-up" data-aos-delay="0">
            <div className="text-3xl font-bold text-white mb-6">
              Food<span className="text-primary">Express</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are dedicated to providing the best food delivery experience, bringing your favorite meals right to your doorstep hot and fresh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-darkHero transition">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-darkHero transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-darkHero transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-darkHero transition">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-primary transition">Restaurants</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/categories/pizza" className="text-gray-400 hover:text-primary transition">Pizza</Link></li>
              <li><Link to="/categories/burger" className="text-gray-400 hover:text-primary transition">Burgers</Link></li>
              <li><Link to="/categories/chicken" className="text-gray-400 hover:text-primary transition">Chicken</Link></li>
              <li><Link to="/categories/vegan" className="text-gray-400 hover:text-primary transition">Vegan</Link></li>
              <li><Link to="/categories/dessert" className="text-gray-400 hover:text-primary transition">Desserts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-1" />
                <span className="text-gray-400">123 Street Name, City, Country, ZIP Code</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-3" />
                <span className="text-gray-400">support@foodexpress.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center" data-aos="fade-in">
          <p className="text-gray-500">
            &copy; 2026 FoodExpress. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

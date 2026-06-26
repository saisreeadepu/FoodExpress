import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/categories', label: 'Categories' },
  { path: '/restaurants', label: 'Restaurants' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md glass-effect">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-darkHero">
          Food<span className="text-primary">Express</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative text-sm font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'}
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
                  ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-800 hover:text-primary transition">
            <Search size={24} />
          </button>
          <button className="text-gray-800 hover:text-primary transition relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
          <button className="bg-primary hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold transition transform hover:scale-105">
            Restaurant Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;

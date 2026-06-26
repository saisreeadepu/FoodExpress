import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import PopularRestaurants from '../components/PopularRestaurants';
import FeaturedFood from '../components/FeaturedFood';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <PopularRestaurants />
      <FeaturedFood />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;

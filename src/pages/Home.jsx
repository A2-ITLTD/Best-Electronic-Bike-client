import React from "react";
import Hero from "./../components/Home/Hero";
import Features from "./../components/Home/Features";
import FeaturedProducts from "./../components/Home/FeaturedProducts";
import Testimonials from "./../components/Home/Testimonials";
import Logo from "../components/Shared/Logo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Home;

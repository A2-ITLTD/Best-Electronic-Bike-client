import React from "react";
import Hero from "./../components/Home/Hero";
import Features from "./../components/Home/Features";
import FeaturedProducts from "./../components/Home/FeaturedProducts";
import Testimonials from "./../components/Home/Testimonials";
import Logo from "../components/Shared/Logo";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Bike Review | Premium Electric Bikes & Scooters</title>
        <meta
          name="description"
          content="Discover premium electric bikes and scooters at Best Bike Review. Get expert reviews, long-range options, and the best picks for modern urban mobility."
        />
        {/* Optional Open Graph / Twitter tags */}
        <meta property="og:title" content="Best Bike Review" />
        <meta
          property="og:description"
          content="Discover premium electric bikes and scooters at Best Bike Review. Get expert reviews, long-range options, and the best picks for modern urban mobility."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
};

export default Home;

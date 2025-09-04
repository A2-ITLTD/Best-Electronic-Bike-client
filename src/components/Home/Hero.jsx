import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Battery, Zap, MapPin, Shield } from "lucide-react";

const Hero = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const products = [
    {
      id: "4",
      name: "ANCHEER Electric Bike",
      brand: "ANCHEER",
      price: 519.99,
      rating: 8.5,
      reviews: 442,
      image: "/assets/5/FiveE.jpg",
      category: "Fat Tire Electric Bike",
      highlight: "60 Mile Range",
    },
    {
      id: "23",
      name: "Jasion EB5 Electric Bike",
      brand: "Jasion",
      price: 379.89,
      rating: 8.5,
      reviews: 2047,
      image: "/assets/30/30A.jpg",
      category: "Commuter Bike",
      highlight: "40 Mile Range",
    },
    {
      id: "39",
      name: "A2 Folding Electric Bike",
      brand: "Aipas",
      price: 689.0,
      rating: 9.5,
      reviews: 129,
      image: "/assets/57/57A.jpg",
      category: "Folding Bike",
      highlight: "62 Mile Range",
    },
    {
      id: "13",
      name: "Gotrax Electric Scooter",
      brand: "Gotrax",
      price: 359.99,
      rating: 9.0,
      reviews: 1758,
      image: "/assets/17/17D.jpg",
      category: "Electric Scooter",
      highlight: "25 Mile Range",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[currentProductIndex];

  return (
    <div className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-900/30 to-emerald-600/10"></div>
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-bounce"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-emerald-400 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-bounce"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-300 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-bounce"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          <div className="text-white space-y-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium mb-4 border border-white/20">
                <span className="text-emerald-300">
                  ⚡ Eco-Friendly Transportation
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ride The
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  Electric Future
                </span>
              </h1>

              <p className="text-lg text-blue-100 mt-4 leading-relaxed max-w-md">
                Discover premium electric bikes and scooters designed for modern
                urban mobility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center">
                <div className="bg-cyan-500/20 p-2 rounded-lg mr-3">
                  <Battery className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <div className="font-bold text-cyan-400 text-sm">
                    Long Range
                  </div>
                  <div className="text-blue-100 text-xs">60+ miles</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-emerald-500/20 p-2 rounded-lg mr-3">
                  <Zap className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-bold text-emerald-400 text-sm">
                    Powerful
                  </div>
                  <div className="text-blue-100 text-xs">Up to 800W</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-blue-400 text-sm">
                    All Terrains
                  </div>
                  <div className="text-blue-100 text-xs">City & Off-road</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-purple-400 text-sm">Safe</div>
                  <div className="text-blue-100 text-xs">UL Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rotating Product Preview - Made narrower with full-width image */}
          <div className="lg:block w-full max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl transform rotate-1 opacity-30 blur-md"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transform transition-all duration-700">
                {/* Image section - full width */}
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-900 to-emerald-900">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {currentProduct.category}
                  </div>
                  <div className="absolute top-2 right-2 flex items-center bg-black/40 text-white text-xs px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {currentProduct.rating}
                    <span className="text-white/70 ml-1">
                      ({currentProduct.reviews})
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center bg-emerald-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                    <Zap className="h-3 w-3 mr-1" />
                    {currentProduct.highlight}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-3">
                  <h3 className="text-md font-bold text-white">
                    {currentProduct.brand}
                  </h3>
                  <p className="text-blue-100 text-xs mt-1 line-clamp-2">
                    {currentProduct.name}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-lg font-bold text-emerald-400">
                      ${currentProduct.price}
                    </div>
                    <Link
                      to={`/products/${currentProduct.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-xs font-medium"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Indicator dots */}
                <div className="flex justify-center pb-3 space-x-1">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentProductIndex
                          ? "bg-gradient-to-r from-cyan-400 to-emerald-400 w-3"
                          : "bg-white/40"
                      }`}
                      onClick={() => setCurrentProductIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

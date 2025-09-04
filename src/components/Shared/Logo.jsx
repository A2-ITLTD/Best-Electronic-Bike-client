// src/components/Logo.jsx
import React from "react";
import { Bike, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ scrolled }) => {
  return (
    <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
      {/* Bike Icon */}
      <div className="relative flex items-center justify-center">
        <Bike
          className={`h-8 w-8 transition-all duration-500 
          ${
            scrolled
              ? "text-emerald-700 drop-shadow-md"
              : "text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]"
          }
          group-hover:scale-110`}
        />
        <Zap
          className={`absolute -top-1 -right-1 h-4 w-4 transition-all duration-500
          ${scrolled ? "text-yellow-500" : "text-yellow-300 animate-pulse"}`}
        />
      </div>

      {/* Logo Text */}
      <h1
        className={`flex items-center space-x-2 text-2xl font-extrabold tracking-wide transition-all duration-500 
          ${
            scrolled
              ? "bg-gradient-to-r from-emerald-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent drop-shadow-md"
              : "bg-gradient-to-r from-green-300 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          } 
        `}
      >
        <span className="font-serif">Best</span>
        <span className="font-sans">Electric</span>
        <span className="italic font-black">Bike</span>
      </h1>
    </Link>
  );
};

export default Logo;

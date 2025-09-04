import React from "react";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-emerald-800/95 backdrop-blur-sm text-white relative overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-5">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl shadow-lg transform transition-transform hover:scale-110"></div>
              <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                <Logo />
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading the electric revolution with premium e-bikes for every
              lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Products", "About Us", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "")}`
                    }
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 hover:text-white transition">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition">
                <Mail className="h-5 w-5 text-green-400" />
                <span>info@electricride.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>123 Electric Ave, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700/50 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm tracking-wide hover:text-gray-200 transition">
            © 2025 ElectricRide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

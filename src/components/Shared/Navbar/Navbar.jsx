import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Sparkles } from "lucide-react";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-emerald-800/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div
                className={`relative ${
                  scrolled
                    ? "bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800"
                    : "bg-white"
                }  rounded-lg transition-all duration-500 group-hover:scale-110`}
              ></div>
              <span
                className={`text-xl font-bold ${
                  scrolled
                    ? "bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 bg-clip-text text-transparent"
                    : "text-white"
                } transition-all duration-500`}
              >
                <Logo />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group
                    ${
                      isActive(item.href)
                        ? scrolled
                          ? "text-emerald-600"
                          : "text-white"
                        : scrolled
                        ? "text-gray-600 hover:text-emerald-600"
                        : "text-gray-200 hover:text-white"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 group-hover:w-full ${
                      isActive(item.href) ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Explore Bikes Button + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Link
                to="/products"
                className="hidden md:block relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">Explore Bikes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20"></div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${
                  scrolled
                    ? "bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 text-white"
                    : "bg-white text-emerald-600"
                } transition-colors duration-300`}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 mr-1" />
                ) : (
                  <Menu className="h-5 w-5 mr-1" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              scrolled ? "bg-white" : "bg-slate-900"
            } border-t ${
              scrolled ? "border-gray-100" : "border-slate-700"
            } shadow-lg transition-all duration-300`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200
                    ${
                      isActive(item.href)
                        ? scrolled
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-white bg-slate-800"
                        : scrolled
                        ? "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                        : "text-gray-200 hover:text-white hover:bg-slate-800"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2 px-3">
                <Link
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 text-white text-center px-4 py-3 rounded-lg font-medium shadow-md mt-2"
                >
                  Explore Bikes
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer so content is not hidden behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { AiFillAmazonCircle } from "react-icons/ai";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to get correct image URL
  const getImageUrl = (path) => {
    if (path.startsWith("/assets/")) {
      return `https://best-e-bike-server.vercel.app/${path}`;
    }
    return path;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mockProducts = [
          {
            id: "57",
            name: 'Gotrax 20" Folding Electric Bike with 40Miles (Pedal-assist1) by 48V Battery, 20Mph Power by Peak 500W, Adult Electric Bicycle with 5 Pedal-Assist Levels & LCD Display, Suitable for Commuting',
            brand: "Gotrax",
            price: 699.0,
            originalPrice: 1165.0,
            rating: 8.0,
            reviews: 50,
            image: "/assets/2/TwoA.jpg",
            bestseller: true,
            savePercentage: 40,
          },
          {
            id: "58",
            name: "HAPPYRUN 2000W Electric Bike for Adults, 48V 25Ah Removable Battery",
            brand: "HAPPYRUN",
            price: 899.0,
            originalPrice: 1299.0,
            rating: 9.0,
            reviews: 32,
            image: "/assets/2/TwoB.jpg",
            bestseller: false,
            savePercentage: 31,
          },
          {
            id: "59",
            name: 'ANCHEER Electric Mountain Bike, 350W Motor, 20MPH, 20" Fat Tire',
            brand: "ANCHEER",
            price: 649.0,
            originalPrice: 899.0,
            rating: 8.0,
            reviews: 45,
            image: "/assets/2/TwoC.jpg",
            bestseller: true,
            savePercentage: 28,
          },
          {
            id: "60",
            name: "SWAGTRON EB-5 Pro Folding E-Bike with 15.5M Range & 15.5MPH",
            brand: "SWAGTRON",
            price: 549.0,
            originalPrice: 799.0,
            rating: 8.0,
            reviews: 28,
            image: "/assets/2/TwoD.jpg",
            bestseller: false,
            savePercentage: 31,
          },
        ];
        setProducts(mockProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateTitle = (title, maxLength = 60) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <div className="py-12  mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 animate-pulse shadow-sm"
              >
                <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-300 h-4 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 rounded w-3/4 mb-4"></div>
                <div className="bg-gray-300 h-6 rounded w-1/2 mb-2"></div>
                <div className="bg-gray-300 h-10 rounded mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-14 mt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            🌟 Featured Products
          </h2>
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            See All Products
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                />
                {product.bestseller && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Bestseller
                  </span>
                )}
                {product.savePercentage > 0 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Save {product.savePercentage}%
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>

                <h3 className="text-md font-semibold text-gray-900 mb-3 h-12 overflow-hidden">
                  {truncateTitle(product.name)}
                </h3>

                <div className="mt-4 flex justify-between items-center ">
                  <a
                    href={`https://www.amazon.com/s?k=${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#FF9900] hover:bg-[#e88a00] text-white text-sm font-bold py-2 px-2 rounded-lg transition-colors shadow-md mr-2.5"
                  >
                    <span className="mr-0.5 mt-0.5 text-lg">
                      <AiFillAmazonCircle />
                    </span>
                    Buy on Amazon
                  </a>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold underline-offset-2 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

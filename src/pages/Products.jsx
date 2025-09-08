// components/Products.jsx
import React, { useState, useEffect } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/api";
import CouponPopup from "../components/Coupon/CouponPopup";
import { Helmet } from "react-helmet-async";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("rating-high");
  const [viewMode, setViewMode] = useState("list");
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTitle, setPageTitle] = useState("2025 Best Electric Bikes");
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCategory, setCouponCategory] = useState("");

  const PRODUCTS_PER_PAGE = 4;
  const BASE_URL = "https://best-electronic-bike-server-y888.vercel.app";

  const getImageUrl = (path) => {
    if (path.startsWith("/assets/")) {
      return `${BASE_URL}${path}`;
    }
    return path;
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Fetched products:", data);
        setProducts(data?.products);
        setFilteredProducts(data?.products);

        const initialSelectedImages = {};
        data?.products?.forEach((product) => {
          initialSelectedImages[product?.id] = 0;
        });
        setSelectedImages(initialSelectedImages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      return;
    }

    setCouponCategory(category);
    setShowCoupon(true);
  };

  const handleCloseCoupon = () => {
    setShowCoupon(false);
  };

  useEffect(() => {
    let filtered = products;

    filtered = filtered.filter(
      (product) =>
        product?.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product?.category === selectedCategory
      );
      setPageTitle(`2025 Best ${selectedCategory}`);
    } else {
      setPageTitle("2025 Best Electric Bikes");
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating-high":
          return b.rating - a.rating;
        case "popularity":
          return b.reviews - a.reviews;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return b.rating - a.rating;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, priceRange, sortBy, selectedCategory]);

  const changeProductImage = (productId, direction) => {
    setSelectedImages((prev) => {
      const currentIndex = prev[productId];
      const product = products?.find((p) => p?.id === productId);
      if (!product || !product?.images) return prev;

      const totalImages = product?.images?.length;
      let newIndex;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % totalImages;
      } else {
        newIndex = (currentIndex - 1 + totalImages) % totalImages;
      }

      return {
        ...prev,
        [productId]: newIndex,
      };
    });
  };

  const selectImage = (productId, index) => {
    setSelectedImages((prev) => ({
      ...prev,
      [productId]: index,
    }));
  };

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts?.length / PRODUCTS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const truncateTitle = (title, maxLength = 80) => {
    if (title?.length <= maxLength) return title;
    return title?.substring(0, maxLength) + "...";
  };

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const getKeySpecifications = (product) => {
    const specs = [];

    if (product?.specifications) {
      if (product.specifications.motor)
        specs.push(`Motor: ${product.specifications.motor}`);
      if (product.specifications.battery)
        specs.push(`Battery: ${product.specifications.battery}`);
      if (product.specifications.range)
        specs.push(`Range: ${product.specifications.range}`);
      if (product.specifications.maxSpeed)
        specs.push(`Max Speed: ${product.specifications.maxSpeed}`);
      if (product.specifications.gears)
        specs.push(`Gears: ${product.specifications.gears}`);
      if (product.specifications.wheelSize)
        specs.push(`Wheel Size: ${product.specifications.wheelSize}`);
      if (product.specifications.frameMaterial)
        specs.push(`Frame: ${product.specifications.frameMaterial}`);
    }

    if (specs.length < 3 && product.features && product.features.length > 0) {
      const additionalSpecs = product.features.slice(0, 5 - specs.length);
      specs.push(...additionalSpecs);
    }

    return specs.slice(0, 5);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <Helmet>
        <title>{pageTitle} | Best Electric Bike</title>
        <meta
          name="description"
          content={`Explore our selection of ${
            selectedCategory !== "All" ? selectedCategory : "Electric Bikes"
          } for 2025. Compare features, prices, and reviews to find the perfect e-bike.`}
        />
        <meta
          name="keywords"
          content={`${selectedCategory} e-bike, best electric bikes 2025, buy ebike online`}
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect electric bike for your commuting and adventure
            needs. Explore our curated selection of high-performance e-bikes.
          </p>
        </div>

        <div className="lg:flex lg:space-x-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters and Controls */}
            {/* Filters and Controls */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e?.target?.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="rating-high">Rating</option>
                    <option value="popularity">Popularity</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                {/* View Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    View
                  </label>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md transition-colors ${
                        viewMode === "grid"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600"
                      }`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md transition-colors ${
                        viewMode === "list"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600"
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    Showing {indexOfFirstProduct + 1}-
                    {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                    {filteredProducts.length} products
                  </p>
                </div>
              </div>

              {/* Mobile Category Dropdown */}
              <div className="lg:hidden mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories?.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-8 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {currentProducts.map((product) => {
                const currentImageIndex = selectedImages[product.id] || 0;
                {
                  /* Mobile Category Dropdown */
                }
                <div className="lg:hidden mb-6 px-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategorySelect(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>;

                let mainImage;
                if (product.images && product.images.length > 0) {
                  mainImage = product.images[currentImageIndex];
                } else {
                  mainImage = product.image;
                }

                const discountPercentage =
                  product.originalPrice > product.price
                    ? Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )
                    : 0;

                const specifications = getKeySpecifications(product);

                return (
                  <div
                    key={product.id}
                    className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-yellow-500 ${
                      viewMode === "list" ? "flex flex-col md:flex-row" : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div
                      className={`relative ${
                        viewMode === "list" ? "w-full md:w-1/3" : "w-full"
                      }`}
                    >
                      <div className="relative h-50 overflow-hidden">
                        <img
                          src={getImageUrl(mainImage)}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 p-1"
                        />

                        {discountPercentage > 0 && (
                          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold shadow-md">
                            Save {discountPercentage}%
                          </div>
                        )}

                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.bestseller && (
                            <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-md">
                              Bestseller
                            </span>
                          )}
                          {!product.inStock && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-md">
                              Out of Stock
                            </span>
                          )}
                        </div>

                        {product.images && product.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                changeProductImage(product.id, "prev");
                              }}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md transition-all"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                changeProductImage(product.id, "next");
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md transition-all"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>

                      {product.images && product.images.length > 1 && (
                        <div className="flex space-x-2 px-2 py-2 overflow-x-auto scrollbar-hide">
                          {product.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => selectImage(product.id, index)}
                              className={`flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                                currentImageIndex === index
                                  ? "border-blue-600"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <img
                                src={getImageUrl(image)}
                                alt={`${product.name} ${index + 1}`}
                                className="w-full h-full object-contain"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content + Right Side Section */}
                    <div
                      className={`flex-1 flex ${
                        viewMode === "list"
                          ? "flex-col md:flex-row justify-between"
                          : "flex-col"
                      } p-5`}
                    >
                      {/* Left Content */}
                      <div className="flex-1 pr-0 md:pr-4 mb-4 md:mb-0">
                        <div className="flex items-center">
                          <span className="text-xl font-bold text-gray-900 mr-2">
                            {product.rating?.toFixed(1) || "10.0"}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating || 5)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">
                            ({product.reviews || 0} reviews)
                          </span>
                        </div>

                        <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                          {truncateTitle(product.name)}
                        </h3>

                        <div className="mb-2">
                          <ul className="text-sm text-gray-700">
                            {specifications.map((spec, index) => (
                              <li key={index}>• {spec}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <Link
                            to={`/products/${product.id}`}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                          >
                            Read Full Details Specification
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>

                      <div className="w-full md:w-48 flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-4 flex flex-col items-center justify-center">
                        {discountPercentage > 0 && (
                          <span className="text-green-600 font-bold mb-2">
                            Save {discountPercentage}%
                          </span>
                        )}

                        {/* <Link to={product.alibabaUrl}> */}
                        <button
                          onClick={() =>
                            window.open(product.alibabaUrl, "_blank")
                          }
                          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-3 rounded-lg mb-4 transition-colors shadow-md hover:shadow-lg"
                        >
                          Check Price
                        </button>
                        {/* </Link> */}
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                          alt="Amazon"
                          className="h-6 mb-3"
                        />
                        <span className="text-xs text-gray-500">
                          Prime Delivery
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-10">
                <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-wrap justify-center gap-2 sm:gap-0">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-all duration-200 shadow-sm text-sm sm:text-base ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                    }`}
                  >
                    <span className="hidden sm:inline">←</span> Prev
                  </button>

                  {getPaginationRange().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === "number" && paginate(page)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                        currentPage === page
                          ? "bg-blue-600 text-white shadow-md"
                          : page === "..."
                          ? "bg-white text-gray-500 border border-gray-300 cursor-default"
                          : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-300"
                      }`}
                      disabled={page === "..."}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-all duration-200 shadow-sm text-sm sm:text-base ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                    }`}
                  >
                    Next <span className="hidden sm:inline">→</span>
                  </button>
                </nav>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleCategorySelect(category)}
                        className={`text-sm w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-100 text-blue-800 font-medium"
                            : "text-gray-600 hover:text-blue-800 hover:bg-gray-50"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  How We Rank
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Expert Analysis
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our team of experts highlights useful information so you
                      can easily compare products to find the one that's right
                      for you.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Award-Winning Tech
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our technology analyzes thousands of purchase trends to
                      bring you the top product recommendations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  Why Trust Our Reviews?
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">
                    2,000+ shoppers have used Buyer's Guide in the last week to
                    help find the best Electric Bikes.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Learn more about our rankings.
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  Reliable, Safe & Secure
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Helping millions of users make smarter purchases online.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center py-2 bg-gray-50 rounded-lg"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCoupon && (
        <CouponPopup category={couponCategory} onClose={handleCloseCoupon} />
      )}
    </div>
  );
};

export default Products;

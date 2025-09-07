import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Check,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Ruler,
  Droplets,
  Gauge,
  Zap,
  Target,
  ThumbsUp,
  ThumbsDown,
  Crown,
  Users,
  StarHalf,
  ArrowRight,
} from "lucide-react";
import { fetchProduct } from "../services/api";
import { Helmet } from "@vuer-ai/react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Helper function to get correct image URL
  const getImageUrl = (path) => {
    if (path.startsWith("/assets/")) {
      return `https://best-e-bike-server.vercel.app/${path}`;
    }
    return path;
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-6">
      <Helmet>
        <title>
          {product.seo?.title || `${product.name} - Best Electric Bike 2025`}
        </title>
        <meta
          name="description"
          content={
            product.seo?.description ||
            `${product.name}. ${product.description?.substring(0, 160)}...`
          }
        />
        <meta
          name="keywords"
          content={
            product.seo?.keywords ||
            `${product.brand}, ${product.category}, electric bike, e-bike, ${product.name}`
          }
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content={product.seo?.title || product.name}
        />
        <meta
          property="og:description"
          content={
            product.seo?.description ||
            `${product.name}. ${product.description?.substring(0, 160)}...`
          }
        />
        <meta property="og:image" content={getImageUrl(product.images[0])} />
        <meta
          property="og:url"
          content={`https://yourebsite.com/products/${product.id}`}
        />
        <meta property="og:type" content="product" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={product.seo?.title || product.name}
        />
        <meta
          name="twitter:description"
          content={
            product.seo?.description ||
            `${product.name}. ${product.description?.substring(0, 160)}...`
          }
        />
        <meta name="twitter:image" content={getImageUrl(product.images[0])} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://yourebsite.com/products/${product.id}`}
        />

        {/* Structured Data for Google SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: product.images.map((img) => getImageUrl(img)),
            description: product.seo?.description || product.description,
            sku: product.id,
            brand: {
              "@type": "Brand",
              name: product.brand,
            },
            offers: {
              "@type": "Offer",
              url: `https://yourebsite.com/products/${product.id}`,
              priceCurrency: "USD",
              price: product.price,
              priceValidUntil: "2025-12-31",
              availability: product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
              seller: {
                "@type": "Organization",
                name: "Your E-Bike Store",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviews,
              bestRating: "10",
              worstRating: "1",
            },
            review:
              product.userReviews?.map((review) => ({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: review.rating,
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: review.username,
                },
                reviewBody: review.text,
                datePublished: review.date,
              })) || [],
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to="/products"
                className="hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Images - More Compact */}
          <div className="lg:w-2/5">
            <div className="relative bg-white rounded-xl overflow-hidden shadow-md p-3 mb-2 object-contain w-full">
              <div className="flex justify-center">
                <img
                  src={getImageUrl(product.images[selectedImageIndex])}
                  alt={product.name}
                  className="w-full h-80  transition-transform duration-300"
                />
              </div>

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all border border-gray-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all border border-gray-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 justify-center mb-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border transition-all ${
                      selectedImageIndex === index
                        ? "border-blue-600 ring-1 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Key Specifications */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2 text-blue-500" />
                Key Specifications
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(product.specifications)
                  .slice(0, 6)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
                    >
                      <dt className="text-xs font-medium text-gray-600">
                        {key}
                      </dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {value}
                      </dd>
                    </div>
                  ))}
              </div>
            </div>

            {/* Amazon Button */}
            <div className="mb-4 mt-8">
              <div className="bg-gray-800 text-white rounded-md p-2 mb-2 text-center">
                <p className="text-xs font-medium mb-1">
                  Picked by {product.reviews} people this week!
                </p>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400 mx-0.5"
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => window.open(product.alibabaUrl, "_blank")}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md mb-2 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="text-base">Buy at Amazon</span>
              </button>

              <div className="flex items-center justify-center mt-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-4 mr-1"
                />
                <span className="text-xs text-gray-500 ">
                  Prime Delivery • 30-Day Returns
                </span>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:w-3/5 bg-white rounded-xl shadow-md p-4">
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                {/* Brand and Rating Info */}
                <div className="flex flex-col gap-2">
                  <div className="inline-flex">
                    <span className="text-blue-700 font-semibold bg-blue-100 px-3 py-1.5 rounded-full text-xs border border-blue-200 shadow-sm">
                      {product.brand}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 shadow-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-gray-900 text-sm ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <div className="h-3 w-px bg-amber-200"></div>
                    <span className="text-gray-600 text-xs font-medium">
                      {product.reviews} reviews
                    </span>
                  </div>
                </div>

                {/* Buy at Amazon Button */}
                <div className="w-full sm:w-auto">
                  <button
                    onClick={() => window.open(product.alibabaUrl, "_blank")}
                    className="w-full border border-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2 px-1 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
                  >
                    <span className="text-base mr-2">Buy at Amazon</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </button>

                  <div className="flex items-center justify-center mt-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                      alt="Amazon"
                      className="h-4 mr-1.5"
                    />
                    <span className="text-xs text-gray-500 font-medium">
                      Prime Delivery • 30-Day Returns
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-xl  font-bold text-gray-900 mb-3 leading-tight">
                {product.name}
              </h1>

              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {product.description}
              </p>
            </div>

            {/* Key Features Icons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center bg-blue-50 p-2 rounded-md">
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Ruler className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-xs font-medium">12.8" Depth</span>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-md">
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Droplets className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-xs font-medium">Waterproof</span>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-md">
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Gauge className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-xs font-medium">Adjustable</span>
              </div>
              <div className="flex items-center bg-blue-50 p-2 rounded-md">
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-xs font-medium">Lightweight</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex flex-col items-center p-1.5 bg-gray-50 rounded-md">
                <Truck className="h-4 w-4 text-blue-500 mb-1" />
                <span className="text-xs text-gray-600">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center p-1.5 bg-gray-50 rounded-md">
                <Shield className="h-4 w-4 text-blue-500 mb-1" />
                <span className="text-xs text-gray-600">2-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center p-1.5 bg-gray-50 rounded-md">
                <RotateCcw className="h-4 w-4 text-blue-500 mb-1" />
                <span className="text-xs text-gray-600">30-Day Returns</span>
              </div>
            </div>

            {/* Features */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <Award className="h-4 w-4 mr-2 text-blue-500" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.slice(0, 5).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 bg-blue-50 p-2 rounded-md"
                  >
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review Summary */}
        {product.reviewSummary && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <Crown className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Expert Review
              </h2>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm mb-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <StarHalf className="h-5 w-5 mr-2 text-yellow-500" />
                {product.reviewSummary.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                {product.reviewSummary.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">Pros</h4>
                </div>
                <ul className="space-y-2">
                  {product.reviewSummary.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <ThumbsDown className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">Cons</h4>
                </div>
                <ul className="space-y-2">
                  {product.reviewSummary.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center text-red-500 font-bold">
                        ×
                      </div>
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-5 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Verdict
              </h4>
              <p className="text-gray-800 text-base leading-relaxed font-medium">
                {product.reviewSummary.verdictOrFinalRecommendation}
              </p>
            </div>
          </div>
        )}

        {/* User Reviews */}
        {product.userReviews && product.userReviews.length > 0 && (
          <div className="mt-6 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-5">
              <Users className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Customer Reviews
              </h2>
            </div>

            <div className="space-y-5">
              {product.userReviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">
                        {review.title}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-3 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
                    {review.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium text-sm mr-2">
                        {review.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {review.username}
                      </span>
                    </div>

                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
                View all {product.userReviews.length} reviews
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

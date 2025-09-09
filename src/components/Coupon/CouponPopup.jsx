import React, { useState, useEffect } from "react";
import {
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  Clock,
} from "lucide-react";
import { AiFillAmazonCircle } from "react-icons/ai";
import Logo from "./../Shared/Logo";

const CouponPopup = ({ category, onClose }) => {
  const [couponList, setCouponList] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState({});
  const [animatedDiscounts, setAnimatedDiscounts] = useState({});

  const products = {
    "Electric Mountain Bike": {
      id: "1",
      name: 'ANCHEER 26" Electric Bike for Adults, [Peak 750W Motor] Electric Mountain Bike',
      brand: "ANCHEER",
      price: 599.99,
      originalPrice: 699.99,
      rating: 4.3,
      reviews: 48,
      images: [
        "/assets/coupon/2/TwoA.jpg",
        "/assets/coupon/2/TwoB.jpg",
        "/assets/coupon/2/TwoC.jpg",
        "/assets/coupon/2/TwoD.jpg",
      ],
      category: "Electric Mountain Bike",
      features: [
        "Top speed: 20–22 MPH",
        "500W brushless geared motor (750W peak)",
        "48V 7.8Ah (374Wh) removable lithium-ion battery",
      ],
    },
    "Electric Bike": {
      id: "10",
      name: 'Gotrax 20" Folding Electric Bike with 40Miles Range',
      brand: "Gotrax",
      price: 660.0,
      originalPrice: 759.0,
      rating: 4.3,
      reviews: 571,
      images: [
        "/assets/coupon/12/twelveA.jpg",
        "/assets/coupon/12/twelveB.jpg",
        "/assets/coupon/12/twelveC.jpg",
      ],
      category: "Electric Bike",
      features: [
        "Top speed 20MPH",
        "Peak 500W motor (350W rated)",
        "48V/7.8Ah battery, up to 40 miles range (Pedal-assist1)",
      ],
    },
    "Electric Scooter": {
      id: "13",
      name: "Gotrax Adult Electric Scooter with Seat",
      brand: "Gotrax",
      price: 359.99,
      originalPrice: 449.99,
      rating: 4.3,
      reviews: 1758,
      images: [
        "/assets/coupon/17/17A.jpg",
        "/assets/coupon/17/17B.jpg",
        "/assets/coupon/17/17C.jpg",
      ],
      category: "Electric Scooter",
      features: [
        "Max speed 15.5-20 MPH",
        "Range up to 19 miles per charge",
        "350W rear-wheel motor with sit-down design",
      ],
    },
    "Folding Bike": {
      id: "20",
      name: "Heybike Electric Bike with Peak 1000W Motor",
      brand: "Heybike",
      price: 509.0,
      originalPrice: 599.0,
      rating: 4.4,
      reviews: 826,
      images: [
        "/assets/coupon/27/27A.jpg",
        "/assets/coupon/27/27B.jpg",
        "/assets/coupon/27/27C.jpg",
      ],
      category: "Folding Bike",
      features: [
        "Top speed up to 25 MPH",
        "Peak 1000W brushless geared motor",
        "48V 10.5Ah removable battery with up to 45-mile range",
      ],
    },
    "Commuter Bike": {
      id: "23",
      name: "Jasion EB5 Electric Bike for Adults with Peak 750W Brushless Motor",
      brand: "Jasion",
      price: 379.89,
      originalPrice: 398.99,
      rating: 4.2,
      reviews: 2047,
      images: [
        "/assets/coupon/30/30A.jpg",
        "/assets/coupon/30/30B.jpg",
        "/assets/coupon/30/30C.jpg",
      ],
      category: "Commuter Bike",
      features: [
        "1-year limited warranty",
        "Peak 750W brushless motor with top speed 20 MPH",
        "360Wh removable lithium battery, 25-40 miles range",
      ],
    },
    "Fat Tire Electric Bike": {
      id: "4",
      name: "ANCHEER Electric Bike for Adults, Peak 800W Motor, Folding Fat Tire",
      brand: "ANCHEER",
      price: 519.99,
      originalPrice: 619.99,
      rating: 4.2,
      reviews: 442,
      images: [
        "/assets/coupon/57/57A.jpg",
        "/assets/coupon/57/57B.jpg",
        "/assets/coupon/57/57C.jpg",
        "/assets/coupon/57/57D.jpg",
      ],
      category: "Fat Tire Electric Bike",
      features: [
        "1-year warranty with 24-hour customer support",
        "Peak 800W motor with max speed up to 22 MPH",
        "48V 10.4Ah battery, range: 20 miles pure electric / 60 miles pedal-assist",
      ],
    },
    "Hybrid Bike": {
      id: "32",
      name: "Schwinn Marshall Electric Hybrid E-Bike",
      brand: "Schwinn",
      price: 1399.99,
      originalPrice: 1459.99,
      rating: 8.0,
      reviews: 110,
      images: [
        "/assets/coupon/44/44A.jpg",
        "/assets/coupon/44/44B.jpg",
        "/assets/coupon/44/44C.jpg",
        "/assets/coupon/44/44D.jpg",
      ],
      category: "Hybrid Bike",
      features: [
        "21-inch aluminum hybrid frame",
        "27.5-inch wheels for riders 5'8\" to 6'4\"",
        "Integrated 288Wh downtube battery with up to 35 miles range",
      ],
    },
    "All Terrain Electric Bike": {
      id: "72",
      name: 'Folding Electric Bike for Adults with Peak 1000W Motor, 48V 20AH Battery up to 30MPH 80 Miles, 20" Fat Tire All Terrain Electric Bike, Front Suspension 7-Speed Commuter E Bike, Step-Thru, UL Certified',
      brand: "EUYBIKE",
      price: 664.99,
      originalPrice: 699.99,
      rating: 9.4,
      reviews: 127,
      images: [
        "/assets/coupon/94/94A.jpg",
        "/assets/coupon/94/94B.jpg",
        "/assets/coupon/94/94C.jpg",
        "/assets/coupon/94/94D.jpg",
      ],
      category: "All Terrain Electric Bike",
      features: [
        "750W (Peak 1000W) brushless motor, top speed 30 MPH",
        "48V 20Ah removable lithium-ion battery, range 40-80 miles",
        "Front fork suspension for smooth riding",
      ],
    },
    "City Electric Bike": {
      id: "46",
      name: 'Electric Bike for Adults 1350W Peak, 48V 20AH Battery Ebike, 26" Fat Tire Full Suspension Electric Mountain Bike, 80 Miles Range, 28 MPH, 8 Speed, Torque Sensor, Labrador Pro',
      brand: "PUCKIPUPPY",
      price: 1399.99,
      originalPrice: 1399.99,
      rating: 9.0,
      reviews: 208,
      images: [
        "/assets/coupon/65/65A.jpg",
        "/assets/coupon/65/65B.jpg",
        "/assets/coupon/65/65C.jpg",
        "/assets/coupon/65/65D.jpg",
      ],
      category: "City Electric Bike",
      features: [
        "1350W peak brushless rear hub motor with 28MPH top speed",
        "48V 20AH hidden removable battery with 40-80 miles range",
        '26"x4" puncture-proof fat tires for all-terrain stability',
      ],
    },
    "Motorized Electric Bike": {
      id: "69",
      name: 'MOONCOOL Electric Tricycle for Adults, 20" x 4" Fat Tire Electric Trike, 48V 500W Motorized Electric Bicycle Bikes, 3 Wheels 7 Speed Ebike with Removable Battery, Aluminum Frame & Large Basket',
      brand: "MOONCOOL",
      price: 1299.0,
      originalPrice: 1299.0,
      rating: 9.0,
      reviews: 22,
      images: [
        "/assets/coupon/91/91A.jpg",
        "/assets/coupon/91/91B.jpg",
        "/assets/coupon/91/91C.jpg",
        "/assets/coupon/91/91D.jpg",
      ],
      category: "Motorized Electric Bike",
      features: [
        "UL2849 and UL2272 certified battery for safety and reliability",
        "6061 aluminum frame for strength and longevity",
        "48V 14.5Ah removable battery with 30-45 miles range",
      ],
    },
    "Default Bike": {
      id: "33",
      name: 'Blaze 16" Electric Bike for Adults/Teens, Peak 1200W, 55-75 Miles, 499WH Fat Tire Ebike, 25Mph Full Suspension Electric Motorcycle',
      brand: "ACTBEST",
      price: 449.99,
      originalPrice: 699.99,
      rating: 9.5,
      reviews: 29,
      images: [
        "/assets/coupon/45/45A.jpg",
        "/assets/coupon/45/45B.jpg",
        "/assets/coupon/45/45C.jpg",
        "/assets/coupon/45/45D.jpg",
      ],
      category: "Electric Bike",
      features: [
        "16-inch carbon steel frame ideal for teens and adults under 5'2\"",
        "Dual suspension system with 4 shock absorbers",
        "1200W peak motor with 25 mph top speed",
      ],
    },
  };

  // Load matched coupons
  useEffect(() => {
    if (category && category !== "All") {
      const matched = Object.values(products).filter(
        (p) => p.category === category
      );
      setCouponList(matched);
    } else {
      // Show only the ACTBEST Blaze bike when "All" is selected
      setCouponList([products["Default Bike"]]);
    }
  }, [category]);

  // Animate discount for each coupon
  useEffect(() => {
    couponList.forEach((coupon) => {
      const discountPercentage = Math.round(
        ((coupon.originalPrice - coupon.price) / coupon.originalPrice) * 100
      );

      let start = 0;
      const duration = 1000;
      const increment = discountPercentage / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= discountPercentage) {
          setAnimatedDiscounts((prev) => ({
            ...prev,
            [coupon.id]: discountPercentage,
          }));
          clearInterval(timer);
        } else {
          setAnimatedDiscounts((prev) => ({
            ...prev,
            [coupon.id]: Math.floor(start),
          }));
        }
      }, 20);

      return () => clearInterval(timer);
    });
  }, [couponList]);

  const nextImage = (id, images) => {
    setSelectedImageIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % images.length,
    }));
  };

  const prevImage = (id, images) => {
    setSelectedImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1 < 0 ? images.length - 1 : (prev[id] || 0) - 1,
    }));
  };

  const selectImage = (id, index) => {
    setSelectedImageIndex((prev) => ({
      ...prev,
      [id]: index,
    }));
  };

  if (couponList.length === 0) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className=" max-w-3xl h-[75vh] rounded-2xl flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-800 text-white p-2 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold flex items-center">
              <Zap className="h-6 w-6 mr-2 text-yellow-400" />
              Exclusive Deals Just For You!
            </h2>
            <p className="text-blue-200 mt-1 ml-1">
              Limited time offers on premium electric bikes
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-3 space-y-6 rounded-b-2xl flex-1 overflow-auto">
          {couponList.map((couponData) => (
            <div
              key={couponData.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50 h-full flex flex-col relative"
            >
              {/* Discount Ribbon */}
              <div className="absolute -top-2 -right-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-10 py-1 transform rotate-45 z-20 shadow-md">
                HOT DEAL
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 flex-1 overflow-hidden">
                {/* Left Side */}
                <div className="flex flex-col justify-between overflow-hidden">
                  <div className="space-y-2">
                    <div className="mb-1">
                      <Logo />
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 rounded-lg p-2 flex items-center">
                      <Clock className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-blue-700 text-xs font-medium">
                        Limited time offer -{" "}
                        <span className="font-bold">Ends soon!</span>
                      </span>
                    </div>
                    <h2 className="text-sm font-bold text-gray-900">
                      {couponData.name.length > 60
                        ? `${couponData.name.substring(0, 60)}...`
                        : couponData.name}
                    </h2>
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-gray-900 mr-1">
                        {couponData.rating.toFixed(1)}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(couponData.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({couponData.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-900 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
                      Save {animatedDiscounts[couponData.id] || 0}% OFF
                    </div>

                    <div className="text-xs text-gray-600 space-y-0.5 mb-2 mt-1">
                      {couponData.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-green-600 mr-1">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className=" bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 rounded-lg text-sm flex items-center justify-center shadow-md hover:opacity-90">
                    <AiFillAmazonCircle className="h-4 w-4 mr-1" />
                    View Deal on Amazon
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </button>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-between overflow-hidden">
                  {/* Main Image */}
                  <div className="relative flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border border-gray-300/50 object-contain">
                    <img
                      src={
                        couponData.images[
                          selectedImageIndex[couponData.id] || 0
                        ]
                      }
                      alt={couponData.name}
                      className="w-full h-full object-contain"
                    />
                    {couponData.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            prevImage(couponData.id, couponData.images)
                          }
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1 rounded-full shadow-md"
                        >
                          <ChevronLeft className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() =>
                            nextImage(couponData.id, couponData.images)
                          }
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1 rounded-full shadow-md"
                        >
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {couponData.images.length > 1 && (
                    <div className="flex justify-center space-x-1 mt-1">
                      {couponData.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => selectImage(couponData.id, index)}
                          className={`h-10 w-10 rounded-md overflow-hidden border-2 transition-all ${
                            (selectedImageIndex[couponData.id] || 0) === index
                              ? "border-blue-600 shadow-md"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mt-1 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
                      ⚡ Electric
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                      🚴 {couponData.category}
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                      ⭐ {couponData.rating.toFixed(1)}
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded border border-red-200">
                      🔥 Limited Time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponPopup;

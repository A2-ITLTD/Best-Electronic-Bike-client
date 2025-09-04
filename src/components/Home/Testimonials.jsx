import React from "react";
import { Star, Quote, Zap, Heart, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      text: "This electric bike has completely transformed my daily commute. The battery life is incredible and the ride is so smooth!",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      bike: "ANCHEER Electric Bike",
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Austin, TX",
      rating: 5,
      text: "Best investment I've made this year. The build quality is exceptional and customer service is top-notch.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      bike: "Jasion EB5 Electric Bike",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Portland, OR",
      rating: 5,
      text: "Love how eco-friendly and fun this bike is. It's perfect for weekend adventures and daily errands.",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
      bike: "A2 Folding Electric Bike",
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Miami, FL",
      rating: 5,
      text: "The scooter is perfect for city living. Folds up easily and the battery lasts all week!",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      bike: "Gotrax Electric Scooter",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-sm font-medium rounded-full mb-6 hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
            <Zap className="h-4 w-4 mr-2" />
            Trusted by Thousands of Riders
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Riders
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of satisfied customers who've transformed their
            commute and adventures with our electric vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group hover:bg-gradient-to-br hover:from-blue-50 hover:to-emerald-50 hover:border-blue-200 cursor-pointer"
            >
              {/* Quote icon - changes color on hover */}
              <div className="absolute top-6 right-6 group-hover:scale-110 transition-transform duration-300">
                <Quote className="h-8 w-8 text-blue-100 group-hover:text-blue-300 transition-colors duration-300" />
              </div>

              {/* Rating - stars become more vibrant on hover */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-500 group-hover:text-yellow-500 transition-colors duration-300"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial text - changes color on hover */}
              <p className="text-gray-700 mb-6 leading-relaxed relative group-hover:text-gray-800 transition-colors duration-300">
                <Quote className="h-6 w-6 text-blue-200 absolute -left-2 -top-2 group-hover:text-blue-300 transition-colors duration-300" />
                {testimonial.text}
              </p>

              {/* User info - enhanced on hover */}
              <div className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-md group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.location}
                  </p>
                  <div className="flex items-center mt-1 text-xs text-blue-600 group-hover:text-emerald-600 transition-colors duration-300">
                    <TrendingUp className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform duration-300" />
                    {testimonial.bike}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section - with hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
              5,000+
            </div>
            <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Happy Riders
            </div>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
              98%
            </div>
            <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Satisfaction Rate
            </div>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-4xl font-bold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors duration-300">
              9.8/10
            </div>
            <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Average Rating
            </div>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">
              10M+
            </div>
            <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Miles Ridden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

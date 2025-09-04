import React from "react";
import { BatteryCharging, Zap, Shield, Settings } from "lucide-react";

const Features = () => {
  return (
    <div className="  flex items-center justify-center mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-sm font-medium">
              PREMIUM E-BIKE TECHNOLOGY
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              ElectricRide
            </span>
            ?
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're committed to delivering the highest quality electric bikes
            with cutting-edge technology and exceptional performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: Battery */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BatteryCharging className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Long-Lasting Battery
              </h3>
              <p className="text-gray-600 mb-4">
                Up to 80 miles range with premium lithium-ion batteries and fast
                charging technology.
              </p>
              <div className="mt-auto bg-blue-100 text-blue-700 text-sm font-medium py-1 px-3 rounded-full inline-block">
                80+ miles range
              </div>
            </div>
          </div>

          {/* Feature 2: Motor */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-cyan-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Powerful Motor
              </h3>
              <p className="text-gray-600 mb-4">
                High-performance motors delivering smooth acceleration and
                hill-climbing power.
              </p>
              <div className="mt-auto bg-cyan-100 text-cyan-700 text-sm font-medium py-1 px-3 rounded-full inline-block">
                750W output
              </div>
            </div>
          </div>

          {/* Feature 3: Warranty */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-amber-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2-Year Warranty
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive warranty coverage for motor, battery, and frame
                with excellent support.
              </p>
              <div className="mt-auto bg-amber-100 text-amber-700 text-sm font-medium py-1 px-3 rounded-full inline-block">
                24 months coverage
              </div>
            </div>
          </div>

          {/* Feature 4: Maintenance */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="text-violet-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Designed for minimal maintenance with easy access to components
                and service points.
              </p>
              <div className="mt-auto bg-violet-100 text-violet-700 text-sm font-medium py-1 px-3 rounded-full inline-block">
                30-min service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

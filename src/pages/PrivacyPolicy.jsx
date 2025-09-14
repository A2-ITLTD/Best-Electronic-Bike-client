import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-white/20">
          <div className="prose prose-lg max-w-none">
            {/* Decorative elements */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Best Bike Review, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and share information about you
                when you visit our website.
              </p>
            </div>

            {/* Information We Collect Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may collect information about you directly from you, from
                third parties, and automatically through your use of our
                website.
              </p>
            </div>

            {/* How We Use Your Information Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="bg-blue-50/50 p-3 rounded-lg border-l-4 border-blue-300">
                  Provide, maintain, and improve our website
                </li>
                <li className="bg-emerald-50/50 p-3 rounded-lg border-l-4 border-emerald-300">
                  Respond to your comments and questions
                </li>
                <li className="bg-blue-50/50 p-3 rounded-lg border-l-4 border-blue-300">
                  Send you technical notices and support messages
                </li>
                <li className="bg-emerald-50/50 p-3 rounded-lg border-l-4 border-emerald-300">
                  Communicate with you about products and services
                </li>
              </ul>
            </div>

            {/* Cookies Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may use cookies and similar tracking technologies to track
                activity on our website and store certain information.
              </p>
            </div>

            {/* Contact Us Section */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border-l-4 border-emerald-400 mt-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <span className="font-semibold text-emerald-600">
                  info@bestbikereview.com
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Back to home link */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

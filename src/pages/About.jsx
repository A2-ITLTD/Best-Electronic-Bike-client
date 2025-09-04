import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Banner */}
      <section className="relative bg-gray-900 text-white">
        <img
          src="assets/aboutImg/9.avif"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-4xl mx-auto text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About Our Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Helping riders discover the best e-bikes with research, insights,
            and unbiased comparisons.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
          Navigating the e-bike market can be overwhelming. From city commuters
          to trail adventurers, there are countless choices and technical specs
          to consider. That’s where we come in.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          We analyze, compare, and recommend—so{" "}
          <span className="font-semibold text-blue-600">you</span> can ride
          smarter and choose with confidence.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What We Do
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We research the latest e-bike models, analyze real-world feedback,
              and create straightforward comparisons. Our reviews focus on what
              truly matters: battery life, motor power, comfort, and durability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["8.webp", "5.jpg", "3.jpg", "4.jpg"].map((img, idx) => (
              <img
                key={idx}
                src={`/assets/aboutImg/${img}`}
                alt="About"
                className="rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">How We Do It</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              img: "6.jpg",
              title: "Research",
              desc: "We study specs, performance data, and expert reviews to find top contenders.",
            },
            {
              img: "1.jpg",
              title: "Testing",
              desc: "We evaluate ride quality, range, and comfort in real-world conditions.",
            },
            {
              img: "7.jpg",
              title: "Comparison",
              desc: "We create clear side-by-side comparisons so you can decide quickly.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              <img
                src={`/assets/aboutImg/${card.img}`}
                alt={card.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Ride</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Stay up to date with the latest e-bike reviews, guides, and insights.
          Let’s power your journey together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg  px-10 py-3 rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default About;

import { useEffect, useState } from "react";

// Inside your component
export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [happyRiders, setHappyRiders] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [milesRidden, setMilesRidden] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById("stats-section");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate happy riders
      animateValue(setHappyRiders, 0, 5000, 2000);

      // Animate satisfaction rate
      animateValue(setSatisfactionRate, 0, 98, 2000);

      // Animate average rating (from 0 to 9.8)
      animateValue(setAverageRating, 0, 9.8, 2000, 1);

      // Animate miles ridden
      animateValue(setMilesRidden, 0, 10, 2000);
    }
  }, [isVisible]);

  const animateValue = (setter, start, end, duration, decimals = 0) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = progress * (end - start) + start;
      setter(decimals ? value.toFixed(decimals) : Math.floor(value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div
      id="stats-section"
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200"
    >
      <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
        <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {happyRiders.toLocaleString()}+
        </div>
        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          Happy Riders
        </div>
      </div>
      <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
        <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
          {satisfactionRate}%
        </div>
        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          Satisfaction Rate
        </div>
      </div>
      <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
        <div className="text-4xl font-bold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors duration-300">
          {averageRating}/10
        </div>
        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          Average Rating
        </div>
      </div>
      <div className="text-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
        <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">
          {milesRidden}M+
        </div>
        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          Miles Ridden
        </div>
      </div>
    </div>
  );
};

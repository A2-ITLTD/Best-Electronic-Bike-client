import React from "react";

const posts = [
  {
    id: "top-ebikes-2025",
    title: "Top E-Bikes to Buy in 2025",
    date: "Wednesday, August 27, 2025",
    image: "/assets/aboutImg/6.jpg",
  },
  {
    id: "commuter-gear-guide",
    title: "The Ultimate Gear Guide for City Commuters",
    date: "Monday, August 18, 2025",
    image: "/assets/aboutImg/10.jpg",
  },
  {
    id: "budget-travel",
    title: "How to Travel on a Budget Without Compromise",
    date: "Saturday, August 09, 2025",
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "healthy-lifestyle",
    title: "5 Small Changes for a Healthier Lifestyle",
    date: "Thursday, July 31, 2025",
    image: "/assets/aboutImg/11.jpg",
  },
  {
    id: "tech-trends-2025",
    title: "Top Technology Trends to Watch in 2025",
    date: "Monday, July 21, 2025",
    image: "/assets/aboutImg/12.jpg",
  },
  {
    id: "outdoor-adventures",
    title: "Exploring the Best Outdoor Adventures This Summer",
    date: "Friday, July 11, 2025",
    image: "/assets/aboutImg/13.jpg",
  },
];

const topPosts = [
  {
    id: "morning-routines",
    title: "Morning Routines of Highly Successful People",
  },
  {
    id: "eco-friendly-living",
    title: "Eco-Friendly Living: Simple Steps to Go Green",
  },
  { id: "digital-nomad", title: "Becoming a Digital Nomad: Pros and Cons" },
  { id: "fitness-habits", title: "Fitness Habits You Can Actually Stick To" },
  { id: "smart-home", title: "How Smart Home Tech is Changing Our Lives" },
];

const categories = [
  "E-Bikes",
  "Travel",
  "Technology",
  "Lifestyle",
  "Health",
  "Outdoors",
  "Gear & Accessories",
];

const Blog = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-6 lg:px-0 flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="flex-1 space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="space-y-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <button className="inline-block text-blue-600 hover:underline font-medium cursor-default">
                Read More
              </button>
              <hr className="mt-6" />
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-4">Top Posts</h3>
            <ul className="space-y-2">
              {topPosts.map((tp) => (
                <li
                  key={tp.id}
                  className="text-gray-800 hover:text-blue-600 transition cursor-default"
                >
                  • {tp.title}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Posts by Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="text-gray-800 hover:text-blue-600 transition cursor-default"
                >
                  • {cat}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} E-Bike Guide
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;

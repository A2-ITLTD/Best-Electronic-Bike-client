import React from "react";
import { useParams, Link } from "react-router-dom";

// Demo blog content (you can expand with real data or fetch from API)
const posts = {
  "top-ebikes-2025": {
    title: "Top E-Bikes to Buy in 2025",
    date: "Wednesday, August 27, 2025",
    image:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `
      Electric bikes are transforming the way we move. In 2025, brands are focusing
      on extended range, lightweight frames, and smart connectivity features.
      We've researched and compared the latest models to help you choose the right ride.
      
      Highlights include commuter-friendly models with up to 80 miles of range,
      mountain e-bikes with torque-sensing motors, and foldable designs that fit in
      your car trunk. If you're looking for eco-friendly, efficient, and fun ways to
      get around—this is the year to invest in an e-bike.
    `,
  },
  "commuter-gear-guide": {
    title: "The Ultimate Gear Guide for City Commuters",
    date: "Monday, August 18, 2025",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
    content: `
      City commuting requires the right setup. From helmets with built-in lights
      to pannier bags and waterproof jackets, the right gear keeps you safe,
      comfortable, and efficient on the road.
      
      We break down must-have commuter gear, budget-friendly picks, and premium
      upgrades that are worth considering for daily riders.
    `,
  },
  "budget-travel": {
    title: "How to Travel on a Budget Without Compromise",
    date: "Saturday, August 09, 2025",
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `
      Traveling doesn’t have to be expensive. With careful planning, you can
      explore the world on a budget while still enjoying unique experiences.
      
      Learn tips on finding affordable flights, budget-friendly stays, and
      local activities that don’t break the bank.
    `,
  },
  // Add more posts in the same format...
};

const topPosts = [
  {
    id: "morning-routines",
    title: "Morning Routines of Highly Successful People",
  },
  {
    id: "eco-friendly-living",
    title: "Eco-Friendly Living: Simple Steps to Go Green",
  },
  {
    id: "digital-nomad",
    title: "Becoming a Digital Nomad: Pros and Cons",
  },
  {
    id: "fitness-habits",
    title: "Fitness Habits You Can Actually Stick To",
  },
  {
    id: "smart-home",
    title: "How Smart Home Tech is Changing Our Lives",
  },
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

const PostDetails = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold">Post not found</h2>
        <Link
          to="/blog"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-6 lg:px-0 flex flex-col lg:flex-row gap-10">
        {/* Main Post */}
        <div className="flex-1 space-y-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">{post.date}</p>
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
          </div>
          <Link
            to="/blog"
            className="inline-block mt-6 text-blue-600 hover:underline font-medium"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-4">Top Posts</h3>
            <ul className="space-y-2">
              {topPosts.map((tp) => (
                <li key={tp.id}>
                  <Link
                    to={`/blog/${tp.id}`}
                    className="text-gray-800 hover:text-blue-600 transition"
                  >
                    • {tp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Posts by Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-800 hover:text-blue-600 transition"
                  >
                    • {cat}
                  </Link>
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

export default PostDetails;

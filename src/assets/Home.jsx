import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  // Cozy café interiors
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1920&q=80",

  // Coffee & barista shots
  // "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80",

  // Breakfast & desserts
  // "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80",
  // "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1920&q=80",
];


export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // ✅ FIXED (inside component)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FFF8F0] text-[#2B2B2B] font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
     {images.map((img, index) => (
  <div
    key={index}
    className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out transform
      ${
        index === current
          ? "opacity-100 scale-110"
          : "opacity-0 scale-100"
      }`}
    style={{ backgroundImage: `url(${img})` }}
  />
))}

        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Neighbourhood Café for Fresh Coffee, Breakfast & Desserts
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100">
            Handcrafted coffee, freshly baked treats, and a cozy café experience you’ll love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/menu")}
              className="bg-green-200 text-[#01201b] px-8 py-4 rounded-2xl font-bold hover:bg-[#004d40] transition"
            >
              View Menu
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="bg-green-200 text-[#01201b] px-8 py-4 rounded-2xl font-bold hover:bg-[#004d40] transition"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* 2. SEASONAL SPECIALS (WINTER 2025) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2F4F3E]">Winter 2025 Specials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Spiced Pumpkin Latte", price: "$5.50", desc: "Warm spices meets velvet espresso." },
            { name: "Cinnamon Swirl Muffin", price: "$4.25", desc: "Freshly baked every morning." },
            { name: "Honey Ginger Tea", price: "$4.75", desc: "Soothing local honey and fresh ginger." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#DAEBCB] text-center">
              <div className="h-48 bg-[#DAEBCB]/30 rounded-lg mb-4 flex items-center justify-center text-[#2F4F3E] italic">
                Product Image
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <span className="text-[#2F4F3E] font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT THE CAFÉ (Brand Story) */}
      <section className="py-20 bg-[#DAEBCB]/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#2F4F3E]">A Café Crafted with Love & Fresh Ingredients</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our café is a local favorite for freshly brewed coffee, homemade desserts, and wholesome meals. 
              We believe in quality ingredients, warm hospitality, and creating a space where people love to gather.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking for the best café near you to work or a cozy spot for family brunch, 
              we've designed every corner to feel like your home away from home.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" 
              alt="Barista making fresh coffee in a pastel green themed café"
            />
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Trust) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#2F4F3E]">Why Customers Love Our Café</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Freshly Brewed Coffee Daily",
              "Cozy, Pastel Green Interiors",
              "Family-Friendly Atmosphere",
              "Fast Takeaway & Ordering"
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#DAEBCB] rounded-full mb-4 flex items-center justify-center text-[#2F4F3E] font-bold text-2xl">
                  ✓
                </div>
                <p className="font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & TIMINGS (Local SEO) */}
      <section className="py-20 bg-[#FFF8F0] text-[#2F4F3E]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Visit Our Café</h2>
            <div className="space-y-4 text-lg">
              <p><strong>Address:</strong> 123 Coffee Lane, [Your City, Area]</p>
              <p><strong>Hours:</strong> Mon-Sun: 7:00 AM - 8:00 PM</p>
              <p className="text-gray-300">Located in the heart of [City Name], serving premium breakfast and artisan coffee.</p>
              <button className="mt-6 border-2 border-[#DAEBCB] text-[#DAEBCB] px-6 py-2 rounded-full hover:bg-[#DAEBCB] hover:text-[#2F4F3E] transition">
                Get Directions
              </button>
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            {/* Replace this div with a Google Map Embed iframe */}
            [Google Map Embed Here]
          </div>
        </div>
      </section>

      {/* FOOTER */}
      
    </div>
  );
}
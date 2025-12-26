// export default function OurStores() {
//     return (
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <img src="https://hospitalitydesign.com/wp-content/uploads/2023/06/twenty-three-grand1.jpg" alt="Cafe Interior" className="rounded-lg shadow-lg w-full" />
//           </div>
//           <div>
//             <h1 className="text-6xl font-bold text-[#1b5e20] mb-8">A Fresh Green Escape</h1>
//             <p className="text-xl text-[#1b5e20] leading-relaxed">
//               Our stores are filled with plants and natural light – the perfect cozy spot to enjoy your custom meal or coffee in true UK style.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//ABOUT PAGE

import React from 'react';

export default function OurStores() {
  return (
    <section className="py-20 bg-[#2F4F3E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero / Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://hospitalitydesign.com/wp-content/uploads/2023/06/twenty-three-grand1.jpg" 
              alt="Cozy Cafe Interior with plants and natural light" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#1b5e20] mb-6 leading-tight">
              About Our Café: A Fresh Green Escape
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>A Café Where Fresh Coffee, Comfort Food & Community Come Together.</strong>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to <strong>[Your Café Name]</strong>, your neighborhood café created for people who love great coffee, fresh food, and calm, cozy spaces. Inspired by a modern pastel-green aesthetic, our café is designed to be a place where you can relax, work, meet friends, or simply enjoy a quiet cup of coffee. We believe a café should feel like home — warm, welcoming, and full of flavor.
            </p>
          </div>
        </div>

        <hr className="mb-16 border-gray-100" />

        {/* Story & Special Features */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#2e7d32] mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every café has a story, and ours begins with a simple idea: <strong>serve high-quality coffee and food in a space that feels peaceful and inviting.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              At [Your Café Name], we started with a passion for freshly brewed coffee, handcrafted beverages, and thoughtfully prepared meals. From our carefully selected coffee beans to our freshly prepared desserts, everything is made with attention to quality and taste.
            </p>
          </div>
          
          <div className="bg-[#f1f8e9] p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#2e7d32] mb-6">What Makes Us Special</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-[#1b5e20]">✔</span> Freshly brewed coffee made from premium beans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#1b5e20]">✔</span> Handcrafted drinks prepared by skilled baristas
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#1b5e20]">✔</span> Wholesome breakfast, snacks, and desserts
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#1b5e20]">✔</span> Cozy pastel-green interiors with a calm ambiance
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#1b5e20]">✔</span> A welcoming space for families, friends, and remote workers
              </li>
            </ul>
          </div>
        </div>

        {/* Quality & Community */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#2e7d32] mb-6">Fresh Ingredients, Thoughtful Preparation</h2>
            <p className="text-gray-700 mb-6">
              Quality matters to us. Our menu is thoughtfully curated to offer rich, aromatic coffee and specialty beverages, freshly made breakfast items, and delicious desserts suitable for all age groups.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2e7d32] mb-6">A Café for the Community</h2>
            <p className="text-gray-700 mb-4">
              At [Your Café Name], we’re proud to be a part of the local community. We are a space where morning coffee lovers, students, and families connect.
            </p>
          </div>
        </div>

        {/* Visit Us Section (CTA) */}
        <div className="bg-[#1b5e20] text-white p-10 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Our Café</h2>
          <p className="text-xl mb-8">Looking for a cozy café near you? Come experience great coffee and a peaceful atmosphere.</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left border-t border-[#ffffff33] pt-8">
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm opacity-80">Location</h4>
              <p className="text-lg">[Your Area, City]</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm opacity-80">Opening Hours</h4>
              <p className="text-lg">[Your Timings]</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm opacity-80">Contact</h4>
              <p className="text-lg">[Phone / Email]</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
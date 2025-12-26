import React from "react";
import { LuChefHat, LuBike, LuLeaf, LuPartyPopper } from "react-icons/lu";
import { motion } from "framer-motion";
import burger from "../assets/burger.jpg";
// import aboutbg1 from "../assets/aboutbg1.mp4";
import aboutbg1 from '../assets/bg.mp4';

export default function About() {
  return (
    <div className="bg-[#fefce8] overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative py-32 md:py-48 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            About <span className="text-[#a7f3d0]">Cafe Lamees</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-white/90 text-base md:text-lg max-w-xl mx-auto"
          >
            Sharing Flavors, Stories & Smiles
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-full mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center bg-[#DAEBCB]">
        
        {/* VIDEO SECTION */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center order-2 md:order-1"
        >
          <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full blur-2xl"></div>
          
          {/* Responsive Video Container: Uses aspect-square to maintain shape */}
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] aspect-square rounded-2xl overflow-hidden border-[#064e3b] shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={aboutbg1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-6">
            More Than Just a Café
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            At <strong>Cafe Lamees</strong>, we believe food is a universal language —
            a way to connect people, cultures, and emotions. Every dish we serve
            is inspired by tradition, crafted with passion, and made using only
            the freshest ingredients.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            What started as a small dream has grown into a warm gathering place
            where friends meet, families bond, and memories are created —
            one bite at a time.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#064e3b]">
              Why People Love Cafe Lamees
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Crafted with care, served with passion, and enjoyed with every bite.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Freshly Cooked",
                desc: "Prepared daily using authentic recipes and fresh ingredients.",
                icon: <LuChefHat />,
              },
              {
                title: "Fast Delivery",
                desc: "Hot, delicious meals delivered quickly to your doorstep.",
                icon: <LuBike />,
              },
              {
                title: "Healthy Choices",
                desc: "Nutritious, balanced options for a guilt-free dining experience.",
                icon: <LuLeaf />,
              },
              {
                title: "Catering Service",
                desc: "Perfect food solutions for parties, events, and gatherings.",
                icon: <LuPartyPopper />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#a7f3d0] to-[#f97316] opacity-0 blur-xl group-hover:opacity-30 transition"></div>
                <div className="relative z-10 bg-[#DAEBCB] p-8 md:p-10 h-full rounded-3xl shadow-lg border border-[#e7e5e4] text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#064e3b] text-white text-2xl md:text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#064e3b] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="py-20 md:py-24 bg-[#DAEBCB]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-[#064e3b] px-6"
        >
          Only Fresh, Quality Ingredients
        </motion.h2>

        <div className="max-w-5xl mx-auto mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-6">
          {/* Left List */}
         <ul className="space-y-6 order-2 md:order-1 md:ml-30">
  {["Fresh Produce", "Premium Meats", "Authentic Spices"].map((i, idx) => (
    <li
      key={idx}
      className="flex items-center gap-3 justify-center md:justify-start"
    >
      <span className="w-5 h-5 md:w-6 md:h-6 bg-[#0f766e] rounded-full shrink-0"></span>
      <p className="font-medium text-gray-700 text-sm md:text-base">
        {i}
      </p>
    </li>
  ))}
</ul>

          {/* Center Image */}
          <div className="order-1 md:order-2">
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              src={burger}
              alt="Burger"
              className="w-60 md:w-80 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Right List */}
          <ul className="space-y-6 order-3">
            {["Artisan Breads", "Creamy Dairy", "Handmade Desserts"].map((i, idx) => (
              <li key={idx} className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-5 h-5 md:w-6 md:h-6 bg-[#0f766e] rounded-full shrink-0"></span>
                <p className="font-medium text-gray-700 text-sm md:text-base">{i}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
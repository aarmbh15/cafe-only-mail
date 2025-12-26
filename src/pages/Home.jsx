import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import for animations
import { FaCoffee, FaLeaf, FaUsers, FaClock, FaHeart, FaStar } from "react-icons/fa"; // New icons
// import bgVideo from '../assets/bg.mp4'; // Background video import
import bf1 from '../assets/bf1.jpg'; // Imported image for special 1
import l1 from '../assets/L1.jpg'; // Imported image for special 2
import c5 from '../assets/c5.jpg'; // Imported image for special 3
import bgVideo from "../assets/aboutbg1.mp4";

export default function Home() {
  const navigate = useNavigate();

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const specials = [
    {
      name: "Traditional English Breakfast",
      price: "£6.99",
      desc: "1 Egg, 2 Turkish Rashers, 1 sausage, baked beans, mushrooms, hash browns.",
      image: bf1,
    },
    {
      name: "Classic Club Sandwich",
      price: "£7.49",
      desc: "Grilled chicken, bacon, lettuce, tomato, mayo in toasted bread.",
      image: l1,
    },
    {
      name: "Espresso",
      price: "£2.50",
      desc: "Rich and bold single shot.",
      image: c5,
    },
  ];

  const features = [
    { feature: "Freshly Brewed Coffee Daily", icon: <FaCoffee className="text-3xl" /> },
    { feature: "Cozy, Pastel Green Interiors", icon: <FaLeaf className="text-3xl" /> },
    { feature: "Family-Friendly Atmosphere", icon: <FaUsers className="text-3xl" /> },
    { feature: "Fast Takeaway & Ordering", icon: <FaClock className="text-3xl" /> },
    { feature: "Heartfelt Service & Smiles", icon: <FaHeart className="text-3xl" /> },
    { feature: "Award-Winning Desserts", icon: <FaStar className="text-3xl" /> },
  ];

  return (
    <div className="bg-[#DAEBCB] text-[#064e3b] font-sans">
      
      {/* HERO SECTION with Background Video */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
          src={bgVideo}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Added a subtle overlay for text readability */}
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Brewed Fresh <br/>Served with Love
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-[#DAEBCB] text-[#064e3b] px-8 py-4 rounded-2xl font-bold hover:bg-[#047857] hover:text-white transition"
            >
              View Menu
            </button>
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-[#DAEBCB] text-[#064e3b] px-8 py-4 rounded-2xl font-bold hover:bg-[#047857] hover:text-white transition"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* OUR SPECIAL SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#064e3b]">
          OUR SPECIALS
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {specials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/menu")}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#047857] text-center flex flex-col min-h-[420px] cursor-pointer"
            >
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 text-[#064e3b]">
                {item.name}
              </h3>

              <p className="text-[#064e3b] mb-4 flex-grow">
                {item.desc}
              </p>

              <p className="text-[#047857] font-bold">
                {item.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT THE CAFÉ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#064e3b]">A Café Crafted with Love & Fresh Ingredients</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#1f2937]">
              Our café is a local favorite for freshly brewed coffee, homemade desserts, and wholesome meals. 
              We believe in quality ingredients, warm hospitality, and creating a space where people love to gather.
            </p>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              Whether you're looking for the best café near you to work or a cozy spot for family brunch, 
              we've designed every corner to feel like your home away from home.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" 
              alt="Barista making fresh coffee in a pastel green themed café"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#DAEBCB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#064e3b]">
            Why Customers Love Our Café
          </h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md border border-[#047857] min-h-[200px]"
              >
                <div className="w-16 h-16 bg-[#DAEBCB] rounded-full mb-4 flex items-center justify-center text-[#047857]">
                  {item.icon}
                </div>
                <p className="font-semibold text-[#064e3b] text-sm md:text-base text-center">
                  {item.feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
</div>
  );
}
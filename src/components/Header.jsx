// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// /* Hamburger Component */
// function AnimatedHamburger({ isMenuOpen, setIsMenuOpen }) {
//   return (
//     <button
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//       className="relative w-8 h-8 flex flex-col justify-center items-center"
//       aria-label="Toggle menu"
//     >
//       <span
//         className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
//           isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"
//         }`}
//       />
//       <span
//         className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
//           isMenuOpen ? "opacity-0" : "opacity-100"
//         }`}
//       />
//       <span
//         className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
//           isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-2"
//         }`}
//       />
//     </button>
//   );
// }

// /* Updated Navigation Items */
// const mainNavItems = [
//   { key: "home", label: "HOME", path: "/" },
//   { key: "about", label: "ABOUT", path: "/About" },
//   { key: "menu", label: "MENU", path: "/menu" },
//   { key: "contact", label: "CONTACT", path: "/contact" },
//   { key: "login", label: "LOGIN", path: "/login" },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     setIsMenuOpen(false);
//     navigate(path);
//   };

//   /* Detect Scroll */
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-black/80 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-row-reverse justify-between items-center py-5">

//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="Café Lamees Logo"
//               className="h-10 md:h-12 brightness-0 invert"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-10">
//             {mainNavItems.map((item) => (
//               <Link
//                 key={item.key}
//                 to={item.path}
//                 className={`text-sm tracking-widest font-bold transition ${
//                   location.pathname === item.path
//                     ? "text-white border-b-2 border-white"
//                     : "text-white hover:opacity-70"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <AnimatedHamburger
//               isMenuOpen={isMenuOpen}
//               setIsMenuOpen={setIsMenuOpen}
//             />
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-black/90 text-white rounded-xl mb-4 backdrop-blur-md">
//             <div className="px-4 pt-4 pb-6 space-y-2">
//               {mainNavItems.map((item) => (
//                 <button
//                   key={item.key}
//                   onClick={() => handleNavigation(item.path)}
//                   className={`w-full text-left px-4 py-4 rounded-lg text-lg font-medium transition ${
//                     location.pathname === item.path
//                       ? "bg-white/20"
//                       : "hover:bg-white/10"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}

//               <button
//                 onClick={() => handleNavigation("/order")}
//                 className="bg-white text-black px-6 py-4 rounded-full font-bold w-full mt-4"
//               >
//                 ORDER NOW
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from '../context/AuthContext';

// Important: Add these imports!
import { LogIn, LogOut, UserCircle } from 'lucide-react';

function AnimatedHamburger({ isMenuOpen, setIsMenuOpen }) {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="relative w-8 h-8 flex flex-col justify-center items-center"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-2"
        }`}
      />
    </button>
  );
}

const mainNavItems = [
  { key: "home", label: "HOME", path: "/" },
  { key: "about", label: "ABOUT", path: "/About" },
  { key: "menu", label: "MENU", path: "/menu" },
  { key: "contact", label: "CONTACT", path: "/contact" },
  { key: "cart", label: "CART", path: "/cart" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, loading, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);   // ← better to use isMenuOpen here (mobile menu)
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row-reverse justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Café Lamees Logo"
              className="h-10 md:h-12 brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {mainNavItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-sm tracking-widest font-bold transition ${
                  location.pathname === item.path
                    ? "text-white border-b-2 border-white"
                    : "text-white hover:opacity-70"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {loading ? (
              <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
            ) : user ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 text-white hover:opacity-80 transition"
              >
                <UserCircle size={26} />
                <span>Account</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-sm text-white tracking-widest font-bold transition hover:opacity-70 "
              >
                <span>LOG IN</span>
              </Link>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <AnimatedHamburger
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 text-white rounded-xl mb-4 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {mainNavItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left px-4 py-4 rounded-lg text-lg font-medium transition ${
                    location.pathname === item.path ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* <button
                onClick={() => handleNavigation("/order")}
                className="bg-white text-black px-6 py-4 rounded-2xl font-bold w-full mt-4"
              >
                ORDER NOW
              </button> */}

              <div className="pt-4 border-t border-white/20">
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 text-lg font-medium py-4 text-white"
                    >
                      <UserCircle size={26} />
                      <span>My Account</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-4 text-lg font-medium py-4 text-red-400 hover:text-red-300 transition w-full text-left"
                    >
                      <LogOut size={26} />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 text-lg font-medium py-4 text-white"
                  >
                    <span>LOG IN</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
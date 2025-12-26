// import logo from "../assets/logo.png"; // update path if needed

// export default function Footer() {
//   return (
//     <footer className="bg-[#2f4f3e] py-10 text-[#e8f5e9]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//           {/* Column 1: Logo & Description */}
//           <div className="text-center md:text-left">
//             <img
//               src={logo}
//               alt="Café Lamees Logo"
//               className="h-14 mb-4 mx-auto md:mx-0"
//             />
//             <p className="text-sm leading-relaxed">
//               Café Lamees is a cozy destination for freshly brewed coffee,
//               handcrafted beverages, and delicious food — made with love and
//               served with warmth.
//             </p>
//           </div>

//           {/* Column 2: Page Links */}
//           <div className="text-center">
//             <h4 className="text-lg font-semibold mb-4">Pages</h4>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:underline">Home</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">Menu</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">Coffee & Tea</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">Our Stores</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">Locations</a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Contact Info */}
//           <div className="text-center md:text-right">
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <p className="text-sm mb-2">📞 +44 1234 567 890</p>
//             <p className="text-sm mb-2">✉️ info@cafelamees.com</p>
//             <p className="text-sm leading-relaxed">
//               📍 123 High Street,<br />
//               London, UK
//             </p>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="border-t border-[#e8f5e9]/30 mt-8 pt-4 text-center text-sm">
//           © 2025 Café Lamees. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
    return (
      // 1. Updated background color to match the header: bg-[#2f4f3e]
      // 2. Updated vertical padding from 'py-12' to 'py-6' for a better visual balance on a dark background
      // 3. Updated text color to match the header: text-[#e8f5e9] (light cream/green)
      <footer className="bg-[#2f4f3e] py-6 text-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Updated heading color to the same light color for contrast */}
          <h3 className="text-3xl font-bold mb-6">Café Lamees</h3>
          <div className="space-x-8 mb-6">
            {/* Updated link color to the light text color, maintaining hover:underline */}
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          {/* The paragraph text already inherits the text-[#e8f5e9] from the footer */}
          <p>© 2025 Café Lamees. All rights reserved.</p>
        </div>
      </footer>
    );
}

{/* <footer className="py-12 bg-[#FFF8F0] border-t border-[#DAEBCB] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-bold text-[#2F4F3E] mb-4">Your Brand Name Café</p>
          <div className="flex justify-center gap-6 mb-8 text-gray-600">
            <a href="#" className="hover:text-[#2F4F3E]">Menu</a>
            <a href="#" className="hover:text-[#2F4F3E]">Order Online</a>
            <a href="#" className="hover:text-[#2F4F3E]">Locations</a>
            <a href="#" className="hover:text-[#2F4F3E]">Contact</a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Your Café Name. All rights reserved.</p>
        </div>
      </footer> */}
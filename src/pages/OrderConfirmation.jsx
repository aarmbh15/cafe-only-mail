// // src/pages/OrderConfirmation.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// export default function OrderConfirmation() {
//   const navigate = useNavigate();
//   const { refetch } = useCart(); // optional: make sure cart is cleared/refreshed

//   // Optional: You can clear/refetch cart here if you want
//   // useEffect(() => { refetch(); }, []);

//   return (
//     <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center px-4 py-16">
//       <div className="max-w-3xl w-full text-center bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-t-8 border-[#004d40]">
//         <div className="text-8xl mb-6">🎉</div>
        
//         <h1 className="text-5xl md:text-7xl font-bold text-[#004d40] mb-6">
//           Order Confirmed!
//         </h1>

//         <p className="text-2xl md:text-3xl text-[#1b5e20] mb-8">
//           Thank you for your order!<br />
//           We’re preparing it right now.
//         </p>

//         <p className="text-xl md:text-2xl text-gray-700 mb-12">
//           You will receive a confirmation shortly.<br />
//           Collection time will be communicated via email/SMS.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6 justify-center">
//           <button
//             onClick={() => navigate('/menu')}
//             className="px-10 py-5 bg-[#004d40] text-white text-xl md:text-2xl rounded-xl hover:bg-[#1b5e20] transition shadow-lg"
//           >
//             Back to Menu
//           </button>

//           <button
//             onClick={() => navigate('/profile')}
//             className="px-10 py-5 border-2 border-[#004d40] text-[#004d40] text-xl md:text-2xl rounded-xl hover:bg-[#DAEBCB] transition"
//           >
//             View Orders
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const { refetch } = useCart();

  React.useEffect(() => {
    refetch(); // just in case
  }, []);

  return (
    <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full text-center bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-t-8 border-[#004d40]">
        <div className="text-8xl mb-6">🎉</div>
        <h1 className="text-6xl font-bold text-[#004d40] mb-6">Order Confirmed!</h1>
        <p className="text-3xl text-[#1b5e20] mb-8">Thank you for your order!</p>
        <p className="text-xl text-gray-700 mb-12">
          We’re preparing it right now.<br />
          {/* Collection time will be sent via email/SMS. */}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate('/menu')}
            className="px-10 py-5 bg-[#004d40] text-white text-2xl rounded-xl hover:bg-[#1b5e20]"
          >
            Back to Menu
          </button>
          <button
            onClick={() => navigate('/profile?tab=addresses')}
            className="px-10 py-5 border-2 border-[#004d40] text-[#004d40] text-2xl rounded-xl hover:bg-[#DAEBCB]"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
}
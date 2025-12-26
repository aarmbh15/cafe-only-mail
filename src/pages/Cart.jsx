// // // src/pages/Cart.jsx
// // import React from 'react';

// // export default function Cart({ cart, total, updateCartItem, goToMenu, goToCheckout }) {
// //   if (cart.length === 0) {
// //     return (
// //       <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center px-6">
// //         <div className="max-w-3xl w-full py-20 text-center bg-white rounded-3xl shadow-xl p-8">
// //           <h1 className="text-4xl md:text-5xl font-bold text-[#004d40] mb-6">Your Cart is Empty</h1>
// //           <button 
// //             onClick={goToMenu} 
// //             className="px-8 py-4 bg-[#004d40] text-white text-xl rounded-xl hover:bg-[#1b5e20] transition"
// //           >
// //             Back to Menu
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#DAEBCB] py-12 md:py-20 px-4 md:px-6">
// //       <div className="max-w-5xl mx-auto">
// //         <h1 className="text-4xl md:text-6xl font-bold text-[#004d40] mb-8 mt-15 md:mb-12 text-center">Your Order</h1>
        
// //         <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
// //           {/* Desktop Table View */}
// //           <table className="w-full hidden md:table">
// //             <thead className="bg-[#e0f2e1]">
// //               <tr>
// //                 <th className="px-8 py-6 text-left text-[#004d40] font-semibold">Item</th>
// //                 <th className="px-8 py-6 text-center text-[#004d40]">Price</th>
// //                 <th className="px-8 py-6 text-center text-[#004d40]">Qty</th>
// //                 <th className="px-8 py-6 text-right text-[#004d40]">Subtotal</th>
// //                 <th className="px-4"></th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cart.map(item => (
// //                 <tr key={item.id} className="border-b">
// //                   <td className="px-8 py-6">
// //                     <p className="font-bold text-[#004d40] text-lg">{item.base}</p>
// //                     {item.selections.map((s, i) => (
// //                       <p key={i} className="text-sm text-gray-600">• {s.name}</p>
// //                     ))}
// //                   </td>
// //                   <td className="px-8 py-6 text-center">£{(item.totalPrice || 0).toFixed(2)}</td>
// //                   <td className="px-8 py-6 text-center">
// //                     <input
// //                       type="number"
// //                       min="1"
// //                       value={item.quantity}
// //                       onChange={e => updateCartItem(item.id, parseInt(e.target.value) || 1)}
// //                       className="w-16 text-center border-2 border-gray-200 rounded-lg px-2 py-1"
// //                     />
// //                   </td>
// //                   <td className="px-8 py-6 text-right font-bold text-[#1b5e20]">
// //                     £{((item.totalPrice || 0) * item.quantity).toFixed(2)}
// //                   </td>
// //                   <td className="px-8 py-6 text-center">
// //                     <button onClick={() => updateCartItem(item.id, 0)} className="text-red-600 text-2xl hover:scale-110 transition">&times;</button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           {/* Mobile List View */}
// //           <div className="md:hidden divide-y divide-gray-100">
// //             {cart.map(item => (
// //               <div key={item.id} className="p-6">
// //                 <div className="flex justify-between items-start mb-4">
// //                   <div>
// //                     <p className="font-bold text-[#004d40] text-xl">{item.base}</p>
// //                     {item.selections.map((s, i) => (
// //                       <p key={i} className="text-sm text-gray-600">• {s.name}</p>
// //                     ))}
// //                   </div>
// //                   <button onClick={() => updateCartItem(item.id, 0)} className="text-red-600 text-3xl">&times;</button>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <div className="flex items-center space-x-3">
// //                     <span className="text-gray-500">Qty:</span>
// //                     <input
// //                       type="number"
// //                       min="1"
// //                       value={item.quantity}
// //                       onChange={e => updateCartItem(item.id, parseInt(e.target.value) || 1)}
// //                       className="w-16 text-center border-2 border-[#004d40] rounded-lg py-1"
// //                     />
// //                   </div>
// //                   <p className="font-bold text-[#1b5e20] text-xl">
// //                     £{((item.totalPrice || 0) * item.quantity).toFixed(2)}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Footer Actions */}
// //           <div className="p-6 md:p-8 bg-[#e0f2e1] flex flex-col md:flex-row justify-between items-center gap-6">
// //             <button 
// //               onClick={goToMenu} 
// //               className="w-full md:w-auto px-6 py-3 border-2 border-[#004d40] text-[#004d40] font-semibold rounded-xl hover:bg-[#047857] transition order-2 md:order-1"
// //             >
// //               ← Continue Shopping
// //             </button>
// //             <div className="w-full md:w-auto text-center md:text-right order-1 md:order-2">
// //               <p className="text-3xl md:text-4xl font-bold text-[#004d40]">Total: £{total}</p>
// //               <button 
// //                 onClick={goToCheckout} 
// //                 className="w-full mt-4 px-10 py-4 bg-[#DAEBCB] border-2 border-[#004d40] text-[#064e3b] text-xl font-bold rounded-xl hover:bg-[#047857] shadow-lg transition"
// //               >
// //                 Proceed to Checkout →
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // src/pages/Cart.jsx
// import React from 'react';

// export default function Cart({ cart, total, updateCartItem, goToMenu, goToCheckout }) {
//   // DEBUG: Log incoming props
//   console.log('Cart component rendered');
//   console.log('🛒 Cart items received:', cart);
//   console.log('💷 Total received:', total);
//   console.log('🔄 updateCartItem function:', updateCartItem ? 'Available' : 'Missing!');
//   console.log('← goToMenu function:', goToMenu ? 'Available' : 'Missing!');
//   console.log('→ goToCheckout function:', goToCheckout ? 'Available' : 'Missing!');

//   if (cart.length === 0) {
//     console.log('Cart is empty – showing empty state');
//     return (
//       <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center px-6">
//         <div className="max-w-3xl w-full py-20 text-center bg-white rounded-3xl shadow-xl p-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#004d40] mb-6">Your Cart is Empty</h1>
//           <button 
//             onClick={goToMenu} 
//             className="px-8 py-4 bg-[#004d40] text-white text-xl rounded-xl hover:bg-[#1b5e20] transition"
//           >
//             Back to Menu
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#DAEBCB] py-12 md:py-20 px-4 md:px-6">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#004d40] mb-8 mt-15 md:mb-12 text-center">Your Order</h1>
        
//         <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
//           {/* Desktop Table View */}
//           <table className="w-full hidden md:table">
//             <thead className="bg-[#e0f2e1]">
//               <tr>
//                 <th className="px-8 py-6 text-left text-[#004d40] font-semibold">Item</th>
//                 <th className="px-8 py-6 text-center text-[#004d40]">Price</th>
//                 <th className="px-8 py-6 text-center text-[#004d40]">Qty</th>
//                 <th className="px-8 py-6 text-right text-[#004d40]">Subtotal</th>
//                 <th className="px-4"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map(item => {
//                 console.log('Rendering desktop item:', item); // Log each item
//                 if (!item.id) console.warn('Item missing ID!', item);
//                 if (!item.base) console.warn('Item missing base name!', item);
//                 if (!Array.isArray(item.selections)) console.warn('Selections not array!', item);

//                 return (
//                   <tr key={item.id} className="border-b">
//                     <td className="px-8 py-6">
//                       <p className="font-bold text-[#004d40] text-lg">{item.base || 'Unnamed Item'}</p>
//                       {(item.selections || []).map((s, i) => (
//                         <p key={i} className="text-sm text-gray-600">• {s.name || 'Unnamed selection'}</p>
//                       ))}
//                     </td>
//                     <td className="px-8 py-6 text-center">£{(item.totalPrice || 0).toFixed(2)}</td>
//                     <td className="px-8 py-6 text-center">
//                       <input
//                         type="number"
//                         min="1"
//                         value={item.quantity || 1}
//                         onChange={e => {
//                           const newQty = parseInt(e.target.value) || 1;
//                           console.log(`Quantity change: Item ${item.id} → ${newQty}`);
//                           updateCartItem(item.id, newQty);
//                         }}
//                         className="w-16 text-center border-2 border-gray-200 rounded-lg px-2 py-1"
//                       />
//                     </td>
//                     <td className="px-8 py-6 text-right font-bold text-[#1b5e20]">
//                       £{((item.totalPrice || 0) * (item.quantity || 1)).toFixed(2)}
//                     </td>
//                     <td className="px-8 py-6 text-center">
//                       <button 
//                         onClick={() => {
//                           console.log(`Remove item clicked: ${item.id}`);
//                           updateCartItem(item.id, 0);
//                         }} 
//                         className="text-red-600 text-2xl hover:scale-110 transition"
//                       >
//                         &times;
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           {/* Mobile List View */}
//           <div className="md:hidden divide-y divide-gray-100">
//             {cart.map(item => {
//               console.log('Rendering mobile item:', item);

//               return (
//                 <div key={item.id} className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <p className="font-bold text-[#004d40] text-xl">{item.base || 'Unnamed'}</p>
//                       {(item.selections || []).map((s, i) => (
//                         <p key={i} className="text-sm text-gray-600">• {s.name || '???'}</p>
//                       ))}
//                     </div>
//                     <button 
//                       onClick={() => {
//                         console.log(`Mobile remove: Item ${item.id}`);
//                         updateCartItem(item.id, 0);
//                       }} 
//                       className="text-red-600 text-3xl"
//                     >
//                       &times;
//                     </button>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-3">
//                       <span className="text-gray-500">Qty:</span>
//                       <input
//                         type="number"
//                         min="1"
//                         value={item.quantity || 1}
//                         onChange={e => {
//                           const newQty = parseInt(e.target.value) || 1;
//                           console.log(`Mobile quantity change: ${item.id} → ${newQty}`);
//                           updateCartItem(item.id, newQty);
//                         }}
//                         className="w-16 text-center border-2 border-[#004d40] rounded-lg py-1"
//                       />
//                     </div>
//                     <p className="font-bold text-[#1b5e20] text-xl">
//                       £{((item.totalPrice || 0) * (item.quantity || 1)).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Footer Actions */}
//           <div className="p-6 md:p-8 bg-[#e0f2e1] flex flex-col md:flex-row justify-between items-center gap-6">
//             <button 
//               onClick={() => {
//                 console.log('Continue Shopping clicked');
//                 goToMenu();
//               }} 
//               className="w-full md:w-auto px-6 py-3 border-2 border-[#004d40] text-[#004d40] font-semibold rounded-xl hover:bg-[#047857] transition order-2 md:order-1"
//             >
//               ← Continue Shopping
//             </button>
//             <div className="w-full md:w-auto text-center md:text-right order-1 md:order-2">
//               <p className="text-3xl md:text-4xl font-bold text-[#004d40]">Total: £{total || '0.00'}</p>
//               <button 
//                 onClick={() => {
//                   console.log('Proceed to Checkout clicked');
//                   goToCheckout();
//                 }} 
//                 className="w-full mt-4 px-10 py-4 bg-[#DAEBCB] border-2 border-[#004d40] text-[#064e3b] text-xl font-bold rounded-xl hover:bg-[#047857] shadow-lg transition"
//               >
//                 Proceed to Checkout →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';

// export default function CartContent() {
//   const { cart, total, loading, isFetching } = useCart();
//   const navigate = useNavigate();

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center text-2xl text-[#004d40]">
//         Loading your order...
//       </div>
//     );
//   }

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center px-6">
//         <div className="max-w-3xl w-full py-20 text-center bg-white rounded-3xl shadow-xl p-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#004d40] mb-6">Your Cart is Empty</h1>
//           <button
//             onClick={() => navigate('/menu')}
//             className="px-8 py-4 bg-[#004d40] text-white text-xl rounded-xl hover:bg-[#1b5e20] transition"
//           >
//             Back to Menu
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#DAEBCB] py-12 md:py-20 px-4 md:px-6">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#004d40] mb-8 md:mb-12 text-center">Your Order</h1>
//         {isFetching && (
//           <div className="absolute top-4 right-4 text-sm text-gray-500 animate-pulse">
//             Updating...
//           </div>
//         )}
//         <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
//           {/* Desktop Table */}
//           <table className="w-full hidden md:table">
//             <thead className="bg-[#e0f2e1]">
//               <tr>
//                 <th className="px-8 py-6 text-left text-[#004d40] font-semibold">Item</th>
//                 <th className="px-8 py-6 text-center text-[#004d40]">Price</th>
//                 <th className="px-8 py-6 text-center text-[#004d40]">Qty</th>
//                 <th className="px-8 py-6 text-right text-[#004d40]">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map(item => (
//                 <tr key={item.id} className="border-b">
//                   <td className="px-8 py-6">
//                     <p className="font-bold text-[#004d40] text-lg">{item.item_name || item.base}</p>
//                     {(item.selections || []).map((s, i) => (
//                       <p key={i} className="text-sm text-gray-600">• {s.name}</p>
//                     ))}
//                   </td>
//                   <td className="px-8 py-6 text-center">£{(item.total_price || item.totalPrice || 0).toFixed(2)}</td>
//                   <td className="px-8 py-6 text-center text-[#004d40] font-bold">
//                     {item.quantity || 1}
//                   </td>
//                   <td className="px-8 py-6 text-right font-bold text-[#1b5e20]">
//                     £{((item.total_price || item.totalPrice || 0) * (item.quantity || 1)).toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Mobile View */}
//           <div className="md:hidden divide-y divide-gray-100">
//             {cart.map(item => (
//               <div key={item.id} className="p-6">
//                 <div>
//                   <p className="font-bold text-[#004d40] text-xl">{item.item_name || item.base}</p>
//                   {(item.selections || []).map((s, i) => (
//                     <p key={i} className="text-sm text-gray-600">• {s.name}</p>
//                   ))}
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                   <span className="text-gray-500">Qty: {item.quantity || 1}</span>
//                   <p className="font-bold text-[#1b5e20] text-xl">
//                     £{((item.total_price || item.totalPrice || 0) * (item.quantity || 1)).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="p-6 md:p-8 bg-[#e0f2e1] flex flex-col md:flex-row justify-between items-center gap-6">
//             <button
//               onClick={() => navigate('/menu')}
//               className="w-full md:w-auto px-6 py-3 border-2 border-[#004d40] text-[#004d40] font-semibold rounded-xl hover:bg-[#047857] transition"
//             >
//               ← Continue Shopping
//             </button>
//             <div className="text-center md:text-right">
//               <p className="text-3xl md:text-4xl font-bold text-[#004d40]">Total: £{total.toFixed(2)}</p>
//               <button
//                 onClick={() => navigate('/checkout')}
//                 className="w-full mt-4 px-10 py-4 bg-[#DAEBCB] border-2 border-[#004d40] text-[#064e3b] text-xl font-bold rounded-xl hover:bg-[#047857] shadow-lg transition"
//               >
//                 Proceed to Checkout →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, total, loading, isFetching, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  if (loading) return <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center">Loading cart...</div>;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#004d40] mb-8">Your cart is empty</h2>
          <button
            onClick={() => navigate('/menu')}
            className="px-10 py-5 bg-[#004d40] text-white rounded-xl text-xl"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DAEBCB] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-[#004d40] mb-10 text-center">Your Cart</h1>

        {isFetching && <div className="text-center mb-4 animate-pulse">Updating...</div>}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Items list – simplified mobile-first */}
          {/* {cart.map(item => (
            <div key={item.id} className="p-6 border-b last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl text-[#004d40]">{item.item_name}</h3>
                  {item.selections?.map((s, i) => (
                    <p key={i} className="text-sm text-gray-600">• {s.name}</p>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">£{Number(item.total_price || 0).toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                    >−</button>
                    <span className="font-bold w-6 text-center">{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, +1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
                    >+</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 text-sm mt-2 hover:underline"
              >
                Remove
              </button>
            </div>
          ))} */}
          {cart.map((item) => {
  // Use the real field name from your data
  const unitPrice = Number(item.totalPrice ?? item.total_price ?? item.price ?? 0);
  const quantity = Number(item.quantity || 1);
  const lineTotal = unitPrice * quantity;

  return (
    <div key={item.id} className="p-6 border-b last:border-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-xl text-[#004d40]">{item.base || item.item_name || 'Item'}</h3>
          {item.selections?.map((s, i) => (
            <p key={i} className="text-sm text-gray-600 mt-0.5">
              • {s.name}
              {s.price > 0 && (
                <span className="text-gray-500 ml-1">(+£{Number(s.price).toFixed(2)})</span>
              )}
            </p>
          ))}
        </div>

        <div className="text-right shrink-0">
          <p className="font-bold text-lg text-[#004d40]">
            £{unitPrice.toFixed(2)}
          </p>

          {quantity > 1 && (
            <p className="text-sm text-gray-500">× {quantity}</p>
          )}

          <div className="flex items-center justify-end gap-2 mt-3">
            {/* <button
              onClick={() => updateQuantity(item.id, -1)}
              className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="font-semibold w-8 text-center">{quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, +1)}
              className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button> */}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-600 hover:text-red-800 hover:underline transition-colors"
        >
          Remove
        </button>

        <p className="font-medium text-[#1b5e20]">
          Subtotal: £{lineTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
})}

          <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <button
              onClick={() => navigate('/menu')}
              className="px-8 py-4 border-2 border-[#004d40] text-[#004d40] rounded-xl"
            >
              Continue Shopping
            </button>
            <div className="text-center md:text-right">
              <p className="text-3xl font-bold text-[#004d40]">Total: £{total.toFixed(2)}</p>
              <button
                onClick={() => navigate('/checkout')}
                className="mt-4 px-10 py-4 bg-[#004d40] text-white rounded-xl text-xl font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from 'react';

// export default function Checkout({ cart, total, onSubmit, goToCart }) {
//   const [details, setDetails] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     notes: '',
//     paymentMethod: 'card',
//   });

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!details.name || !details.email || !details.phone) {
//       alert('Please fill in Name, Email, and Phone');
//       return;
//     }
//     onSubmit(details);
//   };

//   return (
//     <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen">
//       <div className="max-w-5xl mx-auto px-4 md:px-6">
//         <h1 className="text-4xl md:text-7xl font-bold text-[#004d40] text-center mb-10 md:mb-16">CHECKOUT</h1>

//         <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
//           {/* Order Summary - Left Side */}
//           <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] h-fit">
//             <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">Your Order</h2>
//             <div className="space-y-6">
//               {cart.length === 0 ? (
//                 <p className="text-xl text-gray-600 italic">No items in cart</p>
//               ) : (
//                 cart.map((item) => (
//                   <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
//                     <p className="text-xl md:text-2xl font-bold text-[#004d40]">{item.base} × {item.quantity}</p>
//                     <ul className="mt-2 space-y-1">
//                       {item.selections.map((sel, i) => (
//                         <li key={i} className="text-base md:text-lg text-gray-700 pl-4">• {sel.name} {sel.price > 0 && <span className="text-[#1b5e20]">(+£{sel.price.toFixed(2)})</span>}</li>
//                       ))}
//                     </ul>
//                     <p className="text-right text-xl md:text-2xl font-bold text-[#1b5e20] mt-2">
//                       £{(item.totalPrice * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 ))
//               )}
//             </div>
//             <div className="mt-8 pt-6 border-t-4 border-[#004d40]">
//               <p className="text-3xl md:text-4xl font-extrabold text-right text-[#004d40]">
//                 Total: <span className="text-[#004d40]">£{total}</span>
//               </p>
//             </div>
//             <button
//               onClick={goToCart}
//               className="w-full mt-6 py-3 border-2 bg-[#DAEBCB] border-[#004d40] text-[#064e3b] text-lg font-semibold rounded-xl hover:bg-[#047857] transition"
//             >
//               ← Edit Order
//             </button>
//           </div>

//           {/* Customer Details & Payment - Right Side */}
//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] space-y-8 md:space-y-10">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">Details</h2>
//               <div className="space-y-4 md:space-y-6">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name *"
//                   value={details.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address *"
//                   value={details.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number *"
//                   value={details.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//                 <textarea
//                   name="notes"
//                   placeholder="Special Requests (optional)"
//                   value={details.notes}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-[#004d40] mb-4 md:mb-6">Payment</h3>
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-4 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:bg-[#047857] transition">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="card"
//                     checked={details.paymentMethod === 'card'}
//                     onChange={handleChange}
//                     className="w-5 h-5 accent-[#004d40]"
//                   />
//                   <span className="text-lg font-medium">Pay by Card</span>
//                 </label>
//                 <label className="flex items-center space-x-4 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:bg-gray-50 transition">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="cash"
//                     checked={details.paymentMethod === 'cash'}
//                     onChange={handleChange}
//                     className="w-5 h-5 accent-[#004d40]"
//                   />
//                   <span className="text-lg font-medium">Cash on Collection</span>
//                 </label>
//               </div>
//               {details.paymentMethod === 'card' && (
//                 <p className="mt-4 text-sm text-gray-500 italic">Redirecting to secure gateway...</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full py-5 bg-[#DAEBCB] text-[#064e3b] border-2 border-[#064e3b]text-2xl md:text-3xl font-bold rounded-xl shadow-xl hover:bg-[#047857] transition active:scale-95"
//             >
//               Place Order • £{total}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/pages/Checkout.jsx
// import React, { useState, useEffect } from 'react'; // ← Added useEffect
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import axios from '../api/axios';

// export default function Checkout() {
//   const { cart, total, loading, refetch } = useCart();
//   const navigate = useNavigate();

//   const [details, setDetails] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     notes: '',
//     paymentMethod: 'card',
//   });

//   const [submitting, setSubmitting] = useState(false);

//   // Debug: Log cart and total whenever they change
//   useEffect(() => {
//     console.log('🛒 Current Cart:', cart);
//     console.log('💰 Calculated Total:', total);
//     console.log('📊 Cart length:', cart.length);
//     console.log('🔄 Loading state:', loading);
//   }, [cart, total, loading]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prev) => ({ ...prev, [name]: value }));

//     // Debug: Log form changes in real-time
//     console.log(`Form field updated: ${name} =`, value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log('🚀 Submit attempted with details:', details);

//     if (!details.name || !details.email || !details.phone) {
//       alert('Please fill in Name, Email, and Phone');
//       console.warn('⚠️ Validation failed: Missing required fields');
//       return;
//     }

//     if (cart.length === 0) {
//       alert('Your cart is empty!');
//       console.warn('⚠️ Cart is empty');
//       return;
//     }

//     setSubmitting(true);

//     const orderData = {
//       customer: {
//         name: details.name,
//         email: details.email,
//         phone: details.phone,
//         notes: details.notes,
//       },
//       payment_method: details.paymentMethod,
//       items: cart,
//       total_amount: total,
//     };

//     // Critical debug: See exactly what is being sent to backend
//     console.log('📤 Sending order data to backend:', orderData);

//     try {
//       await axios.post('/orders/create', orderData);

//       console.log('✅ Order placed successfully!');
//       alert('Order placed successfully! 🎉');
//       refetch(); // Clear cart
//       navigate('/order-confirmation');
//     } catch (error) {
//       // Detailed error logging
//       console.error('❌ Order submission failed:', error);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error setting up request:', error.message);
//       }
//       alert('Failed to place order. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center">
//         <p className="text-3xl text-[#004d40]">Loading checkout...</p>
//       </div>
//     );
//   }

//   if (cart.length === 0) {
//     return (
//       <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-[#004d40] mb-8">
//             Your Cart is Empty
//           </h1>
//           <button
//             onClick={() => navigate('/menu')}
//             className="px-10 py-5 bg-[#004d40] text-white text-2xl rounded-xl hover:bg-[#1b5e20] transition"
//           >
//             Back to Menu
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen">
//       <div className="max-w-5xl mx-auto px-4 md:px-6">
//         <h1 className="text-4xl md:text-7xl font-bold text-[#004d40] text-center mb-10 md:mb-16">
//           CHECKOUT
//         </h1>

//         <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
//           {/* Order Summary */}
//           <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] h-fit">
//             <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">
//               Your Order
//             </h2>
//             <div className="space-y-6">
//               {cart.map((item) => {
//                 // Debug each item rendering
//                 console.log('Rendering cart item:', item);
//                 return (
//                   <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
//                     <p className="text-xl md:text-2xl font-bold text-[#004d40]">
//                       {item.item_name || item.base} × {item.quantity || 1}
//                     </p>
//                     <ul className="mt-2 space-y-1">
//                       {(item.selections || []).map((sel, i) => (
//                         <li key={i} className="text-base md:text-lg text-gray-700 pl-4">
//                           • {sel.name}{' '}
//                           {sel.price > 0 && (
//                             <span className="text-[#1b5e20]">
//                               (+£{sel.price.toFixed(2)})
//                             </span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                     <p className="text-right text-xl md:text-2xl font-bold text-[#1b5e20] mt-2">
//                       £{((item.total_price || item.totalPrice || 0) * (item.quantity || 1)).toFixed(2)}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="mt-8 pt-6 border-t-4 border-[#004d40]">
//               <p className="text-3xl md:text-4xl font-extrabold text-right text-[#004d40]">
//                 Total: <span className="text-[#004d40]">£{total.toFixed(2)}</span>
//               </p>
//             </div>
//             <button
//               onClick={() => navigate('/cart')}
//               className="w-full mt-6 py-3 border-2 bg-[#DAEBCB] border-[#004d40] text-[#064e3b] text-lg font-semibold rounded-xl hover:bg-[#047857] transition"
//             >
//               ← Edit Order
//             </button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] space-y-8 md:space-y-10">
//             {/* ... rest of form unchanged ... */}
//             <div>
//               <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">
//                 Details
//               </h2>
//               <div className="space-y-4 md:space-y-6">
//                 <input type="text" name="name" placeholder="Full Name *" value={details.name} onChange={handleChange} required className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none" />
//                 <input type="email" name="email" placeholder="Email Address *" value={details.email} onChange={handleChange} required className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none" />
//                 <input type="tel" name="phone" placeholder="Phone Number *" value={details.phone} onChange={handleChange} required className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none" />
//                 <textarea name="notes" placeholder="Special Requests (optional)" value={details.notes} onChange={handleChange} rows={3} className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none" />
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-[#004d40] mb-4 md:mb-6">
//                 Payment
//               </h3>
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-4 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:bg-[#e0f2e1] transition">
//                   <input type="radio" name="paymentMethod" value="card" checked={details.paymentMethod === 'card'} onChange={handleChange} className="w-5 h-5 accent-[#004d40]" />
//                   <span className="text-lg font-medium">Pay by Card</span>
//                 </label>
//                 <label className="flex items-center space-x-4 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:bg-[#e0f2e1] transition">
//                   <input type="radio" name="paymentMethod" value="cash" checked={details.paymentMethod === 'cash'} onChange={handleChange} className="w-5 h-5 accent-[#004d40]" />
//                   <span className="text-lg font-medium">Cash on Collection</span>
//                 </label>
//               </div>
//               {details.paymentMethod === 'card' && (
//                 <p className="mt-4 text-sm text-gray-500 italic">
//                   Redirecting to secure gateway after submission...
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full py-5 bg-[#DAEBCB] text-[#064e3b] border-2 border-[#064e3b] text-2xl md:text-3xl font-bold rounded-xl shadow-xl hover:bg-[#047857] transition active:scale-95 disabled:opacity-70"
//             >
//               {submitting ? 'Placing Order...' : `Place Order • £${total.toFixed(2)}`}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// // src/pages/Checkout.jsx
// import React, { useState, useEffect } from 'react';
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import axios from '../api/axios';

// export default function Checkout() {
//   const { cart, total, loading, refetch } = useCart();
//   const navigate = useNavigate();

//   const [details, setDetails] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     notes: '',
//     paymentMethod: 'cash',
//     // Address fields
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     postcode: '',
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [fetchingUser, setFetchingUser] = useState(true); // To show loading if needed

//   // Fetch logged-in user data on mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/user'); // ← Your route for UserController@show
//         const user = response.data;

//         console.log('👤 Fetched user data:', user);

//         setDetails((prev) => ({
//           ...prev,
//           name: user.name || '',
//           email: user.email || '',
//           phone: user.phone || '',
//         }));
//       } catch (error) {
//         console.warn('Could not fetch user data (possibly guest):', error);
//         // Don't block checkout for guests – just leave fields empty
//       } finally {
//         setFetchingUser(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Debug logs (keep or remove later)
//   useEffect(() => {
//     console.log('🛒 Current Cart:', cart);
//     console.log('💰 Calculated Total:', total);
//   }, [cart, total]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!details.name || !details.email || !details.phone) {
//       alert('Please fill in Name, Email, and Phone');
//       return;
//     }

//     // If paying by card (assuming delivery), require address
//     if (details.paymentMethod === 'card') {
//       if (!details.addressLine1 || !details.city || !details.postcode) {
//         alert('Please fill in your delivery address for card payment.');
//         return;
//       }
//     }

//     if (cart.length === 0) {
//       alert('Your cart is empty!');
//       return;
//     }

//     setSubmitting(true);

//     const orderData = {
//       customer: {
//         name: details.name,
//         email: details.email,
//         phone: details.phone,
//         notes: details.notes,
//       },
//       payment_method: details.paymentMethod,
//       items: cart,
//       total_amount: total,
//     };

//     // Only send address if card payment (delivery)
//     if (details.paymentMethod === 'card') {
//       orderData.address = {
//         address_line_1: details.addressLine1.trim(),
//         address_line_2: details.addressLine2.trim(),
//         city: details.city.trim(),
//         postcode: details.postcode.trim().toUpperCase(),
//       };
//     }
//     // If you later support saved addresses:
//     // orderData.address_id = selectedAddressId;

//     console.log('📤 Sending order data:', orderData);

//     try {
//       await axios.post('/orders/create', orderData);
//       alert('Order placed successfully! 🎉');
//       refetch(); // Clear cart
//       navigate('/order-confirmation');
//     } catch (error) {
//       console.error('❌ Order failed:', error);
//       if (error.response) {
//         console.error('Server error:', error.response.data);
//         alert(error.response.data.message || 'Order failed. Please try again.');
//       } else {
//         alert('Network error. Please check your connection.');
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading || fetchingUser) {
//     return (
//       <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center">
//         <p className="text-3xl text-[#004d40]">Loading checkout...</p>
//       </div>
//     );
//   }

//   if (cart.length === 0) {
//     return (
//       <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-[#004d40] mb-8">
//             Your Cart is Empty
//           </h1>
//           <button
//             onClick={() => navigate('/menu')}
//             className="px-10 py-5 bg-[#004d40] text-white text-2xl rounded-xl hover:bg-[#1b5e20] transition"
//           >
//             Back to Menu
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen">
//       <div className="max-w-5xl mx-auto px-4 md:px-6">
//         <h1 className="text-4xl md:text-7xl font-bold text-[#004d40] text-center mb-10 md:mb-16">
//           CHECKOUT
//         </h1>

//         <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
//           {/* Order Summary */}
//           <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] h-fit">
//             <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">
//               Your Order
//             </h2>
//             <div className="space-y-6">
//               {cart.map((item) => (
//                 <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
//                   <p className="text-xl md:text-2xl font-bold text-[#004d40]">
//                     {item.base || item.item_name} × {item.quantity || 1}
//                   </p>
//                   <ul className="mt-2 space-y-1">
//                     {(item.selections || []).map((sel, i) => (
//                       <li key={i} className="text-base md:text-lg text-gray-700 pl-4">
//                         • {sel.name}{' '}
//                         {sel.price > 0 && (
//                           <span className="text-[#1b5e20]">
//                             (+£{sel.price.toFixed(2)})
//                           </span>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="text-right text-xl md:text-2xl font-bold text-[#1b5e20] mt-2">
//                     £{((item.totalPrice || item.total_price || 0) * (item.quantity || 1)).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 pt-6 border-t-4 border-[#004d40]">
//               <p className="text-3xl md:text-4xl font-extrabold text-right text-[#004d40]">
//                 Total: <span className="text-[#004d40]">£{total.toFixed(2)}</span>
//               </p>
//             </div>
//             <button
//               onClick={() => navigate('/cart')}
//               className="w-full mt-6 py-3 border-2 bg-[#DAEBCB] border-[#004d40] text-[#064e3b] text-lg font-semibold rounded-xl hover:bg-[#047857] transition"
//             >
//               ← Edit Order
//             </button>
//           </div>

//           {/* Checkout Form */}
//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] space-y-8 md:space-y-10">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">
//                 Details
//               </h2>
//               <div className="space-y-4 md:space-y-6">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name *"
//                   value={details.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address *"
//                   value={details.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number *"
//                   value={details.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//                 <textarea
//                   name="notes"
//                   placeholder="Special Requests (optional)"
//                   value={details.notes}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* Delivery Address - only shown/required for card */}
//             {details.paymentMethod === 'card' && (
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-[#004d40] mb-4 md:mb-6">
//                   Delivery Address
//                 </h3>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     placeholder="Address Line 1 *"
//                     value={details.addressLine1}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     placeholder="Address Line 2 (optional)"
//                     value={details.addressLine2}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="city"
//                     placeholder="Town / City *"
//                     value={details.city}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="postcode"
//                     placeholder="Postcode *"
//                     value={details.postcode}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none uppercase"
//                   />
//                 </div>
//               </div>
//             )}

//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-[#004d40] mb-4 md:mb-6">
//                 Payment
//               </h3>
//               <div className="space-y-3">
//                 {/* <label className="flex items-center space-x-4 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:bg-[#e0f2e1] transition">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="card"
//                     checked={details.paymentMethod === 'card'}
//                     onChange={handleChange}
//                     className="w-5 h-5 accent-[#004d40]"
//                   />
//                   <span className="text-lg font-medium">Pay by Card</span>
//                 </label> */}
//                 <label className="flex items-center space-x-4 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:bg-[#e0f2e1] transition">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="cash"
//                     checked={details.paymentMethod === 'cash'}
//                     onChange={handleChange}
//                     className="w-5 h-5 accent-[#004d40]"
//                   />
//                   <span className="text-lg font-medium">Cash on Collection</span>
//                 </label>
//               </div>
//               {/* {details.paymentMethod === 'card' && (
//                 <p className="mt-4 text-sm text-gray-500 italic">
//                   Redirecting to secure gateway after submission...
//                 </p>
//               )} */}
//             </div>

//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full py-5 bg-[#DAEBCB] text-[#064e3b] border-2 border-[#064e3b] text-2xl md:text-3xl font-bold rounded-xl shadow-xl hover:bg-[#047857] transition active:scale-95 disabled:opacity-70"
//             >
//               {submitting ? 'Placing Order...' : `Place Order • £${total.toFixed(2)}`}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Checkout() {
  const { cart, total, loading, refetch,clearCart } = useCart();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);

  // Fetch user data to pre-fill form
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/user');
        const user = response.data;

        setDetails(prev => ({
          ...prev,
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
        }));
      } catch (error) {
        console.warn('Guest checkout allowed');
      } finally {
        setFetchingUser(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.name || !details.email || !details.phone) {
      alert('Please fill in Name, Email, and Phone');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setSubmitting(true);

    const orderData = {
      customer: {
        name: details.name,
        email: details.email,
        phone: details.phone,
        notes: details.notes || null,
      },
      payment_method: 'cash', // Fixed: only cash on collection
      items: cart,
      total_amount: total,
    };

    console.log('📤 Sending order data:', orderData);

    try {
      await axios.post('/orders/create', orderData);
      alert('Order placed successfully! 🎉');
      refetch(); // Clear cart
      navigate('/order-confirmation');
    } catch (error) {
      console.error('❌ Order failed:', error);
      alert(
        error.response?.data?.message || 
        'Order failed. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || fetchingUser) {
    return (
      <div className="min-h-screen bg-[#DAEBCB] flex items-center justify-center">
        <p className="text-3xl text-[#004d40]">Loading checkout...</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#004d40] mb-8">
            Your Cart is Empty
          </h1>
          <button
            onClick={() => navigate('/menu')}
            className="px-10 py-5 bg-[#004d40] text-white text-2xl rounded-xl hover:bg-[#1b5e20] transition"
          >
            Back to Menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24 bg-[#DAEBCB] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-7xl font-bold text-[#004d40] text-center mb-10 md:mb-16">
          CHECKOUT
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] h-fit">
            <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">
              Your Order
            </h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <p className="text-xl md:text-2xl font-bold text-[#004d40]">
                    {item.base || item.item_name} × {item.quantity || 1}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {(item.selections || []).map((sel, i) => (
                      <li key={i} className="text-base md:text-lg text-gray-700 pl-4">
                        • {sel.name}{' '}
                        {sel.price > 0 && (
                          <span className="text-[#1b5e20]">
                            (+£{sel.price.toFixed(2)})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="text-right text-xl md:text-2xl font-bold text-[#1b5e20] mt-2">
                    £{((item.totalPrice || item.total_price || 0) * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t-4 border-[#004d40]">
              <p className="text-3xl md:text-4xl font-extrabold text-right text-[#004d40]">
                Total: <span className="text-[#004d40]">£{total.toFixed(2)}</span>
              </p>
            </div>
            <button
              onClick={() => navigate('/cart')}
              className="w-full mt-6 py-3 border-2 bg-[#DAEBCB] border-[#004d40] text-[#064e3b] text-lg font-semibold rounded-xl hover:bg-[#047857] transition"
            >
              ← Edit Order
            </button>
          </div>

          {/* Checkout Form - Collection Only */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border-t-8 border-[#004d40] space-y-8 md:space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#004d40] mb-6 md:mb-8">
                Your Details
              </h2>
              <div className="space-y-4 md:space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={details.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={details.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={details.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
                />
                <textarea
                  name="notes"
                  placeholder="Special Requests (optional)"
                  value={details.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-5 py-4 text-lg border-2 border-[#004d40] rounded-xl focus:ring-2 focus:ring-[#004d40] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#004d40] mb-4 md:mb-6">
                Payment Method
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Cash on Collection only
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-5 bg-[#DAEBCB] text-[#064e3b] border-2 border-[#064e3b] text-2xl md:text-3xl font-bold rounded-xl shadow-xl hover:bg-[#047857] transition active:scale-95 disabled:opacity-70"
            >
              {submitting ? 'Placing Order...' : `Place Order • £${total.toFixed(2)}`}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
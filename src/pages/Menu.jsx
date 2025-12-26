// import React, { useState } from 'react';
// import axios from '../api/axios';
// import { useCart } from '../context/CartContext';

// // Assets
// import bf1 from '../assets/bf1.jpg'; import bf2 from '../assets/bf2.jpg';
// import bf3 from '../assets/bf3.jpg'; import l1 from '../assets/L1.jpg';
// import l2 from '../assets/L2.jpg'; import l4 from '../assets/L4.jpg';
// import c5 from '../assets/c5.jpg'; import d1 from '../assets/d1.jpg';
// import d2 from '../assets/d2.jpg'; import k3 from '../assets/k3.jpg';
// import k5 from '../assets/k5.jpg'; import d3 from '../assets/d3.jpg';
// import k4 from '../assets/k4.jpg'; import c2 from '../assets/c2.jpg';
// import c3 from '../assets/c3.jpg';

// const categories = [
//   { name: 'BREAKFAST', icon: '🍳', id: 'breakfast' },
//   { name: 'LUNCH', icon: '🥪', id: 'lunch' },
//   { name: 'COFFEE & TEA', icon: '☕', id: 'coffee-tea' },
//   { name: 'DRINK & SWEETS', icon: '🍰', id: 'sweets-drinks' },
//   { name: 'KIDS MEAL', icon: '🎈', id: 'kids-meal' },
// ];

// const scrollingCategories = [...categories, ...categories, ...categories];

// const menuSections = [
//   {
//     id: 'breakfast',
//     title: 'BREAKFAST',
//     subtitle: 'Classic English breakfasts prepared with premium ingredients.',
//     categories: [
//       {
//         name: 'Our English Breakfasts',
//         type: 'radio',
//         items: [
//           { name: 'Traditional English Breakfast', description: '1 Egg, 2 Turkish Rashers, 1 sausage, baked beans, mushrooms, hash browns', price: 6.99 },
//           { name: 'Vegetarian English Breakfast', description: '1 Egg, 1 veggie sausage, baked beans, grilled tomato, mushrooms, hash brown', price: 6.99 },
//           { name: 'Classic Breakfast', description: '2 Eggs, 2 sausages, 2 Turkish Rashers, black pudding, baked beans, grilled tomato, mushrooms, hash brown', price: 8.49 }
//         ]
//       },
//       {
//         name: 'Breakfast Extras (Create Your Own)',
//         type: 'checkbox',
//         items: [
//           { name: 'Eggs (Fried/Scrambled/Poached)', price: 0.99 },
//           { name: 'Sausage', price: 0.99 },
//           { name: 'Veggie Sausage', price: 0.99 },
//           { name: 'Turkish Rasher', price: 0.99 },
//           { name: 'Black Pudding', price: 0.99 },
//           { name: 'Baked Beans', price: 0.99 },
//           { name: 'Hash Browns', price: 0.99 },
//           { name: 'Mushrooms', price: 0.99 },
//           { name: 'Grilled Tomato', price: 0.99 }
//         ]
//       }
//     ],
//     images: [bf1, bf2, bf3]
//   },
//   {
//     id: 'lunch',
//     title: 'LUNCH',
//     subtitle: 'Hand-pressed burgers and custom artisan wraps.',
//     categories: [
//       {
//         name: '1. Choose Your Base',
//         type: 'radio',
//         items: [
//           { name: 'Wrap', price: 3.49 },
//           { name: 'Panini', price: 3.49 },
//           { name: 'Pitta', price: 3.49 },
//           { name: 'Baguette', price: 3.49 },
//           { name: 'Bagel', price: 3.49 },
//           { name: 'Classic Seeded Bun', price: 3.49 }
//         ]
//       },
//       {
//         name: '2. Choose Your Protein',
//         type: 'checkbox',
//         items: [
//           { name: 'Chicken Tikka', price: 2.49 },
//           { name: 'Fried Chicken', price: 2.49 },
//           { name: 'Beef Patty', price: 2.79 },
//           { name: 'Veggie Patty', price: 2.25 }
//         ]
//       },
//       {
//         name: 'Classic Burgers',
//         type: 'radio',
//         items: [
//           { name: 'Cheeseburger', description: 'Seeded bun, Beef Patty, Cheese, Lettuce, Sauce', price: 5.99 },
//           { name: 'Double Cheeseburger', description: 'Two Beef Patties, Double Cheese, Bun, Lettuce, Sauce', price: 7.49 },
//           { name: 'Fried Chicken Burger', description: 'Crispy Chicken Fillet, Bun, Cheese, Lettuce, Mayo', price: 6.49 }
//         ]
//       }
//     ],
//     images: [l1, l2, l4]
//   },
//   {
//     id: 'coffee-tea',
//     title: 'COFFEE & TEA',
//     subtitle: 'Premium coffee beans and traditional tea blends.',
//     categories: [
//       {
//         name: 'Coffee & Hot Drinks',
//         type: 'radio',
//         items: [
//           { name: 'Espresso (Single)', price: 1.99 },
//           { name: 'Espresso (Double)', price: 2.29 },
//           { name: 'Americano (Black / White)', price: 2.49 },
//           { name: 'Latte (Hot / Iced)', price: 2.49 },
//           { name: 'Spanish Latte', price: 2.49 },
//           { name: 'Cappuccino', price: 2.49 },
//           { name: 'Flat White', price: 2.49 },
//           { name: 'Mocha', price: 2.99 },
//           { name: 'Hot Chocolate', price: 2.49 }
//         ]
//       },
//       {
//         name: 'Tea Selection',
//         type: 'radio',
//         items: [
//           { name: 'English Breakfast Tea', price: 1.49 },
//           { name: 'Green Tea', price: 1.49 },
//           { name: 'Mint Tea', price: 1.49 },
//           { name: 'Karak Chai', price: 1.99 }
//         ]
//       }
//     ],
//     images: [c5, c2, c3]
//   },
//   {
//     id: 'sweets-drinks',
//     title: 'SWEETS & DRINKS',
//     subtitle: 'House-made desserts and refreshing beverages.',
//     categories: [
//       {
//         name: 'Milkshakes & Iced Coffee',
//         type: 'radio',
//         items: [
//           { name: 'Milkshake (Various Flavours)', price: 3.99 },
//           { name: 'Frappé', description: 'Iced Coffee with optional Milk, Sugar & Cream', price: 3.49 }
//         ]
//       },
//       {
//         name: 'Soft Drinks',
//         type: 'radio',
//         items: [
//           { name: 'Cans (Coke, Sprite, etc.)', price: 1.49 },
//           { name: 'Mango Rubicon', price: 1.99 }
//         ]
//       },
//       {
//         name: 'Sweets',
//         type: 'checkbox',
//         items: [
//           { name: 'Cheesecakes', price: 4.49 },
//           { name: 'Tiramisu Cup', price: 3.99 },
//           { name: 'Cup Cake', price: 2.29 },
//           { name: 'Brownie', price: 3.49 },
//           { name: 'Customised Cakes', price: 'POA' }
//         ]
//       }
//     ],
//     images: [d1, d2, d3]
//   }
// ];

// const kidsMeals = [
//   { name: 'Breakfast Meal Deal', description: 'Toast, Sausage, Egg & Water', price: 2.49, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/37d4f9bc592ee5bddc5f211abe4ce4ef/783282f6131ef2258e5bcd87c46aa87e.jpeg' },
//   { name: 'Cheese Sandwich', price: 1.49, image: k4 },
//   { name: 'Mini Chicken Wrap', description: 'Includes fries and drink', price: 3.49, image: 'https://static01.nyt.com/images/2015/04/15/dining/15FIELDGUIDE_AVOCADO/15FIELDGUIDE_AVOCADO-superJumbo.jpg' },
//   { name: 'Kids\' Burger', description: 'Includes fries and drink', price: 3.49, image: l1 },
//   { name: 'Kids\' Milk', price: 0.79, image: k5 },
//   { name: 'Kids\' Juice', price: 0.89, image: k3 },
//   { name: 'Kids\' Water', price: 0.00, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1000' }
// ];

// export default function Menu({ addToCart, cart, total, goToCart }) {
//   const [selections, setSelections] = useState({});

//   const formatPrice = (p) => (typeof p === 'number' ? `£${p.toFixed(2)}` : p);

//   const updateSelection = (sectionId, categoryName, value, isCheckbox) => {
//     setSelections(prev => {
//       const section = prev[sectionId] || {};
//       if (isCheckbox) {
//         const list = section[categoryName] || [];
//         return {
//           ...prev,
//           [sectionId]: { ...section, [categoryName]: list.includes(value) ? list.filter(v => v !== value) : [...list, value] },
//         };
//       }
//       return { ...prev, [sectionId]: { ...section, [categoryName]: value } };
//     });
//   };

//   const calculateSectionTotal = (sectionId) => {
//     let sum = 0;
//     const sel = selections[sectionId] || {};
//     const section = menuSections.find(s => s.id === sectionId);
//     section?.categories.forEach(cat => {
//       const vals = cat.type === 'checkbox' ? (sel[cat.name] || []) : (sel[cat.name] ? [sel[cat.name]] : []);
//       vals.forEach(val => {
//         const item = cat.items.find(i => i.name === val);
//         if (item && typeof item.price === 'number') sum += item.price;
//       });
//     });
//     return sum.toFixed(2);
//   };

//   // const addCurrentSection = (section) => {
//   //   const sel = selections[section.id] || {};
//   //   const selectedItems = [];
//   //   let price = 0;
//   //   section.categories.forEach(cat => {
//   //     const vals = cat.type === 'checkbox' ? (sel[cat.name] || []) : (sel[cat.name] ? [sel[cat.name]] : []);
//   //     vals.forEach(name => {
//   //       const item = cat.items.find(i => i.name === name);
//   //       if (item) {
//   //         selectedItems.push({ name: item.name, price: item.price });
//   //         if (typeof item.price === 'number') price += item.price;
//   //       }
//   //     });
//   //   });

//   //   if (selectedItems.length === 0) { alert('Please select an item first'); return; }

//   //   addToCart({ id: Date.now() + Math.random(), base: section.title, selections: selectedItems, totalPrice: price, quantity: 1 });
//   //   setSelections(prev => ({ ...prev, [section.id]: {} }));
//   // };
// // const addCurrentSection = (section) => {
// //   const sel = selections[section.id] || {};
// //   const selectedItems = [];
// //   let price = 0;

// //   section.categories.forEach(cat => {
// //     const vals = cat.type === 'checkbox' ? (sel[cat.name] || []) : (sel[cat.name] ? [sel[cat.name]] : []);
// //     vals.forEach(name => {
// //       const item = cat.items.find(i => i.name === name);
// //       if (item) {
// //         selectedItems.push({ name: item.name, price: item.price });
// //         if (typeof item.price === 'number') price += item.price;
// //       }
// //     });
// //   });

// //   if (selectedItems.length === 0) {
// //     alert('Please select an item first');
// //     return;
// //   }

// //   // SEND TO BACKEND
// //   axios.post('/cart/add', {
// //     item_name: section.title,
// //     selections: selectedItems,
// //     total_price: price,
// //     section: section.title,
// //   }).then(() => {
// //     // Optionally refetch cart or just let parent handle via polling/state
// //     // If using context, trigger refresh
// //     alert('Added to cart!');
// //     setSelections(prev => ({ ...prev, [section.id]: {} })); // reset section
// //   }).catch(err => {
// //     alert('Failed to add to cart');
// //     console.error(err);
// //   });
// // };

// const addCurrentSection = (section) => {
//   const sel = selections[section.id] || {};
//   const selectedItems = [];
//   let price = 0;

//   section.categories.forEach(cat => {
//     const vals = cat.type === 'checkbox' ? (sel[cat.name] || []) : (sel[cat.name] ? [sel[cat.name]] : []);
//     vals.forEach(name => {
//       const item = cat.items.find(i => i.name === name);
//       if (item) {
//         selectedItems.push({ name: item.name, price: item.price });
//         if (typeof item.price === 'number') price += item.price;
//       }
//     });
//   });

//   if (selectedItems.length === 0) {
//     alert('Please select an item first');
//     return;
//   }

//   const payload = {
//     item_name: section.title,
//     selections: selectedItems,
//     total_price: price,
//     section: section.title,
//   };

//   console.log('🛒 Adding to cart - Payload:', payload);

//   axios.post('/cart/add', payload)
//     .then(response => {
//       console.log('✅ Added to cart successfully:', response.data);
//       alert('Added to cart!');
//       setSelections(prev => ({ ...prev, [section.id]: {} })); // reset
//     })
//     .catch(error => {
//       console.error('❌ Error adding to cart:', error);
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Status:', error.response.status);
//         console.error('Headers:', error.response.headers);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error setting up request:', error.message);
//       }
//       alert('Failed to add to cart. Check console for details.');
//     });
// };
//   return (
//     <div className="min-h-screen bg-[#f8f8f5] text-gray-900 overflow-x-hidden">
//       <style>{`
//         @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         .animate-marquee { display: flex; width: max-content; animation: marquee 40s linear infinite; }
//       `}</style>

//       {/* Hero */}
//       <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-black">
//         <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Hero" />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-4">The Menu</h1>
//           {/* <div className="w-24 h-1 bg-green-200 mx-auto rounded-full" /> */}
//         </div>
//       </header>

//       {/* Nav */}
//       <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b py-5 overflow-hidden">
//         <div className="animate-marquee">
//           {scrollingCategories.map((cat, i) => (
//             <a key={i} href={`#${cat.id}`} className="flex items-center gap-3 px-10 group">
//               <span className="text-3xl group-hover:scale-125 transition-transform">{cat.icon}</span>
//               <span className="text-xs font-black tracking-widest text-gray-500 group-hover:text-black">{cat.name}</span>
//             </a>
//           ))}
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
//         {menuSections.map((section, idx) => (
//           <section
//             key={section.id}
//             id={section.id}
//             className={`sticky top-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-24 p-6 md:p-14 bg-[#DAEBCB] shadow-2xl rounded-[2.5rem] md:rounded-[3rem] ${
//               idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
//             }`}
//           >
//             {/* 1. IMAGE SIDE: order-first moves it to top on mobile. items-center for desktop middle alignment. */}
//             <div className="w-full lg:w-1/2 order-first lg:order-none grid grid-cols-2 gap-3 md:gap-4 h-fit">
//               <div className="col-span-2 h-60 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
//                 <img src={section.images[0]} className="w-full h-full object-cover" alt="" />
//               </div>
//               <div className="h-40 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
//                 <img src={section.images[1]} className="w-full h-full object-cover" alt="" />
//               </div>
//               <div className="h-40 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
//                 <img src={section.images[2] || section.images[0]} className="w-full h-full object-cover" alt="" />
//               </div>
//             </div>

//             {/* 2. MENU SIDE */}
//             <div className="w-full lg:w-1/2 flex flex-col justify-center">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-serif mb-2">{section.title}</h2>
//                 <p className="text-gray-900 italic mb-8 md:mb-10 text-sm md:text-base">{section.subtitle}</p>

//                 <div className="space-y-8 md:space-y-10">
//                   {section.categories.map((cat) => (
//                     <div key={cat.name}>
//                       <h3 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-4 border-b border-emerald-900/10 pb-2">
//                         {cat.name}
//                       </h3>
//                       <div className="space-y-2 md:space-y-3">
//                         {cat.items.map((item) => {
//                           const isSel = cat.type === 'checkbox' 
//                             ? (selections[section.id]?.[cat.name] || []).includes(item.name)
//                             : selections[section.id]?.[cat.name] === item.name;
//                           return (
//                             <button
//                               key={item.name}
//                               onClick={() => updateSelection(section.id, cat.name, item.name, cat.type === 'checkbox')}
//                               className={`w-full flex justify-between items-center p-3 md:p-4 rounded-xl border transition-all ${
//                                 isSel ? 'bg-emerald-900 text-white border-emerald-900 shadow-md scale-[1.02]' : 'bg-white/70 border-transparent hover:border-emerald-200'
//                               }`}
//                             >
//                               <div className="text-left flex-1 pr-4">
//                                 <div className="font-bold text-sm md:text-base">{item.name}</div>
//                                 {item.description && <p className="text-[10px] opacity-70 mt-0.5 leading-tight">{item.description}</p>}
//                               </div>
//                               <span className="font-black text-base md:text-lg whitespace-nowrap">{formatPrice(item.price)}</span>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={() => addCurrentSection(section)}
//                 className="w-full mt-8 md:mt-10 py-4 md:p-5 bg-[#DAEBCB] text-[#064e3b] rounded-l md:rounded-2xl font-bold flex justify-between px-6 md:px-8 items-center hover:bg-[#047857] transition-colors border-2 border-[#047857]"
//               >
//                 <span className="uppercase tracking-widest text-[10px] md:text-lg">Add to Bag</span>
//                 <span className="font-serif italic text-lg md:text-xl">£{calculateSectionTotal(section.id)}</span>
//               </button>
//             </div>
//           </section>
//         ))}

//         {/* Kids Corner */}
//        {/* Kids Corner */}
// <section id="kids-meal" className="bg-[#0d7564] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden">
//   {/* Updated visibility for the Teddy Bear emoji */}
//   <div className="absolute top-0 right-0 p-10 opacity-25 text-7xl md:text-9xl pointer-events-none select-none drop-shadow-lg">
//     🧸
//   </div>
  
//   <h2 className="text-4xl md:text-6xl font-serif italic mb-2">Kids Corner</h2>
//   <p className="text-amber-400 tracking-widest uppercase text-[10px] md:text-xs mb-10 md:mb-12 font-bold">Small treats for little explorers</p>
  
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//     {kidsMeals.map(item => (
//       <div key={item.name} className="bg-white rounded-3xl p-4 text-gray-900 flex flex-col shadow-xl">
//         <div className="h-40 rounded-2xl overflow-hidden mb-4">
//           <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
//         </div>
//         <h4 className="font-bold text-lg mb-1">{item.name}</h4>
//         {item.description && <p className="text-[10px] text-gray-400 mb-2 leading-tight">{item.description}</p>}
//         <div className="mt-auto pt-4 flex flex-col gap-3">
//           <span className="text-2xl font-black text-[#0d7564]">{formatPrice(item.price)}</span>
//           <button 
//             // onClick={() => addToCart({ id: Date.now()+Math.random(), base: item.name, selections: [], totalPrice: item.price, quantity: 1 })} 
//             onClick={() => {
//               const payload = {
//                 item_name: item.name,
//                 selections: [],
//                 total_price: typeof item.price === 'number' ? item.price : 0,
//                 section: 'KIDS MEAL',
//               };

//               console.log('🛒 Adding Kids Meal - Payload:', payload);

//               axios.post('/cart/add', payload)
//                 .then(res => {
//                   console.log('✅ Kids meal added:', res.data);
//                   alert('Added to order!');
//                 })
//                 .catch(err => {
//                   console.error('❌ Kids meal add failed:', err);
//                   if (err.response) {
//                     console.error('Error response:', err.response.data);
//                   }
//                   alert('Failed to add item');
//                 });
//             }}
//             className="w-full mt-8 md:mt-10 py-4 md:p-3 bg-[#DAEBCB] text-[#064e3b] rounded-l md:rounded-2xl font-bold flex justify-between px-6 md:px-8 items-center hover:bg-[#047857] transition-colors border-2 border-[#047857]"
//           >
//             Add to Order
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>
//       </main>

//       {/* Floating Cart Button */}
//       {cart.length > 0 && (
//         <button onClick={goToCart} className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-16 h-16 md:w-20 md:h-20 bg-green-500 text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
//           <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">{cart.length}</span>
//           <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
//         </button>
//       )}
//     </div>
//   );
// }

// src/pages/Menu.jsx
import React, { useState } from 'react';
import axios from '../api/axios';
import { useCart } from '../context/CartContext';

// Assets
import bf1 from '../assets/bf1.jpg';
import bf2 from '../assets/bf2.jpg';
import bf3 from '../assets/bf3.jpg';
import l1 from '../assets/L1.jpg';
import l2 from '../assets/L2.jpg';
import l4 from '../assets/L4.jpg';
import c5 from '../assets/c5.jpg';
import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';
import k3 from '../assets/k3.jpg';
import k5 from '../assets/k5.jpg';
import d3 from '../assets/d3.jpg';
import k4 from '../assets/k4.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';

const categories = [
  { name: 'BREAKFAST', icon: '🍳', id: 'breakfast' },
  { name: 'LUNCH', icon: '🥪', id: 'lunch' },
  { name: 'COFFEE & TEA', icon: '☕', id: 'coffee-tea' },
  { name: 'DRINK & SWEETS', icon: '🍰', id: 'sweets-drinks' },
  { name: 'KIDS MEAL', icon: '🎈', id: 'kids-meal' },
];

const scrollingCategories = [...categories, ...categories, ...categories];

const menuSections = [
  {
    id: 'breakfast',
    title: 'BREAKFAST',
    subtitle: 'Classic English breakfasts prepared with premium ingredients.',
    categories: [
      {
        name: 'Our English Breakfasts',
        type: 'radio',
        items: [
          { name: 'Traditional English Breakfast', description: '1 Egg, 2 Turkish Rashers, 1 sausage, baked beans, mushrooms, hash browns', price: 6.99 },
          { name: 'Vegetarian English Breakfast', description: '1 Egg, 1 veggie sausage, baked beans, grilled tomato, mushrooms, hash brown', price: 6.99 },
          { name: 'Classic Breakfast', description: '2 Eggs, 2 sausages, 2 Turkish Rashers, black pudding, baked beans, grilled tomato, mushrooms, hash brown', price: 8.49 }
        ]
      },
      {
        name: 'Breakfast Extras (Create Your Own)',
        type: 'checkbox',
        items: [
          { name: 'Eggs (Fried/Scrambled/Poached)', price: 0.99 },
          { name: 'Sausage', price: 0.99 },
          { name: 'Veggie Sausage', price: 0.99 },
          { name: 'Turkish Rasher', price: 0.99 },
          { name: 'Black Pudding', price: 0.99 },
          { name: 'Baked Beans', price: 0.99 },
          { name: 'Hash Browns', price: 0.99 },
          { name: 'Mushrooms', price: 0.99 },
          { name: 'Grilled Tomato', price: 0.99 }
        ]
      }
    ],
    images: [bf1, bf2, bf3]
  },
  {
    id: 'lunch',
    title: 'LUNCH',
    subtitle: 'Hand-pressed burgers and custom artisan wraps.',
    categories: [
      {
        name: '1. Choose Your Base',
        type: 'radio',
        items: [
          { name: 'Wrap', price: 3.49 },
          { name: 'Panini', price: 3.49 },
          { name: 'Pitta', price: 3.49 },
          { name: 'Baguette', price: 3.49 },
          { name: 'Bagel', price: 3.49 },
          { name: 'Classic Seeded Bun', price: 3.49 }
        ]
      },
      {
        name: '2. Choose Your Protein',
        type: 'checkbox',
        items: [
          { name: 'Chicken Tikka', price: 2.49 },
          { name: 'Fried Chicken', price: 2.49 },
          { name: 'Beef Patty', price: 2.79 },
          { name: 'Veggie Patty', price: 2.25 }
        ]
      },
      {
        name: 'Classic Burgers',
        type: 'radio',
        items: [
          { name: 'Cheeseburger', description: 'Seeded bun, Beef Patty, Cheese, Lettuce, Sauce', price: 5.99 },
          { name: 'Double Cheeseburger', description: 'Two Beef Patties, Double Cheese, Bun, Lettuce, Sauce', price: 7.49 },
          { name: 'Fried Chicken Burger', description: 'Crispy Chicken Fillet, Bun, Cheese, Lettuce, Mayo', price: 6.49 }
        ]
      }
    ],
    images: [l1, l2, l4]
  },
  {
    id: 'coffee-tea',
    title: 'COFFEE & TEA',
    subtitle: 'Premium coffee beans and traditional tea blends.',
    categories: [
      {
        name: 'Coffee & Hot Drinks',
        type: 'radio',
        items: [
          { name: 'Espresso (Single)', price: 1.99 },
          { name: 'Espresso (Double)', price: 2.29 },
          { name: 'Americano (Black / White)', price: 2.49 },
          { name: 'Latte (Hot / Iced)', price: 2.49 },
          { name: 'Spanish Latte', price: 2.49 },
          { name: 'Cappuccino', price: 2.49 },
          { name: 'Flat White', price: 2.49 },
          { name: 'Mocha', price: 2.99 },
          { name: 'Hot Chocolate', price: 2.49 }
        ]
      },
      {
        name: 'Tea Selection',
        type: 'radio',
        items: [
          { name: 'English Breakfast Tea', price: 1.49 },
          { name: 'Green Tea', price: 1.49 },
          { name: 'Mint Tea', price: 1.49 },
          { name: 'Karak Chai', price: 1.99 }
        ]
      }
    ],
    images: [c5, c2, c3]
  },
  {
    id: 'sweets-drinks',
    title: 'SWEETS & DRINKS',
    subtitle: 'House-made desserts and refreshing beverages.',
    categories: [
      {
        name: 'Milkshakes & Iced Coffee',
        type: 'radio',
        items: [
          { name: 'Milkshake (Various Flavours)', price: 3.99 },
          { name: 'Frappé', description: 'Iced Coffee with optional Milk, Sugar & Cream', price: 3.49 }
        ]
      },
      {
        name: 'Soft Drinks',
        type: 'radio',
        items: [
          { name: 'Cans (Coke, Sprite, etc.)', price: 1.49 },
          { name: 'Mango Rubicon', price: 1.99 }
        ]
      },
      {
        name: 'Sweets',
        type: 'checkbox',
        items: [
          { name: 'Cheesecakes', price: 4.49 },
          { name: 'Tiramisu Cup', price: 3.99 },
          { name: 'Cup Cake', price: 2.29 },
          { name: 'Brownie', price: 3.49 },
          { name: 'Customised Cakes', price: 'POA' }
        ]
      }
    ],
    images: [d1, d2, d3]
  }
];

const kidsMeals = [
  { name: 'Breakfast Meal Deal', description: 'Toast, Sausage, Egg & Water', price: 2.49, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/37d4f9bc592ee5bddc5f211abe4ce4ef/783282f6131ef2258e5bcd87c46aa87e.jpeg' },
  { name: 'Cheese Sandwich', price: 1.49, image: k4 },
  { name: 'Mini Chicken Wrap', description: 'Includes fries and drink', price: 3.49, image: 'https://static01.nyt.com/images/2015/04/15/dining/15FIELDGUIDE_AVOCADO/15FIELDGUIDE_AVOCADO-superJumbo.jpg' },
  { name: 'Kids\' Burger', description: 'Includes fries and drink', price: 3.49, image: l1 },
  { name: 'Kids\' Milk', price: 0.79, image: k5 },
  { name: 'Kids\' Juice', price: 0.89, image: k3 },
  { name: 'Kids\' Water', price: 0.00, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1000' }
];

export default function Menu() {
  const { addItem, cart } = useCart();
  const [selections, setSelections] = useState({});

  const formatPrice = (p) => (typeof p === 'number' ? `£${Number(p).toFixed(2)}` : p);

  const updateSelection = (sectionId, categoryName, value, isCheckbox) => {
    setSelections(prev => {
      const section = prev[sectionId] || {};
      if (isCheckbox) {
        const list = section[categoryName] || [];
        return {
          ...prev,
          [sectionId]: {
            ...section,
            [categoryName]: list.includes(value)
              ? list.filter(v => v !== value)
              : [...list, value]
          }
        };
      }
      return {
        ...prev,
        [sectionId]: { ...section, [categoryName]: value }
      };
    });
  };

  const calculateSectionTotal = (sectionId) => {
    let sum = 0;
    const sel = selections[sectionId] || {};
    const section = menuSections.find(s => s.id === sectionId);

    section?.categories.forEach(cat => {
      const vals = cat.type === 'checkbox'
        ? (sel[cat.name] || [])
        : (sel[cat.name] ? [sel[cat.name]] : []);

      vals.forEach(val => {
        const item = cat.items.find(i => i.name === val);
        if (item && typeof item.price === 'number') {
          sum += item.price;
        }
      });
    });

    return sum.toFixed(2);
  };

  const addCurrentSection = async (section) => {
    const sel = selections[section.id] || {};
    const selectedItems = [];
    let price = 0;

    section.categories.forEach(cat => {
      const vals = cat.type === 'checkbox'
        ? (sel[cat.name] || [])
        : (sel[cat.name] ? [sel[cat.name]] : []);

      vals.forEach(name => {
        const item = cat.items.find(i => i.name === name);
        if (item) {
          selectedItems.push({ name: item.name, price: item.price });
          if (typeof item.price === 'number') price += item.price;
        }
      });
    });

    if (selectedItems.length === 0) {
      alert('Please select at least one item');
      return;
    }

    const payload = {
      item_name: section.title,
      selections: selectedItems,
      total_price: price,
      section: section.title,
      quantity: 1
    };

    try {
      await addItem(payload);
      alert('Added to cart!');
      setSelections(prev => ({ ...prev, [section.id]: {} })); // reset this section only
    } catch (error) {
      console.error('Failed to add item:', error);
      alert('Could not add item to cart. Please try again.');
    }
  };

  const addKidsMeal = async (item) => {
    const price = typeof item.price === 'number' ? item.price : 0;

    const payload = {
      item_name: item.name,
      selections: [],
      total_price: price,
      section: 'KIDS MEAL',
      quantity: 1
    };

    try {
      await addItem(payload);
      alert(`${item.name} added to cart!`);
    } catch (err) {
      console.error('Failed to add kids meal:', err);
      alert('Failed to add item');
    }
  };

  const goToCart = () => {
    window.location.href = '/cart';
    // or better: use useNavigate() if this component is wrapped in Router
  };

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-gray-900 overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>

      {/* Hero */}
      <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Food hero"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-4">The Menu</h1>
        </div>
      </header>

      {/* Scrolling category navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b py-5 overflow-hidden">
        <div className="animate-marquee">
          {scrollingCategories.map((cat, i) => (
            <a
              key={i}
              href={`#${cat.id}`}
              className="flex items-center gap-3 px-10 group"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform">{cat.icon}</span>
              <span className="text-xs font-black tracking-widest text-gray-500 group-hover:text-black">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        {/* Main menu sections */}
        {menuSections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`sticky top-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-24 p-6 md:p-14 bg-[#DAEBCB] shadow-2xl rounded-[2.5rem] md:rounded-[3rem] ${
              idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Images */}
            <div className="w-full lg:w-1/2 order-first lg:order-none grid grid-cols-2 gap-3 md:gap-4 h-fit">
              <div className="col-span-2 h-60 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <img src={section.images[0]} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="h-40 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <img src={section.images[1]} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="h-40 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <img src={section.images[2] || section.images[0]} className="w-full h-full object-cover" alt="" />
              </div>
            </div>

            {/* Selection area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-2">{section.title}</h2>
                <p className="text-gray-900 italic mb-8 md:mb-10 text-sm md:text-base">
                  {section.subtitle}
                </p>

                <div className="space-y-8 md:space-y-10">
                  {section.categories.map((cat) => (
                    <div key={cat.name}>
                      <h3 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-4 border-b border-emerald-900/10 pb-2">
                        {cat.name}
                      </h3>
                      <div className="space-y-2 md:space-y-3">
                        {cat.items.map((item) => {
                          const isSelected = cat.type === 'checkbox'
                            ? (selections[section.id]?.[cat.name] || []).includes(item.name)
                            : selections[section.id]?.[cat.name] === item.name;

                          return (
                            <button
                              key={item.name}
                              onClick={() => updateSelection(section.id, cat.name, item.name, cat.type === 'checkbox')}
                              className={`w-full flex justify-between items-center p-3 md:p-4 rounded-xl border transition-all ${
                                isSelected
                                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-md scale-[1.02]'
                                  : 'bg-white/70 border-transparent hover:border-emerald-200'
                              }`}
                            >
                              <div className="text-left flex-1 pr-4">
                                <div className="font-bold text-sm md:text-base">{item.name}</div>
                                {item.description && (
                                  <p className="text-[10px] opacity-70 mt-0.5 leading-tight">{item.description}</p>
                                )}
                              </div>
                              <span className="font-black text-base md:text-lg whitespace-nowrap">
                                {formatPrice(item.price)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => addCurrentSection(section)}
                className="w-full mt-8 md:mt-10 py-4 md:p-5 bg-[#DAEBCB] text-[#064e3b] rounded-xl font-bold flex justify-between px-6 md:px-8 items-center hover:bg-[#047857] transition-colors border-2 border-[#047857] shadow-sm"
              >
                <span className="uppercase tracking-widest text-[10px] md:text-lg">Add to Bag</span>
                <span className="font-serif italic text-lg md:text-xl">
                  £{calculateSectionTotal(section.id)}
                </span>
              </button>
            </div>
          </section>
        ))}

        {/* Kids Corner */}
        <section
          id="kids-meal"
          className="bg-[#0d7564] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-25 text-7xl md:text-9xl pointer-events-none select-none drop-shadow-lg">
            🧸
          </div>

          <h2 className="text-4xl md:text-6xl font-serif italic mb-2">Kids Corner</h2>
          <p className="text-amber-400 tracking-widest uppercase text-[10px] md:text-xs mb-10 md:mb-12 font-bold">
            Small treats for little explorers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kidsMeals.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-4 text-gray-900 flex flex-col shadow-xl"
              >
                <div className="h-40 rounded-2xl overflow-hidden mb-4">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                {item.description && (
                  <p className="text-[10px] text-gray-400 mb-2 leading-tight">{item.description}</p>
                )}
                <div className="mt-auto pt-4 flex flex-col gap-3">
                  <span className="text-2xl font-black text-[#0d7564]">
                    {formatPrice(item.price)}
                  </span>
                  <button
                    onClick={() => addKidsMeal(item)}
                    className="w-full py-3 bg-[#DAEBCB] text-[#064e3b] rounded-xl font-bold hover:bg-[#047857] transition-colors border-2 border-[#047857]"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating cart button */}
      {cart.length > 0 && (
        <button
          onClick={goToCart}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-16 h-16 md:w-20 md:h-20 bg-green-500 text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        >
          <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
            {cart.length}
          </span>
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      )}
    </div>
  );
}
// // // src/context/CartContext.jsx
// // import { createContext, useContext, useState, useEffect } from 'react';
// // import axios from '../api/axios';

// // const CartContext = createContext();

// // export function CartProvider({ children }) {
// //   const [cart, setCart] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(true);

// //   const fetchCart = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await axios.get('/cart'); // Adjust endpoint if needed
// //       // Adjust based on your actual backend response
// //       const items = response.data.items || response.data.cart || [response.data.cartItem];
// //       setCart(items.filter(Boolean)); // filter out null/undefined
// //       const calculatedTotal = items.reduce((sum, item) => 
// //         sum + (item.total_price || item.totalPrice || 0) * (item.quantity || 1), 0);
// //       setTotal(calculatedTotal);
// //     } catch (err) {
// //       console.error('Failed to load cart:', err);
// //       setCart([]);
// //       setTotal(0);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   const refetch = () => fetchCart();

// //   return (
// //     <CartContext.Provider value={{ cart, total, loading, refetch }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // }

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) throw new Error('useCart must be used within CartProvider');
// //   return context;
// // };

// // src/context/CartContext.jsx
// import { createContext, useContext, useState, useEffect, useRef } from 'react';
// import axios from '../api/axios';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);           // ← will show immediately if we had something
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(true);   // true only on first mount
//   const [isFetching, setIsFetching] = useState(false);
//   const mounted = useRef(false);

//   const calculateTotal = (items) =>
//     items.reduce((sum, item) => sum + (item.total_price || item.totalPrice || 0) * (item.quantity || 1), 0);

//   const fetchCart = async (silent = false) => {
//     if (!silent) setLoading(true);
//     setIsFetching(true);

//     try {
//       const { data } = await axios.get('/cart');
//       const items = data.items || data.cart || (data.cartItem ? [data.cartItem] : []);
//       const validItems = items.filter(Boolean);

//       setCart(validItems);
//       setTotal(calculateTotal(validItems));
//     } catch (err) {
//       console.error('Failed to load cart:', err);
//       // Optionally: show toast notification only if !silent
//     } finally {
//       if (!silent) setLoading(false);
//       setIsFetching(false);
//     }
//   };

//   // Initial load
//   useEffect(() => {
//     mounted.current = true;
//     fetchCart(); // first load → show loading

//     // Optional: background refresh every time window gets focus
//     const onFocus = () => {
//       if (mounted.current && !isFetching) {
//         fetchCart(true); // silent = true
//       }
//     };

//     window.addEventListener('focus', onFocus);
//     return () => {
//       mounted.current = false;
//       window.removeEventListener('focus', onFocus);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const refetch = () => fetchCart(false);

//   return (
//     <CartContext.Provider value={{ cart, total, loading, isFetching, refetch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error('useCart must be used within CartProvider');
//   return context;
// };

import { createContext, useContext, useState, useEffect, useRef } from 'react';
import axios from '../api/axios';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const mounted = useRef(false);

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + Number(item.total_price || item.totalPrice || 0) * (item.quantity || 1), 0);

  const fetchCart = async (silent = false) => {
    if (!silent) setLoading(true);
    setIsFetching(true);
    try {
      const { data } = await axios.get('/cart');
      const items = data.items || data.cart || data || [];
      setCart(items.filter(Boolean));
      setTotal(calculateTotal(items));
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    } finally {
      if (!silent) setLoading(false);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    mounted.current = true;
    fetchCart();
    const onFocus = () => mounted.current && !isFetching && fetchCart(true);
    window.addEventListener('focus', onFocus);
    return () => {
      mounted.current = false;
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  // Public API
  const addItem = async (payload) => {
    try {
      await axios.post('/cart/add', payload);
      await fetchCart(true);
    } catch (err) {
      console.error('Add failed:', err);
      throw err;
    }
  };

  const updateQuantity = async (itemId, delta) => {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    const newQty = (item.quantity || 1) + delta;
    if (newQty < 1) return removeItem(itemId);

    try {
      await axios.patch(`/cart/item/${itemId}`, { quantity: newQty });
      await fetchCart(true);
    } catch (err) {
      console.error('Quantity update failed:', err);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`/cart/${itemId}`);
      await fetchCart(true);
    } catch (err) {
      console.error('Remove failed:', err);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete('/cart');
      setCart([]);
      setTotal(0);
    } catch (err) {
      console.error('Clear failed:', err);
      await fetchCart(true);
    }
  };

  const value = {
    cart,
    total: calculateTotal(cart),
    loading,
    isFetching,
    refetch: () => fetchCart(false),
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
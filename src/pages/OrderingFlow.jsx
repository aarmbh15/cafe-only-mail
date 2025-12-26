// src/pages/OrderingFlow.jsx
import React, { useState } from 'react';
import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';

const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => total + ((item.totalPrice || 0) * (item.quantity || 1)), 0).toFixed(2);
};

export default function OrderingFlow() {
  const [cart, setCart] = useState([]);
  const [stage, setStage] = useState('menu'); // 'menu', 'cart', 'checkout', 'confirmation'

  const addToCart = (itemDetails) => {
    const safePrice = parseFloat(itemDetails.totalPrice) || 0;
    setCart(prev => [...prev, { ...itemDetails, totalPrice: safePrice, quantity: 1 }]);
  };

  const updateCartItem = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== itemId));
    } else {
      setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item));
    }
  };

  const handleCheckoutSubmit = (details) => {
    console.log("Order submitted:", { details, cart });
    setStage('confirmation');
  };

  const total = calculateCartTotal(cart);

  // Helper to render the current stage content
  const renderStage = () => {
    if (stage === 'confirmation') {
      return (
        <div className="max-w-xl mx-auto py-12 px-6 text-center mt-20 bg-white/30 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#004d40] mb-6">Order Confirmed! ✅</h1>
          <p className="text-xl md:text-2xl text-[#1b5e20] mb-4">Thank you for your order.</p>
          <p className="text-2xl md:text-3xl font-bold text-[#004d40]">Total: £{total}</p>
          <p className="text-base md:text-lg text-[#1b5e20] mt-6">You will receive an email confirmation shortly.</p>
          <button
            onClick={() => { setCart([]); setStage('menu'); }}
            className="mt-10 w-full md:w-auto px-8 py-4 bg-[#004d40] text-white text-xl font-semibold rounded-xl hover:bg-[#1b5e20] transition-colors"
          >
            Start New Order
          </button>
        </div>
      );
    }

    if (stage === 'cart') {
      return <Cart cart={cart} total={total} updateCartItem={updateCartItem} goToMenu={() => setStage('menu')} goToCheckout={() => setStage('checkout')} />;
    }

    if (stage === 'checkout') {
      return <Checkout cart={cart} total={total} onSubmit={handleCheckoutSubmit} goToCart={() => setStage('cart')} />;
    }

    return <Menu addToCart={addToCart} cart={cart} total={total} goToCart={() => setStage('cart')} />;
  };

  return (
    /* This wrapper ensures the background color is consistent and full-screen on all devices */
    <div className="min-h-screen w-full bg-[#DAEBCB] text-[#004d40] selection:bg-[#004d40] selection:text-white">
      <div className="container mx-auto px-4 py-6 md:py-10">
        {renderStage()}
      </div>
    </div>
  );
} 
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import OurCoffee from "./pages/OurCoffee";
import OurStores from "./pages/OurStores";
import Contact from "./pages/Contact";
import Login from "./pages/LoginPage";
import Register from './pages/Register';
import Reset from './pages/ResetPwd';
import Recover from './pages/PwdRecover';
import Profile from './pages/Profile';
import AddAddress from './pages/AddAddress';
import EditAddress from './pages/EditAddress';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <CartProvider>
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/our-stores" element={<OurStores />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<Reset />} />
              <Route path="/recover" element={<Recover />} />
              {/* <Route path="/cart" element={<CartContent />} /> */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/address/add" element={<AddAddress />} />
              <Route path="/address/edit/:id" element={<EditAddress />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheet.css";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import CartPage from "./cart";
import { CartProvider } from "./CartContext";




createRoot(document.getElementById("root")).render(
  <StrictMode>
   <CartProvider>
  <BrowserRouter basename="/WebDevHW1" >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
  </StrictMode>
);

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function CartPage() {
  const { cartItems, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div className="col-md-0 mb-2 mb-md-0">
            <img width="110" height="102" src="HikariRamenLogo.png" alt="logo" />
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/">Home</Link></li>
            <li><Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/about">About</Link></li>
            <li><Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/menu">Menu</Link></li>
            <li><Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/contact">Contact</Link></li>

            <li>
              <Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/cart">
                <img height="25px" src="Cart.png" alt="cart" />
                <span
                  className="badge bg-danger"
                  style={{ position: "relative", top: "-10px", left: "-10px" }}
                >
                  {cartCount}
                </span>
              </Link>
            </li>
          </ul>
        </header>
      </nav>

      {/* Cart Section */}
      <div className="container py-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.name}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {item.name} — ${item.price.toFixed(2)} × {item.quantity}
              </span>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3">Total: ${cartTotal.toFixed(2)}</h3>
      <p>Items in Cart: {cartCount}</p>
    </div>
    </div>
  );
}

export default CartPage;

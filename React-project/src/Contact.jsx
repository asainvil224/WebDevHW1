import React, { useEffect } from 'react';
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ContactPage = () => {
    // Optional: Use useEffect to set the document title, replacing the <title> tag
    useEffect(() => {
        document.title = 'About - Hikari Ramen';
    }, []);
    const { cartCount } = useCart();

    return (
        <>
            {/* Header / Navigation */}
            <nav className="container-fluid">
  <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4">

    {/* Logo - Left */}
    <div className="d-flex align-items-center">
      <img
        width="110"
        height="102"
        src="HikariRamenLogo.png"
        alt="Hikari Ramen Logo"
      />
    </div>

    {/* Navigation Links - Right */}
    <ul className="nav mb-2 mb-md-0">
      <li>
        <Link className="nav-link px-3 text-dark fs-5 fw-bold" to="/">Home</Link>
      </li>
      <li>
        <Link className="nav-link px-3 text-dark fs-5 fw-bold" to="/about">About</Link>
      </li>
      <li>
        <Link className="nav-link px-3 text-dark fs-5 fw-bold" to="/menu">Menu</Link>
      </li>
      <li>
        <Link className="nav-link px-3 text-dark fs-5 fw-bold" to="/contact">Contact</Link>
      </li>
      <li>
        <Link className="nav-link px-3 text-dark fs-5 fw-bold" to="/cart">
          <img height="25" src="/Cart.png" alt="Cart" />
          <span
            id="cart-count"
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


            {/* Main Content / Contact Form Section */}
            <div className="container-fluid">
                <h2 className="pb-2 border-bottom text-align-center text-center">Contact Us </h2>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="location.png" className="d-block mx-lg-auto img-fluid" alt="Location map" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <form className="contact-form" action="contact.html" method="post">
                                <input type="text" className="contact-form-text" placeholder="Your Name" />
                                <input type="email" className="contact-form-text" placeholder="Your Email" />
                                <input type="text" className="contact-form-text" placeholder="Your Phone number" />
                                <textarea className="contact-form-text" placeholder="Your message"></textarea>
                                <input type="submit" className="contact-form-btn" value="send" />
                            </form>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container-fluid bg-brown">
                <footer className=" row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                    <div className="col mb-3">
                        <img className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" width="110" height="102" src="HikariRamenLogo.png" alt="Hikari Ramen Logo" />
                        <p className="text-white px-4">©2025</p>
                    </div>
                    <div className="col mb-3"></div>
                    <div className="col mb-3">
                        <h5>Location</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">1234 Maple Avenue,</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">Brooklyn, NY</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">11215</li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Hours</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">Mon - Fri</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">10AM - 9PM</li>
                            <br />
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">Sat - Sun</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">11AM - 8PM</li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Social Media</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                                <img height="40px" src="instagram logo.png" alt="Instagram Logo" />
                                <img height="40px" src="facebook logo.png" alt="Facebook Logo" />
                                <img height="40px" src="twitter logo.png" alt="Twitter Logo" />
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
            {/* The cart.js script reference would be handled by React state/hooks */}
        </>
    );
};

export default ContactPage;
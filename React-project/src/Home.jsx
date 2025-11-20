import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Home() {
    const { cartCount } = useCart();
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* NAV */}
      <nav className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div className="col-md-0 mb-2 mb-md-0">
            <img
              className="d-inline-flex link-body-emphasis text-decoration-none"
              width="110"
              height="102"
              src="/HikariRamenLogo.png"
              alt="Logo"
            />
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                  <li>
                                    <Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/">Home</Link>
                                  </li>
                                  <li>
                                    <Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/about">About</Link>
                                  </li>
                                  <li>
                                    <Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/menu">Menu</Link>
                                  </li>
                                  <li>
                                    <Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/contact">Contact</Link>
                                  </li>
                                  <li>
                                    <Link className="nav-link px-10 text-dark fs-5 fw-bold" to="/cart">
                                      <img height="25px" src="/Cart.png" alt="Cart" />
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

      {/* HERO SECTION */}
      <div className="container-fluid px-4 py-5 flex-grow-1 d-flex align-items-center min-vh-100">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 w-100">
          <div className="col-12 col-sm-8 col-lg-6">
            <img
              src="/HikariRamenLogo.png"
              className="d-block mx-lg-auto img-fluid w-100"
              alt="Hero"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Warm & Authentic:
            </h1>
            <p className="lead">
              At Hikari Ramen, every bowl is crafted with care and dedication,
              bringing together the finest ingredients to create an unforgettable
              dining experience. Our rich, slow-simmered broths form the heart of
              each dish, perfectly complemented by fresh, hand-pulled noodles and
              vibrant, thoughtfully selected toppings. Inspired by the timeless
              traditions of Japanese ramen, we honor the artistry and precision
              that go into every bowl while adding our own touch of warmth and
              creativity. Whether you’re joining us for a comforting solo meal, a
              lively gathering with friends, or a special family outing, Hikari
              Ramen invites you to savor the harmony of flavors, the glow of a
              beautifully crafted dish, and the joy that comes from sharing good
              food. At our table, every slurp is a moment to savor, and every
              visit is a chance to experience the light of exceptional ramen.
            </p>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div id="carouselExample" className="carousel slide w-100">
        <div className="carousel-inner">

          {["display6.jpg", "display2.jpg", "display3.jpg", "display4.jpg", "display5.jpg", "display.jpg"].map(
            (img, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <img
                  src={`/${img}`}
                  className="d-block w-100"
                  style={{ maxHeight: "80vh", objectFit: "cover" }}
                  alt="ramen"
                />
              </div>
            )
          )}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* FOOTER */}
      <footer className="container-fluid bg-brown mt-auto">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col mb-3">
            <img
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              width="110"
              height="102"
              src="/HikariRamenLogo.png"
              alt=""
            />
            <p className="text-white px-4">©2025</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Location</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                1234 Maple Avenue,
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                Brooklyn, NY
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                11215
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Hours</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                Mon - Fri
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                10AM - 9PM
              </li>
              <br />
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                Sat - Sun
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                11AM - 8PM
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                <img height="40px" src="/instagram logo.png" alt="" />
                <img height="40px" src="/facebook logo.png" alt="" />
                <img height="40px" src="/twitter logo.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

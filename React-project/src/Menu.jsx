// Menu.jsx
import React from "react";
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Menu = () => {
  const { addToCart, cartCount } = useCart(); // ⬅️ use addToCart from context

  // Convert price into a number instead of "$14.00"
  const num = (p) => Number(p.replace("$", ""));

  const appetizers = [
    {
      name: "Gyoza (Pan-Fried Dumplings)",
      img: "gyoza.webp",
      desc: "Handmade pork and vegetable dumplings, served with our house soy-garlic dipping sauce.",
      price: 8.50,
    },
    {
      name: "Edamame with Sea Salt",
      img: "edamame.jpg",
      desc: "Freshly steamed soybeans sprinkled with sea salt. Simple, healthy, and perfectly addictive.",
      price: 6.00,
    },
    {
      name: "Crispy Karaage Chicken",
      img: "karage.webp",
      desc: "Tender bites of marinated chicken served with a tangy yuzu mayo dip.",
      price: 9.50,
    },
    {
      name: "Takoyaki (Octopus Balls)",
      img: "takoyaki.jpg",
      desc: "Savory batter balls filled with diced octopus, drizzled with sweet sauce, mayo, and bonito flakes.",
      price: 8.75,
    },
    {
      name: "Shishito Peppers",
      img: "peppers.jpg",
      desc: "Lightly blistered peppers tossed in soy glaze and sesame seeds — smoky and slightly sweet.",
      price: 7.50,
    },
    {
      name: "Agedashi Tofu",
      img: "tofu.jpg",
      desc: "Lightly fried tofu cubes served in a warm dashi broth with grated daikon, scallions, and bonito flakes.",
      price: 7.25,
    },
  ];

  const ramen = [
    {
      name: "Hikari Shoyu Ramen",
      img: "shoyu ramen.jpg",
      desc: "Our signature soy-based broth, balanced with savory chicken stock, topped with tender chashu pork, bamboo shoots, nori, and a soft-boiled egg.",
      price: 14.00,
    },
    {
      name: "Spicy Miso Ramen",
      img: "spicy miso ramen.jpg",
      desc: "Bold miso broth with a spicy kick, loaded with minced pork, corn, scallions, bean sprouts, and chili oil for extra heat.",
      price: 15.50,
    },
    {
      name: "Tonkotsu Classic",
      img: "tonkotsu ramen.jpg",
      desc: "Rich and creamy pork bone broth simmered for 12 hours, served with chashu pork, black garlic oil, soft egg, and mushrooms.",
      price: 16.00,
    },
    {
      name: "Shio Ramen (Salt Broth)",
      img: "shio ramen.jpg",
      desc: "A clear and delicate chicken broth seasoned with sea salt, topped with sliced chicken breast, naruto, scallions, and nori.",
      price: 13.75,
    },
    {
      name: "Yasai Vegetarian Ramen",
      img: "vegetarian ramen.webp",
      desc: "Fragrant vegetable broth with tofu, mushrooms, bok choy, and corn. Light, nourishing, and fully plant-based.",
      price: 13.50,
    },
    {
      name: "Hikari Black Garlic Ramen",
      img: "black garlic ramen.webp",
      desc: "Deeply savory pork broth infused with roasted black garlic, topped with chashu, menma, scallions, and chili threads.",
      price: 16.50,
    },
  ];

  const drinks = [
    {
      name: "Matcha Iced Latte",
      img: "matcha latte.jpg",
      desc: "Creamy matcha blended with milk and a hint of sweetness — refreshing and energizing.",
      price: 5.50,
    },
    {
      name: "Yuzu Lemonade",
      img: "yuzu lemonade.jpg",
      desc: "Sparkling lemonade infused with Japanese yuzu citrus for a zesty, tangy finish.",
      price: 4.75,
    },
    {
      name: "Ramune Soda",
      img: "ramune.jpg",
      desc: "The classic Japanese marble soda available in original, melon, or strawberry flavors.",
      price: 4.25,
    },
    {
      name: "Iced Jasmine Green Tea",
      img: "iced jasmine green tea.jpg",
      desc: "Light, floral, and perfectly chilled — pairs beautifully with any ramen bowl.",
      price: 3.75,
    },
    {
      name: "Asahi Draft Beer",
      img: "beer.webp",
      desc: "Crisp and clean Japanese lager served cold to balance the richness of your meal.",
      price: 6.50,
    },
    {
      name: "Sake Flight (3 Tasters)",
      img: "Sake_Flight.webp",
      desc: "A curated trio of premium Japanese sake — dry, floral, and fruity.",
      price: 12.00,
    },
  ];

  // Render menu cards
  const renderCards = (items) => (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.map((item, idx) => (
        <div key={idx} className="col">
          <div className="card shadow-sm h-100">
            <img src={item.img} className="card-img-top" alt={item.name} height="400px" />
            <div className="card-body d-flex flex-column">
              <h3 className="text-center">{item.name}</h3>
              <p className="card-text flex-grow-1">{item.desc}</p>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <small className="text-body-secondary">${item.price.toFixed(2)}</small>

                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() =>
                    addToCart({
                      name: item.name,
                      price: item.price,
                      img: item.img,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4">
          <div>
            <img width="110" height="102" src="HikariRamenLogo.png" alt="logo" />
          </div>

          <ul className="nav">
            <li><Link className="nav-link text-dark fs-5 fw-bold" to="/">Home</Link></li>
            <li><Link className="nav-link text-dark fs-5 fw-bold" to="/about">About</Link></li>
            <li><Link className="nav-link text-dark fs-5 fw-bold" to="/menu">Menu</Link></li>
            <li><Link className="nav-link text-dark fs-5 fw-bold" to="/contact">Contact</Link></li>
            <li>
              <Link className="nav-link text-dark fs-5 fw-bold" to="/cart">
                <img height="25px" src="/Cart.png" alt="Cart" />
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

      {/* Menu sections */}
      <main className="flex-grow-1 py-5 container-fluid">
        <section className="mb-5 px-4">
          <h2 className="pb-2 border-bottom text-center">Appetizers</h2>
          {renderCards(appetizers)}
        </section>

        <section className="mb-5 px-4">
          <h2 className="pb-2 border-bottom text-center">Ramen</h2>
          {renderCards(ramen)}
        </section>

        <section className="mb-5 px-4">
          <h2 className="pb-2 border-bottom text-center">Drinks</h2>
          {renderCards(drinks)}
        </section>
      </main>

      {/* Footer */}
      <footer className="container-fluid bg-brown mt-auto">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col mb-3">
            <img width="110" height="102" src="HikariRamenLogo.png" alt="logo" />
            <p className="text-white px-4">©2025</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Location</h5>
            <ul className="nav flex-column">
              <li className="nav-item text-body-secondary">1234 Maple Avenue,</li>
              <li className="nav-item text-body-secondary">Brooklyn, NY</li>
              <li className="nav-item text-body-secondary">11215</li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Hours</h5>
            <ul className="nav flex-column">
              <li className="nav-item text-body-secondary">Mon - Fri</li>
              <li className="nav-item text-body-secondary">10AM - 9PM</li>
              <br />
              <li className="nav-item text-body-secondary">Sat - Sun</li>
              <li className="nav-item text-body-secondary">11AM - 8PM</li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <img height="40px" src="instagram logo.png" alt="Instagram" />
                <img height="40px" src="facebook logo.png" alt="Facebook" />
                <img height="40px" src="twitter logo.png" alt="Twitter" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;

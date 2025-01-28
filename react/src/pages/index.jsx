import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/style.css";
function Home() {
  return (
    <main>
      <div className="heroImg"></div>

      <div className="opening-text">
        <p>Here at sports plus we strive to offer the best sports equipment!</p>
      </div>

      <section className="product-pages">
        <Link to="/products" className="product outdoor">
          <p>Outdoor</p>
        </Link>
        <Link to="/products" className="product indoor">
          <p>Indoor</p>
        </Link>
        <Link to="/products" className="product professional">
          <p>Professional</p>
        </Link>
        <Link to="/products" className="product other">
          <p>Accessory</p>
        </Link>
      </section>
    </main>
  );
}

export default Home;

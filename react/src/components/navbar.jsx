import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  useEffect(() => {
    // Initialize the sidenav using Materialize JS
    const sidenav = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          {" "}
          {/* Use className instead of class */}
          {/* Link should use `to` instead of `href` */}
          <Link to="/" className="brand-logo">
            <img src="brand-logo.png" alt="brand-logo" />
          </Link>
          {/* Use `Link` for internal navigation */}
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/products">Products</Link> {/* Updated Link */}
            </li>
            <li>
              <Link to="/contact">Contact</Link> {/* Updated Link */}
            </li>
          </ul>
        </div>
      </nav>

      {/* Side navigation menu */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link> {/* Updated Link */}
        </li>
        <li>
          <Link to="/products">Products</Link> {/* Updated Link */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Updated Link */}
        </li>
      </ul>
    </header>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../public/assets/images/Logo.svg";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Plantasia logo" />

          <a className="navbarText nav-link me-3" href="#">
            Home
          </a>
          <a className="navbarText nav-link me-3" href="#">
            Products
          </a>
          <a className="navbarText nav-link me-3" href="#">
            About Us
          </a>
        </div>

        <div className="d-flex">
          <a className="nav-link me-3 ms-auto navbarAnchor" href="#">
            <i className="bi bi-person-fill"></i>
          </a>
          <a className="nav-link me-3 navbarAnchor" href="#">
            <i className="bi bi-suit-heart-fill"></i>
          </a>
          <a className="nav-link me-3 navbarAnchor" href="#">
            <i className="bi bi-cart-fill"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

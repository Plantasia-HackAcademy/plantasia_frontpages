import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white p-0">
      <div className="container">
        <div className="d-flex align-items-center">
          <a className="navbar-brand text-warning" href="/">
            <img src="../../images/Logo.svg" alt="Plantasia logo" />
          </a>
          <a className="navbar-text nav-link me-3" href="#">
            Home
          </a>
          <a className="navbar-text nav-link me-3" href="#">
            Products
          </a>
          <a className="navbar-text nav-link me-3" href="#">
            About Us
          </a>
        </div>

        <div className="d-flex">
          <a className="nav-link me-3 ms-auto navbar-anchor" href="#">
            <i className="bi bi-person-fill"></i>
          </a>
          <a className="nav-link me-3 navbar-anchor" href="#">
            <i className="bi bi-suit-heart-fill"></i>
          </a>
          <a className="nav-link me-3 navbar-anchor" href="#">
            <i className="bi bi-cart-fill"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

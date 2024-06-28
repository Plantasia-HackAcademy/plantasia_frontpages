import React from "react";
import "../css/Navbar.css"; // Your custom styles

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
      <div className="container">
        <a className="navbar-brand text-warning" href="/">
          <img src="../../images/Logo.svg" alt="Plantasia logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto">
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
      </div>
    </nav>
  );
}

export default MyNavbar;

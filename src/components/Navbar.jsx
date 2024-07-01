import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
      <div className="container p-sm-0">
        <a className="navbar-brand text-warning" href="/">
          <img
            src="../../images/Plantasia-green.svg"
            alt="Plantasia logo"
            className="navbar-logo"
          />
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
              About this project
            </a>
            <a className="navbar-text nav-link me-3 d-lg-none" href="#">
              Profile
            </a>
            <a className="navbar-text nav-link me-3 d-lg-none" href="#">
              Favorites
            </a>
            <a className="navbar-text nav-link me-3 d-lg-none" href="#">
              Cart
            </a>
          </div>
          <div className="d-flex d-none d-lg-flex">
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

export default Navbar;

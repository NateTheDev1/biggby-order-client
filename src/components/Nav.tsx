import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <section className="nav-inner">
        <section className="nav-left">
          <section className="nav-logo">
            <i className="fas fa-coffee" />
            <h1 className="logo-header">
              MORNING <span className="logo-header-middle">ROAST</span> COFFEE
            </h1>
          </section>
          <div className="nav-left-links">
            <Link to="/home" className="nav-link">
              HOME
            </Link>
            <Link to="/menu" className="nav-link">
              OUR MENU
            </Link>
            <a
              href="https://store.bhappylounge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              SHOP
            </a>
          </div>
        </section>
        <section className="nav-right">
          <section className="nav-locations">
            <i className="fas fa-map-marker" />
            <a
              href="https://www.biggby.com/locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              FIND A STORE
            </a>
          </section>
          <div>
            <Link to="/cart">CART</Link>
          </div>
          <Link to="/login" className="nav-btn">
            SIGN IN
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Nav;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../GeneralComponents/GeneralComponent.css";
import { FaBars } from "react-icons/fa6";
import { FaInstagram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link className="nodeco" to="/">
                <h2 className="main-logo">Service Konnect</h2>
              </Link>
            </div>
           <div className="side">
           <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <Link className="nodeco" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nodeco" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nodeco" to="/productsandservices/activepage">
                  Products/Services
                </Link>
              </li>
              <li>
                <Link className="nodeco" to="/login">
                  Login
                </Link>
              </li>

              <div className="sidebar">
                <div className="social-links">
                  <a href="#" target="_blank">
                    <FaWhatsapp />
                  </a>
                  <a href="#" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="#" target="_blank">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              
            </ul>
           </div>

            <div className="icon" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

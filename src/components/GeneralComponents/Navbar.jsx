import { useState } from "react";
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
        <div className="container-sm">
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
                <Link className="nodeco" to="/productsandservices/tailors">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="nodeco" to="/login">
                  Login
                </Link>
              </li>

              <div className="sidebar">
                <div className="social-links">
                  <Link to="#" target="_blank">
                    <FaWhatsapp />
                  </Link>
                  <Link to="#" target="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to="#" target="_blank">
                    <FaInstagram />
                  </Link>
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

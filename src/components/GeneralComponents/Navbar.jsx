import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../GeneralComponents/GeneralComponent.css";
import { FaBars } from "react-icons/fa6";
import { FaInstagram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { checkAuth, getCurrentUser } from "../../lib/pocketbase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      const isAuthenticated = checkAuth();
      setIsLoggedIn(isAuthenticated);

      if(isAuthenticated) {
        const user = await getCurrentUser();
        setUserRole(user.artisan)
      }
    };

    checkUserStatus();
  }, []);

  const getAccountPage = () => {
    if (userRole === "artisan") {
      return "/artisan/accountinformation";
    } else {
      return "/client/accountinformation"
    }
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
               {isLoggedIn ?(<Link className="nodeco" to={getAccountPage()}>
                  My account
                </Link>) : (<Link className="nodeco" to="/login">
                  Login
                </Link>)}
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

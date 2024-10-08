import { Link } from "react-router-dom";
import "../GeneralComponents/GeneralComponent.css";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useEffect, useState } from "react";
import { checkAuth } from "../../lib/pocketbase";

const Footer = () => {
  const [value, setValue] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);


  useEffect(() => {
    const checkUserStatus = async () => {
      const authStatus = await checkAuth();
      setIsLoggedIn(authStatus.isAuthenticated);
      if (authStatus.isAuthenticated) {
        setUserRole(authStatus.role);
      }
    };

    checkUserStatus();
  }, []);

  const getAccountPage = () => {
    if (userRole === "artisan") {
      return "/artisan/accountinformation";
    } else {
      return "/client/accountinformation";
    }
  };

  return (
    <div className="footer">
      

      <div className="big_footer">
        <div className="sub_footer section_padding">
          <div className="sub_footer-links">
            <div className="sub_footer-links-div">
              <h4>Other Projects</h4>
              <Link className="nodeco" to="#">
                <p>Recipe Site</p>
              </Link>
              <Link className="nodeco" to="#">
                <p>My Portfolio</p>
              </Link>
              <Link className="nodeco" to="#">
                <p>Sam`s Store</p>
              </Link>
            </div>
            <div className="sub_footer-links-div">
              <h4>Upcoming Projects</h4>
              <Link className="nodeco" to="#">
                <p>My Updated Portfolio</p>
              </Link>
              <Link className="nodeco" to="#">
                <p>T-Coin</p>
              </Link>
              <Link className="nodeco" to="#">
                <p>Coming Soon..</p>
              </Link>
            </div>
          
            <div className="sub_footer-links-div">
              <h4>Connect With Us</h4>
              <div className="socialmedia">
                <p>
                  <Link to="https://wa.me/2348135854955">
                    <FaWhatsapp />
                  </Link>
                </p>
                <p>
                  <Link to="">
                    <FaXTwitter />
                  </Link>
                </p>
                <p>
                  <Link to="">
                    <FaTelegramPlane />
                  </Link>
                </p>
                <p>
                  <Link to="">
                    <FaSnapchat />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="sub_footer-below">
            <div className="sub_footer-copyright">
              <p>
                @{new Date().getFullYear()} TipoDevelopers. All right reserved.
              </p>
            </div>
            <div className="sub_footer-below-links">
              <Link className="nodeco" to="#">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </Link>
              <Link className="nodeco" to="#">
                <div>
                  <p>Security</p>
                </div>
              </Link>
              <Link className="nodeco" to="#">
                <div>
                  <p>Privacy</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="small_footer">
        <div className="container-fluid">
          <BottomNavigation
            className="bottom-nav"
            value={value}
            
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            
              <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" replace />
            
             
              <BottomNavigationAction  label="Menu" icon={<FormatListBulletedIcon />} component={Link} to="/productsandservices/tailors" replace />
            
            {isLoggedIn ? (
              <BottomNavigationAction  label="My Account"  icon={<PersonPinIcon />} component={Link} to={getAccountPage()} replace
                />) : ( <BottomNavigationAction  label="Login"  icon={<AccountCircleIcon />} component={Link} to="/login" />
            )}
          </BottomNavigation>
        </div>
      </div>
    </div>
  );
};

export default Footer;

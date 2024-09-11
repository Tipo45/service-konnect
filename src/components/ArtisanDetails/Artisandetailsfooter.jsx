import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import { useState } from "react";
import "../../components/GeneralComponents/GeneralComponent.css";

const Artisandetailsfooter = () => {
    const [value, setValue] = useState(0);
  return (
    <>
      <div className="small_footer">
        <div className="container-fluid">
          <BottomNavigation
            className="bottom-nav"
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to="/">
              <BottomNavigationAction label="Home" icon={<WhatsAppIcon />} />
            </Link>
            <Link to="/productsandservices/tailors">
              <BottomNavigationAction
                label="Menu"
                icon={<CallIcon />}
              />
            </Link>
            <Link to="/login">
              <BottomNavigationAction
                label="Account"
                icon={<InstagramIcon />}
              />
            </Link>
          </BottomNavigation>
        </div>
      </div>
    </>
  );
};

export default Artisandetailsfooter;

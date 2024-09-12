import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
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
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            </Link>
            <Link to="tel: 0813 585 4955">
              <BottomNavigationAction
                label="Call"
                icon={<CallIcon />}
              />
            </Link>
            <Link to="https://wa.me/2348135854955">
              <BottomNavigationAction
                label="Whatsapp"
                icon={<WhatsAppIcon />}
              />
            </Link>
          </BottomNavigation>
        </div>
      </div>
    </>
  );
};

export default Artisandetailsfooter;

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
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
            
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            
              <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
            
            
              <BottomNavigationAction label="Menu" icon={<FormatListBulletedIcon />} component={Link} to="/productsandservices/tailors"  />
           
            
              <BottomNavigationAction
                label="Call"
                icon={<CallIcon />} component={Link} to="tel: 0813 585 4955"
              />
            
            
              <BottomNavigationAction
                label="Whatsapp"
                icon={<WhatsAppIcon />} component={Link} to="https://wa.me/2348135854955"
              />
          </BottomNavigation>
        </div>
      </div>
    </>
  );
};

export default Artisandetailsfooter;

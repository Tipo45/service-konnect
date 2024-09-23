import "../../components/ArtisanUserProfile/Artisansidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { GrUserSettings } from "react-icons/gr";
import { IoEyeOutline, IoPower } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { logout } from "../../lib/pocketbase";

// eslint-disable-next-line react/prop-types
const Artisansidebar = ({ activepage }) => {
  const navigate = useNavigate();
  return (
    <div className="artisansidebar">
      {activepage === "artisanaccountinformation" ? (
        <div className="s4">
          <FaRegUser />
          <span>Account Information</span>
        </div>
      ) : (
        <Link to="/artisan/artisanaccountinformation" className="nodeco">
          <div className="s3">
            <FaRegUser className="text-dark" />
            <span className="text-dark">Account Information</span>
          </div>
        </Link>
      )}

      {activepage === "artisanchangepassword" ? (
        <div className="s4">
          <IoEyeOutline />
          <span>Change Password</span>
        </div>
      ) : (
        <Link to="/artisan/artisanchangepassword" className="nodeco">
          <div className="s3">
            <IoEyeOutline className="text-secondary" />
            <span className="text-dark">Change Password</span>
          </div>
        </Link>
      )}

      {activepage === "artisanportfolio" ? (
        <div className="s4">
          <GrUserSettings />
          <span>Account Settings</span>
        </div>
      ) : (
        <Link to="/artisan/artisanaccountsettings" className="nodeco">
          <div className="s3">
            <GrUserSettings className="text-info" />
            <span className="text-dark">Account Settings</span>
          </div>
        </Link>
      )}

      {activepage === "artisanaddress" ? (
        <div className="s4">
          <CiLocationOn />
          <span>Address</span>
        </div>
      ) : (
        <Link to="/artisan/artisanaddress" className="nodeco">
          <div className="s3">
            <CiLocationOn className="text-success" />
            <span className="text-dark">Address</span>
          </div>
        </Link>
      )}

        <div className="s3">
          <button onClick={() => {logout(),navigate("/") }}  className="text-dark btns"><IoPower className="text-danger" /> Logout</button>
        </div>
    
    </div>
  );
};

export default Artisansidebar;

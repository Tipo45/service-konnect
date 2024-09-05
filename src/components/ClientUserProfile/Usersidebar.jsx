import React from "react";
import "../ClientUserProfile/Usersidebar.css";
import { Link } from "react-router-dom";
import { GrUserSettings } from "react-icons/gr";
import { IoBagOutline, IoEyeOutline, IoPower } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const UserSidebar = ({ activepage }) => {
  return (
    <div className="usersidebar">
      {activepage === "accountinformation" ? (
        <div className="s2">
          <FaRegUser />
          <span>Account Information</span>
        </div>
      ) : (
        <Link to="/client/accountinformation" className="nodeco">
          <div className="s1">
            <FaRegUser className="text-dark" />
            <span className="text-dark">Account Information</span>
          </div>
        </Link>
      )}

      {activepage === "accountsettings" ? (
        <div className="s2">
          <GrUserSettings />
          <span>Account Settings</span>
        </div>
      ) : (
        <Link to="/client/accountsettings" className="nodeco">
          <div className="s1">
            <GrUserSettings className="text-info" />
            <span className="text-dark">Account Settings</span>
          </div>
        </Link>
      )}

      {activepage === "changepassword" ? (
        <div className="s2">
          <IoEyeOutline />
          <span>Change Password</span>
        </div>
      ) : (
        <Link to="/client/changepassword" className="nodeco">
          <div className="s1">
            <IoEyeOutline className="text-secondary" />
            <span className="text-dark">Change Password</span>
          </div>
        </Link>
      )}

      {activepage === "yourorders" ? (
        <div className="s2">
          <IoBagOutline />
          <span>Your Orders</span>
        </div>
      ) : (
        <Link to="/client/yourorders" className="nodeco">
          <div className="s1">
            <IoBagOutline className="text-primary" />
            <span className="text-dark">Your Orders</span>
          </div>
        </Link>
      )}

      {activepage === "address" ? (
        <div className="s2">
          <CiLocationOn />
          <span>Address</span>
        </div>
      ) : (
        <Link to="/client/address" className="nodeco">
          <div className="s1">
            <CiLocationOn className="text-success" />
            <span className="text-dark">Address</span>
          </div>
        </Link>
      )}

      {
        
          <div className="s1">
            <IoPower className="text-danger" />
            <span className="text-dark">Logout</span>
          </div>
      }
    </div>
  );
};

export default UserSidebar;

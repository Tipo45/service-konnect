import React from "react";
import "../../components/ArtisanUserProfile/Artisanaccinfo.css";

const Artisanaccinfo = () => {
  return (
    <div className="artisanaccountinformation">
      <h1 className="mainhead1">Personal Information</h1>

      <div className="form">
      <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" name="name" id="name" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="name" id="name" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="name" id="name" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <input type="text" name="phone" id="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="businessname">Business Name</label>
          <input type="text" name="name" id="name" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="name" id="name" readOnly />
        </div>
      </div>
    </div>
  );
};

export default Artisanaccinfo;

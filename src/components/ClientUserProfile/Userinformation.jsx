import React from "react";
import "../../components/ClientUserProfile/Userinformation.css";

const Userinformation = () => {
  return (
    <div className="accountinformation">
      <h1 className="mainhead1">Personal Information</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="name"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="name"
            id="name"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <input
            type="text"
            name="phone"
            id="phone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Address</label>
          <input
            type="text"
            name="phone"
            id="phone"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
export default Userinformation;

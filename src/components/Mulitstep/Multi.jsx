import { useState } from "react";
import Progress from "./Progress";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dropdown from "../../components/ArtisanUserProfile/Dropdown";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../../components/ArtisanUserProfile/Artisanreg.css";
import { create_artisan } from "../../lib/pocketbase";

export default function Multi() {
  const [selected, setSelected] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [description, setDesription] = useState("");
  const [address, setAddress] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [phonenumberError, setPhoneNumberError] = useState("");
  const [additionalphonenumber, setAdditionalPhoneNumber] = useState("");
  const [additionalphonenumberError, setAdditionalPhoneNumberError] =  useState("");
  const [whatsappnumber, setWhatsappNumber] = useState("");
  const [instahandle, setInstaHandle] = useState("");
  const [whatsappnumberError, setWhatsappNumberError] = useState("");
  const [instahandleError, setInstaHandleError] = useState("");
  const [nameofartisan, setNameOfArtisan] = useState("");
  const [nameofartisanError, setNameOfArtisanError] = useState("");
  const navigate = useNavigate();

  const handleNext = async (e) => {
    let final_result;
    e.preventDefault();
    
    
    if (firstname === "") {
      setFirstnameError("firstname required");
      return;
    } else {
      setFirstnameError("");  
    }
    
    
    if (lastname === "") {
      setLastnameError("lastname required");
      return;
    } else {
      setLastnameError(""); 
    }
    
    
    if (nameofartisan === "") {
      setNameOfArtisanError("business name required");
      return;
    } else if (nameofartisan.length < 4) {
      setNameOfArtisanError("bussiness name is too short");
      return;
    } else if (nameofartisan.length > 16) {
      setNameOfArtisanError("business name is too long");
      return;
    } else {
      setNameOfArtisanError("");  
    }
    
   
    if (password === "") {
      setPasswordError("password required");
      return;
    } else if (password.length < 8) {
      setPasswordError("password is too short");
      return;
    } else if (confirmpassword !== password) {
      setPasswordError("password do not match");
      setConfirmPasswordError("password do not match");
      return;
    } else {
      setPasswordError("");  
      setConfirmPasswordError("");  
    }
    
    setSteps(2);
    
    if (step === 2) {
      if (description === "") {
        setDescriptionError("required");
        return;
      } else if (description.length < 20) {
        setDescriptionError("too short");
        return;
      } else {
        setDescriptionError("");  
      }
  
      
      if (address === "") {
        setAddressError("required");
        return;
      } else if (address.length < 22) {
        setAddressError("too short");
        return;
      } else {
        setAddressError("");
      }
  
      setSteps(3);
    }
  
    if (step === 3) {

      if (phonenumber === "") {
        setPhoneNumberError("required");
        return;
      } else if (phonenumber.length < 11) {
        setPhoneNumberError("too short");
        return;
      } else {
        setPhoneNumberError("");  
      }
  
      
      if (additionalphonenumber.length > 1 && additionalphonenumber.length < 11) {
        setAdditionalPhoneNumberError("too short");
        return;
      } else {
        setAdditionalPhoneNumberError("");  
      }
  
      
      if (whatsappnumber.length > 1 && whatsappnumber.length < 11) {
        setWhatsappNumberError("too short");
        return;
      } else {
        setWhatsappNumberError(""); 
      }
  

      if (instahandle.length > 1 && instahandle.length < 11) {
        setInstaHandleError("too short");
        return;
      } else {
        setInstaHandleError(""); 
      }
  
      
      try {
        const result = await create_artisan(
          password,
          confirmpassword,
          firstname,
          lastname,
          description,
          address,
          nameofartisan,
          phonenumber,
          additionalphonenumber,
          whatsappnumber,
          instahandle
        );
        final_result = result;
      } catch (error) {
        console.log(error);
        return;
      }
      
      if (final_result.record) {
        navigate("/artisan/accountinformation");
      }
    }
  };
  

  const [step, setSteps] = useState(1);
  const totalSteps = 3;

  function handlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  return (
    <>
      <div className="wraps">
        <div className="progress_wrap">
          <Progress totalSteps={totalSteps} step={step} className="progress" />
          <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
          <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
          <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
        </div>
        <div className="contents">
          {step === 1 && (
            <div className="containers second-form">
              <h1 className="header">Artisan Registration</h1>
              <form>
                <h3>Personal Information</h3>

                <div className="artisan-names">
                  <div className="a-input_box">
                    <MdDriveFileRenameOutline className="a-input-icon" />
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      placeholder="Firstname"
                      className="reg_names"
                    />
                    {firstnameError.length === 0 ? null : (<div className="error-message">{firstnameError}</div>)}
                  </div>

                  <div className="a-input_box">
                    <MdDriveFileRenameOutline className="a-input-icon" />
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      placeholder="Lastname"
                      className="reg_names"
                    />
                    {lastnameError.length === 0 ? null : (
                      <div className="error-message">{lastnameError}</div>
                    )}
                  </div>
                </div>

                <div className="a-input_box">
                  <FaUserAlt className="a-input-icon" />
                  <input
                    value={nameofartisan}
                    onChange={(e) => setNameOfArtisan(e.target.value)}
                    type="text"
                    placeholder="Bussiness name"
                    maxLength="16"
                  />
                  {nameofartisanError.length === 0 ? null : (
                    <div className="error-message">{nameofartisanError}</div>
                  )}
                </div>

                <div className="a-input_box">
                  <FaLock className="a-input-icon" />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    minLength="8"
                  />
                  {passwordError.length === 0 ? null : (
                    <div className="error-message">{passwordError}</div>
                  )}
                </div>

                <div className="a-input_box">
                  <FaLock className="a-input-icon icon-active" />
                  <input
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder=" Confirm Password"
                    minLength="8"
                  />
                  {confirmPasswordError.length === 0 ? null : (
                    <div className="error-message">{confirmPasswordError}</div>
                  )}
                </div>
                <div className="registers-link">
                  <p>
                    Already have an account?
                    <span>
                      <Link to="/login"> Sign In</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}
          {step === 2 && (
            <div className="container second-form">
              <h1 className="header">Artisan Registration</h1>
              <form>
                <h3>Skill Information</h3>
                <div className="artisan-category">
                  <h4>
                    Select Category <span className="text-danger">*</span>
                  </h4>
                  <Dropdown selected={selected} setSelected={setSelected} />
                </div>

                <div className="artisan-description">
                  <h4>
                    Description <span className="text-danger">*</span>
                  </h4>
                  <textarea
                    placeholder="Describe what you do"
                    required
                    value={description}
                    onChange={(e) => setDesription(e.target.value)}
                  ></textarea>
                  {descriptionError.length === 0 ? null : (
                    <div className="error-message">{descriptionError}</div>
                  )}
                </div>

                <div className="artisan-address">
                  <h4>
                    Address <span className="text-danger">*</span>
                  </h4>
                  <input
                    type="text"
                    name="address"
                    placeholder="Where do you stay"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {addressError.length === 0 ? null : (
                    <div className="error-message">{addressError}</div>
                  )}
                </div>
              </form>
            </div>
          )}
          {step === 3 && (
            <div className="container second-form">
              <h1 className="header">Artisan Registration</h1>
              <form onSubmit={handleNext}>
                <h3>Contact Information</h3>
                <div>
                  <div className="artisan-number">
                    <div>
                      <label htmlFor="number">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      name="number"
                      placeholder="Enter your phone number"
                      maxLength={11}
                      required
                      value={phonenumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {phonenumberError.length.length === 0 ? null : (
                      <div className="error-message">{phonenumberError}</div>
                    )}
                  </div>

                  <div className="artisan-number">
                    <div>
                      <label htmlFor="number">Additional Phone Number </label>
                    </div>
                    <input
                      type="text"
                      name="number"
                      placeholder="Enter your phone number"
                      maxLength={11}
                      required
                      value={additionalphonenumber}
                      onChange={(e) => setAdditionalPhoneNumber(e.target.value)}
                    />
                    {additionalphonenumberError.length === 0 ? null : (
                      <div className="error-message">
                        {additionalphonenumberError}
                      </div>
                    )}
                  </div>

                  <div className="socials">
                    <p>Social Media (Optional)</p>
                    <div className="artisan-whatsapp">
                      <div>
                        <label htmlFor="whatsapp">Whatsapp Contact</label>
                      </div>
                      <input
                        type="text"
                        name="whatsapp_number"
                        placeholder="Enter whatsapp number"
                        maxLength={11}
                        value={whatsappnumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                      />
                      {whatsappnumberError.length === 0 ? null : (
                        <div className="error-message">
                          {whatsappnumberError}
                        </div>
                      )}
                    </div>

                    <div className="artisan-insta-handle">
                      <div>
                        <label htmlFor="instagram">Instagram Handle</label>
                      </div>
                      <input
                        type="text"
                        name="insta_handle"
                        placeholder="Enter instagram handle"
                        value={instahandle}
                        onChange={(e) => setInstaHandle(e.target.value)}
                      />
                      {instahandleError.length === 0 ? null : (
                        <div className="error-message">{instahandleError}</div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="buttns">
          <button
            className={`${step <= 1 ? "disabled" : "btn-s"}`}
            onClick={handlePrev}
          >
            prev <FaArrowLeft />
          </button>

          {step === 3 ? (
            <button type="submit" className="btn-s">
              Submit
            </button>
          ) : (
            <button onClick={handleNext} className="btn-s">
              Next <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

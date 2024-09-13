import { useState } from "react";
import Progress from "./Progress";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dropdown from "../../components/ArtisanUserProfile/Dropdown";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import "../../components/ArtisanUserProfile/Artisanreg.css";
import { create_artisan } from "../../lib/pocketbase";

export default function Multi() {
  const [selected, setSelected] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [description, setDesription] = useState("");
  const [address, setAddress] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [phonenumberError, setPhoneNumberError] = useState("");
  const [additionalphonenumber, setAdditionalPhoneNumber] = useState("");
  const [additionalphonenumberError, setAdditionalPhoneNumberError] =
    useState("");
  const [whatsappnumber, setWhatsappNumber] = useState("");
  const [instahandle, setInstaHandle] = useState("");
  const [whatsappnumberError, setWhatsappNumberError] = useState("");
  const [instahandleError, setInstaHandleError] = useState("");
  const [nameofartisan, setNameOfArtisan] = useState("");
  const [nameofartisanError, setNameOfArtisanError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleNext = async (e) => {
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

    if (username === "") {
      setUsernameError("username required");
      return;
    } else if (username.length < 4) {
      setUsernameError("username is too short")
    } else {
      setUsernameError("");
    }

    if (nameofartisan === "") {
      setNameOfArtisanError("business name required");
      return;
    } else if (nameofartisan.length < 4) {
      setNameOfArtisanError("business name is too short");
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
      setPasswordError("passwords do not match");
      setConfirmPasswordError("passwords do not match");
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

      if (
        additionalphonenumber.length > 1 &&
        additionalphonenumber.length < 11
      ) {
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

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    let final_result;
    if (phonenumber.length === 11) {
      try {
        const result = await create_artisan(
          username,
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
        setLoading(false); // Set loading to false in case of error
        return;
      }

      if (final_result.record) {
        navigate("/artisan/artisanaccountinformation");
      }
    } else {
      setPhoneNumberError("too short");
      setLoading(false); // Set loading to false in case of validation error
      return;
    }
    setLoading(false); // Set loading to false when done
  };

  const [step, setSteps] = useState(1);
  const totalSteps = 3;

  function handlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  return (
    <>
      <div className="wraps">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="progress_wrap">
            <Progress totalSteps={totalSteps} step={step} className="progress" />
            <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
            <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
            <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
          </div>
          <div className="contents">
            {loading ? (
              <h4>Loading, please wait...</h4>
            ) : (
              <>
                {step === 1 && (
                  <div className="containers second-form">
                    <h1 className="header">Artisan Registration</h1>
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
                        {firstnameError.length === 0 ? null : (
                          <div className="error-message">{firstnameError}</div>
                        )}
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
                      <TiBusinessCard className="a-input-icon" />
                      <input
                        value={nameofartisan}
                        onChange={(e) => setNameOfArtisan(e.target.value)}
                        type="text"
                        placeholder="Business name"
                        maxLength="16"
                      />
                      {nameofartisanError.length === 0 ? null : (
                        <div className="error-message">{nameofartisanError}</div>
                      )}
                    </div>

                    <div className="a-input_box">
                      <FaUserAlt className="a-input-icon" />
                      <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="username"
                        maxLength="20"
                      />
                      {usernameError.length === 0 ? null : (
                        <div className="error-message">{usernameError}</div>
                      )}
                    </div>

                    <div className="a-input_box">
                      <FaLock className="a-input-icon" />
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                      {passwordError.length === 0 ? null : (
                        <div className="error-message">{passwordError}</div>
                      )}
                    </div>

                    <div className="a-input_box">
                      <FaLock className="a-input-icon" />
                      <input
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                      />
                      {confirmPasswordError.length === 0 ? null : (
                        <div className="error-message">
                          {confirmPasswordError}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="containers second-form">
                    <h1 className="header">Artisan Registration</h1>
                    <h3>Profile Information</h3>

                    <div className="a-input_box">
                      <Dropdown selected={selected} setSelected={setSelected} />
                    </div>

                    <div className="artisan-description">
                    <h4>
                    Description <span className="text-danger">*</span>
                  </h4>
                      <input
                        value={description}
                        onChange={(e) => setDesription(e.target.value)}
                        type="text"
                        placeholder="Description of service"
                        maxLength="250"
                      />
                      {descriptionError.length === 0 ? null : (
                        <div className="error-message">{descriptionError}</div>
                      )}
                    </div>

                    <div className="artisan-address">
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Address"
                      />
                      {addressError.length === 0 ? null : (
                        <div className="error-message">{addressError}</div>
                      )}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="containers third-form">
                    <h1 className="header">Artisan Registration</h1>
                    <h3>Contact Information</h3>

                    <div className="a-input_box">
                      <input
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="tel"
                        placeholder="Phone Number"
                        pattern="[0-9]{11}"
                      />
                      {phonenumberError.length === 0 ? null : (
                        <div className="error-message">{phonenumberError}</div>
                      )}
                    </div>

                    <div className="a-input_box">
                      <input
                        value={additionalphonenumber}
                        onChange={(e) => setAdditionalPhoneNumber(e.target.value)}
                        type="tel"
                        placeholder="Additional Phone Number (optional)"
                      />
                      {additionalphonenumberError.length === 0 ? null : (
                        <div className="error-message">
                          {additionalphonenumberError}
                        </div>
                      )}
                    </div>

                    <div className="a-input_box">
                      <input
                        value={whatsappnumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        type="tel"
                        placeholder="Whatsapp Number (optional)"
                      />
                      {whatsappnumberError.length === 0 ? null : (
                        <div className="error-message">
                          {whatsappnumberError}
                        </div>
                      )}
                    </div>

                    <div className="a-input_box">
                      <input
                        value={instahandle}
                        onChange={(e) => setInstaHandle(e.target.value)}
                        type="text"
                        placeholder="Instagram Handle (optional)"
                      />
                      {instahandleError.length === 0 ? null : (
                        <div className="error-message">{instahandleError}</div>
                      )}
                    </div>
                  </div>
                )}
              </>
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
        </form>
      </div>
    </>
  );
}

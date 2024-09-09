import { useState } from "react";
import Progress from "./Progress";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dropdown from "../../components/ArtisanUserProfile/Dropdown";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../components/ArtisanUserProfile/Artisanreg.css";

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

  const toTheNext = async (e) => {
    e.preventDefault();
    if (firstname === "") {
      setFirstnameError("firstname required");
      return;
    } else {
      if (lastname === "") {
        setLastnameError("lastname required");
        return;
      } else {
        if (username === "") {
          setUsernameError("username required");
          return;
        } else {
          if (username.length < 4) {
            setUsernameError("username is too short");
            return;
          } else {
            if (username.length > 16) {
              setUsernameError("username is too long");
              return;
            } else {
              if (password === "") {
                setPasswordError("password required");
                return;
              } else {
                if (password.length < 8) {
                  setPasswordError("password is too short");
                  return;
                } else {
                  if (confirmpassword !== password) {
                    setPasswordError("password do not match");
                    setConfirmPasswordError("password do not match");
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const [step, setSteps] = useState(1);
  const totalSteps = 3;

  function handlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setSteps((step) => step + 1);
  }

  return (
    <>
      <div className="wrap">
        <div className="progress_wrap">
          <Progress totalSteps={totalSteps} step={step} className="progress" />
          <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
          <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
          <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
        </div>
        <div className="contents">
          {step === 1 && (
            <div className="container second-form">
              <h1>Artisan Registration</h1>
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
                  <FaUserAlt className="a-input-icon" />
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    maxLength="16"
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
                    minLength="8"
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
                    placeholder=" Confirm Password"
                    minLength="8"
                  />
                  {confirmPasswordError.length === 0 ? null : (
                    <div className="error-message">{confirmPasswordError}</div>
                  )}
                </div>
                <div className="registers-link">
                  <p>
                    Already have an account?<span><Link to="/login"> Sign In</Link></span>
                  </p>
                </div>
              </form>
            </div>
          )}
          {step === 2 && (
            <div className="container second-form">
              <h1>Artisan Registration</h1>
              <form onSubmit>
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
                  ></textarea>
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
                  />
                </div>

                <div className="artisan-image">
                  <h4>
                    Add Image <span className="text-danger">*</span>
                  </h4>
                  <p>
                    Not more than <span>5MB</span>
                  </p>
                  <input type="file" />
                </div>
              </form>
            </div>
          )}
          {step === 3 && (
            <div className="container second-form">
              <h1>Artisan Registration</h1>
              <form>
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
                    />
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
                    />
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
                      />
                    </div>

                    <div className="artisan-insta-handle">
                      <div>
                        <label htmlFor="instagram">Instagram Handle</label>
                      </div>
                      <input
                        type="text"
                        name="insta_handle"
                        placeholder="Enter instagram handle"
                      />
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
          <button className="btn-s" onClick={handleNext}>
            {step === 3 ? "Submit" : "Next"}
            {step === 3 ? null : <FaArrowRight />}
          </button>
        </div>
      </div>
    </>
  );
}

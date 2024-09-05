import { useState } from "react";
import React from "react";
import { FaUserAlt, FaLock, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../login/Login.css";

const Logform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    if (username.length === 0) {
      errors.username = "Username is required.";
      valid = false;
    } else if (username.length > 0 && username.length < 4) {
      errors.username = "Username must be at least 4 characters.";
      valid = false;
    }

    if (password.length === 0) {
      errors.password = "Password is required.";
      valid = false;
    } else if (password.length > 0 && password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
      valid = false;
    }

    if (valid) {
      setErrors({ username: "", password: "" });
    } else {
      setErrors(errors);
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform the actual form submission, e.g., API call
      console.log("Form submitted with:", { username, password });
      // Here you might handle success/failure responses from an API call
    }
  };

  return (
    <>
      <div className="directions">
        <span>
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </span>
      </div>

      <div>
        <div className="wrapper">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="input-box">
              <FaUserAlt className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength="10"
              />
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="forgot-pass">
              <Link to="#">Forgot Password?</Link>
            </div>

            <Link to="/artisan/activepage" className="nodeco">
              <button type="submit" className="btn">
                Login
              </button>
            </Link>
            <div className="register-link">
              <p>
                Don't have an account?
                <Link to="/clientregistration">Register Here</Link>
              </p>
            </div>

            {/* <div className={popupError}>
                    <h3>Login Failed</h3>
                    <p>Usernane or password incorrect</p>
                </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Logform;

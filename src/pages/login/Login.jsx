import { useState } from "react";
import { FaUserAlt, FaLock, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../login/Login.css";
import { login } from "../../lib/pocketbase";

const Logform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setLoginError(""); // Clear any previous login errors

    if (username === "") {
      setUsernameError("Username required");
      setLoading(false);
      return;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Password required");
      setLoading(false); 
      return;
    } else {
      setPasswordError("");
    }

    if (!usernameError && !passwordError) {
      try {
        const result = await login(username, password);

        if (result.record) {
          navigate("/client/accountinformation");
        } 
      } catch (error) {
        console.log(error);
        setLoginError("Incorrect login details");
      }
    }

    setLoading(false);
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
          {loading ? (
            <h4>Loading, please wait...</h4>
          ) : (
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1>Client Login</h1>

              {loginError && <div className="error-message">{loginError}</div>}

              <div className="input-box">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength="16"
                />
                {usernameError && (
                  <div className="error-message">{usernameError}</div>
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
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
              </div>

              <div className="forgot-pass">
                <Link to="#">Forgot Password?</Link>
              </div>

              <button type="submit" className="btn" disabled={loading}>
                Login
              </button>

              <div className="register-link">
                <p>Don’t have an account?
                  <Link to="/clientregistration"> Register Here</Link>
                </p>
                <p>Are you an artisan?
                  <Link to="/artisanlogin"> Sign In here</Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Logform;

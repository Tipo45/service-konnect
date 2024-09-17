import { FaArrowLeft, FaLock, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login_artisan } from "../../lib/pocketbase";
import { useState } from "react";
import "../../pages/login/Login.css";

const ArtisanLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    if (username === "") {
      setUsernameError("username required");
      setLoading(false);
      return;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("password required");
      setLoading(false);
      return;
    } else {
      setPasswordError("");
    }

    if (!usernameError && !passwordError) {
      try {
        const result = await login_artisan(username, password);

        if (result.record) {
          navigate("/artisan/artisanaccountinformation");
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
          <Link to="/login">
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
              <h1>Artisan Login</h1>

              {loginError && <div className="error-message">{loginError}</div>}

              <div className="input-box">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && <div className="error-message">{usernameError}</div>}
              </div>

              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <div className="error-message">{passwordError}</div>}
              </div>

              <div className="forgot-pass">
                <Link to="#">Forgot Password?</Link>
              </div>

              <button type="submit" className="btn" disabled={loading}>
                Login
              </button>
              <div className="register-link">
                <p>
                  Don`t have an account?
                  <Link to="/artisanregistration"> Register Here</Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ArtisanLogin;

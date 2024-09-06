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
  const navigate = useNavigate();

const handleSubmit = async(e) => {
  e.preventDefault();
  let finalresult
  if (username === "") {
    setUsernameError("username required")
    return
  } else {
    if (password === "") {
      setPasswordError("password required");
      return
    } else {
      try {
        const result = await login(username, password)
        finalresult = result
      } catch (error) {
        console.log(error)
        return
      }
      if (finalresult.record) {
        navigate("/client/accountinformation");
      }
    }
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>

            <div className="input-box">
              <FaUserAlt className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength="16"
              />
              { usernameError.length === 0 ? null :  <div className="error-message">{usernameError}</div>}
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
              { passwordError.length === 0 ? null :  <div className="error-message">{passwordError}</div>}
            </div>

            <div className="forgot-pass">
              <Link to="#">Forgot Password?</Link>
            </div>

           
              <button type="submit" className="btn">
                Login
              </button>
            <div className="register-link">
              <p>
                Don`t have an account?
                <Link to="/clientregistration">Register Here</Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Logform;

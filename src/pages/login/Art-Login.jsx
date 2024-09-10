import { FaArrowLeft, FaLock, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login_artisan } from "../../lib/pocketbase";
import { useState } from "react";
import "../../pages/login/Login.css";


const ArtisanLogin = () => {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setusernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        let final_result
        e.preventDefault();

        if (username === "") {
            setusernameError("username required");
            return;
        } else {
            setusernameError("");
        }

        if (password === "") {
            setPasswordError("password requierd");
            return;
        } else {
            setPasswordError("");
        }

        if (!usernameError && !passwordError) {
            try {
                const result =  await login_artisan(username, password)
                 final_result = result
            } catch (error) {
                console.log(error)
                return
            }
            if (final_result.record) {
                navigate("/artisan/artisanaccountinformation");
            }
        }
        
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>

            <div className="input-box">
              <FaUserAlt className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
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
               <p>Don`t have an account?
               <Link to="/artisanregistration"> Register Here</Link></p>

            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default ArtisanLogin;

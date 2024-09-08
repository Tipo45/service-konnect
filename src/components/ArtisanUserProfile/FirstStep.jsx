import { FaArrowLeft, FaArrowRight, FaLock, FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../components/ArtisanUserProfile/Artisanreg.css";
import { useState } from "react";

export default function FirstStep() {

    const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
 const [firstnameError, setFirstnameError] = useState("")
 const [lastnameError, setLastnameError] = useState("")
 const [usernameError, setUsernameError] = useState("")
 const [passwordError, setPasswordError] = useState("")
 const [confirmPasswordError, setConfirmPasswordError] = useState("")

const tothenext = async(e) => {
    e.preventDefault();
    if (firstname === "") {
        setFirstnameError("firstname required");
        return
    }else {
        if (lastname === "") {
         setLastnameError("lastname required");
          return 
        } else {
            if (username === ""){
                setUsernameError("username required");
                return
            } else {
                if (username.length < 4) {
                    setUsernameError("username is too short");
                    return
                } else {
                    if (username.length> 16) {
                        setUsernameError("username is too long");
                        return
                    } else {
                        if (password === "") {
                            setPasswordError("password required");
                            return
                        } else {
                            if (password.length < 8) {
                                setPasswordError("password is too short");
                                return
                            } else {
                                if (confirmpassword !== password) {
                                    setPasswordError("password do not match")
                                    setConfirmPasswordError("password do not match")
                                    return
                                }
                            }
                        }
                    }
                }
            }
        }
}

  return (
    <>
      <div className="container">
        <h2>Personal Information</h2>

        <div className="artisan-names">
          <div className="input_box">
            <MdDriveFileRenameOutline className="input-icon" />
            <input value={firstname}
                onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Firstname" />
            { firstnameError.length === 0 ? null :  <div className="error-message">{firstnameError}</div>}
          </div>

          <div className="input_box">
            <MdDriveFileRenameOutline className="input-icon" />
            <input value={lastname}
                onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Lastname" />
            { lastnameError.length === 0 ? null :  <div className="error-message">{lastnameError}</div>}
          </div>
        </div>

        <div className="input_box">
          <FaUserAlt className="input-icon" />
          <input value={username}
              onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" maxLength="16" />
          { usernameError.length === 0 ? null :  <div className="error-message">{usernameError}</div>}
        </div>

        <div className="input_box">
          <FaLock className="input-icon" />
          <input value={password}
              onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" minLength="8" />
          { passwordError.length === 0 ? null :  <div className="error-message">{passwordError}</div>}
        </div>

        <div className="input_box">
          <FaLock className="input-icon" />
          <input value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder=" Confirm Password"
            minLength="8"
          />
          { confirmPasswordError.length === 0 ? null :  <div className="error-message">{confirmPasswordError}</div>}
        </div>

        <button type="submit" className="btn">
          Next <FaArrowRight />
        </button>
        <div className="register-link">
          <p>
            Already have an account?<Link to="/login"> Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}
}

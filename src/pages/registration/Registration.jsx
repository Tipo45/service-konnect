import { useState } from "react";
import { FaUserAlt, FaLock, FaArrowLeft } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link, useNavigate, } from "react-router-dom";
import {create_user } from "../../lib/pocketbase"
import "../login/Login.css";

const Regform = () => {
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
 const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    let finalresult
    if (firstname === "") {
      setFirstnameError("firstname required")
      return 
    } else {
      if (lastname === "") {
       setLastnameError("lastname required");
        return 
      } else {
        if (username === "") {
          setUsernameError("username required");
          return 
        } else {
          if (username.length < 4) {
            setUsernameError("username is too short");
            return 
          } else {
            if (username.length > 16) {
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
                  else{
                    try { 
                     const result = await  create_user(firstname,lastname,username,password,confirmpassword)
                     finalresult = result
                    } catch (error) {
                      console.log(error)
                      return
                    }
                    if(finalresult.record){
                      navigate("/client/accountinformation");
                    }
                  }
                }
              }
            }
          }
        }
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
      <div className="wrapper">
        <form onSubmit={(e) => handleSubmit(e)} >
          <h1>Client Registration</h1>

          <div className="names">
            <div className="input-box">
              <MdDriveFileRenameOutline className="icon" />
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="Firstname"
              />
              { firstnameError.length === 0 ? null :  <div className="error-message">{firstnameError}</div>}
            </div>

            <div className="input-box">
              <MdDriveFileRenameOutline className="icon" />
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder="Lastname"
              />
            { lastnameError.length === 0 ? null :  <div className="error-message">{lastnameError}</div>}
            </div>
          </div>

          <div className="input-box">
            <FaUserAlt className="icon" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              maxLength="16"
            />
            { usernameError.length === 0 ? null :  <div className="error-message">{usernameError}</div>}
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              minLength="8"
            />
            { passwordError.length === 0 ? null :  <div className="error-message">{passwordError}</div>}
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder=" Confirm Password"
              minLength="8"
            />
            { confirmPasswordError.length === 0 ? null :  <div className="error-message">{confirmPasswordError}</div>}
          </div>
            <button type="submit" className="btn">
              Register
            </button>
          <div className="register-link">
            <p>
              Already have an account?<Link to="/login"> Sign In</Link>
            </p>
          </div>
          <div className="art-reg">
            <span>
              Are you an artisan?,
              <Link to="/artisanregistration">click here</Link> to register
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Regform;

import React from "react";
import { FaArrowLeft, FaArrowRight, FaLock, FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Registrationartisan = () => {

    // function RegistrationForm() {
    //     const navigate = useNavigate();
      
    //     const handleSubmit = (event) => {
    //       event.preventDefault();
    //       // Perform form validation and submission logic here
    //       navigate('/client/activepage');
    //     };

//     if (
//         firstname.length === 0 || lastname.length === 0 || username.length === 0 || password.length === 0
//     ) {
//         if (firstname.length === 0) {
//             errors.firstname = 'Firstname is required.';
//         }
//         if (lastname.length === 0) {
//             errors.lastname = 'Lastname is required.';
//         }
//         if (username.length === 0) {
//             errors.username = 'Username is required.';
//         }
//         if (password.length === 0) {
//             errors.password = 'Password is required.';
//         }
//         valid = false;
//     } else if (
//         firstname.length < 3 || lastname.length < 3 || username.length < 4 || password.length < 8 || confirmpassword !== password
//     ) {
//         if (firstname.length > 0 && firstname.length < 3) {
//             errors.firstname = 'Firstname must be at least 3 characters.';
//         }
//         if (lastname.length > 0 && lastname.length < 3) {
//             errors.lastname = 'Lastname must be at least 3 characters.';
//         }
//         if (username.length > 0 && username.length < 4) {
//             errors.username = 'Username must be at least 4 characters.';
//         }
//         if (password.length > 0 && password.length < 8) {
//             errors.password = 'Password must be at least 8 characters.';
//         }
//         if (confirmpassword !== password) {
//             errors.confirmpassword = 'Passwords do not match.';
//         }
//         valid = false;
//     } else {
//         setFirstname(capitalizeName(firstname));
//         setLastname(capitalizeName(lastname));
//     }
    
//     if (valid) {
//         setErrors({ firstname: '', lastname: '', username: '', password: '', confirmpassword: '' });
//     } else {
//         setErrors(errors);
//     }
    
//     return valid;
// };
    

  return (
    <>
     <div className="directions">
        <span>
          <Link to="/clientregistration"><FaArrowLeft /></Link>
        </span>
      </div>
        <div className="wrapper">
          <form action="#">
            <h1>Artisan Registration</h1>

            <div className="names">
              <div className="input-box">
                <MdDriveFileRenameOutline className="icon" />
                <input
                  type="text"
                  placeholder="Firstname"
                />
              </div>

              <div className="input-box">
                <MdDriveFileRenameOutline className="icon" />
                <input
                  type="text"
                  placeholder="Lastname"
                />
              </div>
            </div>

            <div className="input-box">
              <FaUserAlt className="icon" />
              <input
                type="text"
                placeholder="Username"
                maxLength="10"
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                minLength="8"
              />
              
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder=" Confirm Password"
                minLength="8"
              />
            </div>

              <button type="submit" className="btn">
                Next <FaArrowRight />
              </button>
            <div className="register-link">
              <p>
                Already have an account?<Link to="/login"> Sign In</Link>
              </p>
            </div>
          </form>
        </div>
    </>
  );
};

export default Registrationartisan;

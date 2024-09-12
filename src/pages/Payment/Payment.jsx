import { Link } from "react-router-dom";
import "../Payment/Payment.css";
import Navbar from "../../components/GeneralComponents/Navbar";
import Footer from "../../components/GeneralComponents/Footer";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Payment = () => {
  return (
    <>
    <Navbar />
      <div className="all-content">
        <h1>Payment Summary</h1>
        <div className="intro">
            <p>If you proceed, you are automatically accepting our <Link to="#"><span>Terms and Conditions</span></Link></p>
        </div>
        <div className="pay-for">
            <p>Payment being made for the services of Gen Doctor needed at:</p>
        </div>
        <div className="location">
            <p>Room 4, Yalty Estate, Back of Hospital Road, Otuoke, Ogbia, Bayelsa State.</p>
        </div>
        <div className="back">
            <Link to="/artisan-details"><p><MdOutlineKeyboardArrowLeft /> Go back to confirm</p></Link>
        </div>
        <button className="btn">Pay</button>
      </div>
      <Footer />
    </>
  );
};

export default Payment;

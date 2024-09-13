import { Link } from "react-router-dom";
import "../Payment/Payment.css";
import Navbar from "../../components/GeneralComponents/Navbar";
import Footer from "../../components/GeneralComponents/Footer";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import { PaystackButton } from "react-paystack";


const Payment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const publicKey = "pk_test_e9c8b4eeaa49685b18231bf3fbe16f5d6a85f765";

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phonenumber,
    },
    publicKey,
    text: "Pay",
    onSuccess: () => alert("Payment Received"),
    onClose: () => alert("Are you sure you want to close?")
  };

  return (
    <>
      <Navbar />
      <div className="all-content">
        <h1>Payment Summary</h1>
        <div className="intro">
          <p>
            If you proceed, you are automatically accepting our{" "}
            <Link to="#">
              <span>Terms and Conditions</span>
            </Link>
          </p>
        </div>
        <div className="pay-for">
          <p>Being payment made for the services of <span>Gen Docto</span>r </p>
        </div>
        <div className="back">
          <Link to="/artisan-details">
            <p>
              <MdOutlineKeyboardArrowLeft /> Go back to confirm
            </p>
          </Link>
        </div>

        

        <div className="form-groups">
          <div className="username">
            <input type="text" placeholder="Enter full name" value={name} onChange={(e)=> setName(e.target.value)} />
          </div>

          <div className="email">
            <input type="text" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>

          <div className="phone-number">
            <input type="text" placeholder="Enter phone number" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>

          <div className="amount">
            <input type="text" name="amount" placeholder="Enter amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
          </div>
        </div>

        <div className="pay">
          <PaystackButton className="btn" {...componentProps} />
          {/* <button className="btn">Pay</button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;

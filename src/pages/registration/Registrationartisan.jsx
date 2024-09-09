import { FaArrowLeft } from "react-icons/fa";
import "../../pages/registration/Registrationartisan.css";
import { Link } from "react-router-dom";
import Multistep from "../../components/Mulitstep/Multistep";

const Registrationartisan = () => {


  return (
    <>
    <div className="directions">
        <span>
          <Link to="/clientregistration">
            <FaArrowLeft />
          </Link>
        </span>
      </div>
      <div className="wrapp">
        <Multistep />
      </div>
    </>
  );
};

export default Registrationartisan;

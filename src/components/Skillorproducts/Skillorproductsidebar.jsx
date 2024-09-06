
import { Link } from "react-router-dom";
import "../../components/Skillorproducts/Skillorproductsidebar.css";

// eslint-disable-next-line react/prop-types
const Skillorproductsidebar = ({ activepage }) => {
  return (
    <>
      <div className="skillandproductsidebar">
        {activepage === "tailors" ? (
          <div className="column2">
            <h1>Tailors</h1>
          </div>
        ) : (
          <Link to="/productsandservices/tailors">
            <div className="column1">
              <h1>Tailors</h1>
            </div>
          </Link>
        )}

        {activepage === "autotechnicians" ? (
          <div className="column2">
            <h1>Autotechnicians</h1>
          </div>
        ) : (
          <Link to="/productsandservices/autotechnicians">
            <div className="column1">
              <h1>Autotechnicians</h1>
            </div>
          </Link>
        )}

        {activepage === "electricians" ? (
          <div className="column2">
            <h1>Electrical Services</h1>
          </div>
        ) : (
          <Link to="/productsandservices/electricians">
            <div className="column1">
              <h1>Electrical Services</h1>
            </div>
          </Link>
        )}

        {activepage === "plumbers" ? (
          <div className="column2">
            <h1>Plumbers</h1>
          </div>
        ) : (
          <Link to="/productsandservices/plumbers">
            <div className="column1">
              <h1>Plumbers</h1>
            </div>
          </Link>
        )}

        {activepage === "caterers" ? (
          <div className="column2">
            <h1>Caterers</h1>
          </div>
        ) : (
          <Link to="/productsandservices/caterers">
            <div className="column1">
              <h1>Caterers</h1>
            </div>
          </Link>
        )}

        {activepage === "buildersandconstructors" ? (
          <div className="column2">
            <h1>Builders and Constructors</h1>
          </div>
        ) : (
          <Link to="/productsandservices/buildersandconstructors">
            <div className="column1">
            <h1>Builders and Constructors</h1>
            </div>
          </Link>
        )}

        {activepage === "arts" ? (
          <div className="column2">
            <h1>Arts</h1>
          </div>
        ) : (
          <Link to="/productsandservices/arts">
            <div className="column1">
              <h1>Arts</h1>
            </div>
          </Link>
        )}

        {activepage === "otherservices" ? (
          <div className="column2">
            <h1>Other Services</h1>
          </div>
        ) : (
          <Link to="/productsandservices/otherservices">
            <div className="column1">
              <h1>Other Services</h1>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Skillorproductsidebar;

import { Rating } from "@mui/material";
import "../../components/Skillorproducts/Art.css";
import { Link } from "react-router-dom";

const Plumbers = () => {
  return (
    <>
      <div className="arts">
        <h2>Plumbers</h2>
        <div>
          <section className="container">
            <div className="arts-content">
              <div className="art-category">
                <img src="" alt="" />
                <div className="arts-content-content">
                  <div className="price">
                    <p>₦10,000</p>
                  </div>
                  <div className="ratings">
                    <p>
                      <Rating />
                    </p>
                  </div>
                  <div>
                    <Link to="/artisan-details">
                      <h3 className="no-deco">View</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Plumbers;

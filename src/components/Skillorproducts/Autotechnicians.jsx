import { Rating } from "@mui/material";
import "../../components/Skillorproducts/Art.css";
import { Link } from "react-router-dom";
import autotechimage from "../../assets/images/image13.webp";

const Autotechnicians = () => {
  return (
    <>
      <div className="arts">
        <h2>Autotechnicians</h2>
        <div>
          <section className="container">
            <div className="arts-content">
              <div className="art-category">
                <img src={autotechimage} alt="auto tech 1" loading="lazy" />
                <div className="arts-content-content">
                  <div className="price">
                    <p>₦10,000</p>
                  </div>
                  <div className="ratings">
                    <p>
                      <Rating defaultValue={4.0} precision={0.5} readOnly />
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

export default Autotechnicians;

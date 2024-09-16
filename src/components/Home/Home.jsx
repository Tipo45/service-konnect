import "../../components/Home/Home.css";
import tailorimage from "../../assets/images/image6.webp";
import autorepairimage from "../../assets/images/image14.webp";
import electricalimage from "../../assets/images/image4.webp";
import plumberimage from "../../assets/images/image2.webp";
import caterersimage from "../../assets/images/image16.webp";
import buildingandconstructionimage from "../../assets/images/image9.webp";
import Artsimage from "../../assets/images/image11.webp";
import Othercategoriesimage from "../../assets/images/Neon_06_1_optimized.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="tailors">
          <section className="steps-container" id="steps-container">
            <h2 className="section-heads">Artisans` Category</h2>
            <div className="steps-container-content">
              <Link to="/productsandservices/tailors">
                <div className="category">
                  <img src={tailorimage} alt="Tailoring Service" />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Tailoring Services</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/autotechnicians">
                <div className="category">
                  <img src={autorepairimage} alt="Auto repair" />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Auto Repair Services</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/electricians">
                <div className="category">
                  <img
                    src={electricalimage}
                    alt="Electrical Service"
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Electrical services</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/plumbers">
                <div className="category">
                  <img src={plumberimage} alt="Plumbing Service" />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Plumbing Services</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/caterers">
                <div className="category">
                  <img src={caterersimage} alt="Caterers" />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Catering Services</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/buildersandconstructors">
                <div className="category">
                  <img src={buildingandconstructionimage} alt="Building and Construction" />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Building and Construction</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/arts">
                <div className="category">
                  <img src={Artsimage} alt="Arts Category" />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Arts</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productsandservices/otherservices">
                <div className="category">
                  <img src={Othercategoriesimage} alt="Other Categories" />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Other Categories</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

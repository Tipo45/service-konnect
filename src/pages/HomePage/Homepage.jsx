import React from "react";
import Footer from "../../components/GeneralComponents/Footer";
import Navbar from "../../components/GeneralComponents/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "../../pages/HomePage/Homepage.css";
import slider1 from "../../assets/images/Neon_06.jpg";

const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Carousel>
            <Carousel.Item>
              <img src={slider1} alt="slider1" className="slider-image" />
              <Carousel.Caption>
                <h3>Best of the Best</h3>
                <p>Get connected with skilled craftsmen</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://media.istockphoto.com/id/1469723771/photo/coffee-shop-senior-woman-manager-portrait-with-barista-feeling-happy-about-shop-success.jpg?s=2048x2048&w=is&k=20&c=6nFUMicgP2sX5bwQyCVn8AsHF809nbb6IqFWmbS_pmc="
                alt="slider2"
                className="slider-image"
              />
              <Carousel.Caption>
                <h3>Our Services are top notch</h3>
                <p>We boast of several skilled and seasoned service renders</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://media.istockphoto.com/id/1469723771/photo/coffee-shop-senior-woman-manager-portrait-with-barista-feeling-happy-about-shop-success.jpg?s=2048x2048&w=is&k=20&c=6nFUMicgP2sX5bwQyCVn8AsHF809nbb6IqFWmbS_pmc="
                alt="slider3"
                className="slider-image"
              />
              <Carousel.Caption>
                <h3>Register to get started</h3>
                <p>
                  Don't miss out on this opportunity to become a listed artisan
                  in our database!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="home-page">
          <div className="tailors">
            <section classNameName="steps-container" id="steps-container">
              <h2 className="section-heads">Popular Tailors</h2>
              <div className="steps-container-content">
                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                    alt=""
                  />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Tailoring Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1892182257/photo/male-mechanic-working-on-car-engine-in-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=fHi1Fheh3-ByUS6MdlQXJgrN3InZq28Efhp_eeLp2Ks="
                    alt=""
                  />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Auto Repair</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU="
                    alt=""
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Electrical services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1440019701/photo/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=2048x2048&w=is&k=20&c=5m-JfCrZBaSidsv4kUo5my6keChi4e5wIsaF832h-88="
                    alt=""
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Plumbing Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=2048x2048&w=is&k=20&c=yhcsWsT9BEO09L9Zhtbjo8BegTaQh69i-nRBeTH9SfY="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Catering Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Building/Construction</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1125625188/photo/girl-painting-on-canvas.jpg?s=612x612&w=is&k=20&c=5ZdMo5yfsCh-gkmOpD4Jo6UkYX0-ociq0uLEZz_VA5Y="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Arts</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Other Categories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="auto">
            <section classNameName="steps-container" id="steps-container">
              <h2 className="section-heads">Popular Auto Repairers</h2>
              <div className="steps-container-content">
                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                    alt=""
                  />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Tailoring Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1892182257/photo/male-mechanic-working-on-car-engine-in-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=fHi1Fheh3-ByUS6MdlQXJgrN3InZq28Efhp_eeLp2Ks="
                    alt=""
                  />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Auto Repair</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU="
                    alt=""
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Electrical services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1440019701/photo/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=2048x2048&w=is&k=20&c=5m-JfCrZBaSidsv4kUo5my6keChi4e5wIsaF832h-88="
                    alt=""
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Plumbing Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=2048x2048&w=is&k=20&c=yhcsWsT9BEO09L9Zhtbjo8BegTaQh69i-nRBeTH9SfY="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Catering Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Building/Construction</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1125625188/photo/girl-painting-on-canvas.jpg?s=612x612&w=is&k=20&c=5ZdMo5yfsCh-gkmOpD4Jo6UkYX0-ociq0uLEZz_VA5Y="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Arts</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Other Categories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="arts">
            <section classNameName="steps-container" id="steps-container">
              <h2 className="section-heads">On Demand Art works</h2>
              <div className="steps-container-content">
                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                    alt=""
                  />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Tailoring Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1892182257/photo/male-mechanic-working-on-car-engine-in-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=fHi1Fheh3-ByUS6MdlQXJgrN3InZq28Efhp_eeLp2Ks="
                    alt=""
                  />
                  <div className="main-category-content">
                    <div className="category-text">
                      <h3>Auto Repair</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU="
                    alt=""
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Electrical services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1440019701/photo/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=2048x2048&w=is&k=20&c=5m-JfCrZBaSidsv4kUo5my6keChi4e5wIsaF832h-88="
                    alt=""
                  />
                  <div className="main-category">
                    <div className="category-text">
                      <h3>Plumbing Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=2048x2048&w=is&k=20&c=yhcsWsT9BEO09L9Zhtbjo8BegTaQh69i-nRBeTH9SfY="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Catering Services</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Building/Construction</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1125625188/photo/girl-painting-on-canvas.jpg?s=612x612&w=is&k=20&c=5ZdMo5yfsCh-gkmOpD4Jo6UkYX0-ociq0uLEZz_VA5Y="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Arts</h3>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <img
                    src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                    alt=""
                  />
                  <div className="category-rows">
                    <div className="category-text">
                      <h3>Other Categories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

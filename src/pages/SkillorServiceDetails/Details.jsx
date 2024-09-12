import { Rating } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../../components/GeneralComponents/Navbar";
import slider1 from "../../assets/images/Neon_06.jpg";
import "../../pages/SkillorServiceDetails/Details.css";
import Artisandetailsfooter from "../../components/ArtisanDetails/Artisandetailsfooter";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid skill-content">
        <div className="row pt-3 pb-3">
          <div className="col-md-9 part1">
            <div className="row rows">
              <div className="col-md-11 d-flex align-items-center">
                <div className="skillimage">
                  <Carousel slide={false} className="image-slider">
                    <Carousel.Item>
                      <img
                        src="https://media.istockphoto.com/id/1469723771/photo/coffee-shop-senior-woman-manager-portrait-with-barista-feeling-happy-about-shop-success.jpg?s=2048x2048&w=is&k=20&c=6nFUMicgP2sX5bwQyCVn8AsHF809nbb6IqFWmbS_pmc="
                        className=" slider-images"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={slider1} className=" slider-images" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={slider1} className=" slider-images" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              <div className="dets">
                <div className="col-md-9 skillinfo">
                  <h1>Gen Doctor</h1>
                  <div className="d-flex align-items-center mb-4">
                    <Rating
                      // name={rating}
                      defaultValue={4.0}
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-bg">(3 reviews)</span>
                  </div>

                  <div className="pricesec d-flex align-items-center mb-3">
                    <p className="pricelarge">
                      ₦10,000 - ₦15,000 <span>(per hour)</span>
                    </p>
                  </div>
                  <div className="contact-artisan">
                    <p>Phone Number: <span>+(234) 8135854955</span></p>
                    <p>Whatsapp Contact: <span>08135854955</span></p>
                    <p>Instagram Handle: <span>GEn_DocTOR</span></p>
                  </div>
                  <Link to="/paymentpage"><button className="btn">Pay for services <RiSecurePaymentLine /></button></Link>
                  <p className="text-bg des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore excepturi quibusdam alias magni ipsam, perspiciatis
                    necessitatibus amet unde libero cum quo doloremque error et
                    soluta, non tempora, eius iste consectetur.
                  </p>
                </div>

                <div className="col-md-9 skillinfo rateandcomment">
                  <h4>Rating and Comments</h4>

                  <div className="rate-artisan">
                  <h4>Rate Artisan</h4>
                  <div className=" d-flex align-items-center mb-3 stars">
                    <p><Rating defaultValue={0} /></p>
                  </div>
                  </div>

                  <div className="comments-section">
                    <form>
                    <label>What was your experience with this artisan?</label>
                    <textarea placeholder="Leave a comment..." required></textarea>
                    <button type="submit" className="btn">Submit</button>
                    </form>
                    
                  </div>

                
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 part2"></div>
        </div>
      </div>
      <Artisandetailsfooter />
    </>
  );
};

export default Details;

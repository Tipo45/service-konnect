import { Rating } from "@mui/material";
import Navbar from "../../components/GeneralComponents/Navbar";
import "../../pages/SkillorServiceDetails/Details.css";
import Artisandetailsfooter from "../../components/ArtisanDetails/Artisandetailsfooter";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { reviews } from "../../lib/pocketbase";
import { useUserData } from "../../hooks/useUserDate";
// import { useArtisanData } from "../../hooks/useArtisanData";
import artisanimage from "../../assets/images/image10.webp"

const Details = () => {
  // const {info} =useArtisanData()
  const {data} = useUserData()
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");

  async function handleSubmit(e){
    if(data !== undefined){
      e.preventDefault();
      reviews(review, rate);
    }
    window.location.reload();
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid skill-content">
        <div className="row pt-3 pb-3">
          <div className="col-md-9 part1">
            <div className="row rows">
              <div className="col-md-11 d-flex align-items-center">
                <div className="skillimage">
                  <img src={artisanimage} alt="artisan image" loading="lazy" />
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
                    ₦15,000 <span>(per hour)</span><span><i>slightly negotiable</i></span>
                    </p>
                  </div>
                  <div className="contact-artisan">
                    <p>
                      Phone Number: <span>+(234) 8135854955</span>
                    </p>
                    <p>
                      Whatsapp Contact: <span>08135854955</span>
                    </p>
                    <p>
                      Instagram Handle: <span>GEn_DocTOR</span>
                    </p>
                  </div>
                  <Link to="/paymentpage">
                    <button className="btn">
                      Pay for services <RiSecurePaymentLine />
                    </button>
                  </Link>
                  <p className="text-bg des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore excepturi quibusdam alias magni ipsam, perspiciatis
                    necessitatibus amet unde libero cum quo doloremque error et
                    soluta, non tempora, eius iste consectetur.
                  </p>
                </div>

                <div className="col-md-9 skillinfo rateandcomment">
                  <h4>Rating and Comments</h4>

                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="rate-artisan">
                      <h4>Rate Artisan</h4>
                      <div className=" d-flex align-items-center mb-3 stars">
                        <p>
                          <Rating
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="comments-section">
                      <label>What was your experience with this artisan?</label>
                      <textarea
                        placeholder="Leave a comment..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                      ></textarea>

                      <button type="submit" className="btn">
                        Submit
                      </button>
                    </div>
                  </form>
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
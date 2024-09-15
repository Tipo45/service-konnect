import Footer from "../../components/GeneralComponents/Footer";
import Navbar from "../../components/GeneralComponents/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "../../pages/HomePage/Homepage.css";
import slider1 from "../../assets/images/image7.webp";
import slider2 from "../../assets/images/image1.webp";
import slider3 from "../../assets/images/image5.webp";
import Home from "../../components/Home/Home";

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
                <h4 className="no-deco">Best of the Best</h4>
                <p>Get connected with skilled craftsmen</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={slider2}
                alt="slider2"
                className="slider-image"
              />
              <Carousel.Caption>
                <h4 className="no-deco">Our Services are top notch</h4>
                <p>We boast of several skilled and seasoned service renders</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={slider3}
                alt="slider3"
                className="slider-image"
              />
              <Carousel.Caption>
                <h4 className="no-deco">Register to get started</h4>
                <p>
                  Don`t miss out on this opportunity to become a listed artisan
                  in our database!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Home />
        
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

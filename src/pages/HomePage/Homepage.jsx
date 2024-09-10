import Footer from "../../components/GeneralComponents/Footer";
import Navbar from "../../components/GeneralComponents/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "../../pages/HomePage/Homepage.css";
import slider1 from "../../assets/images/Neon_06.jpg";
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
                <h3 className="no-deco">Best of the Best</h3>
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
                <h3 className="no-deco">Our Services are top notch</h3>
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
                <h3 className="no-deco">Register to get started</h3>
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

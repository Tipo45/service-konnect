import { FaArrowLeft } from "react-icons/fa";
import "../../components/ArtisanUserProfile/Artisanreg.css";

export default function ThirdStep() {
  return (
    <>
      <div className="container">
        <h1>Artisan Registration</h1>
        <form>
          <h3>Contact Information</h3>
          <div>
            <div className="artisan-number">
              <div><label htmlFor="number">
                Phone Number <span className="text-danger">*</span>
              </label></div>
              <input
                type="text"
                name="number"
                placeholder="Enter your phone number"
                maxLength={11}
                required
              />
            </div>

            <div className="artisan-number">
              <div><label htmlFor="number">Additional Phone Number </label></div>
              <input
                type="text"
                name="number"
                placeholder="Enter your phone number"
                maxLength={11}
                required
              />
            </div>

            <div className="socials">
              <p>Social Media (Optional)</p>
              <div className="artisan-whatsapp">
                <div><label htmlFor="whatsapp">Whatsapp Contact</label></div>
                <input
                  type="text"
                  name="whatsapp_number"
                  placeholder="Enter whatsapp number"
                  maxLength={11}
                />
              </div>

              <div className="artisan-insta-handle">
                <div><label htmlFor="instagram">Instagram Handle</label></div>
                <input
                  type="text"
                  name="insta_handle"
                  placeholder="Enter instagram handle"
                />
              </div>
            </div>

            <div className="container buttons">
              <button type="submit" className="button">
                Prev <FaArrowLeft />
              </button>
              <button type="submit" className="button">
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

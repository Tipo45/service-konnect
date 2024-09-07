import { FaArrowLeft} from "react-icons/fa";
import "../../components/ArtisanUserProfile/Artisanreg.css";

export default function ThirdStep() {
  return (
    <>
      <div className="container">
        <h1>Contact Information</h1>
        <div>

            <div className="artisan-number">
                <label htmlFor="number">Phone Number <span className="text-danger">*</span></label>
                <input type="text" name="number" placeholder="Enter your phone number" maxLength={11} required />
            </div>

            <div className="artisan-number">
                <label htmlFor="number">Additional Phone Number </label>
                <input type="text" name="number" placeholder="Enter your phone number" maxLength={11} required />
            </div>

            <div className="socials">
                <p>Social Media (Optional)</p>
                <div className="artisan-whatsapp">
                    <label htmlFor="whatsapp">
                        Whatsapp COntact
                    </label>
                    <input type="text" name="whatsapp_number" placeholder="Enter whatsapp number" />
                </div>

                <div className="artisan-insta-handle">
                    <label htmlFor="instagram">Instagram Handle</label>
                    <input type="text" name="insta_handle" placeholder="Enter instagram handle" />
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
      </div>
    </>
  );
}

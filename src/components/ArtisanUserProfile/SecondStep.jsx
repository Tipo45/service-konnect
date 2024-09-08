import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dropdown from "./Dropdown";
import "../../components/ArtisanUserProfile/Artisanreg.css";

export default function SecondStep() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="container second-form">
      <h1>Artisan Registartion</h1>
        <form onSubmit>
          <h3>Skill Information</h3>
          <div className="artisan-category">
            <h4>
              Select Category <span className="text-danger">*</span>
            </h4>
            <Dropdown selected={selected} setSelected={setSelected} />
          </div>

          <div className="artisan-description">
            <h4>
              Description <span className="text-danger">*</span>
            </h4>
            <textarea placeholder="Describe what you do" required></textarea>
          </div>

          <div className="artisan-address">
            <h4>
              Address <span className="text-danger">*</span>
            </h4>
            <input
              type="text"
              name="address"
              placeholder="Where do you stay"
              required
            />
          </div>

          <div className="artisan-image">
            <h4>
              Add Image <span className="text-danger">*</span>
            </h4>
            <p>
              Not more than <span>5MB</span>
            </p>
            <input type="file" />
          </div>
          <div className="container buttons">
            <button type="submit" className="button">
              Prev <FaArrowLeft />
            </button>
            <button type="submit" className="button">
              Next <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

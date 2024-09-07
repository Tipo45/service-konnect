import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dropdown from "./Dropdown";
import "../../components/ArtisanUserProfile/Artisanreg.css";

export default function SecondStep() {

  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="container">
        <h1>Skill Information</h1>
        <div>
            <div>
              <h3>Select Category <span className="text-danger">*</span></h3>
              <Dropdown selected={selected} setSelected={setSelected} /></div>

            <div className="artisan-description">
              <label htmlFor="description">Description <span className="text-danger">*</span></label>
              <textarea placeholder="Describe what you do" required></textarea>
            </div>

            <div className="artisan-address">
              <label htmlFor="address">Address <span className="text-danger">*</span></label>
              <input type="text" name="address" placeholder="Where do you stay" required />
            </div>

            <div className="artisan-image">
              <label htmlFor="image">Add Image <span className="text-danger">*</span></label>
              <p>Not more than <span>5MB</span></p>
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
        </div>
        
      </div>
    </>
  );
}

import { useState } from "react";
import "../../components/ArtisanUserProfile/ArtisanPortfolio.css";
import Dropdown from "./Dropdown";
import { update_artisan } from "../../lib/pocketbase";
import { useNavigate } from "react-router-dom";

const Artisanportfolio = () => {
    
    const category = useState("");
  const [nameofartisan, setNameOfArtisan] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [additionalphonenumber, setAdditionalPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [whatsappnumber, setWhatsappNumber] = useState("");
  const [instahandle, setInstaHandle] = useState("");
  const [description, setDesription] = useState("");
  const [error, setError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phonenumberError, setPhoneNumberError] = useState("");
  const [additionalphonenumberError, setAdditionalPhoneNumberError] =
    useState("");
  const [nameofartisanError, setNameOfArtisanError] = useState("");
  const [whatsappnumberError, setWhatsappNumberError] = useState("");
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let final_result;

    if (nameofartisan === "") {
      setNameOfArtisanError("required");
      setLoading(false);
      return;
    } else {
      setNameOfArtisanError("");
    }

    if (address === "") {
      setAddressError("required");
      setLoading(false);
      return;
    } else {
      setAddressError("");
    }

    if (phonenumber === "") {
      setPhoneNumberError("required");
      setLoading(false);
      return;
    } else {
      setPhoneNumberError("");
    }

    if (!selected) {
      setError("please select a category");
      setLoading(false);
      return;
    } else {
      setError("");
    }

    if (description === "") {
      setDescriptionError("required");
      setLoading(false);
      return;
    } else if (description.length < 20) {
      setDescriptionError("too short");
      setLoading(false);
      return;
    } else {
      setDescriptionError("");
    }

    if (additionalphonenumber.length > 1 && additionalphonenumber.length < 11) {
      setAdditionalPhoneNumberError("too short");
      setLoading(false);
      return;
    } else {
      setAdditionalPhoneNumberError("");
    }

    if (whatsappnumber.length > 1 && whatsappnumber.length < 11) {
      setWhatsappNumberError("incomplete");
      setLoading(false);
      return;
    } else {
      setWhatsappNumberError("");
    }

    if(!nameofartisanError && !addressError && !phonenumberError && !additionalphonenumberError && !descriptionError && !whatsappnumberError && !error) {
        try {
            const result = await update_artisan(
              description,
              address,
              nameofartisan,
              phonenumber,
              additionalphonenumber,
              whatsappnumber,
              instahandle,
              category
            );
            final_result = result;
          } catch (error) {
            console.log(error);
            setLoading(false);
            return;
          }

          if (final_result.record) {
            navigate("/artisan/artisanaccountinformation");
          }
          
    }
    setLoading(false);

  };

  return (
    <>
      {loading ? (
        <h4>Loading, please wait...</h4>
      ) : (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="artisanaccsettings">
              <h1 className="mainhead1">Update Skill Information</h1>

              <div className="form">

              <div className='form-group'>
                            <label htmlFor='name'>First Name <span className="text-danger">*</span></label>
                            <input type='text' maxLength="15" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Last Name <span className="text-danger">*</span></label>
                            <input type='text' maxLength="15" />
                        </div>

                <div className="form-group">
                  <label htmlFor="name">
                    Name of Business <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={nameofartisan}
                    onChange={(e) => setNameOfArtisan(e.target.value)}
                  />
                  {nameofartisanError.length === 0 ? null : (
                    <div className="error-message">{nameofartisanError}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="name">
                    Location <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {addressError.length === 0 ? null : (
                    <div className="error-message">{addressError}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone/Mobile <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength={11}
                  />
                  {phonenumberError.length === 0 ? null : (
                    <div className="error-message">{phonenumberError}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Additional Phone Number</label>
                  <input
                    type="text"
                    value={additionalphonenumber}
                    onChange={(e) => setAdditionalPhoneNumber(e.target.value)}
                    maxLength={11}
                  />
                  {additionalphonenumberError.length === 0 ? null : (
                    <div className="error-message">
                      {additionalphonenumberError}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="category">
                    Category <span className="text-danger">*</span>
                  </label>
                  <Dropdown selected={selected} setSelected={setSelected} />
                  {error.length === 0 ? null : (
                    <div className="error-message">{error}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="textarea"
                    value={description}
                    onChange={(e) => setDesription(e.target.value)}
                    className="description"
                  ></textarea>
                  {descriptionError.length === 0 ? null : (
                    <div className="error-message">{descriptionError}</div>
                  )}
                </div>

                <div className="form-group">
                  <h5>Social Media Contact (optional)</h5>
                  <label htmlFor="whatsapp-no">Whatsapp Number</label>
                  <input
                    type="text"
                    name="whatsapp-number"
                    value={whatsappnumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    maxLength={11}
                  />
                  {whatsappnumberError.length === 0 ? null : (
                    <div className="error-message">{whatsappnumberError}</div>
                  )}
                  <label htmlFor="insta-name">Instagram Handle</label>
                  <input
                    type="text"
                    value={instahandle}
                    onChange={(e) => setInstaHandle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="images">
                    Add Images <span className="text-danger">*</span>
                  </label>
                  <input type="file" id="artisan_images" />
                </div>
              </div>

              <button type="submit" className="btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Artisanportfolio;

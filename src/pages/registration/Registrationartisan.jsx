// import FirstStep from "../../components/ArtisanUserProfile/FirstStep";
import SecondStep from "../../components/ArtisanUserProfile/SecondStep";
import ThirdStep from "../../components/ArtisanUserProfile/ThirdStep";
import "../../pages/registration/Registrationartisan.css";

const Registrationartisan = () => {
  return (
    <>
      <div className="contain">
      <h1>Artisan Registration</h1>
      
      <div><SecondStep /></div>
      {/* <div><ThirdStep /></div> */}
      
        {/* <FirstStep /> */}
      </div>
    </>
  );
};

export default Registrationartisan;

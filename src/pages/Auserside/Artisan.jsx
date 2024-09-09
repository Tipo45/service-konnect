import Navbar from "../../components/GeneralComponents/Navbar";
import Footer from "../../components/GeneralComponents/Footer";
import "../Auserside/Artisan.css";
import { useParams } from "react-router";
import Artisanportfolio from "../../components/ArtisanUserProfile/Artisanportfolio";
import Artisansidebar from "../../components/ArtisanUserProfile/Artisansidebar";
import Artisanaccsettings from "../../components/ArtisanUserProfile/Artisanaccsettings";
import Artisanaddress from "../../components/ArtisanUserProfile/Artisanaddress";
import Artisanchangepassword from "../../components/ArtisanUserProfile/artisanchangepassword";
import Artisanaccinfo from "../../components/ArtisanUserProfile/Artisanaccinfo";

const Artisan = () => {
  const { activepage } = useParams();

  return (
    <>
      <Navbar />
      <div className="artisanprofile">
        <div className="artisanprofilein">
          <div className="lefts">
            <Artisansidebar activepage={activepage} />
          </div>
          <div className="rights">
            {/* Welcome User Steven */}
            {activepage === "artisanaccountinformation" && <Artisanaccinfo />}
            {activepage === "artisanaccountsettings" && <Artisanaccsettings />}
            {activepage === "artisanchangepassword" && 
              <Artisanchangepassword />
            }
            {activepage === "artisanportfolio" && <Artisanportfolio />}
            {activepage === "artisanaddress" && <Artisanaddress />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artisan;

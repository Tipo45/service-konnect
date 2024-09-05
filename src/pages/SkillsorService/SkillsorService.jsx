import React from "react";
import { useParams } from "react-router";
import Footer from "../../components/GeneralComponents/Footer";
import Navbar from "../../components/GeneralComponents/Navbar";
import Art from "../../components/Skillorproducts/Art";
import Autotechnicians from "../../components/Skillorproducts/Autotechnicians";
import Buildersandconstructors from "../../components/Skillorproducts/Builder&constructors";
import Caterers from "../../components/Skillorproducts/Caterers";
import Electricians from "../../components/Skillorproducts/Electricians";
import Otherservices from "../../components/Skillorproducts/Otherservices";
import Plumbers from "../../components/Skillorproducts/Plumbers";
import Tailors from "../../components/Skillorproducts/Tailors";
import Skillorproductsidebar from "../../components/Skillorproducts/Skillorproductsidebar";
import "../SkillsorService/SkillsorService.css";

const SkillsorService = () => {
  const { activepage } = useParams();

  return (
    <>
      <div>
        <Navbar />
        <div className="search-bar">
          <input type="search" placeholder="Search..." />
        </div>
        <div className="full-content">
          <div className="full-contentin">
          <div className="left-side">
            <Skillorproductsidebar />
          </div>
          <div className="right-side">
            {activepage === "tailors" && <Tailors />}
            {activepage === "autotechnicians" && <Autotechnicians />}
            {activepage === "electricians" && <Electricians />}
            {activepage === "plumbers" && <Plumbers />}
            {activepage === "caterers" && <Caterers />}
            {activepage === "buildersandconstructors" && <Buildersandconstructors />}
            {activepage === "arts" && <Art />}
            {activepage === "otherservices" && <Otherservices />}
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SkillsorService;

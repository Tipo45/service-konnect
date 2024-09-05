import React from "react";
import "../../pages/About/About.css";
import Navbar from "../../components/GeneralComponents/Navbar";
import Footer from "../../components/GeneralComponents/Footer";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="head">
          <h2 className="about-head">About</h2>
        </div>
        <div className="content">
          <p>
            The motivation behind undertaking this project stems from the
            growing need to streamline the connection between artisans and
            clients in an increasingly digital world. Traditional methods of
            finding skilled artisans, such as word-of-mouth or local
            advertisements, are often inefficient and time-consuming, limiting
            artisans' ability to reach a broader audience and clients' ability
            to access high-quality services. By developing a progressive web
            application (PWA) that serves as a centralized platform for artisans
            and clients, this project aims to modernize and simplify the way
            these interactions occur. The PWA will provide artisans with a
            platform to showcase their skills, manage their schedules, and
            receive payments, while offering clients a convenient way to search
            for, contact, and hire artisans.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

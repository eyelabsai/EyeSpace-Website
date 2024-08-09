import React from "react";
import PropTypes from "prop-types";
import './AboutUs.css';
import Founders from "./Founders/Founders";
import DevelopersBoard from "./DevelopersBoard/DevelopersBoard";
import GM from "../../assets/Gurpal-Matthew.png"

const AboutUs = ({ name }) => {
  return (
    <div>
      <div className="aboutus-page">
        <div className="aboutus-header">
          <div className="aboutus-header-text">
            <div>
              EYESPACE is a technology and consulting firm co-owned and managed by Matt Hirabayashi MD and Gurpal Virdi MD. Together, they lead a team of engineers to develop and deliver AI-based solutions to the field of ophthalmology. The eyeSpace iOS Application is a cross-platform ophthalmology utility, social media, networking service that provides users with a wide array of eye care tools to optimize and track their surgical outcomes.
            </div>
            <div>
              The founders have extensive experience with ocular surgery, technological development, scaling products, overseeing projects, and managing teams.
            </div>
            <div>
              EYESPACE is a private entity with no financial relationship to any of the manufacturers whose data is archived. Neither of the founders have conflicts of interest.
            </div>
          </div>
          <img className="aboutus-header-img" src={GM} alt="Gurpal-Matthew" />
        </div>
        <div className="aboutus-title">
          <strong>EYESPACE Mission</strong>
        </div>
        <div className="aboutus-eyespace-content">
          Our mission is to empower ophthalmologists and surgeons with the tools they need to optimize their outcomes while providing an inclusive space to discuss topics with colleagues, mentors, and mentees. Our mission is impact: providing novel solutions to positively change the field of ophthalmology while positively changing outcomes and the lives of patients.
        </div>
        <div className="aboutus-title">
          <strong>Leadership</strong>
        </div>
        <Founders />
        <DevelopersBoard />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  name: PropTypes.string,
};

export default AboutUs;
  
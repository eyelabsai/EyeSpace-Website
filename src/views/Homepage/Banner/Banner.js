import React from "react";
import PropTypes from "prop-types"; 
import './Banner.css'; 
import iphone from "../../../assets/Home Page Graphic.svg";

const Banner = ({ name }) => {
  return (
    <div className="banner">
      <div className="left">
        <div className="banner-title">
          <strong>Bimini AI Ophthalmology</strong>
        </div>
        <div className="desc">
          <p>
            Welcome to the future of integrated ophthalmic surgery. Bimini AI is a technology company 
            and consulting firm that specializes in delivering innovative and AI-based solutions
            to problems facing surgeons and patients to improve outcomes and positively impact the field of ophthalmology.
          </p>
        </div>
      </div>
      <div className="right">
        <img src={iphone} width="575px" alt="phone" />
      </div>
    </div>
  );
};

Banner.propTypes = {
  name: PropTypes.string,
};

export default Banner;

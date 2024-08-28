import React from "react";
import PropTypes from "prop-types";
import './Card.css';
import Card1 from '../../../../assets/eyeSpace Logo-2.png';
import Card2 from '../../../../assets/blog5.svg';
import Card3 from '../../../../assets/OptiCalc SVG.svg';
import Card4 from '../../../../assets/blog4.svg';
import Appstore from '../../../../assets/download-on-appstore.png';

const Card = ({ name }) => {
  return (
    <div className="current_tools">
      <br /><br />
      <h1 style={{ textAlign: 'center' }}>CURRENT TECHNOLOGY</h1>
      <div className="tool">
        <div className="card">
          <img className="homepage-card-img" src={Card1} alt="eyeSpace Logo" />
          <div className="detail">
            <div className="card-content">
              eyeSpace is a multi-platform ophthalmology utility grounded in the iOS app. It has multiple tools to assist 
              clinicians in optimizing patient outcomes. Download in the app store today or access the web-based tools under our TECHNOLOGY page.
            </div>
          </div>
          <a href="https://apps.apple.com/us/app/eye-space/id1626671895" target="_blank" rel="noopener noreferrer">
            <img className="homepage-appstore-img" src={Appstore} alt="Download On Appstore" />
          </a>
        </div>

        <div className="card">
          <img className="homepage-card-img" src={Card2} alt="VAULT Tool" />
          <div className="detail">
            <div className="card-content" id="card2">
              VAULT is an AI-driven tool to accurately predict postoperative vault of the EVO Visian ICL™ (Implanted Collamer® Lens). The goal is to 
              create an accurate, repeatable, and continuously improving machine-learning based tool for the prediction of post-operative ICL™ Vault using various imaging modalities (e.g., Ultrasound Biomicroscopy and Anterior Segment OCT). The models have been developed 
              and are trained with data from refractive surgery cases in the United States at a high-volume surgery center.
            </div>
          </div>
        </div>

        <div className="card">
          <img className="homepage-card-img" src={Card3} alt="OptiCalc Tool" />
          <div className="detail">
            <div className="card-content">
              OptiCalc is an AI-driven IOL formula that utilizes pre-operative imaging routinely obtained with biometry. These include the 
              OCT and topography images from the ZEISS IOLMaster® and Scheimpflug images from the OCULUS Pentacam®. This novel, image-driven approach provides additional benefits for machine learning models beyond simply feeding algorithms raw numbers. Important anatomical 
              relationships may greatly impact effective lens position and final refractive outcome.
            </div>
          </div>
        </div>

        <div className="card">
          <img className="homepage-card-img" src={Card4} alt="PERFECT Tool" />
          <div className="detail">
            <div className="card-content">
              PERFECT (Predicted Ectasia Risk From Evaluated Corneal Tomography) is an image-based machine learning project aiming to create an 
              accurate, repeatable, and continuously improving tool for the prediction of corneal ectasia development. This will assist clinicians in the diagnosis of 
              corneal ectasia as well as screening for refractive surgery candidates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;

import React from "react";
import PropTypes from "prop-types";
import './Card.css';
import Card1 from '../../../../assets/eyeSpace Logo-2.png'
import Card2 from '../../../../assets/blog5.svg'
import Card3 from '../../../../assets/OptiCalc SVG.svg'
import Card4 from '../../../../assets/blog4.svg'
import Card5 from '../../../../assets/transpose tool icon.svg';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    };

    render() {
        return (
            <div className="current_tools" style={{ backgroundColor: '#f0f0f0' }}>
                <div className="title"> CURRENT TECHNOLOGY</div>

                <div className="tool">
                    <div className="card">
                        <img className="card-img" src={Card1} alt="Card1 Logo" />
                        <div className="detail">
                            {/* <div className="card-title">IOL Reference</div> */}
                            <div className="card-content">
                            eyeSpace is a multi platform ophthalmology utility grounded in the iOS app. It has multiple tools to assist 
                            clinicians optimize patient outcomes. 
                            Download in the app store today or access the web-based tools under our TECHNOLOGY page.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Card2} alt="Card2 Logo" />
                        <div className="detail">
                            {/* <div className="card-title">Refractive Outcome Tracking</div> */}
                            <div className="card-content" id="card2">
                            VAULT is an AI-driven tool to accurately predict postoperative vault of the EVO Visian ICL™ (Implanted Collamer® Lens). The goal is to 
                            create an accurate, repeatable, and continuously improving machine-learning based tool for the prediction of post-operative ICL™ Vault using various imaging modalities (e.g., Ultrasound Biomicroscopy and Anterior Segment OCT). The models have been developed 
                            and are trained with data from refractive surgery cases in the United States at a high volume surgery center.
                            </div>
                        </div>
                    </div>

                    {/* <div className="card">
                        <img className="card-img" src={Card3} alt="Card3 Logo" />
                        <div className="detail">
                            <div className="card-title">eyeSpace Forum</div>
                            <div className="card-content">
                                Connect with colleagues, mentors, and mentees to discuss cases, gather wisdom, and gain support
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="tool">
                    <div className="card">
                        <img className="card-img" src={Card3} alt="Card4 Logo" />
                        <div className="detail">
                            {/* <div className="card-title">Sulcus Correction Calculator</div> */}
                            <div className="card-content">
                            OptiCalc is an AI-Driven IOL formula that utilizes pre-operative imaging routinely obtained with biometry. These include the 
                            OCT and topography images from the ZEISS IOLMaster® and Scheimpflug images from the OCULUS Pentacam®. This novel, image-driven approach provides additional benefits for machine learning models beyond simply feeding algorithms raw numbers. Important anatomical 
                            relationships may greatly impact effective lens position and final refractive outcome.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Card4} alt="Card5 Logo" />
                        <div className="detail">
                            {/* <div className="card-title">Transposition Tool</div> */}
                            <div className="card-content">
                            PERFECT (Predicted Ectasia Risk From Evaluated Corneal Tomography) is an image-based machine learning project aiming to create an 
                            accurate, repeatable, and continuously improving tool for the prediction of corneal ectasia development. This will assist clinicians in the diagnosis of 
                            corneal ectasia as well as screening for refractive surgery candidates.
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Button to link to the /Technology page */}
                {/* <div className="bottom-button">
                    <Link to="/Technology" style={{ textDecoration: 'none' }}>
                        <button className="contact-button">Learn More &gt;</button>
                    </Link>
                </div> */}
            </div>
        );
    }
}

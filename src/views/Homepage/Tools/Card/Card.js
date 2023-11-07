import React from "react";
import PropTypes from "prop-types";
import './Card.css';
import Card1 from '../../../../assets/card1.svg';
import Card2 from '../../../../assets/card2.svg';
import Card3 from '../../../../assets/card3.svg';
import Card4 from '../../../../assets/sulcus icon.svg';
import Card5 from '../../../../assets/transpose tool icon.svg';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    };

    render() {
        return (
            <div className="current_tools">
                <div className="title">Current Tools</div>

                <div className="tool">
                    <div className="card">
                        <img className="card-img" src={Card1} alt="Card1 Logo" />
                        <div className="detail">
                            <div className="card-title">IOL Reference</div>
                            <div className="card-content">
                                Browse the entire spectrum of current FDA approved IOLs and find the lens right for any case using a novel search function
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Card2} alt="Card2 Logo" />
                        <div className="detail">
                            <div className="card-title">Refractive Outcome Tracking</div>
                            <div className="card-content" id="card2">
                                This is a state of the art outcome tracking utility that analyzes your cataract cases to learn more about refractive outcomes, surgically induced astigmatism, and personalized A-constants
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Card3} alt="Card3 Logo" />
                        <div className="detail">
                            <div className="card-title">eyeSpace Forum</div>
                            <div className="card-content">
                                Connect with colleagues, mentors, and mentees to discuss cases, gather wisdom, and gain support
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tool">
                    <div className="card">
                        <img className="card-img" src={Card4} alt="Card4 Logo" />
                        <div className="detail">
                            <div className="card-title">Sulcus Correction Calculator</div>
                            <div className="card-content">
                                Quickly perform adjustments to select the correct IOL power when moving an IOL from the capsule to the sulcus
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={Card5} alt="Card5 Logo" />
                        <div className="detail">
                            <div className="card-title">Transposition Tool</div>
                            <div className="card-content">
                                Easily transpose between positive and negative cylinder
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Button to link to the /Technology page */}
                <div className="bottom-button">
                    <Link to="/Technology" style={{ textDecoration: 'none' }}>
                        <button className="contact-button">Learn More &gt;</button>
                    </Link>
                </div>
            </div>
        );
    }
}

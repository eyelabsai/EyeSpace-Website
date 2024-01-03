// FOR CHERRY :))
import React from "react";
import PropTypes from "prop-types"; 
import './Mission.css';
import { Link } from 'react-router-dom';
import instagram_logo from '../../../assets/instagramLogo.svg';
import twitter_logo from '../../../assets/twitter.svg';
import gmail_logo from '../../../assets/gmailLogo.svg';

export default class Mission extends React.Component { 
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
    <div id="mission-div">
      <div id = "mission-title">
        <strong>EYESPACE Mission</strong>
      </div>
      <div className = "mission-content">
        <p>Our mission is to empower ophthalmologists and surgeons with the
           tools they need to optimize their outcomes while providing an inclusive space to
            discuss topics with colleagues, mentors, and mentees. Our mission is impact: providing novel 
            solutions to positively change the field of ophthalmology while positively changing outcomes and the lives of patients.</p>
      </div>
      <div id = "btn">
        <Link to="/AboutUs" style={{textDecoration: 'none'}}><button>Learn More About Us</button></Link>
      </div>

      <div className="socials">
        <a href="https://twitter.com/EyeSpace_AI" target="_blank" rel="noopener noreferrer">
          <img className="homepage-socials-img" src={twitter_logo} alt="Twitter logo" />
        </a>
        <a href="https://www.instagram.com/eyespace.ai/" target="_blank" rel="noopener noreferrer">
          <img className="homepage-socials-img" src={instagram_logo} alt="Instagram logo" />
        </a>
        <a href="mailto:youremail@example.com">
          <img className="homepage-socials-img" src={gmail_logo} alt="Gmail logo" />
        </a>
      </div>
    </div>
    );
  }
}


// FOR CHERRY :))
import React from "react";
import PropTypes from "prop-types"; 
import './Mission.css';
import { Link } from 'react-router-dom';

export default class Mission extends React.Component { 
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
    <div id="mission-div">
      <div id = "title">
        Our Mission
      </div>
      <div id = "content">
        <p>Our mission is to empower ophthalmologists and surgeons with the tools they need to optimize their outcomes while providing an inclusive space to discuss topics with colleagues, mentors, and mentees</p>
      </div>
      <div id = "btn">
        <Link to="/AboutUs" style={{textDecoration: 'none'}}><button>Learn More About Us &gt; </button></Link>
      </div>
    </div>
    );
  }
}


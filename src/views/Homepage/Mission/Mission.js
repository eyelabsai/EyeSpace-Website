// FOR CHERRY :))
import React from "react";
import PropTypes from "prop-types"; 
import './Mission.css'; // replace "TestComponent" with your own component

export default class Mission extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() { // whatever is returned here will be the html that is rendered when this component is being used
    return (
    <div className="cards">
      {/** This is where your HTML goes. The only thing is that instead of class="" you do className="" for some reason */}
      <div id = "title">
        <h1>Our Mission</h1>
      </div>
      <div id = "content">
        <p>Our mission is to empower ophthalmologists and surgeons with the tools they need to optimize their outcomes while providing an inclusive space to discuss topics with colleagues, mentors, and mentees</p>
      </div>
      <div id = "btn">
        <button>Learn More About Us</button>
      </div>
    </div>
    );
  }
}


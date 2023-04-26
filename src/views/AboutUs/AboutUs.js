import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import './AboutUs.css'; // replace "TestComponent" with your own component

export default class AboutUs extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      <Header page="About Us"/>
      <h1>About Us</h1>
    </div>
    );
  }
}


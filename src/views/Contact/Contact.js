import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import './Contact.css'; 

export default class Contact extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      <Header page="Contact"/>
      <h1>Contact Us</h1>
    </div>
    );
  }
}


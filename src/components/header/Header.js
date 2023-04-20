import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import '../../assets/eyespaceLogo.svg';
// REMEMBER TO IMPORT CSS FILES

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  buttonsList = ["Home","About Us", "Contact", "Blogs"];
  // generates an array of div tags for the buttons
  




  render() {
    for (let i = 1 , i <= 4 , i++) {

    }

    return (
      <div className="navbar">
        <img src="../../assets/eyespaceLogo.svg" alt="EyeSpace Logo"/>
        <div className="buttons">
          <div className="button1">Home</div>
          <div className="button2">About Us</div>
          <div className="button3">Contact</div>
          <div className="button4">Blogs</div>
        </div>
      </div>
    );
  }
}
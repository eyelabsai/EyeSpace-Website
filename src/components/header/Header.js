import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/eyespaceLogo.svg';
// REMEMBER TO IMPORT CSS FILES

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  buttonsList = ["Home","About Us", "Contact", "Blogs"];


  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="EyeSpace Logo"/>
        <div className="buttons">
          {this.buttonsList.map((name)=> {
            return <div class="button">{name}</div>
          })}
        </div>
      </div>
    );
  }
}
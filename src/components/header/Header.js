import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/LOGO HORIZONTAL SVG.svg';
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  static propTypes = {
    page: PropTypes.string,
  };

  buttonsList = [
    // "Home", 
    "Technology", 
    "About Us", 
    "FocalPoint",
    "Contact", ];

  buttonsDict = {
    // "Home": "/",
    "Technology": "/Technology",
    "About Us": "/AboutUs",
    "FocalPoint": "/FocalPoint",
    "Contact": "/Contact",
  };

  render() {
    return (
      <div className="navbar">
        <div className="logo-div">
          {/* Make the logo a clickable link */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img className="logo-img-tag" src={logo} alt="EyeSpace Logo" />
          </Link>
        </div>
        <div className="buttons">
          {this.buttonsList.map((name) => {
            return (
              <div key={name}>
                <Link to={this.buttonsDict[name]} style={{ textDecoration: 'none' }}>
                  <div className="button" style={{ color: this.props.page === name ? '#FF6400' : '#48627E' }}>
                    {name}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <button className="login-button" onClick={this.f1}>Login/Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

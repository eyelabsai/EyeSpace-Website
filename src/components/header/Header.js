import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/eyespaceLogo.svg';
// REMEMBER TO IMPORT CSS FILES

export default class Button extends React.Component {
  static propTypes = {
    page: PropTypes.string,
  };
  
  f1 () {
    console.log("page is " + this.page);
  }

  buttonsList = ["Home","About Us", "Contact", "Blogs"];


  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="EyeSpace Logo"/>
        <div className="buttons">
          {this.buttonsList.map((name)=> {
            return <div className="button" style={{color: this.page === name ? 'orange' : 'black'}}>{name}</div>
          })}
        </div>
        <button className="login-button" onClick={this.f1}>Login/Register</button>
      </div>
    );
  }
}
import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/eyespaceLogo.svg';
import { Link } from 'react-router-dom';
// REMEMBER TO IMPORT CSS FILES

/**
 * Buttons information:
 * https://react-bootstrap.github.io/components/buttons/
 */

export default class Button extends React.Component {
  static propTypes = {
    page: PropTypes.string,
  };
  
  f1 () {
    console.log("page is " + this.props.page);
  }

  buttonsList = ["Home","About Us", "Contact", "Blogs"];
  buttonsDict = {"Home": "/", "About Us":"/AboutUs", "Contact":"/Contact", "Blogs":"/Blog"}; // maps the button names to the link to travel to


  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="EyeSpace Logo"/>
        <div className="buttons">
          {this.buttonsList.map((name)=> {
            return (
              <Link to={{buttonsDict[name]}}>
                <button className="button" style={{color: this.props.page === name ? '#FF6400' : '#48627E'}}>
                  {name}
                </button>
              </Link>
            )
          })}
        </div>
        <button className="login-button" onClick={this.f1}>Login/Register</button>
      </div>
    );
  }
}
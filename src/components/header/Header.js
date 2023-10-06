import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/eyespaceLogo.svg';
// import expansion_icon from '../../assets/menu_expansion_button.svg';
// import collapse_icon from '../../assets/x_icon.svg';
import { Link } from 'react-router-dom';
// import {useState, useEffect} from 'react';

export default class Button extends React.Component {
  static propTypes = {
    page: PropTypes.string,
  };
    
  // code for getting windows size
  // source: https://bobbyhadz.com/blog/react-get-window-width-height
  // getWindowSize = () => {
  //   const {innerWidth, innerHeight} = window;
  //   return {innerWidth, innerHeight};
  // };
  // [windowSize, setWindowSize] = useState(getWindowSize());
  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }
  //   window.addEventListener('resize', handleWindowResize);
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);


  buttonsList = ["Home","About Us", "Contact", "Blogs"];
  buttonsDict = {"Home": "/", "About Us":"/AboutUs", "Contact":"/Contact", "Blogs":"/Blogs"}; // maps the button names to the link to travel to

  f1 = () => {
    console.log("page is " + this.props.page);
  };


  // menuButtonState = {"expand": true, "collapse": false}; // true if the button should be displayed

  // set_button_state = () => {
  //   // flip the states
  //   this.menuButtonState.expand = !this.menuButtonState.expand;
  //   this.menuButtonState.collapse = !this.menuButtonState.collapse;
  //   console.log("set button state called");
  // };

  render() {
    return (
      <div className="navbar">
        <div className="logo-div"><img className="logo-img-tag" src={logo} alt="EyeSpace Logo"/></div>
        {/* <div className="menu-icon">
          <div className="expand" style={{display: (this.menuButtonState.expand) ? 'flex' : 'none'}}><button onClick={this.set_button_state}><img src={expansion_icon} alt="menu expand button"/></button></div>
          <div className="exit" style={{display: (this.menuButtonState.exit) ? 'flex' : 'none'}}><button onClick={this.set_button_state}><img src={collapse_icon} alt="menu exit button"/></button></div>
        </div> */}
        <div className="buttons">
          {this.buttonsList.map((name)=> {
            return (
              <div>
                <Link to={this.buttonsDict[name]} style={{textDecoration: 'none'}}>
                  <div className="button" style={{color: this.props.page === name ? '#FF6400' : '#48627E'}}>
                    {name}
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <div><Link to="/Login" style={{textDecoration: 'none'}}><button className="login-button" onClick={this.f1}>Login/Register</button></Link></div>
      </div>
    );
  }
}
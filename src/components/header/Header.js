import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/LOGO HORIZONTAL SVG.svg';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";

export default class Button extends React.Component {
  static propTypes = {
    page: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      userEmail : '',
      isUserLoggedIn: false,
    };
  }


  buttonsList = [
    // "Home", 
    "Technology", 
    "About Us", 
    "eXchange",
    "inSight",
    "Contact", ];

  buttonsDict = {
    // "Home": "/",
    "Technology": "/Technology",
    "About Us": "/AboutUs",
    "eXchange": "/Exchange",
    "inSight": "/Insight",
    "Contact": "/Contact",
  };

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isUserLoggedIn: true, userEmail: user.displayName });
      } else {
        this.setState({ isUserLoggedIn: false });
      }
    });
  }

  componentWillUnmount() {
    this.authListener(); // Unsubscribe from the listener when the component unmounts
  }

  getUserButtonContent() {
    if (this.state.isUserLoggedIn) {
      // Return custom content for logged-in user
      return this.state.userEmail; // Customize as needed
    } else {
      // Return content for guests
      return "Login/Register";
    }
  }

  getLoginNavigationPage() {
    if (this.state.isUserLoggedIn) {
      // Return custom content for logged-in user
      return "/UserProfile"; // Customize as needed
    } else {
      // Return content for guests
      return "/Login";
    }
  }

  render() {
    return (
      
      <>
      {/* <div className="navbar">
        <div className="logo-div">
      
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
          <Link to={this.getLoginNavigationPage()} style={{ textDecoration: 'none' }}>
            <button className="login-button" onClick={this.f1}>
            {this.getUserButtonContent()}
            </button>
          </Link>
        </div>
      </div> */}
        <header>
      <nav>
        <ul>
          <li class="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img className="logo" src={logo} alt="EyeSpace Logo" />
          </Link>
          </li>
          <li class="navigationLinks">
            <ul>
            {this.buttonsList.map((name) => {
            return (
              <li>
                <div key={name}>
                <Link to={this.buttonsDict[name]} style={{ textDecoration: 'none' }}>
                  <div className="button" style={{ color: this.props.page === name ? '#FF6400' : '#48627E' }}>
                    {name}
                  </div>
                </Link>
              </div>
              </li>
            );
          })}
            </ul>
          </li>
          <li class="login">
            <Link to={this.getLoginNavigationPage()} style={{ textDecoration: 'none' }}>
            <div className="login-button" onClick={this.f1}>
            {this.getUserButtonContent()}
            </div>
          </Link></li>
        </ul>
      </nav>
    </header>
      </>
    );
  }
}

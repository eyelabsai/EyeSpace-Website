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
    


  buttonsList = ["Home","About Us", "Contact", "Blogs"];
  buttonsDict = {"Home": "/", "About Us":"/AboutUs", "Contact":"/Contact", "Blogs":"/Blogs"}; // maps the button names to the link to travel to

  f1 = () => {
    console.log("page is " + this.props.page);
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo-div"><img src={logo} alt="EyeSpace Logo"/></div>
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
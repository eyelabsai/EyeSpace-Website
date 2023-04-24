import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/eyespaceLogo.svg'; // import the svg file (which you'll need to add yourself, more info on this in footer.js)
// REMEMBER TO IMPORT CSS FILES

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  buttonsList = ["Home","About Us", "Contact", "Blogs"];


  render() {
    return (
      <div className="navbar">
        {/**The next line is how you would render the image on the website. Whichever name you use in your import statement will be put into src, and then give an alternate name for in case the picture doesn't show up correctly */}
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
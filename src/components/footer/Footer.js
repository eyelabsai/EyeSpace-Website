// For Felicity: this will be where you code your HTML for the footer

// To start the website server: type "npm start" into your terminal
            // Once it gives the message "webpack compiled successfully", go to your browser (Chrome, Safari, etc) and type "localhost:3000"
            // If the website loads successfully, you should be able to see your progress on the Footer component
            // If you want to display a different component, go to "src/views/Homepage/Homepage.js" to edit which component you want to render


// Random Tips
// 1. for information on how to display pictures, on a website, look into "src/components/header/Header.js". I've added comments there to tell you what to do

// How to get the svg data
/**
1. look into "src/components/header/Header.js" for guidance on how to display pictures on a website
    a. First we need to get the svg data from the image and make it a .svg file under "src/assets"
    b. Go to figma and click the image you want to extract the data from. 
    c. Once only the image is selected, go to the outline on the left and look at whichever component is highlighted.
    d. Right click on that component, click "Copy/Paste as" and then "Copy as SVG".
    e. Create a new file under "src/assets" <picture-name>.svg, and then Paste everything into the file. Remember to save!
    f. Coming back to Footer.js, remember to import the svg file at the top (look into Header.js as to how to do that)
    e. Inside the html, insert an img tag and use your svg file as the source. (also look into Header.js for more info)
 */


import React from "react";
import PropTypes from "prop-types";
import './Footer.css';
import eyelab_logo from '../../assets/eyelabsLogo.svg';
import eyeflymd_logo from '../../assets/EyeFlyMDLogo.svg';
import instagram_logo from '../../assets/instagramLogo.svg';
import fb_logo from '../../assets/facebookLogo.svg';
import gmail_logo from '../../assets/gmailLogo.svg';

export default class Footer extends React.Component {
    // you can ignore this for now, but essentially this is for passing in information from the parent component
                                
    static propTypes = {
      name: PropTypes.string,
    };
ß
  
  // This is where you'll be coding the HTML. Look into "src/components/header/Header.js" for an ex as to how html should be coded here
  // For now, don't use any {} inside the return(). Anything inside {} will be treated as javascript, not html
    render() {
      return (
        <div className="footer">
          {/** start your html here! (delete this whole line, including the {}) */}
          <div className="logos">
            <img className="footer-logo-img-tag" src={eyelab_logo} alt="Eyelab logo"/>

          <div>
            <img className="footer-logo-img-tag" src={eyeflymd_logo} alt="EyeFlyMD logo"/>
          </div>
        </div>

          <div className="socials">
            <img className="socials-img-tag" src={instagram_logo} alt="Instagram logo"/>
            <img className="socials-img-tag" src={fb_logo} alt="Facebook logo"/>
            <img className="socials-img-tag" src={gmail_logo} alt="Gmail logo"/>
          </div>
          <div className="copyrightText">
            Copyright 2022 Matt Hirabayashi MD | Gurpal Virdi MD
          </div>
        </div>
      );
    }
  }


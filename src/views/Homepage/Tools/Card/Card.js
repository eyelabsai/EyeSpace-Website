// For Felicity: this will be where you code your HTML for a singular card under "Current Tools"
// The current tools component has 3 cards, you can just code 1 here and then use the component in Tools.js 3 times
// for now, hardcode the card "IOL Reference" with HTML and CSS, and I'll let you know how you can reuse the component

// To start the website server: type "npm start" into your terminal
            // Once it gives the message "webpack compiled successfully", go to your browser (Chrome, Safari, etc) and type "localhost:3000"
            // If the website loads successfully, you should be able to see your progress on the Card component
            // If you want to display a different component, go to "src/App.js" to edit which component you want to render


import React from "react";
import PropTypes from "prop-types";
import './Card.css';
import Card1 from '../../../../assets/card1.svg'
import Card2 from '../../../../assets/card2.svg'
import Card3 from '../../../../assets/card3.svg'

export default class Card extends React.Component {
    // you can ignore this for now, but essentially this is for passing in information from the parent component (in this case, "Tools" or "App")
    
    static propTypes = {
      name: PropTypes.string,
    };

    img = [Card1, Card2, Card3];
    titleList = ["IOL Reference", "Refractive Outcome Tracking", "eyeSpace Forum"];
    content = ["Browse the entire spectrum of current FDA approved IOLs and find the lens right for any case using a novel search function", 
              "This is a state of the art outcome tracking utility that analyzes your cataract cases to learn more about refractive outcomes, surgically induced astigmatism, and personalized A-constants",
              "Connect with colleagues, mentors, and mentees to discuss cases, gather wisdom, and gain support"]
  
  // This is where you'll be coding the HTML. Look into "src/components/header/Header.js" for an ex as to how html should be coded here
  // For now, don't use any {} inside the return(). Anything inside {} will be treated as javascript, not html
    render() {
      return (
        <div className = "current_tools">

          <div class="title">Current Tools</div>

            <div class = "tool">

              <div class="card">
                <img class="card-img" src={Card1} alt="Card1 Logo"/>
                <div class="detail">
                  <div class="card-title">IOL Reference</div>
                  <div class="card-content">Browse the entire spectrum of current FDA approved IOLs and find the lens right for any case using a novel search function</div>
                </div>
              </div>

              <div class="card">
                <img class="card-img" src={Card2} alt="Card2 Logo"/>
                <div class="detail">
                  <div class="card-title">Refractive Outcome Tracking</div>
                  <div class="card-content" id = "card2">This is a state of the art outcome tracking utility that analyzes your cataract cases to learn more about refractive outcomes, surgically induced astigmatism, and personalized A-constants</div>
                </div>
              </div>

              <div class="card">
                <img class="card-img" src={Card3} alt="Card3 Logo"/>
                <div class="detail">
                  <div class="card-title">eyeSpace Forum</div>
                  <div class="card-content">Connect with colleagues, mentors, and mentees to discuss cases, gather wisdom, and gain support</div>
              </div>

            </div>

          </div>
          
        </div>
      );
    }
  }


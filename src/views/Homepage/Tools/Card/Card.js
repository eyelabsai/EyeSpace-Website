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

export default class Card extends React.Component {
    // you can ignore this for now, but essentially this is for passing in information from the parent component (in this case, "Tools" or "App")
    
    static propTypes = {
      name: PropTypes.string,
    };

  
  // This is where you'll be coding the HTML. Look into "src/components/header/Header.js" for an ex as to how html should be coded here
  // For now, don't use any {} inside the return(). Anything inside {} will be treated as javascript, not html
    render() {
      return (
        <div className="cards">
          Card Component renders correctly! (Delete this once you start working)
          {/** start your html here! (delete this whole line, including the {}) */}
        </div>
      );
    }
  }


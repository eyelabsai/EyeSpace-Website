import React from "react";
import PropTypes from "prop-types"; 
import './Card.css';

// look into how to pass in images (whether as paths, or the actual image)
// info: https://stackoverflow.com/questions/52999377/react-passing-import-name-as-prop-and-adding-to-image-src
// might have problems with the import statements

export default class Card extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string, // name of the person on the card
    title: PropTypes.string, // title of the person (MD, PHD, etc)
    text: PropTypes.string, // person's description
    twitter: PropTypes.string, // twitter link (optional)
    linkedin: PropTypes.string, // linkedin link (optional)
    youtube: PropTypes.string, // youtube link (optional)
    picture: PropTypes.string, // picture link
  };

  render() {
    return (
    <div className="advisory-card">
      {/** start your html here! (delete this whole line, including the {}) */}
      
    </div>
    );
  }
}


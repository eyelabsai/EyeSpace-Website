import React from "react";
import PropTypes from "prop-types"; 
import './Card.css';

export default class Card extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="advisory-card">
      {/** start your html here! (delete this whole line, including the {}) */}
      
    </div>
    );
  }
}


import React from "react";
import PropTypes from "prop-types"; 
import './AdvisoryBoard.css';
import Card from './Card/Card';

export default class AdvisoryBoard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return ( 
    // maybe add a prop for id (if we need to distinguish btwn different cards)
    <div className="cards">
      <Card/>
    </div>
    );
  }
}


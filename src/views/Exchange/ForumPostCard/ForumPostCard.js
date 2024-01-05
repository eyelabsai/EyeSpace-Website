import React from "react";
import PropTypes from "prop-types"; 
import './ForumPostCard.css';

export default class FounderCardSmall extends React.Component {
  static propTypes = { // define any props here
    title: PropTypes.string, // title of the person (MD, PHD, etc)
    text: PropTypes.string, // title of the person (MD, PHD, etc)
  };

  render() {
    return (
    <div className="forum-postcard">
        <div>{this.props.title}</div>
        <div>{this.props.text}</div>
    </div>
    );
  }
}


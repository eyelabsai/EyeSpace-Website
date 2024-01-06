import React from "react";
import PropTypes from "prop-types"; 
import './ForumPostCard.css';
import Person_Icon from '../../../assets/Person_Icon.png'

export default class FounderCardSmall extends React.Component {
  static propTypes = { // define any props here
    didLike: PropTypes.bool,
    imageURL: PropTypes.string,
    subreddit: PropTypes.string,
    title: PropTypes.string, // title of the person (MD, PHD, etc)
    text: PropTypes.string, // title of the person (MD, PHD, etc)
    timestamp: PropTypes.string,
    uid: PropTypes.string,
    upvotes: PropTypes.array,
  };

  render() {
    return (
    <div className="forum-postcard">
        <div className="forum-postcard-header">
            <img className="forum-postcard-header-img" src={Person_Icon} alt="person_icon"/>
            <div className="forum-postcard-header-content">
                <div className="forum-postcard-header-title">
                    <div className="forum-postcard-header-username">{this.props.uid}</div>
                    <div className="forum-postcard-header-date">{this.props.timestamp}</div>
                </div>
                <div className="forum-postcard-header-subreddit">{this.props.subreddit}</div>
            </div>
        </div>
        <div className="forum-postcard-body">
            {this.props.text}
        </div>
    </div>
    );
  }
}


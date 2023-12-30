import React from "react";
import PropTypes from "prop-types"; 
import './FounderCardSmall.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';
//import Mail from '../../../../assets/mail.svg';
//import Instagram from '../../../../assets/instagram.svg'

// look into how to pass in images (whether as paths, or the actual image)
// info: https://stackoverflow.com/questions/52999377/react-passing-import-name-as-prop-and-adding-to-image-src
// might have problems with the import statements

export default class FounderCardSmall extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string, // name of the person on the card
    title: PropTypes.string, // title of the person (MD, PHD, etc)
    text: PropTypes.string, // person's description
    texts: PropTypes.array,
    twitter: PropTypes.string, // twitter link (optional)
    linkedin: PropTypes.string, // linkedin link (optional)
    youtube: PropTypes.string, // youtube link (optional)
    mail: PropTypes.string,
    picture: PropTypes.string, // picture link
  };

  render() {
    return (
    <div className="founders-card-small">
      <div className="founder-pic-small"><img className="img-tag" src={this.props.picture} alt={this.props.name}/></div>
      <div className="founder-name-small">{this.props.name}</div>
      <div className="mediaIcons-small">
        {/* only display the icon if the person has social media links associated with it */}
        {(this.props.twitter !== undefined && this.props.twitter !== "") && <div className="mediaIcon"><a href={this.props.twitter} target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter"/></a></div>}
        {(this.props.linkedin !== undefined && this.props.linkedin !== "") && <div className="mediaIcon"><a href={this.props.linkedin} target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin"/></a></div>}
        {(this.props.youtube !== undefined && this.props.youtube !== "") && <div className="mediaIcon"><a href={this.props.youtube} target="_blank" rel="noreferrer"><img src={Youtube} alt="Youtube"/></a></div>}
      </div>
    </div>
    );
  }
}


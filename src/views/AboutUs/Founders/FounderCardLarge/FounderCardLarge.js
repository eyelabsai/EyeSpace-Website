import React from "react";
import PropTypes from "prop-types"; 
import './FounderCardLarge.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';
import Instagram from '../../../../assets/instagramLogo.svg';
import Mail from '../../../../assets/gmailLogo.svg'

// look into how to pass in images (whether as paths, or the actual image)
// info: https://stackoverflow.com/questions/52999377/react-passing-import-name-as-prop-and-adding-to-image-src
// might have problems with the import statements

export default class FounderCardLarge extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string, // name of the person on the card
    title: PropTypes.string, // title of the person (MD, PHD, etc)
    text: PropTypes.string, // person's description
    texts: PropTypes.array,
    twitter: PropTypes.string, // twitter link (optional)
    linkedin: PropTypes.string, // linkedin link (optional)
    instagram: PropTypes.string,
    mail: PropTypes.string,
    youtube: PropTypes.string, // youtube link (optional)
    picture: PropTypes.string, // picture link
  };

  render() {
    return (
    <div className="founders-card-large">
      <div className="founder-pic-large-container"><img className="founder-pic-large" src={this.props.picture} alt={this.props.name}/></div>
      <div>
        <div className="founder-name-large">{this.props.title}<br/>{this.props.name}</div>
        <div>
          {this.props.texts.map((text) => (
          <div className="founder-desc-large">{text}</div>
          ))}
        </div>
        <div className="mediaIcons-large">
          {/* only display the icon if the person has social media links associated with it */}
          {(this.props.twitter !== undefined && this.props.twitter !== "") && <div><a href={this.props.twitter} target="_blank" rel="noreferrer"><img className="mediaIcon-large" src={Twitter} alt="Twitter"/></a></div>}
          {(this.props.linkedin !== undefined && this.props.linkedin !== "") && <div><a href={this.props.linkedin} target="_blank" rel="noreferrer"><img className="mediaIcon-large" src={Linkedin} alt="Linkedin"/></a></div>}
          {(this.props.instagram !== undefined && this.props.instagram !== "") && <div><a href={this.props.instagram} target="_blank" rel="noreferrer"><img className="mediaIcon-large" src={Instagram} alt="Instagram"/></a></div>}
          {(this.props.mail !== undefined && this.props.mail !== "") && <div><a href={this.props.mail} target="_blank" rel="noreferrer"><img className="mediaIcon-large" src={Mail} alt="Mail"/></a></div>}
          {(this.props.youtube !== undefined && this.props.youtube !== "") && <div><a href={this.props.youtube} target="_blank" rel="noreferrer"><img className="mediaIcon-large" src={Youtube} alt="Youtube"/></a></div>}
        </div>
      </div>
    </div>
    );
  }
}

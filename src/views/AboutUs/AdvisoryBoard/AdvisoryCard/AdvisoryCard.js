import React from 'react';
import PropTypes from 'prop-types'; 
import './AdvisoryCard.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';

const AdvisoryCard = ({ name, title, text, twitter, linkedin, youtube, picture }) => {
  return (
    <div className="advisory-card">
      <div className="advisory-pic">
        <img src={picture} alt={name} />
      </div>
      <div className="advisory-name">
        {name}<br />
        {title}
      </div>
      <div className="advisory-desc">{text}</div>
      <div className="advisory-mediaIcons">
        {/* Only display the icon if the person has social media links associated with it */}
        {twitter && (
          <div className="twitter">
            <a href={twitter} target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
          </div>
        )}
        {linkedin && (
          <div className="linkedin">
            <a href={linkedin} target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        )}
        {youtube && (
          <div className="youtube">
            <a href={youtube} target="_blank" rel="noreferrer">
              <img src={Youtube} alt="Youtube" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

AdvisoryCard.propTypes = {
  name: PropTypes.string.isRequired, // Name of the person on the card
  title: PropTypes.string.isRequired, // Title of the person (MD, PHD, etc)
  text: PropTypes.string.isRequired, // Person's description
  twitter: PropTypes.string, // Twitter link (optional)
  linkedin: PropTypes.string, // LinkedIn link (optional)
  youtube: PropTypes.string, // YouTube link (optional)
  picture: PropTypes.string.isRequired, // Picture link
};

export default AdvisoryCard;

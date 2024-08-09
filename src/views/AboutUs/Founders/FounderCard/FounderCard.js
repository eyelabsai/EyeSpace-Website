import React from 'react';
import PropTypes from 'prop-types'; 
import './FounderCard.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';
import Instagram from '../../../../assets/instagramLogo.svg';
import Mail from '../../../../assets/gmailLogo.svg';

const FounderCard = ({
  name,
  title,
  text,
  texts = [],
  twitter,
  linkedin,
  instagram,
  mail,
  youtube,
  picture
}) => {
  return (
    <div className="founders-card">
      <div>
        <img className="founder-pic" src={picture} alt={name} />
      </div>
      <div className="founder-name">
        {title}<br />Co-Founder<br />{name}
      </div>
      <div>
        {texts.map((text, index) => (
          <div key={index} className="founder-desc">{text}</div>
        ))}
      </div>
      <div className="mediaIcons">
        {twitter && (
          <div>
            <a href={twitter} target="_blank" rel="noreferrer">
              <img className="mediaIcon" src={Twitter} alt="Twitter" />
            </a>
          </div>
        )}
        {linkedin && (
          <div>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <img className="mediaIcon" src={Linkedin} alt="LinkedIn" />
            </a>
          </div>
        )}
        {instagram && (
          <div>
            <a href={instagram} target="_blank" rel="noreferrer">
              <img className="mediaIcon" src={Instagram} alt="Instagram" />
            </a>
          </div>
        )}
        {mail && (
          <div>
            <a href={mail} target="_blank" rel="noreferrer">
              <img className="mediaIcon" src={Mail} alt="Mail" />
            </a>
          </div>
        )}
        {youtube && (
          <div>
            <a href={youtube} target="_blank" rel="noreferrer">
              <img className="mediaIcon" src={Youtube} alt="YouTube" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

FounderCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
  mail: PropTypes.string,
  youtube: PropTypes.string,
  picture: PropTypes.string
};

export default FounderCard;

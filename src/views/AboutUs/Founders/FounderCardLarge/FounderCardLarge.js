import React from 'react';
import PropTypes from 'prop-types'; 
import './FounderCardLarge.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';
import Instagram from '../../../../assets/instagramLogo.svg';
import Mail from '../../../../assets/gmailLogo.svg';

const FounderCardLarge = ({
  name,
  title,
  texts = [],
  twitter,
  linkedin,
  instagram,
  mail,
  youtube,
  picture
}) => {
  const socialLinks = [
    { href: twitter, src: Twitter, alt: 'Twitter' },
    { href: linkedin, src: Linkedin, alt: 'LinkedIn' },
    { href: instagram, src: Instagram, alt: 'Instagram' },
    { href: mail, src: Mail, alt: 'Mail' },
    { href: youtube, src: Youtube, alt: 'YouTube' }
  ];

  return (
    <div className="founders-card-large">
      <div className="founder-pic-large-container">
        <img className="founder-pic-large" src={picture} alt={name} />
      </div>
      <div>
        <div className="founder-name-large">
          {title}<br />{name}
        </div>
        <div>
          {texts.map((text, index) => (
            <div key={index} className="founder-desc-large">{text}</div>
          ))}
        </div>
        <div className="mediaIcons-large">
          {socialLinks.map(({ href, src, alt }) => 
            href ? (
              <div key={alt}>
                <a href={href} target="_blank" rel="noreferrer">
                  <img className="mediaIcon-large" src={src} alt={alt} />
                </a>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

FounderCardLarge.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
  mail: PropTypes.string,
  youtube: PropTypes.string,
  picture: PropTypes.string
};

export default FounderCardLarge;

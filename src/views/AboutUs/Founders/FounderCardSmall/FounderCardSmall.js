import React from 'react';
import PropTypes from 'prop-types'; 
import './FounderCardSmall.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';
import Instagram from '../../../../assets/instagramLogo.svg';
import Mail from '../../../../assets/gmailLogo.svg';

const FounderCardSmall = ({
  name,
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
    <div className="founders-card-small">
      <div>
        <img className="founder-pic-small" src={picture} alt={name} />
      </div>
      <div className="founder-name-small">{name}</div>
      <div className="mediaIcons-small">
        {socialLinks.map(({ href, src, alt }) => 
          href ? (
            <div key={alt}>
              <a href={href} target="_blank" rel="noreferrer">
                <img className="mediaIcon-small" src={src} alt={alt} />
              </a>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

FounderCardSmall.propTypes = {
  name: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
  mail: PropTypes.string,
  youtube: PropTypes.string,
  picture: PropTypes.string
};

export default FounderCardSmall;

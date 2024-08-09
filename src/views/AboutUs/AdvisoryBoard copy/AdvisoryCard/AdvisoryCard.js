import React from 'react';
import PropTypes from 'prop-types'; 
import './AdvisoryCard.css';
import Youtube from '../../../../assets/youtube.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Twitter from '../../../../assets/twitter.svg';

const AdvisoryCard = ({
  name,
  title,
  text,
  twitter,
  linkedin,
  youtube,
  picture
}) => {
  const socialLinks = [
    { href: twitter, src: Twitter, alt: 'Twitter', className: 'twitter' },
    { href: linkedin, src: Linkedin, alt: 'LinkedIn', className: 'linkedin' },
    { href: youtube, src: Youtube, alt: 'YouTube', className: 'youtube' }
  ];

  return (
    <div className="advisory-card">
      <div className="advisory-pic">
        <img src={picture} alt={name} />
      </div>
      <div className="advisory-name">
        {name}<br />{title}
      </div>
      <div className="advisory-desc">{text}</div>
      <div className="advisory-mediaIcons">
        {socialLinks.map(({ href, src, alt, className }) => 
          href ? (
            <div key={alt} className={className}>
              <a href={href} target="_blank" rel="noreferrer">
                <img src={src} alt={alt} />
              </a>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

AdvisoryCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  youtube: PropTypes.string,
  picture: PropTypes.string
};

export default AdvisoryCard;


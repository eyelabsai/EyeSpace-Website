import React from "react";
import PropTypes from "prop-types"; 
import './Founders.css';
import FounderCard from './FounderCard/FounderCard';
import Matthew_Hirabayashi from '../../../assets/Matthew_Hirabayashi.svg';
import Gurpal_Virdi from '../../../assets/Gurpal_Virdi.svg';

export default class Founders extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  // Javascript Object for each of the advisory board people
  information = [
    {
      name: "Gurpal Virdi",
      title: "MD",
      text: "A Palo Alto native who graduated from Washington University in St. Louis. He is currently an ophthalmology resident",
      twitter: "https://twitter.com/gurpalvirdi",
      linkedin: "https://www.linkedin.com/in/gurpalvirdi/",
      youtube: "",
      picture: Gurpal_Virdi,
    },
    {
      name: "Matthew Hirabayashi",
      title: "MD",
      text: "A current resident at the University of Missouri Columbia Ophthalmology Program planning to pursue a fellowship in refractive surgery.",
      twitter: "https://twitter.com/EyeFlyMD",
      linkedin: "https://www.linkedin.com/in/matt-hirabayash/",
      youtube: "https://www.youtube.com/channel/UCLKR7pzPLSZgndzU8l1f0_w",
      picture: Matthew_Hirabayashi,
    },
  ];

  render() {
    return ( 
    // maybe add a prop for id (if we need to distinguish btwn different cards)
    <div className="Founders">
      <div className="FoundersTitle AboutUsTitle">Meet Our<br/>Founders</div>
      <div className="FoundersCards">
        {
          this.information.map((obj) => {
            return (
              <FounderCard name={obj.name} title={obj.title} text={obj.text} twitter={obj.twitter} linkedin={obj.linkedin} youtube={obj.youtube} picture={obj.picture}/>
            )
          })
        }
      </div>
    </div>
    );
  }
}


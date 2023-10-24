import React from "react";
import PropTypes from "prop-types"; 
import './AdvisoryBoard.css';
import AdvisoryCard from './AdvisoryCard/AdvisoryCard';
// import Helen_Wu from '../../../assets/Wu Headshot.svg';
// import Jella_An from '../../../assets/Jella_An.svg';


export default class AdvisoryBoard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  // Javascript Object for each of the advisory board people
  information = [
    {
      name: "Adnan Alouane",
      title: "Frontend Engineer",
      text: "Adnan Alouane info...",
      twitter: "https://twitter.com/ArjanHuraMD",
      linkedin: "https://www.linkedin.com/in/arjanhura/?original_referer=https%3A%2F%2Feyespace.ai%2F",
      youtube: "https://www.youtube.com/channel/UC0SRlPbAES_MBKUA6TBq25A",
      // picture: Helen_Wu,
    },
    {
      name: "Bowen Wang",
      title: "Backend Engineer",
      text: "Bowen Wang info...",
      twitter: "https://twitter.com/ajjella",
      linkedin: "",
      youtube: "https://www.youtube.com/@JellaAnMD",
      // picture: Jella_An,
    },
  ];

  render() {
    return ( 
    // maybe add a prop for id (if we need to distinguish btwn different cards)
    <div className="AdvisoryBoard">
      <div className="AdvisoryBoardTitle AboutUsTitle">Engineering Team</div>
      <div className="AdvisoryBoardCards">
        {
          this.information.map((obj) => {
            return (
              <AdvisoryCard name={obj.name} title={obj.title} text={obj.text} twitter={obj.twitter} linkedin={obj.linkedin} youtube={obj.youtube} picture={obj.picture}/>
            )
          })
        }
      </div>
    </div>
    );
  }
}


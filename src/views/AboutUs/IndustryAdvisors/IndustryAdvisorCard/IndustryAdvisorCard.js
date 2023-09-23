import React from "react";
import PropTypes from "prop-types"; 
import './IndustryAdvisorCard.css';
import linkedinLogo from '../../../../assets/linkedinLogo.svg';

export default class IndustryAdvisorCard extends React.Component {
  static propTypes = {
    name: PropTypes.string, // name of the industry advisor
    position: PropTypes.string, // position of the industry advisor
    logo: PropTypes.string, // logo link
    linkedin: PropTypes.string, // linkedin link
  };

  render() {
    return (
    <div className="IndustryAdvisorCard">
        <div className="advisorLogo"><img className="advisorLogo-img-div" src={this.props.logo} alt={this.props.name}/></div>
        <div className="gray-rectangle">
            <div className="advisorInformation">
                <div className="advisorName">{this.props.name}</div>
                <div className="advisorPosition">{this.props.position}</div>
            </div>
            <div className="linkedIn-logo"><a href={this.props.linkedin} target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="linkedin logo"/></a></div>
        </div>
    </div>
    );
  }
}


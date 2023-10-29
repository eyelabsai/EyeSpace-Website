import React from "react";
import PropTypes from "prop-types"; 
import './IndustryAdvisors.css';
import { Link } from 'react-router-dom';

import JohnsonJohnson_logo from '../../../assets/JohnsonJohnsonLogo.svg';
import Alcon_logo from '../../../assets/alconLogo.svg';
import RxSight_logo from '../../../assets/RxSight.svg';
import IndustryAdvisorCard from "./IndustryAdvisorCard/IndustryAdvisorCard";

export default class IndustryAdvisors extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  info = [
    {
      name: "Zachary Johnson",
      position: "Account Executive - Los Angeles",
      linkedin: "https://www.linkedin.com/in/zachary-johnson-b890b5168/",
      logo: JohnsonJohnson_logo,
    },
    {
      name: "Charlie Green",
      position: "Surgical Academic Manager",
      linkedin: "https://www.linkedin.com/in/charles-green-2639411a/",
      logo: Alcon_logo,
    },
    {
      name: "Paul Ericson",
      position: "Director of Sales - Mid-Central Region", 
      linkedin: "https://www.linkedin.com/in/paul-ericson-30482811/",
      logo: RxSight_logo,
    },
  ];

  render() {
    return (
    <div className="IndustryAdvisors"> 
      <div className="TitleText AboutUsTitle">
        Industry Advisors
      </div>

      <div className="LogosAndLinkedin"> 
        {
          this.info.map((obj) => {
            return (
              <IndustryAdvisorCard name={obj.name} position={obj.position} linkedin={obj.linkedin} logo={obj.logo}/>
            )
          })
        }
      </div>

      <div className="Disclaimer">
        <p>eyeSpace is a private entity and neither the platform nor its owners have financial relationships with any member of industry. We do feel strongly about the importance of good industry
        connections tough and are grateful to the following advisors that help keep our application current, accurate, and up to date.
        If you represent industry, please contact us via the form below or by email to discuss ideas, partnerships, corrections, and more.</p>
      </div>

      <div className="Button">
      <Link to="/Contact" style={{textDecoration: 'none'}}><button className="contact-button">Get in Touch &gt;</button></Link>
      </div>


    </div>
    


    );
  }
}

import React from "react";
import PropTypes from "prop-types"; 
import './IndustryAdvisors.css';

import JohnsonJohnson_logo from '../../../assets/JohnsonJohnsonLogo.svg';
import Alcon_logo from '../../../assets/alconLogo.svg';
import RxSight_logo from '../../../assets/RxSight.svg';
import gray_rectangle from '../../../assets/grayRectangle.svg';
import linkedinLogo from '../../../assets/linkedinLogo.svg';

export default class IndustryAdvisors extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="IndustryAdvisors"> 
      <div className="TitleText">
        Industry Advisors
      </div>

      <div className="LogosAndLinkedin"> 
        <div className='IndustryAdvisorCard'>

          <div className='logo'>
            <img src={JohnsonJohnson_logo} alt="Johnson & Johnson logo"/>
          </div>

          <div className='rectangle'>
            <div className="ZacharyJohnson">
              Zachary Johnson
            </div>

            <div className="position">
              Account Executive – Los Angeles
            </div>

            <div className="linkedinLogo">
              <a href="https://www.linkedin.com/in/charles-green-2639411a/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="LinkedIn Logo"/></a>
            </div>
          </div>
        </div>

        <div className="IndustryAdvisorCard">

          <div className="alconLogo">
            <img src={Alcon_logo} alt="Alcon logo"/>
          </div>

          <div className="rectangle">
            <img src={gray_rectangle} alt="gray background rectangle"/>
          </div>

          <div className="CharlieGreen">
            Charlie Green
          </div>

          <div className="position">
            Surgical Academic Manager
          </div>

          <div className="linkedinLogo">
            <a href="https://www.linkedin.com/in/paul-ericson-30482811/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="LinkedIn Logo"/></a>
          </div>

        </div>


        <div className="IndustryAdvisorCard">

          <div className="rxSightLogo">
            <img src={RxSight_logo} alt="RxSight logo"/>
          </div>

          <div className="rectangle">
            <img src={gray_rectangle} alt="gray background rectangle"/>
          </div>

          <div className="PaulEricson">
            Paul Ericson
          </div>

          <div className="position">
            Director of Sales - Mid-Central Region
          </div>

          <div className="linkedinLogo">
            <a href="https://www.linkedin.com/in/zachary-johnson-b890b5168/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="LinkedIn Logo"/></a>
          </div>

        </div>
      </div>

      <div className="Disclaimer">
        <p>eyeSpace is a private entity and neither the platform nor its owners have financial relationships with any member of industry. We do feel strongly about the importance of good industry<br></br>
        connections tough and are grateful to the following advisors that help keep our application current, accurate, and up to date.<br></br>
        If you represent industry, please contact us via the form below or by email to discuss ideas, partnerships, corrections, and more.</p>
      </div>

      <div className="Button">
        
      </div>


    </div>
    


    );
  }
}

import React from "react";
import PropTypes from "prop-types"; 
import './IndustryAdvisors.css'; // replace "TestComponent" with your own component

import JohnsonJohnson_logo from '../../assets/JohnsonJohnsonLogo.svg';
import Alcon_logo from '../../assets/alconLogo.svg';
import RxSight_logo from '../../assets/RxSight.svg/';



export default class IndustryAdvisors extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="Industry Advisors">
      <div className="TitleText">
        Industry Advisors
      </div>

      <div className="Sponsor Logos">
        <img src={JohnsonJohnson_logo} alt="Johnson & Johnson logo"/>
        <img src={Alcon_logo} alt="Alcon logo"/>
        <img src={RxSight_logo} alt="RxSight logo"/>

      </div>
    </div>
    );
  }
}

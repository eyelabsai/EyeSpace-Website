import React from "react";
import PropTypes from "prop-types"; 
import './IndustryAdvisors.css'; // replace "TestComponent" with your own component

import JohnsonJohnson_logo from '../../assets/JohnsonJohnsonLogo.svg';
import Alcon_logo from '../../assets/alconLogo.svg';
import RxSight_logo from '../../assets/RxSight.svg';
import gray_rectangle from '../../assets/grayRectange.svg';



export default class IndustryAdvisors extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="industryAdvisors">
      <div className="TitleText">
        Industry Advisors
      </div>

      <div className="Sponsor Logos">
        <img src={JohnsonJohnson_logo} alt="Johnson & Johnson logo"/>
        <img src={Alcon_logo} alt="Alcon logo"/>
        <img src={RxSight_logo} alt="RxSight logo"/>
      </div>

      <div className="background"> 
        <img src={gray_rectangle} alt="gray background rectangle"/>

      </div>

      <div className="Advisor Names">
        <div className="Zachary Johnson">
          <div className="ZJ name">
            Zachary Johnson
          </div>
          <div className="ZJ position">
            Account Executive – Los Angeles
          </div>
        </div>

        <div className="Charlie Green">
          <div className="CG name">
            Charlie Green
          </div>
          <div className="CG position">
            Surgical Academic Manager
          </div>
        </div>

        <div className="Paul Ericson">
          <div className="PE name">
            Paul Ericson
          </div>
          <div className="PE position">
            Director of Sales – Mid-Central Region
          </div>
        </div>

      </div>

    </div>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";
import './AboutUs.css';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import EngBoard from "./AdvisoryBoard copy/AdvisoryBoard";
import Founders from "./Founders/Founders";
import IndustryAdvisors from "./IndustryAdvisors/IndustryAdvisors";

export default class AboutUs extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
      // <div className="AboutUs about-us-background">
      <div>
        <Header page="About Us"/>
        <Founders/>
        <IndustryAdvisors/>
        <EngBoard/>
        <Footer/>
      </div>
    );
  }
}
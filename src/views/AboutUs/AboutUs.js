import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './AboutUs.css'; 
import AdvisoryBoard from "./AdvisoryBoard/AdvisoryBoard";
import Founders from "./Founders/Founders";

export default class AboutUs extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="AboutUs">
      <Header page="About Us"/>
      <h1>About Us</h1>
      <Founders/>
      <AdvisoryBoard className="AdvisoryBoard"/>
      <Footer/>
    </div>
    );
  }
}


import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import Bg from "../../assets/contactbg.svg";
import './Contact.css'; 

export default class Contact extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      <div  className="contact-div" style={{backgroundImage: `url(${Bg})`}}>
      <Header page="Contact"/>
      <div className="contact-container">
        <div className="contact-left">
          <h3 id="lefthead">
            Send Us A<br/>Message
          </h3>
          <p>
            We’d love to hear from you! We value comments, questions, corrections, feedback, potential partnerships, and relationship with industry. Simply complete the form below and we will respond soon
          </p>
        </div>
        <div className="contact-right">
          <form action="/">
            <p>Full Name</p>
            <input type="text" name="fullname"></input>
            <p>Email</p>
            <input type="text" name="email"></input>
            <p>Message</p>
            <input type="text" name="email" id="message"></input>
            <input type="submit" id="con-submission"></input>
          </form>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
    );
  }
}


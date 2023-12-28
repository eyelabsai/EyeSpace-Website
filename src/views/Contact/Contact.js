import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
// import Bg from "../../assets/vect.jpeg"; style={{backgroundImage: `url(${Bg})`}}
import './Contact.css'; 

export default class Contact extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      <div  className="contact-div" >
      <Header page="Contact"/>
      <div className="contact-container">
        <div className>
          <div className="contct-title">
            Get In Touch
          </div>
          <p className="contact-text">
            Is there a problem facing the field of ophthalmology you would like help solving? Work with us! We value comments, questions, corrections, feedback, potential partnerships, and relationship with industry. Simply complete the form below and we will respond soon.
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
            <br></br>
            <input type="submit" id="con-submission"></input>
          </form>
        </div>
      </div>
      </div>
    </div>
    );
  }
}


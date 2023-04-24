import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import './Login.css'; 

export default class Login extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      <Header page="Login"/>
      <h1>Login</h1>
    </div>
    );
  }
}


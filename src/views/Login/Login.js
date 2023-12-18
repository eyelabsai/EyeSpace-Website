import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './Login.css';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default class Login extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
    .then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
    })
  }

  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      password: ''
    };
  }
  setEmail = (email) => {
    this.setState({ email });
  };

  setPassword = (password) => {
    this.setState({ password });
  }

  render() {
    return (
    <div className="cards">
      <Header page="Login"/>
      <div className="loginpage">
        <div id="email-notif"></div>
        <div className="left-login">
          <h1 id="titlelogin">Login</h1>
          <form onSubmit={this.signIn}>
            <label>Email</label>
            <br/>
            <div>
              <input className="inputborder" type="text" value={this.state.email} onChange={(e) => this.setEmail(e.target.value)}></input>
            </div>
            <br/>
            <label>Password</label>
            <br/>
            <div>
              <input className="inputborder" type="password" value={this.state.password} onChange={(e) => this.setPassword(e.target.value)}></input>
            </div>
            <p>
            <a href="/Login" id="forgotpw">Forgot password?</a>
            </p>
            <button type="submit" className="inloginsubmit">Submit</button>
          </form>
        </div>
        <div className="right">
          <h1 id="accprompt"> Don't Have An Account?</h1>
          <form action="CreateAccount/">
          <button type="submit" className="inloginsubmit">Create account</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}


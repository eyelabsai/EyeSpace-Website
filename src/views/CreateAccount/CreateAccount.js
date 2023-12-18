import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './CreateAccount.css';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default class Login extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  signUp = (e) => {
    if (this.state.password != this.state.confirmpassword) {
      window.alert("Passwords does not match");
    }else {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  constructor(props) {
    super(props);
    this.state = { 
      firstname: '',
      lastname: '',
      email: '', 
      password: '',
      confirmpassword: ''
    };
  }

  setFirstName = (firstname) => {
    this.setState({ firstname });
  };

  setLastName = (lastname) => {
    this.setState({ lastname });
  };

  setEmail = (email) => {
    this.setState({ email });
  };

  setPassword = (password) => {
    this.setState({ password });
  }

  setConfirmPassword = (confirmpassword) => {
    this.setState({ confirmpassword });
  }

  render() {
    return (
    <div>
        <Header page="CreateAccount"/>
        <div className="createacc-page">
            <div id="ca-main">
                <h1 className="ca-title">Create Account</h1>
                <form action="CreateAccount" method="post" onSubmit={this.signUp}>
                    <label>First Name</label>
                    <br />
                    <input className="inputborder" type="text" value={this.state.firstname} onChange={(e) => this.setFirstName(e.target.value)}></input>
                    <br /><br />
                    <label>Last Name</label>
                    <br />
                    <input className="inputborder" type="text" value={this.state.lastname} onChange={(e) => this.setLastName(e.target.value)}></input>
                    <br /><br />
                    <label>Email</label>
                    <br />
                    <input className="inputborder" type="text" value={this.state.email} onChange={(e) => this.setEmail(e.target.value)}></input>
                    <br /><br />
                    <label>Password</label>
                    <br />
                    <input className="inputborder" type="text" value={this.state.password} onChange={(e) => this.setPassword(e.target.value)}></input>
                    <br /><br />
                    <label>Confirm Password</label>
                    <br />
                    <input className="inputborder" type="text" value={this.state.confirmpassword} onChange={(e) => this.setConfirmPassword(e.target.value)}></input>
                    <br /><br />
                    <input type="checkbox"></input>
                    <label id="makered">Agree to T&C</label>
                    <br /><br />
                    <button type="submit" className="ca-inloginsubmit">Submit</button>
                </form>
            </div>
        </div>
    <Footer/>
    </div>
    );
  }
}


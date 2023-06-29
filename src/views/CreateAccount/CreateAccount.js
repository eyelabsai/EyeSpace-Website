import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './CreateAccount.css'; 

export default class Login extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div>
        <Header page="CreateAccount"/>
        <div className="createacc-page">
            <div id="ca-main">
                <h1 className="ca-title">Create Account</h1>
                <form action="CreateAccount" method="post">
                    <label>First Name</label>
                    <br />
                    <input className="inputborder" type="text"></input>
                    <br /><br />
                    <label>Last Name</label>
                    <br />
                    <input className="inputborder" type="text"></input>
                    <br /><br />
                    <label>Email</label>
                    <br />
                    <input className="inputborder" type="text"></input>
                    <br /><br />
                    <label>Password</label>
                    <br />
                    <input className="inputborder" type="text"></input>
                    <br /><br />
                    <label>Confirm Password</label>
                    <br />
                    <input className="inputborder" type="text"></input>
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


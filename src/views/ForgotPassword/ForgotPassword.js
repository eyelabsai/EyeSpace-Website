import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './ForgotPassword.css';
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        sendPasswordResetEmail(auth, email).then(data=>{
            alert("Password Reset Email Already Sent!")
        }).catch(err => {
            alert(err.code)
        })
    }
    
    return (
        <div className="forgotpwd">
            <Header></Header>
            <h1>Forgot Password?</h1>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="email"/>
                <br></br><br></br><br></br>
                <button>Reset Password</button>
            </form>
        </div>
    )
}
export default ForgotPassword

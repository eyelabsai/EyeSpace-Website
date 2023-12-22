import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './Login.css';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/');
      })
      .catch((error) => {
        alert("Login Error");
        console.log(error);
      });
  };

  return (
    <div className="cards">
      <Header page="Login" />
      <div className="loginpage">
        <div id="email-notif"></div>
        <div className="left-login">
          <h1 id="titlelogin">Login</h1>
          <form onSubmit={signIn}>
            <label>Email</label>
            <br />
            <div>
              <input className="inputborder" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <label>Password</label>
            <br />
            <div>
              <input className="inputborder" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p>
              <a href="/ForgotPassword" id="forgotpw">Forgot password?</a>
            </p>
            <button type="submit" className="inloginsubmit">Submit</button>
          </form>
        </div>
        <div className="right">
          <h1 id="accprompt">Don't Have An Account?</h1>
          <form action="CreateAccount/">
            <button type="submit" className="inloginsubmit">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

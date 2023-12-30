import React, { useState } from 'react';
import Header from '../../components/header/Header';
import './CreateAccount.css';
import { auth, firestore } from '../../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function CreateAccount(props) {
  // State management with useState hook
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // signUp function
  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(userCredential.user)
            .then(() => {
              let uid = userCredential.user.uid;
              let docRef = doc(firestore, 'users', uid);
              setDoc(docRef, {
                credential: "N/A",
                email: email,
                firstName: firstName,
                lastName: lastName,
                position: "N/A",
                specialty: "N/A",
                state: "N/A"
              });
              console.log(firstName);
            })
            .then(async ()=> {
              await updateProfile(userCredential.user, {
                displayName: firstName
              });
              console.log(userCredential.user.displayName);
            }).then(()=> {
              navigate('/');
            })
        }).catch((error) => {
          console.log(error);
        });
    }
  };

  // Render
  return (
    <div>
        <Header page="CreateAccount"/>
        <div className="createacc-page">
            <div id="ca-main">
                <h1 className="ca-title">Create Account</h1>
                <form onSubmit={signUp}>
                    <label>First Name</label>
                    <br />
                    <input className="inputborder" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    <br /><br />
                    <label>Last Name</label>
                    <br />
                    <input className="inputborder" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    <br /><br />
                    <label>Email</label>
                    <br />
                    <input className="inputborder" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <br /><br />
                    <label>Password</label>
                    <br />
                    <input className="inputborder" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <br /><br />
                    <label>Confirm Password</label>
                    <br />
                    <input className="inputborder" type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <br /><br />
                    <input type="checkbox"></input>
                    <label id="makered">Agree to T&C</label>
                    <br /><br />
                    <button type="submit" className="ca-inloginsubmit">Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default CreateAccount;

import React from "react";
import Header from '../../components/header/Header';
import './UserProfile.css';
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

function UserProfile() {
    
    return (
        <div >
            <Header></Header>
            <h1>User Profile</h1>
        </div>
    )
}
export default UserProfile

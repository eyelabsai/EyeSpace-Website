import React from "react";
import Header from '../../components/header/Header';
import './UserProfile.css';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

function UserProfile() {

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await auth.signOut();
            console.log('User signed out successfully');
            navigate('/');
        } catch (error) {
            // Handle any errors here
            console.error('Error signing out: ', error);
        }
    }

    return (
        <div className="userprofile">
            <Header></Header>
            <h1>User Profile</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button>Log Out</button>
            </form>
        </div>
    )
}
export default UserProfile

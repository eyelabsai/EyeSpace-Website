import React, { useState, useEffect } from "react";
import Header from '../../components/header/Header';
import './UserProfile.css';
import { auth, firestore, storage } from "../../firebase";
import { doc, getDoc, updateDoc} from 'firebase/firestore';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import Person_Icon from '../../assets/Person_Icon.png';

const specialities = [
    "Comprehensive/Anterior Segment",
    "Cornea/Refractive",
    "Retina(Surgical)",
    "Retina(Medical)",
    "Glaucoma",
    "Oculoplastics",
    "Pediatric",
    "Neuro",
    "Uveitis",
    "Pathology",
    "Ocular Oncology",
    "Resident/Med Student",
    "Other"];
const positions = [
    "Attending-Private",
    "Attending-Academic",
    "Ophthalmology Resident",
    "Ophthalmology Fellow",
    "Med Student",
    "Optometrist",
    "Optometry Resident",
    "Company Representative",
    "Clinical Staff"];
const credentials = [
    "MD",
    "DO",
    "OD",
    "MBBS",
    "N/A"];
let USstates = [ "AK - Alaska",
    "AL - Alabama",
    "AR - Arkansas",
    "AS - American Samoa",
    "AZ - Arizona",
    "CA - California",
    "CO - Colorado",
    "CT - Connecticut",
    "DC - District of Columbia",
    "DE - Delaware",
    "FL - Florida",
    "GA - Georgia",
    "GU - Guam",
    "HI - Hawaii",
    "IA - Iowa",
    "ID - Idaho",
    "IL - Illinois",
    "IN - Indiana",
    "KS - Kansas",
    "KY - Kentucky",
    "LA - Louisiana",
    "MA - Massachusetts",
    "MD - Maryland",
    "ME - Maine",
    "MI - Michigan",
    "MN - Minnesota",
    "MO - Missouri",
    "MS - Mississippi",
    "MT - Montana",
    "NC - North Carolina",
    "ND - North Dakota",
    "NE - Nebraska",
    "NH - New Hampshire",
    "NJ - New Jersey",
    "NM - New Mexico",
    "NV - Nevada",
    "NY - New York",
    "OH - Ohio",
    "OK - Oklahoma",
    "OR - Oregon",
    "PA - Pennsylvania",
    "PR - Puerto Rico",
    "RI - Rhode Island",
    "SC - South Carolina",
    "SD - South Dakota",
    "TN - Tennessee",
    "TX - Texas",
    "UT - Utah",
    "VA - Virginia",
    "VI - Virgin Islands",
    "VT - Vermont",
    "WA - Washington",
    "WI - Wisconsin",
    "WV - West Virginia",
    "WY - Wyoming"];

function UserProfile() {
    const [uid, setUID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [position, setPosition] = useState("");
    const [specialty, setSpeciality] = useState("");
    const [credential, setCredential] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [profileImage, setProfileImage] = useState(Person_Icon);
    const [uploadedProfileURL, setUploadedProfileURL] = useState(null);

    useEffect(() => {
        const getUID = () => {
            auth.onAuthStateChanged(user => {
                if (user) {
                  getUserProfile(user.uid);
                } else {
                  console.log("no uid")
                }
            });
        }
        getUID();
        //getUserProfile();
    }, []);

    const getUserProfile = async (uid) => {
        setUID(uid);
        const userRef = doc(firestore, 'users', uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          setState(userData.state);
          setPosition(userData.position);
          setSpeciality(userData.specialty);
          setCredential(userData.credential);
          if (userData.avatarUrl) {
            setAvatarUrl(userData.avatarUrl);
            setProfileImage(userData.avatarUrl);
          }
        } else {
          console.log('No such user!');
        }
    }
    //Sometimes Firease returns an N/A as answer. 

    const navigate = useNavigate();

    const handleLogout = async(e) => {
        e.preventDefault();
        try {
            await auth.signOut();
            console.log('User signed out successfully');
            navigate('/');
        } catch (error) {
            // Handle any errors here
            console.error('Error signing out: ', error);
        }
    }

    const uploadImage = async () => {
        if (!uploadedProfileURL) {
          return avatarUrl;
        }
        const imageRef = ref(storage, `avatar_images/${uploadedProfileURL.name}`);
        const snapshot = await uploadBytes(imageRef, uploadedProfileURL);
        const url = await getDownloadURL(snapshot.ref);
        return url;
      }

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        if (state ==="N/A" || state==="" || state===undefined) {
            alert("Please fill out the state!")
        } else {
            const newImageURL = await uploadImage();
            const userRef = doc(firestore, 'users', uid);
            await updateDoc(userRef, {
                state: state,
                position: position,
                specialty: specialty,
                credential: credential,
                avatarUrl:  newImageURL,
            });
            window.location.reload();
        }
    }

    console.log(avatarUrl);
    console.log(profileImage)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUploadedProfileURL(file);
        console.log(file);
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setProfileImage(e.target.result);
          };
          reader.readAsDataURL(file);
        }
    };

    //console.log(profileImage)
    console.log(state+ " " + position + " " + specialty + " " + credential);

    return (
        <div className="userprofile">
            <Header></Header>
            <h1>User Profile</h1>
            <form onSubmit={(e) => handleUpdateProfile(e)}>
            <div className="userprofile-container">
                <div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">Firstname:</div>
                        <div className="userpofile-entry-title">{firstName}</div>
                    </div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">Lastname:</div>
                        <div className="userpofile-entry-title">{lastName}</div>
                    </div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">Email:</div>
                        <div className="userpofile-entry-title">{email}</div>
                    </div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">State:</div>
                        <select name="state-choices" value={state} onChange={(e) => setState(e.target.value)}>
                            <option value="">Choose a State</option>
                            {USstates.map((obj)=>{
                            return <option value={obj}>{obj}</option>
                            })}
                        </select>
                    </div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">Position:</div>
                        <select name="position-choices" value={position} onChange={(e) => setPosition(e.target.value)}>
                            <option value="">Choose a Position</option>
                            {positions.map((obj)=>{
                            return <option value={obj}>{obj}</option>
                            })}
                        </select>
                    </div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">Speciality:</div>
                        <select name="speciality-choices" value={specialty} onChange={(e) => setSpeciality(e.target.value)}>
                            <option value="">Choose a Speciality</option>
                            {specialities.map((obj)=>{
                            return <option value={obj}>{obj}</option>
                            })}
                        </select>
                    </div>
                    <div className="userprofile-entry-container">
                        <div className="userpofile-entry-title">Credential:</div>
                        <select name="state-choices" value={credential} onChange={(e) => setCredential(e.target.value)}>
                            <option value="">Choose a Credential</option>
                            {credentials.map((obj)=>{
                            return <option value={obj}>{obj}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="userprofile-image-container">
                    <img className="userprofile-image" src={profileImage} alt="user avatar"/>
                    <input 
                        className="add-post-image-upload" type="file" id="avatar" name="avatar" 
                        accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <button>Save Changes</button>
            </form>
            <form className="userprofile-logout" onSubmit={(e) => handleLogout(e)}>
                <button>Log Out</button>
            </form>
        </div>
    )
}
export default UserProfile

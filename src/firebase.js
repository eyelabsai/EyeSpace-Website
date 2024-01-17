// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZOk1kvNEJdi_21Mq5giHoE_KV9W0byQ0",
  authDomain: "iol-reference.firebaseapp.com",
  databaseURL: "https://iol-reference-default-rtdb.firebaseio.com",
  projectId: "iol-reference",
  storageBucket: "iol-reference.appspot.com",
  messagingSenderId: "891421425043",
  appId: "1:891421425043:web:81b84ccd1eccf455087c66",
  measurementId: "G-8CHLQKQ3HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)
export { app, auth, firestore, storage};
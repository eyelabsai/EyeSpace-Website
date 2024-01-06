import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';
import './Exchange.css'; 
import ForumReplacement from '../../assets/forum_replacement.png'
import Bg from '../../assets/blogbg.svg'
import ForumPostCard from "./ForumPostCard/ForumPostCard";
import './ForumPostCard/ForumPostCard.css';
import { auth, firestore } from '../../firebase';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

function Exchange(props) {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check the user's authentication status
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in, proceed to fetch data
        retrieveFirestoreData();
      } else {
        window.alert("Please login first!");
        navigate('/login');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]); // Add navigate to the dependency array

  async function retrieveFirestoreData() {
    const postsRef = collection(firestore, "posts");
    const querySnapshot = await getDocs(postsRef);
    const postsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    //console.log(new Date(postsData[0].timestamp.seconds*1000))
    setPosts(postsData);
  }
  console.log(posts)

  function formatDateTime(date) {
    // Get the individual components of the date
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    const year = date.getFullYear();
    let hour = date.getHours(); // 24-hour clock
    const minute = date.getMinutes();
  
    // Pad the month, day, hour and minute with leading zeros if necessary
    const monthStr = month.toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');
    const hourStr = hour.toString().padStart(2, '0');
    const minuteStr = minute.toString().padStart(2, '0');
  
    // Construct the formatted date-time string
    const formattedDateTime = `${monthStr}/${dayStr}/${year} ${hourStr}:${minuteStr}`;
    console.log(formatDateTime);
    return formattedDateTime;
  }
  
  if (posts === null || posts === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="blog-div" style={{backgroundImage: `url(${Bg})`}}>
        <Header page="eXchange"/>
        <div>
          <div className = 'exchange-title'>
              <h1>Coming Soon</h1>
              <img src={ForumReplacement} alt="forum replacement"/>
          </div>
          <br></br><br></br><br></br><br></br>
          <div className="forum-postcard-container">
          {
            posts.map((obj) => {
              return (
                <ForumPostCard didLike={obj.didLike} imageURL={obj.imageURL} subreddit={obj.subreddit} title={obj.title} text={obj.text} timestamp={formatDateTime(new Date(obj.timestamp.seconds*1000))} uid={obj.uid} upvotes={obj.upvotes} />
              )
            })
          }
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </div>
  );
}
export default Exchange;

import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';
import './Exchange.css'; 
import ForumReplacement from '../../assets/forum_replacement.png'
import Bg from '../../assets/blogbg.svg'
import ForumPostCard from "./ForumPostCard/ForumPostCard";
import './ForumPostCard/ForumPostCard.css';
import { auth, firestore } from '../../firebase';
import { doc, getDocs, collection } from 'firebase/firestore';

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
    //console.log(postsData[0].title);
    setPosts(postsData);
  }
  console.log(posts)

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
                <ForumPostCard title={obj.title} text={obj.text}/>
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

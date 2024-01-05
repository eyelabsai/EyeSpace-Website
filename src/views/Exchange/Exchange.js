import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header';
import './Exchange.css'; 
import ForumReplacement from '../../assets/forum_replacement.png'
import Bg from '../../assets/blogbg.svg'
import ForumPostCard from "./ForumPostCard/ForumPostCard";
import './ForumPostCard/ForumPostCard.css';
import { auth, firestore } from '../../firebase';
import { doc, getDocs, collection } from 'firebase/firestore';
import { wait } from "@testing-library/user-event/dist/utils";

function Exchange(props) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function retrieveFirestoreData() {
      const postsRef = collection(firestore, "posts");
      const querySnapshot = await getDocs(postsRef);
      setPosts(postsRef);
    }
    retrieveFirestoreData();
  }, []);
  if (posts === null) {
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
            <ForumPostCard/>
            <ForumPostCard/>
            <ForumPostCard/>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </div>
  );
}
export default Exchange;

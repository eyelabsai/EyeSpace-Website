import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Exchange.css'; 
import ForumReplacement from '../../assets/forum_replacement.png'
import ForumPostCard from "./ForumPostCard/ForumPostCard";
import './ForumPostCard/ForumPostCard.css';
import { auth, firestore, storage } from '../../firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {getDocs, collection, addDoc, Timestamp, query, orderBy } from 'firebase/firestore';
import AddCommentImg from '../../assets/add_comment.svg';
import SideNav from '../../components/Nav/SideNav';
import Search from "../../components/Search/Search";
function Exchange(props) {
  const [posts, setPosts] = useState(null);
  const [currentUID, setCurrentUID] = useState(null);
  const [showPost, setShowPost] = useState(false);
  const navigate = useNavigate();

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostSubreddit, setNewPostSubreddit] = useState("");
  const [newPostImage, setNewPostImage] = useState();
  const [newPostContent, setNewPostContent] = useState("");
  
  const subredditChoices = ["i/Anterior Segment, Cataract, & Cornea", "i/Glaucoma", "i/Retina", 
  "i/Neuro-Opthamology", "i/Pediatric Opthamology", "i/Ocular Oncology", "i/Oculoplastic Surgery", 
  "i/Uveitis", "i/Residents & Fellows", "i/Medical Students", "i/Company Representatives"];

  useEffect(() => {
    // Check the user's authentication status
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in, proceed to fetch data
        setCurrentUID(user.uid);
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
    const q = query(postsRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const postsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      postID: doc.id,
    }));
    setPosts(postsData);
  }

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
    //console.log(formatDateTime);
    return formattedDateTime;
  }
  
  if (posts === null || posts === undefined || currentUID===null) {
    return <div>Loading...</div>;
  }

  const postHandler = () => {
    setShowPost(!showPost);
  }

  const uploadImage = async () => {
    if (!newPostImage) {
      return "";
    }
    const imageRef = ref(storage, `Post_Images/${newPostImage.name}`);
    const snapshot = await uploadBytes(imageRef, newPostImage);
    const url = await getDownloadURL(snapshot.ref);
    return url;
    /*uploadBytes(imageRef, newPostImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url)=> {
        console.log(url);
        return url;
      })
    })*/
  }
 
  const handleSubmitPost = async (event) => {
    event.preventDefault()
    console.log(newPostTitle);
    console.log(newPostSubreddit);
    console.log(newPostContent);
    const postsRef = collection(firestore, 'posts');
    const newImageURL = await uploadImage();
    if (newPostTitle!=="" && newPostSubreddit!=="" && newPostContent!=="") {
      try {
        console.log("inside upload " + newImageURL);
        const submitted_postRef = await addDoc(postsRef, {
          didLike: false,
          imageURL: newImageURL,
          subreddit: newPostSubreddit,
          text: newPostContent,
          timestamp: Timestamp.fromDate(new Date()),
          title: newPostTitle,
          uid: currentUID,
          upvotes: [],
        });
        console.log(submitted_postRef);
        window.location.reload();
      } catch (error) {
        console.error("error creating comment");
      }
    } else {
      alert("Please fill out all the categories!");
    }
  }

  return (
    <div className='exchange-container'>
      <div>
         <SideNav/>
      </div>
      <div>
        <div className = 'exchange-title'>
            <h1>Coming Soon</h1>
            <img src={ForumReplacement} alt="forum replacement"/>
        </div>
        
        <br></br><br></br><br></br><br></br>
        <div className="add-post-container">
          <div className='search-exchange'>
            <Search/>
          </div>

          <div className="add-post-button" onClick={postHandler}>
            <img src={AddCommentImg} className="add-post-icon" alt="add a post"/>
            <div className="add-post-text">Create a new post</div>  
          </div>
          {showPost && 
          <form className="add-post-input-container" onSubmit={handleSubmitPost}>
            <input className="add-post-input-title" placeholder="Title" onChange={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              } else {
                setNewPostTitle(e.target.value)
              }
            }}></input>
            <br></br>
            <select className="add-post-input-selection" name="subreddit-choices" onChange={(e) => setNewPostSubreddit(e.target.value)}>
              <option value="choose">Choose a category</option>
              {subredditChoices.map((obj)=>{
                return <option value={obj}>{obj}</option>
              })}
            </select>
            <br></br>
            <input 
              className="add-post-image-upload" type="file" id="avatar" name="avatar" 
              accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
              onChange={(event) => {
                setNewPostImage(event.target.files[0]);
              }}
            />
            <textarea className="add-post-input-content" placeholder="Content" onChange={(e) => setNewPostContent(e.target.value)}></textarea>
            <button type="submit" className='add-post-submit'>Submit</button>
          </form>}
        </div>
        
        <div className="forum-postcard-container">
        {
          posts.map((obj) => {
            return (
              <ForumPostCard currentUID={currentUID} postID={obj.postID} didLike={obj.didLike} imageURL={obj.imageURL} subreddit={obj.subreddit} title={obj.title} text={obj.text} timestamp={formatDateTime(new Date(obj.timestamp.seconds*1000))} uid={obj.uid} upvotes={obj.upvotes} />
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

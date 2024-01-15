import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ForumPostCard.css';
import Person_Icon from '../../../assets/Person_Icon.png';
import { auth, firestore } from '../../../firebase';
import { doc, getDoc, getDocs, addDoc, updateDoc, arrayUnion, arrayRemove, collection, query, where, Timestamp, orderBy } from 'firebase/firestore';
import LikeButton from '../../../assets/like_post.svg';
import LikeButtonLiked from '../../../assets/like_post_liked.svg';
import CommentButton from '../../../assets/comment_post.svg';
import ForumCommentCard from '../ForumCommentCard/ForumCommentCard';
import '../ForumCommentCard/ForumCommentCard.css'

const ForumPostCard = ({ currentUID, postID, didLike, imageURL, subreddit, title, text, timestamp, uid, upvotes }) => {
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [likesCount, setLikesCount] = useState(upvotes.length);
  const [commentsCount, setCommentsCount] = useState(0);
  const [likebuttonsrc, setLikeButtonSrc] = useState(LikeButton);
  const [showComment, setShowComment] = useState(false);
  const [commentInput, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentsArray = [];
    const getUserProfile = async () => {
      try {
        const userRef = doc(firestore, 'users', uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const fullName = `${userData.firstName} ${userData.lastName}`;
          const imgurl = userData.avatarUrl;
          setUsername(fullName);
          setAvatarUrl(imgurl);
        } else {
          console.log('No such user!');
        }
      } catch (error) {
          console.error("Error fetching user data:", error);
      }
    };
    getUserProfile();
    const getComments = async () => {
    try {
        const commentsRef = collection(firestore, "comments");
        const q = query(commentsRef, where("postId", "==", postID), orderBy("timestamp", "desc"));
        getDocs(q).then((querySnapshot) => {
          commentsArray.length = 0;
          querySnapshot.forEach((doc) => {
            commentsArray.push({ id: doc.id, ...doc.data() });
          });
          setCommentsCount(commentsArray.length);
          setComments(commentsArray)
        }).catch((error) => {
          console.error("Error getting documents: ", error);
        });
      } catch (error) {
        console.error("Error occured when trying to retrieve posts!");
      }
    };
    getComments();
  }, [uid, postID]);

  const imageSrc = avatarUrl || Person_Icon;
  const currentUserID = auth.currentUser.uid;

  const likeHandler = () => {
    if (likebuttonsrc === LikeButton) {
      setLikeButtonSrc(LikeButtonLiked);
      addToArray(currentUserID);
    } else {
      setLikeButtonSrc(LikeButton);
      removeFromArray(currentUserID);
    }
  };

  const addToArray = async (newValue) => {
    const docRef = doc(firestore, 'posts', postID);
    try {
      await updateDoc(docRef, {
        upvotes: arrayUnion(currentUserID)
      });
      setLikesCount(likesCount + 1);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const removeFromArray = async (newValue) => {
    const docRef = doc(firestore, 'posts', postID);
    try {
      await updateDoc(docRef, {
        upvotes: arrayRemove(currentUserID)
      });
      setLikesCount(likesCount - 1);
      } catch (error) {
        console.error("Error updating document:", error);
      }
  };

  const commentHandler = () => {
    setShowComment(!showComment);
  };

  const handleCommentChange = (event) => {
    setInputValue(event.target.value);
    // Automatically adjust height to fit content
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
    event.target.style.width = '95%';
  };

  const handleSubmitComment =async (event) => {
    const commentsRef = collection(firestore, 'comments');
    if (commentInput!=="") {
      try {
        const submitted_commentRef = await addDoc(commentsRef, {
          uid: currentUID,
          postId: postID,
          text: commentInput,
          timestamp: Timestamp.fromDate(new Date()),
        });
        console.log(submitted_commentRef);
        commentHandler();
        comments.push({
          uid: currentUID,
          postId: postID,
          text: commentInput,
          timestamp: Timestamp.fromDate(new Date()),
        });
        setInputValue("");
        console.log(currentUID);
        setCommentsCount(comments.length);
        setComments(comments);
      } catch (error) {
        console.error("error creating comment");
      }
    } else {
      alert("Please have some input first!");
    }
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

  return (
  <div className="forum-postcard">
    <div className="forum-postcard-header">
      <img className="forum-postcard-header-img" src={imageSrc} alt="person_icon" />
      <div className="forum-postcard-header-content">
        <div className="forum-postcard-header-content2">
          <div className="forum-postcard-header-username">{username || uid}</div>
          <div className="forum-postcard-header-date">{timestamp}</div>
        </div>
        <div className="forum-postcard-header-subreddit">{subreddit}</div>
      </div>
    </div>
    <div className="forum-postcard-body">
      <div className='forum-postcard-body-title'><strong>{title}</strong></div>
      <div className='forum-postcard-body-text'>{text}</div>
      {(imageURL !== undefined && imageURL !== "") && <img className="forum-postcard-body-img" src={imageURL} alt="post_image" />}
    </div>
    <div className='forum-postcard-comment'>
      <img className='forum-postcard-like-button' src={likebuttonsrc} alt='like-button' onClick={likeHandler} />
      <div>Likes {likesCount}</div>
      <img className='forum-postcard-comment-button' src={CommentButton} alt='comment-button' onClick={commentHandler} />
      <div>Comments {commentsCount}</div>
    </div>
    {showComment && (
      <div>
        <textarea value={commentInput} onChange={handleCommentChange} style={{ height: '35px', width: '95%', overflowY: 'hidden' }} />
        <div className='forum-post-card-submit' onClick={handleSubmitComment}>
          Submit
        </div>
        <div>
          {comments.map((obj) => {
            return (
              <ForumCommentCard uid={obj.uid} text={obj.text} timestamp={formatDateTime(new Date(obj.timestamp.seconds*1000))}/>
            )
          })}
        </div>
      </div>
    )}
  </div>
  );
};

ForumPostCard.propTypes = {
  currentUID: PropTypes.string,
  postID: PropTypes.string,
  didLike: PropTypes.bool,
  imageURL: PropTypes.string,
  subreddit: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.string,
  uid: PropTypes.string,
  upvotes: PropTypes.array,
};

export default ForumPostCard;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ForumPostCard.css';
import Person_Icon from '../../../assets/Person_Icon.png';
import { auth, firestore } from '../../../firebase';
import { doc, getDoc, getDocs, updateDoc, arrayUnion, arrayRemove, collection, query, where } from 'firebase/firestore';
import LikeButton from '../../../assets/like_post.svg';
import LikeButtonLiked from '../../../assets/like_post_liked.svg';
import CommentButton from '../../../assets/comment_post.svg'

const ForumPostCard = ({ postID, didLike, imageURL, subreddit, title, text, timestamp, uid, upvotes }) => {
  
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [likesCount, setLikesCount] = useState(upvotes.length);
  const [commentsCount, setCommentsCount] = useState(0);
  const [likebuttonsrc, setLikeButtonSrc] = useState(LikeButton);
  const [showComment, setShowComment] = useState(false);
  const [commentInput, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  const commentsArray=[];

  useEffect(() => {
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
                const q = query(commentsRef, where("postId", "==", postID));
                getDocs(q).then((querySnapshot) => {
                    commentsArray.length=0;
                    querySnapshot.forEach((doc) => {
                      // Push each document's data into the array
                      commentsArray.push({ id: doc.id, ...doc.data() });
                    });
                    setCommentsCount(commentsArray.length);
                    //console.log(commentsArray.length)
                    setComments(commentsArray)
                  }).catch((error) => {
                    console.error("Error getting documents: ", error);
                  });
            } catch (error) {
                console.error("Error occured when trying to retrieve posts!");
            }
        }
        getComments()
    }, [uid]);
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
  }
  const addToArray = async (newValue) => {
    const docRef = doc(firestore, 'posts', postID);
    try {
      await updateDoc(docRef, {
        upvotes: arrayUnion(currentUserID)
      });
      setLikesCount(likesCount+1);
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
      setLikesCount(likesCount-1);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const commentHandler = () => {
    setShowComment(!showComment);
  }

  const handleCommentChange = (event) => {
    setInputValue(event.target.value);

    // Automatically adjust height to fit content
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
    event.target.style.width = '95%'
};

  return (
    <div className="forum-postcard">
        <div className="forum-postcard-header">
            <img className="forum-postcard-header-img" src={imageSrc} alt="person_icon"/>
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
            <div className='forum-postcard-body-text '>{text}</div>
            {(imageURL!==undefined && imageURL!=="") && <img className="forum-postcard-body-img" src={imageURL} alt="imageURL"/>}
        </div>
        <div className='forum-postcard-comment'>
            <img className='forum-postcard-like-button' src={likebuttonsrc} alt='like-button' onClick={likeHandler}/>
            <div>Likes {likesCount}</div>
            <img className='forum-postcard-comment-button' src={CommentButton} alt='comment-button' onClick={commentHandler}/>
            <div>Comments {commentsCount}</div>
        </div>
        {showComment && (
                <div>
                    <textarea value={commentInput}onChange={handleCommentChange}style={{ height: '35px', width:'95%',  overflowY: 'hidden' }}/>
                    <div>
                    {
                        comments.map((obj) => {
                            return (
                                <div>{obj.text}</div> 
                            )   
                        })
                    }
                    </div>
                    <div>Post Comment Button</div>
                </div>
        )}
    </div>
  );
};


/*
TODO:把comment的behavior写好
当post comment点击了之后，把目前的value上传发哦firebase里（comments）的collection，然后这个box消失
可以弄出一个submitted的variable
*/

ForumPostCard.propTypes = {
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

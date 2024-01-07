import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ForumPostCard.css';
import Person_Icon from '../../../assets/Person_Icon.png';
import { auth, firestore } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import LikeButton from '../../../assets/like_post.svg';
import LikeButtonLiked from '../../../assets/like_post_liked.svg';
import CommentButton from '../../../assets/comment_post.svg'

const ForumPostCard = ({ didLike, imageURL, subreddit, title, text, timestamp, uid, upvotes }) => {
  
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [likebuttonsrc, setLikeButtonSrc] = useState(LikeButton);

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
  }, [uid]);
  const imageSrc = avatarUrl || Person_Icon;

  const currentUser = auth.currentUser;

  const likeHandler = () => {
    if (likebuttonsrc === LikeButton) {
        setLikeButtonSrc(LikeButtonLiked);
        //TODO remove user uid from upvotes
      } else {
        setLikeButtonSrc(LikeButton);
        //TODO, remove user uid from upvotes
      }
  }

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
        <div>{currentUser.uid}</div>
        <div className='forum-postcard-body-text '>{text}</div>
        {(imageURL!==undefined && imageURL!=="") && <img className="forum-postcard-body-img" src={imageURL} alt="imageURL"/>}
      </div>
      <div className='forum-postcard-comment'>
        <img className='forum-postcard-like-button' src={likebuttonsrc} alt='like-button' onClick={likeHandler}/>
        <div>Like</div>
        <img className='forum-postcard-comment-button' src={CommentButton} alt='comment-button'/>
        <div>Comment</div>
      </div>
    </div>
  );
};

ForumPostCard.propTypes = {
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

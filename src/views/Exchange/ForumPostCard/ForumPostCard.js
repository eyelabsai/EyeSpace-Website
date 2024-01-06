import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ForumPostCard.css';
import Person_Icon from '../../../assets/Person_Icon.png';
import { firestore } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ForumPostCard = ({ didLike, imageURL, subreddit, title, text, timestamp, uid, upvotes }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUserFirstNameAndLastName = async () => {
      try {
        const userRef = doc(firestore, 'users', uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const fullName = `${userData.firstName} ${userData.lastName}`;
          setUsername(fullName);
        } else {
          console.log('No such user!');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserFirstNameAndLastName();
  }, [uid]);

  return (
    <div className="forum-postcard">
      <div className="forum-postcard-header">
        <img className="forum-postcard-header-img" src={Person_Icon} alt="person_icon"/>
        <div className="forum-postcard-header-content">
          <div className="forum-postcard-header-title">
            <div className="forum-postcard-header-username">{username || uid}</div>
            <div className="forum-postcard-header-date">{timestamp}</div>
          </div>
          <div className="forum-postcard-header-subreddit">{subreddit}</div>
        </div>
      </div>
      <div className="forum-postcard-body">
        {text}
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

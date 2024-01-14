import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ForumCommentCard.css';
import { firestore } from '../../../firebase';
import { doc, getDoc} from 'firebase/firestore';
import Person_Icon from '../../../assets/Person_Icon.png';

const ForumCommentCard = ({uid, text, timestamp}) => {
    const [username, setUsername] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
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
        if (uid!==undefined&&uid!=="") {
            getUserProfile();
        }
      }, [uid]);
    const imageSrc = avatarUrl || Person_Icon;
    return (
        <div className='forum-comment-card-container'>
            <br></br>
            <div className='forum-comment-card-header'>
              <img className='forum-comment-card-img' src={imageSrc} alt="person_icon" />
              <div className='forum-comment-card-title'>
                {(uid!==undefined&&uid!=="") && <div>Author: {username}</div>}
                {(uid===undefined||uid==="") && <div>Author: Username Not Found</div>}
                <div className='forum-comment-card-date'>By: {timestamp}</div>
              </div>
            </div>
            <div className='forum-comment-card-content'>{text}</div>
            <br></br>
        </div>
    )
}

ForumCommentCard.prototype = {
    uid: PropTypes.string,
    test: PropTypes.string,
    timestamp: PropTypes.string,
}

export default ForumCommentCard;
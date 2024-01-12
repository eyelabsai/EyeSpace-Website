import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ForumCommentCard.css';
import { firestore } from '../../../firebase';
import { doc, getDoc} from 'firebase/firestore';

const ForumCommentCard = ({uid, text, timestamp}) => {
    const [username, setUsername] = useState('');
    useEffect(() => {
        const getUserProfile = async () => {
          try {
            const userRef = doc(firestore, 'users', uid);
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
              const userData = userDoc.data();
              const fullName = `${userData.firstName} ${userData.lastName}`;
              //const imgurl = userData.avatarUrl;
              setUsername(fullName);
              //setAvatarUrl(imgurl);
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
    return (
        <div>
            <br></br>
            {(uid!==undefined&&uid!=="") && <div>{username}</div>}
            {(uid===undefined||uid==="") && <div>Username Not Found</div>}
            <div>{text}</div>
            <div>{timestamp}</div>
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
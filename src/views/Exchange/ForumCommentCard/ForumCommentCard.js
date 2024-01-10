import React from "react";
import PropTypes from 'prop-types';
import './ForumCommentCard.css'

const ForumCommentCard = ({uid, text, timestamp}) => {
    return (
        <div>
            <br></br>
            {(uid!==undefined&&uid!=="") && <div>{uid}</div>}
            {(uid===undefined||uid==="") && <div>Username Not Found</div>}
            <div>{text}</div>
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
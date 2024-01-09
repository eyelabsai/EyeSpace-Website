import React from "react";
import PropTypes from 'prop-types';
import './ForumCommentCard.css'

const ForumCommentCard = ({author, text, timestamp}) => {
    return (
        <div>
            <br></br>
            <div>{author}</div>
            <div>{text}</div>
            <br></br>
        </div>
    )
}

ForumCommentCard.prototype = {
    author: PropTypes.string,
    test: PropTypes.string,
    timestamp: PropTypes.string,
}

export default ForumCommentCard;
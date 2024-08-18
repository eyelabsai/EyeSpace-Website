import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { firestore } from '../../firebase';
import ForumCommentCard from '../Exchange/ForumCommentCard/ForumCommentCard';
import SideNav from '../../components/Nav/SideNav';
import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard'; // Import ForumPostCard
import './ForumPostDetails.css'; // Ensure this is styled similarly to your SearchResults component
import {Link} from 'react-router-dom';

const ForumPostDetails = () => {
    const { postID } = useParams(); // Retrieve postID from URL
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getPostDetails = async () => {
            const postRef = doc(firestore, 'posts', postID);
            const postSnapshot = await getDoc(postRef);
            if (postSnapshot.exists()) {
                setPost(postSnapshot.data());
            }
        };

        const getComments = async () => {
            const commentsRef = collection(firestore, 'comments');
            const q = query(commentsRef, where('postId', '==', postID), orderBy('timestamp', 'desc'));
            const querySnapshot = await getDocs(q);
            const commentsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setComments(commentsArray);
        };

        getPostDetails();
        getComments();
    }, [postID]);

    if (!post) {
        return <div>Loading post...</div>;
    }

    return (
        <div className="forum-post-details">
            <SideNav />

            <div className="forum-post-details-container">
                {/* Use ForumPostCard for post details */}
                <ForumPostCard
                    postID={postID}
                    imageURL={post.imageURL}
                    subreddit={post.subreddit}
                    title={post.title}
                    text={post.text}
                    timestamp={new Date(post.timestamp.seconds * 1000).toLocaleString()}
                    uid={post.uid}
                    upvotes={post.upvotes}
                />

            </div>
            <Link to='/RefracteX'><button>Go back</button></Link>
        </div>
    );
};

export default ForumPostDetails;

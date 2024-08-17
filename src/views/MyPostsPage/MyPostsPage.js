import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { auth, firestore } from '../../firebase';
import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard';
import './MyPostsPage.css'
const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const currentUID = auth.currentUser?.uid;
    useEffect(() => {
        const fetchMyPosts = async () => {
            if (currentUID) {
            try {
                const postsRef = collection(firestore, 'posts');
                const q = query(postsRef, where('uid', '==', currentUID));
                const querySnapshot = await getDocs(q);
                
                const postsArray = [];
                querySnapshot.forEach((doc) => {
                const postData = doc.data();
                postData.timestamp = postData.timestamp.toDate(); // Convert Firestore Timestamp to JS Date
                postsArray.push({ id: doc.id, ...postData });
                });
                setMyPosts(postsArray);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            }
        };
        fetchMyPosts();
    }, [currentUID]);

    if (myPosts.length === 0) {
        return <div>No posts found</div>;
    }
return (
    <div className='my-posts-container'>
        <div className='user-posts-container'>
            <h2>My Posts</h2>
            <div className='user-posts'>
                {myPosts.map((post) => (
                        <ForumPostCard
                        key={post.id}
                        currentUID={currentUID}
                        postID={post.id}
                        didLike={post.didLike}
                        imageURL={post.imageURL}
                        subreddit={post.subreddit}
                        title={post.title}
                        text={post.text}
                        timestamp={post.timestamp.toLocaleString()} // Convert to readable string
                        uid={post.uid}
                        upvotes={post.upvotes || []}
                        />
                ))}
            </div>
            
        </div>
    </div>
    );
};

export default MyPosts;
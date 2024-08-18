import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import ForumPostCard from "../Exchange/ForumPostCard/ForumPostCard";
import SideNav from "../../components/Nav/SideNav";
import './SubReddits.css'
// import Search from "../../components/Search/Search";
import {Link} from 'react-router-dom';
const SubReddit = () => {
    const { subreddit } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        try {
        const postsRef = collection(firestore, 'posts');
        const subredditQuery = query(postsRef, where('subreddit', '==', `i/${subreddit}`));
        const querySnapshot = await getDocs(subredditQuery);

        const postsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp ? doc.data().timestamp.toDate().toLocaleString() : null // Format timestamp
        }));

        setPosts(postsData);
        } catch (error) {
        console.error("Error fetching posts: ", error);
        setError("Failed to fetch posts. Please try again.");
        } finally {
        setLoading(false);
        }
    };

    fetchPosts();
    }, [subreddit]);

    return (
        <div className="subreddit-page">
            <SideNav />

            <div className="subreddit-content">
                {/* <Search /> */}
                <div>
                    <h1 className='subreddit-title'>i/{subreddit}</h1>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {posts.length === 0 && !loading && <p>No posts found for this subreddit.</p>}
                <div className="posts-list">
                    {posts.map(post => (
                        <ForumPostCard
                        key={post.id}
                        postID={post.id}
                        imageURL={post.imageURL}
                        subreddit={post.subreddit}
                        title={post.title}
                        text={post.text}
                        timestamp={post.timestamp} // Now it's a formatted string
                        uid={post.uid}
                        upvotes={post.upvotes}
                        />
                    ))}
                </div>

                <Link to='/RefracteX'><button>Go back</button></Link>
            </div>
        </div>
    );
};

export default SubReddit;

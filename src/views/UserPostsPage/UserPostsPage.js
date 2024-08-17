// // UserPostsPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
// import { firestore } from '../../firebase';
// import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard';
// import './UserPostsPage.css';
// import { Link } from 'react-router-dom';

// const UserPostsPage = () => {
//     const { uid } = useParams(); // Get user ID from the URL
//     const [userPosts, setUserPosts] = useState([]);

//     useEffect(() => {
//         const fetchUserPosts = async () => {
//             try {
//                 const postsRef = collection(firestore, 'posts');
//                 const q = query(postsRef, where('uid', '==', uid), orderBy('timestamp', 'desc'));
//                 const querySnapshot = await getDocs(q);
                
//                 const postsArray = [];
//                 querySnapshot.forEach((doc) => {
//                     const postData = doc.data();
//                     postData.timestamp = postData.timestamp.toDate(); // Convert Firestore Timestamp to JS Date
//                     postsArray.push({ id: doc.id, ...postData });
//                 });
//                 setUserPosts(postsArray);
//             } catch (error) {
//                 console.error('Error fetching user posts:', error);
//             }
//         };

//         fetchUserPosts();
//     }, [uid]);

//     if (userPosts.length === 0) {
//         return <div>No posts found for this user</div>;
//     }

//     return (
//         <div className='user-posts-container'>
//             <h2>User's Posts</h2>
//             <div className='user-posts'>
//                 {userPosts.map((post) => (
//                     <ForumPostCard
//                         key={post.id}
//                         currentUID={uid}
//                         postID={post.id}
//                         didLike={post.didLike}
//                         imageURL={post.imageURL}
//                         subreddit={post.subreddit}
//                         title={post.title}
//                         text={post.text}
//                         timestamp={post.timestamp.toLocaleString()} // Convert to readable string
//                         uid={post.uid}
//                         upvotes={post.upvotes || []}
//                     />
//                 ))}
//             </div>
//             <Link to='/Exchange'><button>Go back</button></Link>
//         </div>
//     );
// };

// export default UserPostsPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard';
import './UserPostsPage.css';
import { Link } from 'react-router-dom';

const UserPostsPage = () => {
    const { uid } = useParams(); // Get user ID from the URL
    const [userPosts, setUserPosts] = useState([]);
    const [username, setUsername] = useState(''); // State to store the username

    // Fetch user data (username)
    useEffect(() => {
        const fetchUserName = async () => {
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

        fetchUserName();
    }, [uid]);

    // Fetch user posts
    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const postsRef = collection(firestore, 'posts');
                const q = query(postsRef, where('uid', '==', uid), orderBy('timestamp', 'desc'));
                const querySnapshot = await getDocs(q);
                
                const postsArray = [];
                querySnapshot.forEach((doc) => {
                    const postData = doc.data();
                    postData.timestamp = postData.timestamp.toDate(); // Convert Firestore Timestamp to JS Date
                    postsArray.push({ id: doc.id, ...postData });
                });
                setUserPosts(postsArray);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        fetchUserPosts();
    }, [uid]);

    if (userPosts.length === 0) {
        return <div>No posts found for this user</div>;
    }

    return (
        <div className='user-posts-container'>
            <h2>{username ? `${username}'s Posts` : `User ${uid}'s Posts`}</h2>
            <div className='user-posts'>
                {userPosts.map((post) => (
                    <ForumPostCard
                        key={post.id}
                        currentUID={uid}
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
            <Link to='/Exchange'><button>Go back</button></Link>
        </div>
    );
};

export default UserPostsPage;

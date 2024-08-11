
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { firestore } from '../../firebase'; // Adjust the import based on your setup
// import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard'; // Adjust the import based on your setup
// import SideNav from '../../components/Nav/SideNav'; // Import SideNav component
// import './SearchResults.css'
// import Search from '../../components/Search/Search';
// const formatTimestamp = (timestamp) => {
//   if (timestamp && timestamp.seconds) {
//     const date = new Date(timestamp.seconds * 1000);
//     return date.toLocaleDateString(); // Or any other format you prefer
//   }
//   return '';
// };

// const SearchResults = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const queryParam = searchParams.get('q') || '';

//     const fetchPosts = async () => {
//       setLoading(true);
//       try {
//         const postsRef = collection(firestore, 'posts');
//         const q = query(
//           postsRef,
//           where('title', '>=', queryParam),
//           where('title', '<=', queryParam + '\uf8ff') // This handles case insensitivity
//         );
//         const querySnapshot = await getDocs(q);
//         const fetchedPosts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//           timestamp: formatTimestamp(doc.data().timestamp) // Ensure timestamp is formatted
//         }));
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.error("Error fetching posts: ", error);
//         setError('Error fetching search results. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [location.search]);

//     return (
//     <div className="search-results">
//       <SideNav />
//       <div className="results-content">
//         <Search />
//         <h1>Search Results:</h1>
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         {!loading && posts.length === 0 && <p>No results found".</p>}
//         <div className='search-posts'>
//           {!loading && posts.map(post => (
//             <ForumPostCard
//               key={post.id}
//               postID={post.id}
//               imageURL={post.imageURL}
//               subreddit={post.subreddit}
//               title={post.title}
//               text={post.text}
//               timestamp={post.timestamp} // Ensure timestamp is correctly formatted
//               uid={post.uid}
//               upvotes={post.upvotes}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchResults;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase'; // Adjust the import based on your setup
import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard'; // Adjust the import based on your setup
import SideNav from '../../components/Nav/SideNav'; // Import SideNav component
import './SearchResults.css';
import Search from '../../components/Search/Search';

const formatTimestamp = (timestamp) => {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString(); // Or any other format you prefer
  }
  return '';
};

const SearchResults = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('q') || '';

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postsRef = collection(firestore, 'posts');

        // Query to match title or uid
        const titleQuery = query(
          postsRef,
          where('title', '>=', queryParam),
          where('title', '<=', queryParam + '\uf8ff')
        );

        const uidQuery = query(
          postsRef,
          where('uid', '==', queryParam)
        );

        const [titleSnapshot, uidSnapshot] = await Promise.all([
          getDocs(titleQuery),
          getDocs(uidQuery)
        ]);

        // Process results for title and uid queries
        const titleResults = titleSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: formatTimestamp(doc.data().timestamp)
        }));

        const uidResults = uidSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: formatTimestamp(doc.data().timestamp)
        }));

        // Combine and deduplicate results
        const combinedResults = [
          ...titleResults,
          ...uidResults
        ].reduce((acc, post) => {
          if (!acc.some(item => item.id === post.id)) {
            acc.push(post);
          }
          return acc;
        }, []);

        setPosts(combinedResults);
      } catch (error) {
        console.error("Error fetching posts: ", error);
        setError('Error fetching search results. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [location.search]);

  return (
    <div className="search-results">
      <SideNav />
      <div className="results-content">
        <Search />
        <h1>Search Results:</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && posts.length === 0 && <p>No results found for "{new URLSearchParams(location.search).get('q')}".</p>}
        <div className='search-posts'>
          {!loading && posts.map(post => (
            <ForumPostCard
              key={post.id}
              postID={post.id}
              imageURL={post.imageURL}
              subreddit={post.subreddit}
              title={post.title}
              text={post.text}
              timestamp={post.timestamp} // Ensure timestamp is correctly formatted
              uid={post.uid}
              upvotes={post.upvotes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

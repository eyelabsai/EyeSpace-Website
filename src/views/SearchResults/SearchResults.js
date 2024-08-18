import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase'; // Adjust the import based on your setup
import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard'; // Adjust the import based on your setup
import SideNav from '../../components/Nav/SideNav'; // Import SideNav component
import './SearchResults.css';
import Search from '../../components/Search/Search';
import { Link } from 'react-router-dom';

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
    const queryParam = searchParams.get('q')?.toLowerCase() || ''; // Convert to lowercase for case-insensitive search

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postsRef = collection(firestore, 'posts');
        const snapshot = await getDocs(postsRef);

        // Process the results
        const allPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: formatTimestamp(doc.data().timestamp)
        }));

        // Filter posts based on the search term
        const filteredPosts = allPosts.filter(post => {
          const titleMatch = post.titleWords?.some(word => word.includes(queryParam));
          const textMatch = post.textWords?.some(word => word.includes(queryParam));
          return titleMatch || textMatch;
        });

        setPosts(filteredPosts);
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
        <div className='search-results-search'>
          <Search />
        </div>
        {/* <h1>Search Results:</h1> */}
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

        <Link to='/RefracteX'><button>Go back</button></Link>
      </div>
    </div>
  );
};

export default SearchResults;

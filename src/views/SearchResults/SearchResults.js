// SearchResults.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { firestore } from '../../firebase'; // Adjust the path according to your project structure
import { collection, query, where, getDocs } from 'firebase/firestore';
import ForumPostCard from '../Exchange/ForumPostCard/ForumPostCard'; // Adjust the path according to your project structure
import './SearchResults.css'
const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return;

      try {
        const postsRef = collection(firestore, 'posts');

        // Query by title
        const titleQuery = query(postsRef, where('title', '==', searchQuery));
        const titleSnapshot = await getDocs(titleQuery);
        const titleResults = titleSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Query by uid
        const uidQuery = query(postsRef, where('uid', '==', searchQuery));
        const uidSnapshot = await getDocs(uidQuery);
        const uidResults = uidSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Combine results
        const combinedResults = [...titleResults, ...uidResults];
        setSearchResults(combinedResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="search-results">
      {searchResults.length === 0 ? (
        <p>No results found for "{searchQuery}".</p>
      ) : (
        searchResults.map((post) => (
          <ForumPostCard
            key={post.id}
            postID={post.id}
            imageURL={post.imageURL}
            subreddit={post.subreddit}
            title={post.title}
            text={post.text}
            timestamp={post.timestamp}
            uid={post.uid}
            upvotes={post.upvotes}
          />
        ))
      )}
    </div>
  );
};

export default SearchResults;


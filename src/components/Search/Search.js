// import React from 'react';
// import './Search.css';
// import { FaSearch } from 'react-icons/fa'; // Using react-icons for icons

// function Search() {
//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="searchInput"
//         placeholder="Search Exchange Forum"
//       />
//       <FaSearch className="searchIcon" />
//     </div>
//   );
// }

// export default Search;


// Search.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchInput.trim() === '') {
      return; // Exit if the search input is empty
    }

    // Navigate to the search results page with the search input as a query parameter
    navigate(`/search?q=${encodeURIComponent(searchInput)}`);
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search by title or user ID"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

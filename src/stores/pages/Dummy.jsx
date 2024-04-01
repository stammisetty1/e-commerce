import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons/fa

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Initial selected category

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search query and selected category to the parent component
    onSearch(query, selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: '800px', margin: 'auto', border: '2px solid #007bff', borderRadius: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px 0 0 5px' }}>
        <select value={selectedCategory} onChange={handleCategoryChange} style={{ padding: '10px', border: 'none', background: 'transparent', outline: 'none', color: '#333' }}>
          <option value="All">All Departments</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <input
        type="text"
        placeholder="Search Amazon..."
        value={query}
        onChange={handleChange}
        style={{
          flex: '1',
          padding: '10px',
          borderRadius: '0',
          border: 'none',
          outline: 'none',
        }}
      />
      <button type="submit" style={{ backgroundColor: '#007bff', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '0 5px 5px 0' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaSearch style={{ color: '#fff', fontSize: '20px' }} />
        </div>
      </button>
    </form>
  );
};

export default SearchBar;

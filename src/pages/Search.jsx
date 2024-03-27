/**
 * Search Component
 * 
 * This component provides a search functionality to search for GIFs using the Giphy API.
 * It consists of a search input field, a submit button, and displays the search results.
 * 
 * Members:
 * - searchInput: Holds the value of the search input field.
 * - error: Holds any error message encountered during API requests.
 * - results: Holds the array of search results fetched from the Giphy API.
 * - page: Tracks the current page number for pagination of search results.
 * 
 * Methods:
 * - handleInputChange: Updates the searchInput state based on user input.
 * - fetchData: Fetches search results from the Giphy API based on the search query and current page.
 * - handlePrevPage: Decrements the page number to navigate to the previous page of search results.
 * - handleNextPage: Increments the page number to navigate to the next page of search results.
 * - handleSubmit: Handles form submission to initiate search query and fetch data.
 * 
 * Parameters: None
 */
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios'; // Import axios for API requests
import { Link } from 'react-router-dom';

const giphyBaseUrl = 'https://api.giphy.com/v1';
const giphyApiKey = 'nnjm7fi8zJzz6QpRBnG4hBvOvoVpXREm';

const giphyApi = axios.create({
  baseURL: giphyBaseUrl,
});

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever the page state changes

  /**
   * Updates the searchInput state based on user input.
   * @param {Object} e - The event object containing input field value.
   */
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setError('');
  };

  /**
   * Fetches search results from the Giphy API based on the search query and current page.
   */
  const fetchData = async () => {
    try {
      const response = await giphyApi.get(`/gifs/search?api_key=${giphyApiKey}&q=${searchInput}&offset=${(page - 1) * 20}`);
      setResults(response.data.data);
    } catch (error) {
      console.error('Error searching for GIFs:', error);
      setError('Failed to fetch GIFs. Please try again later.');
    }
  };

  /**
   * Decrements the page number to navigate to the previous page of search results.
   */
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  /**
   * Increments the page number to navigate to the next page of search results.
   */
  const handleNextPage = () => {
    setPage(page + 1);
  };

  /**
   * Handles form submission to initiate search query and fetch data.
   * @param {Object} e - The event object representing form submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (!searchInput.trim()) {
      setError('Please enter a search term.');
      return;
    }
    fetchData(); // Fetch data manually
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="container">
          <input
            className="search-input"
            type="text"
            placeholder="Search for GIFs..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button className="search-icon" type="submit"><FaSearch /></button>
        </div>
      </form>

      {error && <p>{error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', margin:'2rem'}}>
        {results.map((gif) => (
          <div key={gif.id}>
            <a href={gif.url} target="_blank" rel="noopener noreferrer">
              <img
                src={gif.images.fixed_height.url}
                alt={gif.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
              />
            </a>
            <div style={{ marginTop: '0.5rem' }}>
              <p><strong>Title:</strong> {gif.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            marginRight: '1rem',
            backgroundColor: '#f7f7f7',
            color: '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Previous Page
        </button>
        <span style={{ fontSize: '1.2rem', margin: '0 1rem' }}>Page {page}</span>
        <button
          onClick={handleNextPage}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#f7f7f7',
            color: '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Search;

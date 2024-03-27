/**
 * ChartPage Component
 * 
 * This component displays trending GIFs fetched from the Giphy API.
 * 
 * Members:
 * - error: Holds any error message encountered during API requests.
 * - trendingGifs: Holds the array of trending GIFs fetched from the Giphy API.
 * 
 * Methods:
 * - fetchTrendingGifs: Fetches trending GIFs from the Giphy API.
 * 
 * Parameters: None
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const giphyBaseUrl = 'https://api.giphy.com/v1';
const giphyApiKey = 'nnjm7fi8zJzz6QpRBnG4hBvOvoVpXREm';

const giphyApi = axios.create({
  baseURL: giphyBaseUrl,
});

const ChartPage = () => {
  const [error, setError] = useState('');
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  /**
   * Fetches trending GIFs from the Giphy API.
   */
  const fetchTrendingGifs = async () => {
    try {
      const response = await giphyApi.get(`/gifs/trending?api_key=${giphyApiKey}&limit=20`);
      setTrendingGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching trending GIFs:', error);
      setError('Failed to fetch trending GIFs. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Trending GIFs</h2>
      {error && <p>{error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', margin: '2rem' }}>
        {trendingGifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChartPage;

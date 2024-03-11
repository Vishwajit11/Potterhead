import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesResponse = await axios.get('https://api.potterdb.com/v1/movies');
        const moviesData = moviesResponse.data.data;
        setMovies(moviesData.slice(0, 8)); // Get the first 8 entries
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-6xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-8 rounded-3xl">
      <h1 className="text-5xl font-bold mb-8 justify-center text-center">Harry Potter Movies</h1>
      {movies.map(movie => (
        <div key={movie.id} className="flex mb-8">
          <div className="mr-8">
            {movie.attributes.poster && <img src={movie.attributes.poster} alt="Movie Poster" className="w-96 h-auto rounded-lg shadow-lg" />}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">{movie.attributes.title}</h2>
            <p className="text-lg"><strong>Box Office:</strong> {movie.attributes.box_office}</p>
            <p className="text-lg"><strong>Budget:</strong> {movie.attributes.budget}</p>
            <p className="text-lg"><strong>Directors:</strong> {movie.attributes.directors.join(', ')}</p>
            <p className="text-lg"><strong>Producers:</strong> {movie.attributes.producers.join(', ')}</p>
            <p className="text-lg"><strong>Rating:</strong> {movie.attributes.rating}</p>
            <p className="text-lg"><strong>Release Date:</strong> {movie.attributes.release_date}</p>
            <p className="text-lg"><strong>Running Time:</strong> {movie.attributes.running_time}</p>
            {movie.attributes.trailer && <p className="text-lg"><strong>Trailer:</strong> <a href={movie.attributes.trailer} className="text-blue-300 hover:text-blue-200">Watch Trailer</a></p>} 
          </div> 
        </div>
      ))}
    </div>
  );
};

export default Movies;

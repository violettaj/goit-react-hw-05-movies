import React from 'react';
import { Searchbar } from './Searchbar/Searchbar.js';
import { useState, useEffect } from 'react';
import { searchMovies } from 'components/Api/Api';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'pages/Home/MoviesList/MoviesList.js';
import { Loader } from 'pages/Home/Loader/Loader.js';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    const getMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await searchMovies(query);

        setMovies(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByQuery();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <section>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && (
        <p>Sorry, an error occurred! Error: {error} Please try again later!</p>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
};

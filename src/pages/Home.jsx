import { getTrending } from 'components/Api/Api';
import { MoviesList } from '../components/MoviesList';
import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const handleMovies = async () => {
      setIsLoading(true);
      try {
        const fetchMovies = await getTrending();
        setMovies(fetchMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} /> {isLoading && <Loader />}
      {error && <p>"An error occurred. Please try again"</p>}
    </div>
  );
};
export default Home;

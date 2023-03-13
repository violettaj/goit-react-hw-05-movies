import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/Api/Api';
import { Loader } from 'pages/Home/Loader/Loader';
import { useState, useEffect } from 'react';
import { Cast } from '../More/Cast';
import { Review } from '../More/Review';

export const MoviesDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const handleMovies = async () => {
      setIsLoading(true);
      try {
        const fetchMovie = await getMovieDetails(id);
        setDetails(fetchMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovies();
  }, [id]);
  return (
    <div>
      <p>Go back</p>
      <img
        src={`//image.tmdb.org/t/p/w500/${details.poster_path}`}
        width="30%"
        height="30%"
        alt={`Poster of ${details.title}`}
      ></img>
      <h2>{details.title}</h2>
      <p>User Score:{details.vote_average} %</p>
      <h3>Overview</h3>
      <p>{details.overview}</p>
      <h4>Genres</h4>
      <p>
        {details.genres
          ? details.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))
          : null}
      </p>
      {isLoading && <Loader />}
      {error && <p>"An error occurred. Please try again" </p>}
      <p>Additional information</p>
      <ul>
        <li>
          Cast
          <Cast />
        </li>
        <li>
          Review
          <Review />
        </li>
      </ul>
    </div>
  );
};

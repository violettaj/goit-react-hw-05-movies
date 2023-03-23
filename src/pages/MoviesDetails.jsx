import { getMovieDetails } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (movie) {
    const { poster_path, title, overview, vote_average, genres } = movie;
    const genresList = genres.map(genre => genre.name + ' ');

    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`${title}`}
        />
        <div>
          <h2>{title}</h2>
          <h3>Rating: {Math.round(vote_average * 10)}%</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres: {genresList}</h3>

          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>

          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    );
  }
};
export default MovieDetails;

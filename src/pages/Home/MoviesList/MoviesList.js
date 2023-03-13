import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to="/movies/movieId">{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

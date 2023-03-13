import { Home } from '../pages/Home/Home.jsx';
import { Movies } from '../pages/Movies/Movies.jsx';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MoviesDetails } from 'pages/Movies/About/MoviesDetails.js';
import { Cast } from 'pages/Movies/More/Cast.js';
import { Review } from 'pages/Movies/More/Review.js';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};

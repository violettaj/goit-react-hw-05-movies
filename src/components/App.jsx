import { Home } from '../pages/Home/Home.jsx'
import { Movies } from '../pages/Movies/Movies.jsx'
import { Routes, Route} from "react-router-dom";
import { NavLink } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

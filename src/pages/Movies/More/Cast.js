import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Api/Api';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handleMovies = async () => {
      setIsLoading(true);
      try {
        const fetchCast = await getMovieCredits(id);
        setCast(fetchCast);
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
      <ul>
        {' '}
        {cast.length > 0
          ? cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={`//image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={`Picture of ${actor.name}`}
                  width="25%"
                  height="25%"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))
          : "We don't have any informations about the cast"}
      </ul>
    </div>
  );
};

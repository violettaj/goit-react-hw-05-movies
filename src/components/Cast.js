import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Api/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {credits && credits.length > 0 ? (
        <ul>
          {credits.map(({ id, original_name, character, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={original_name}
                  height="100"
                />
                <div>
                  <h1>{original_name}</h1>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any information about casts for this movie.</p>
      )}
    </>
  );
};
export default Cast;

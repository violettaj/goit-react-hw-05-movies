import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/Api/Api';

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h1>Author: {author}</h1>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

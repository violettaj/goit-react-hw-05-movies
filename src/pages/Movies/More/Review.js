import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/Api/Api';

export const Review = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handleMovies = async () => {
      setIsLoading(true);
      try {
        const fetchReviews = await getReviews(id);
        setReviews(fetchReviews);
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
        {reviews.length > 0
          ? reviews.map(review => (
              <li key={review.id}>
                <b>Author: {review.author}</b>
                <p>{review.content}</p>
              </li>
            ))
          : "We don't have any reviews for this movie"}
      </ul>
    </div>
  );
};

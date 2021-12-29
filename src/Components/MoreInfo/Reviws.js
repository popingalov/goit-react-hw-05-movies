import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { takeReviews } from '../../service/Api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);

  useEffect(() => {
    takeReviews(movieId).then(info => setcast(info));
  }, [movieId]);

  return cast?.length === 0 ? (
    <p>We don't have more info.</p>
  ) : (
    <ul>
      {cast.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

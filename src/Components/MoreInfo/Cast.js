import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { takeCredits } from '../../service/Api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);

  useEffect(() => {
    takeCredits(movieId).then(info => setcast(info.cast));
  }, [movieId]);

  return cast?.length === 0 ? (
    <p>We don't have more info.</p>
  ) : (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : 'https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_960_720.jpg'
            }
            alt={name}
          />
          <h3>{name}</h3>
          <h4>Character: {character}</h4>
        </li>
      ))}
    </ul>
  );
}

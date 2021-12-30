import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import { takeMovieForId } from '../service/Api';
import Spiner from '../Components/Spiner/Spiner';

const Cast = lazy(() => import('../Components/MoreInfo/Cast'));
const Reviews = lazy(() => import('../Components/MoreInfo/Reviws'));

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const read = useParams();
  const [movie, setMovie] = useState(null);
  const helpMe = useRef();
  useEffect(() => {
    takeMovieForId(movieId).then(setMovie);
    helpMe.current = location.state;
  }, [movieId]);

  const goBack = () => {
    !helpMe?.current?.state || helpMe.current === null
      ? navigate('/')
      : navigate(helpMe.current.state);
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={goBack}>
            <ImArrowLeft style={{ marginBottom: -2 }} />
            {location?.state?.label ?? 'Go Back'}
          </button>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_960_720.jpg'
              }
              alt={movie.title}
            />

            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name + ' ')}</p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>

              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Spiner />}>
            <Routes>
              <Route path="/cast" element={<Cast />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

import { Link, useLocation } from 'react-router-dom';
/* import foto from './wooden-train-2066492_1920.jpg'; */

export default function FilmList({ array, state }) {
  const location = useLocation();
  if (state) {
    location.state = `${location.pathname}${state}`;
  }

  return (
    <ul>
      {array?.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link
            to={
              location.pathname === '/'
                ? `/movies/${id}`
                : `${location.pathname}/${id}`
            }
            state={{ state: location.state }}
          >
            <img
              alt={title}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_960_720.jpg'
              }
            />
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

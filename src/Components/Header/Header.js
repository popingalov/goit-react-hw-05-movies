import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={s.Header}>
        <nav className={s.Header__navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              !isActive ? s.Header__item : s.Active
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              !isActive ? s.Header__item : s.Active
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <hr />
    </>
  );
}

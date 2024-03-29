import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { takeSearch } from '../service/Api';
import FilmList from 'Components/FilmList/FilmList';
import SearchForm from 'Components/SearchForm/SearchForm';
//
//
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [array, setArray] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.search) {
      return;
    }

    takeSearch(searchParams).then(e => {
      if (e.length < 1) {
        navigate('/');
        alert(`Повашему запросу: ${location.search} совпадений не найдено`);
        return;
      }
      setArray(e);
    });
  }, [location.search, searchParams, navigate]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SearchForm forSearch={setSearchParams} />
      </div>
      <FilmList array={array} state={location.search} />
    </>
  );
};
export default MoviesPage;

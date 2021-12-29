import { useEffect, useState } from 'react';
import { takeTrand } from '../service/Api';
import FilmList from 'Components/FilmList/FilmList';

const HomePage = () => {
  const [start, setStart] = useState([]);

  useEffect(() => {
    takeTrand().then(setStart);
  }, []);
  return (
    <div>
      <FilmList array={start} />
    </div>
  );
};
export default HomePage;

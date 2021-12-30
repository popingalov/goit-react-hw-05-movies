import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Spiner from './Components/Spiner/Spiner';

import './App.css';
const HomePage = lazy(() => import('./page/HomePage'));
const MoviesPage = lazy(() => import('./page/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./page/MovieDetailsPage'));
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

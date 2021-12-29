import axios from 'axios';
const BASE = {
  URL: 'https://api.themoviedb.org/3',
  KEY: '7c9dd50606a07df965d51fc9621e1448',
};

export async function takeTrand() {
  const get = axios
    .get(`${BASE.URL}/trending/movie/day?api_key=${BASE.KEY}`)
    .then(res => res.data.results);
  return get;
}
export async function takeSearch(search) {
  const get = axios
    .get(`${BASE.URL}/search/movie?api_key=${BASE.KEY}&query=${search}`)
    .then(res => res.data.results);

  return get;
}
export async function takeMovieForId(id) {
  const get = axios
    .get(`${BASE.URL}/movie/${id}?api_key=${BASE.KEY}&language=en-US`)
    .then(res => res.data);

  return get;
}
export async function takeCredits(id) {
  const get = axios
    .get(`${BASE.URL}/movie/${id}/credits?api_key=${BASE.KEY}&language=en-US`)
    .then(res => res.data);

  return get;
}
export async function takeReviews(id) {
  const get = axios
    .get(`${BASE.URL}/movie/${id}/reviews?api_key=${BASE.KEY}&language=en-US`)
    .then(res => res.data.results);

  return get;
}

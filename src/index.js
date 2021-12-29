import ReactDOM from 'react-dom';
import App from './App';
import react from 'react';
import 'modern-normalize/modern-normalize.css';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
const root = document.querySelector('#root');

ReactDOM.render(
  <react.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </react.StrictMode>,
  root,
);

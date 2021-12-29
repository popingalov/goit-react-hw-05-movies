import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './SearchForm.module.css';
export default function SearchForm({ forSearch }) {
  const [searchForm, setSearchForm] = useState('');

  const Submit = e => {
    e.preventDefault();
    if (searchForm.trim() === '') {
      alert('Введите текст');
      setSearchForm('');
      return;
    }
    forSearch(searchForm.toLowerCase());
    setSearchForm('');
  };

  return (
    <form className={s.SearchForm} onSubmit={Submit}>
      <button type="submit" className={s.SearchForm_button}>
        <span className={s.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={s.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={searchForm}
        onChange={e => setSearchForm(e.target.value)}
      />
    </form>
  );
}

SearchForm.propTypes = {
  forSearch: PropTypes.func.isRequired,
};

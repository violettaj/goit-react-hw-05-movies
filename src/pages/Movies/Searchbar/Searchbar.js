import React from 'react';
import css from './Searchbar.module.css';
import { VscSearch } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <form className={css.searchbar} onSubmit={handleSubmit}>
      <div className={css.search}>
        <input
          className={css.input}
          name="value"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
        <button
          className={css.icon}
          type="submit"
          disabled={searchQuery.trim() === ''}
        >
          <VscSearch />
        </button>
      </div>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

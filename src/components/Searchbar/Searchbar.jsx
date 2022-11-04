import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from "components/SearchBar/SearchBar.module.css";

export class SearchBar extends Component {
  state = {
    searchField: '',
  };

  onSearchChange = evt => {
    const searchValue = evt.currentTarget.value;
    this.setState({ searchField: searchValue });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { searchField } = this.state;
    this.props.onSubmit(searchField);

    this.resetInput();
  };

  resetInput = () => {
    this.setState({ searchField: '' });
  };

  render() {
    const { searchField } = this.state;

    return (
      <header className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button
            // className={css.SearchFormButton}
            type="submit"
          >
            <span>Search</span>
          </button>

          <input
            onChange={this.onSearchChange}
            className={css.SearchFormInput}
            type="text"
            name={searchField}
            value={searchField}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
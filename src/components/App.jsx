import React from 'react';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';

// import { PixabayAPI } from '../services/PixabayAPI';


export class App extends Component {
  state = {
    searchQuery: '',
  }


  componentDidMount() {
    // console.log(PixabayAPI);
    // PixabayAPI
    // .then(data => console.log(data))
  }

  componentDidUpdate() {}


  onSubmit = (searchField) => {
    // this.setState({ searchQuery: searchField });

    this.setState(({ searchQuery }) => ({ searchQuery: searchField}));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
};


import React from 'react';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { pixabayAPI } from '../services/PixabayAPI';


export class App extends Component {
  state = {
    searchQuery: 'cat',
    images: [],
    isLoader: false,
    error: null,
    status: 'idle',
  }

  async componentDidMount() {
    try {
      const imagesResult = await pixabayAPI(this.state.searchQuery);
      this.setState({ images: imagesResult });
    } catch (error) {
      this.setState({ error });
    } finally {
      // this.setState({ isLoading: false });
  }
}

  // async componentDidUpdate (prevState) {
  //   this.setState({ isLoader: true });
    
  //   if(prevState.searchQuery !== this.state.searchQuery) {
  //     // const imagesResult = await pixabayAPI(this.state.searchQuery);
  //     // this.setState({ images: imagesResult });
  //     return;
  //   }
  // }


  onSubmit = (searchField) => {
    if(!searchField) {
      return;
    }
    this.setState(({ searchQuery }) => ({ searchQuery: searchField}));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.isLoader && <p>Loading...</p>}
        {this.state.searchQuery && <ImageGallery images={this.state.images} />}
      </div>
    );
  }
};
import React from 'react';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { pixabayAPI } from '../services/PixabayAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadButton } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoader: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery } = this.state; 

      this.setState({ isLoader: true, images: [], error: null });

      try {
        const imagesResult = await pixabayAPI(searchQuery);

        this.setState({ images: imagesResult.hits });
        this.setState({ isLoader: false });

        if (imagesResult.hits.length === 0) {
          this.setState({ error: `Unfortunately, nothing was found for your request ${searchQuery}` });
          return;
        }

      } catch (error) {
        console.log(error.message);
      }
    }
  }

  total = async () => {
    try {
      const imagesResult = await pixabayAPI(this.state.searchQuery);
      console.log('total: imagesResult', imagesResult);

      const totalImages = imagesResult.totalHits;
      console.log('total: totalImages', totalImages);

      if (totalImages > 12) {
        return <LoadButton />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  onClickLoad = async () => {
    const imagesResult = await pixabayAPI(this.state.searchQuery);
    let page = 1;
  };

  onSubmit = searchField => {
    if (!searchField) {
      alert('Enter data in the search field');
      return;
    }
    this.setState(({ searchQuery }) => ({ searchQuery: searchField }));
  };

  render() {
    const { searchQuery, isLoader, error, images } = this.state;
    const total = this.total();

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
        {error && <div>{error}</div>}
        {isLoader && <Loader />}
        {searchQuery && <ImageGallery images={images} />}
        {total && <LoadButton onClickLoad={this.onClickLoad}/>}
      </div>
    );
  }
}

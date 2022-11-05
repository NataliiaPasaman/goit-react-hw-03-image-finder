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
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log('hello from componentDidUpdate');
    console.log('prevState.searchQuery ', prevState.searchQuery);
    console.log('this.state.searchQuery', this.state.searchQuery);

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ isLoader: true });
      try {
        const imagesResult = await pixabayAPI(this.state.searchQuery);

        this.setState({ images: imagesResult.hits });
        this.setState({ isLoader: false });
      } catch (error) {
        this.setState({
          error: 'Unfortunately, nothing was found for your request',
        });
      }
    }
  }

  total = async () => {
    try {
      const imagesResult = await pixabayAPI(this.state.searchQuery);
      const totalImages = imagesResult.totalHits;
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
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.isLoader && <Loader />}
        {this.state.searchQuery && <ImageGallery images={this.state.images} />}
        {/* {this.total() && <LoadButton onClickLoad={this.onClickLoad}/>} */}
      </div>
    );
  }
}

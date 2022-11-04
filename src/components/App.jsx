import React from 'react';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import { PixabayAPI } from '../services/PixabayAPI';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30059530-99c96b166b7120acaaa07225e';
const searchParams = new URLSearchParams({
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: 1,
});

// export const PixabayAPI = () => {
    

//   return fetch(`${BASE_URL}?${searchParams}&q=cat`)
//   .then(response => {
//       console.log(response);

//       return response.json();
//   })
//   .catch(error => console.log(error));
// }



export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
  }


  componentDidMount() {
    // this.api();
    // console.log(PixabayAPI);
    // PixabayAPI
    // .then(data => console.log(data))
  }

  componentDidUpdate(prevState) {
    if(prevState !== this.state.searchQuery) {
      // this.api();
      return;
    }

    // this.api();

    // console.log(PixabayAPI);
    // PixabayAPI
    // .then(data => console.log(data))
  }


  api = () => {
    
    return fetch(`${BASE_URL}?${searchParams}&q=${this.state.searchQuery}`)
    .then(response => {
        console.log('response', response);
  
        return response.json();
    })
    .then(data => {
      console.log('data', data.hits);
      const imgArray = data.hits;
      this.setState(({ images: imgArray }))
    return data.hits})
    .catch(error => console.log(error));
  }



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
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
};


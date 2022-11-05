import axios from "axios";

// Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1. */

const BASE_URL = 'https://pixabay.com/api/';

const KEY = '30059530-99c96b166b7120acaaa07225e';

export const pixabayAPI = async searchQuery => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
            key: KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: 1,
            q: searchQuery,
        }
      });
      const images = await response.data;
      return images;
    } catch (error) {
      console.log(error.message);
    }
  };
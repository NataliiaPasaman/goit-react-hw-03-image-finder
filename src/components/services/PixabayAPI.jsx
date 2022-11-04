// /**Інструкція Pixabay API

//  URL-рядок HTTP-запиту.
 
//  https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
 
//  Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1. 
// Нехай у відповіді надходить по 12 об'єктів (per_page). 
// Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1. */

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


export const PixabayAPI = () => {
    

    return fetch(`${BASE_URL}?${searchParams}&q=cat`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// import axios from "axios";




// export class PixabeyImages {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.arrayImages = [];
//     this.totalImages = 0;
//   }

//   async fetchImages() {
//     const searchParams = new URLSearchParams({
//       key: KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: 40,
//       page: this.page,
//     });

//     try {
//       const response = await axios.get(
//         `${BASE_URL}?${searchParams}&q=${this.searchQuery}`
//       );

//     //   this.page += 1;
//       this.totalImages = response.data.totalHits;

//       const images = await response.data.hits;
//       if (images){
//         refs.spinner.classList.add('visually-hidden');
//         return;
//       }

//       return images;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
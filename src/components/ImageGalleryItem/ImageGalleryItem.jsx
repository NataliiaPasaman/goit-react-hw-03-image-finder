

/** Компонент елемента списку із зображенням. Створює DOM-елемент наступної структури.
 * 
 *  У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.
 
//  id - унікальний ідентифікатор
//  webformatURL - посилання на маленьке зображення для списку карток
//  largeImageURL - посилання на велике зображення для модального вікна 

<li class="gallery-item">
  <img src="" alt="" />
</li> */

export const ImageGalleryItem = ({ images }) => {

  return images.map(img => {
    const { id, largeImageURL, tags } = img;
    return (
      <li key={id}>
        <img src={largeImageURL} alt={tags} />
      </li>
    );
  })
};
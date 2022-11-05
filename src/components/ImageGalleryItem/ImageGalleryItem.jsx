

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
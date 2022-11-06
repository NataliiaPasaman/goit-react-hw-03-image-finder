import PropTypes from "prop-types";
import css from "components/ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ images }) => {
  
  return images.map(img => {
    const { id, webformatURL, tags } = img;
    return (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};

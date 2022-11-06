import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "components/ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem images={images} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
}
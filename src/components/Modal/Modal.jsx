import PropTypes from 'prop-types';
import css from "components/Modal/Modal.module.css";

/**Модальне вікно повинно закриватися по 
 * натисканню клавіші ESC або по кліку на оверлеї.
*/

export const Modal = ({ largeImageURL, tag }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tag} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
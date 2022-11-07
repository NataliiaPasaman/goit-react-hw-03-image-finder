import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from "components/Modal/Modal.module.css";

/**Модальне вікно повинно закриватися по 
 * натисканню клавіші ESC або по кліку на оверлеї.
*/

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.onEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscapeClose);
  }

  onEscapeClose = event => {
    console.log('Code', event.code);

    if (event.code === 'Escape') {
      this.props.toogleModal();
    }
  };

  render() {
    const { largeImageURL, tag } = this.props;

    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tag} />
        </div>
      </div>
    );
  }
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
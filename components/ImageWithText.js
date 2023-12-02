import React from 'react';
import PropTypes from 'prop-types';

function ImageWithText({ imageSrc, alt, title }) {
  return (
    <div className={styles.imageWithText}>
      <img src={imageSrc} alt={alt} className={styles.smallRoundImage} />
      <h2 className={styles.mainHomeTitle}>{title}</h2>
    </div>
  );
}

ImageWithText.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageWithText;

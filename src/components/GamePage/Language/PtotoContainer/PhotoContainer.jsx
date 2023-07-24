import React from 'react';
import css from './PhotoContainer.module.css';

import photoStart from 'Image/Gallow.png';
import photoSecond from 'Image/GallowFirst.png';
import photoThird from 'Image/GallowSecond.png';
import photoFourth from 'Image/GallowThird.png';
import photoFinish from 'Image/Finish.png';

function PhotoContainer({ result }) {
  return (
    <div className={css.imageContainer}>
      {result === 0 && (
        <img src={photoStart} alt="First step" className={css.image} />
      )}
      {result === 1 && (
        <img src={photoSecond} alt="Second step" className={css.image} />
      )}
      {result === 2 && (
        <img src={photoThird} alt="Third step" className={css.image} />
      )}
      {result === 3 && (
        <img src={photoFourth} alt="Fourth step" className={css.image} />
      )}
      {result === 4 && (
        <img src={photoFinish} alt="Finish step" className={css.image} />
      )}
    </div>
  );
}

export default PhotoContainer;

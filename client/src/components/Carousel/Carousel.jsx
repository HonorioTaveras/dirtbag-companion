import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import style from './Carousel.css';

export default function ControlledCarousel({ singleRoute }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      pause="hover"
      fade
      touch
    >
      {singleRoute.photos
        && singleRoute.photos.map((photo) => (
          <Carousel.Item>
            <img className={style.carouselSize} src={photo.url} alt="" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

import React from 'react';

import style from './RouteDescription.css';

export default function RouteDescription({ singleRoute }) {
  return (
    <div>
      <h3>Description</h3>
      <div className={style.description}>{singleRoute.description}</div>
    </div>
  );
}

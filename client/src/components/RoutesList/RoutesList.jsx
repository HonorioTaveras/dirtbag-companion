import React, { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';

import style from './RoutesList.css';

export default function RoutesList({ routesList }) {
  return (
    <div className={style.container}>
      {routesList.map((route) => (
        <div>
          <span>
            <Rating
              name="read-only"
              readOnly
              value={route.rating}
              precision={0.25}
              size="small"
            />
          </span>
          <span>{` ${route.route_name} `}</span>
          <span>{route.grade}</span>
        </div>
      ))}
    </div>
  );
}

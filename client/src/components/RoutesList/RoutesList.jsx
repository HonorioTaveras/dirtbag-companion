/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';

import style from './RoutesList.css';

export default function RoutesList({ routesList, handleRouteNameClick }) {
  return (
    <div className={style.container}>
      {routesList.map((route, i) => (
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
          <span
            onClick={(e) => handleRouteNameClick(e)}
            id={route.route_id}
          >
            {` ${route.route_name} `}
          </span>
          <span>{`${route.route_type[0]} `}</span>
          <span>{route.grade}</span>
        </div>
      ))}
    </div>
  );
}

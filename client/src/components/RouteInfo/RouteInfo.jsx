import React, { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';

import style from './RouteInfo.css';

export default function RouteInfo({ singleRoute }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (singleRoute.rating) {
      setRating(singleRoute.rating);
    }
  }, [singleRoute.rating]);

  const routeLoc = singleRoute.location;

  const handleRouteLocation = () => {
    if (routeLoc) {
      if (routeLoc.length === 5) {
        return (
          <div>{`${routeLoc[0]} > ${routeLoc[1]} > ${routeLoc[2]} > ${routeLoc[3]} > ${routeLoc[4]}`}</div>
        );
      }
      return (
        <div>{`${routeLoc[0]} > ${routeLoc[1]} > ${routeLoc[2]} > ${routeLoc[3]}`}</div>
      );
    }
  };

  return (
    <div>
      <h1>{`${singleRoute.route_name} `}</h1>
      <div>
        <span className={style.grade}>{`${singleRoute.grade} `}</span>
        <span>
          <Rating
            name="read-only"
            readOnly
            value={rating}
            precision={0.25}
            size="large"
          />
        </span>
      </div>
      <div className={style.bottomData}>
        <p>{`type: ${singleRoute.route_type}`}</p>
        <p>{`pitches: ${singleRoute.pitches}`}</p>
        <div>{handleRouteLocation()}</div>
      </div>
    </div>
  );
}

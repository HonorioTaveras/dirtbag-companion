import React, { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';

export default function RouteInfo({ singleRoute }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (singleRoute.rating) {
      setRating(singleRoute.rating);
    }
  }, [singleRoute.rating]);

  return (
    <div>
      <div>
        {/* FIRST ROW */}
        <span>{singleRoute.route_name + ' '}</span>
        <span>{singleRoute.route_type}</span>
      </div>
      {/* SECOND ROw */}
      <div>
        <span>{singleRoute.grade + ' '}</span>
        <span>
          <Rating name="read-only" readOnly value={rating} precision={0.25} />
        </span>
      </div>
    </div>
  );
}

import React from 'react';

export default function RouteDescription({ singleRoute }) {
  return (
    <div>
      <h3>Description</h3>
      <div>{singleRoute.description}</div>
    </div>
  );
}

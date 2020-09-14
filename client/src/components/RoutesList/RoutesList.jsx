import React from 'react';
import style from './RoutesList.css';

export default function RoutesList({ routesList }) {
  return (
    <div className={style.container}>
      {routesList.map((route, i) => (
        <div>
          {route.route_name} {route.grade}
        </div>
      ))}
    </div>
  );
}

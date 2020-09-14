import React from 'react';
import style from './RoutesList.css';

export default function RoutesList({ routesList }) {
  return (
    <div className={style.container}>
      {routesList.map((route) => (
        <div>
          <span>{route.route_name + ' '}</span>
          <span>{route.grade}</span>
        </div>
      ))}
    </div>
  );
}

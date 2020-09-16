/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import style from './App.css';
import NavBar from '../NavBar/NavBar.jsx';
import RoutesList from '../RoutesList/RoutesList.jsx';
import RouteInfo from '../RouteInfo/RouteInfo.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import RouteDescription from '../RouteDescription/RouteDescription.jsx';

export default function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [routesList, setRoutesList] = useState([]);
  const [routeId, setRouteId] = useState(2);
  const [singleRoute, setSingleRoute] = useState({});

  useEffect(() => {
    Axios.get('/routes').then(
      (res) => {
        console.log('routesList: ', res.data);
        setIsLoaded(true);
        setRoutesList(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      },
    );
  }, []);

  useEffect(() => {
    Axios.get(`routes/${routeId}`).then(
      (res) => {
        console.log('single route: ', res.data);
        setIsLoaded(true);
        setSingleRoute(res.data[0]);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      },
    );
  }, [routeId]);

  const handleRouteNameClick = (e) => {
    const id = e.target.getAttribute('id');
    setRouteId(id);
  };

  if (err) {
    return <div>Error: {err.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className={style.container}>
        <NavBar />
        <Row>
          <Col xs={4}>
            <RoutesList
              routesList={routesList}
              handleRouteNameClick={handleRouteNameClick}
            />
          </Col>
          <Col>
            <Row>
              <RouteInfo singleRoute={singleRoute} />
            </Row>
            <Row>
              <Carousel singleRoute={singleRoute} />
            </Row>
            <Row>
              <RouteDescription singleRoute={singleRoute} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import RoutesList from '../RoutesList/RoutesList.jsx';

// COMPONENTS
import style from './App.css';

export default function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [routesList, setRoutesList] = useState([]);

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

  if (err) {
    return <div>Error: {err.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container fluid className={style.container}>
        <NavBar />
        <Row>
          <Col>
            <RoutesList routesList={routesList} />
          </Col>
          <Col>
            <Row>name and route type </Row>
            <Row>grades and ratings</Row>
            <Row>carousel</Row>
            <Row>description</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

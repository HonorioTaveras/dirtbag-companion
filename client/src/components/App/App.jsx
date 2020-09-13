/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';

// COMPONENTS
import style from './App.css';

export default function App() {
  return (
    <Container fluid className={style.container}>
      <NavBar />
      <Row>
        <Col>list</Col>
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

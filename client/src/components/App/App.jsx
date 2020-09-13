import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import style from './App.css';

export default function App() {
  return (
    <Container fluid className={style.container}>
      <Row>navbar</Row>
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

const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/dummyData');
const Routes = require('../database/models/routes.js');

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/routes/', (req, res) => {
  // res.status(200).json(db.routeList());
  Routes.find({})
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

app.get('/routes/:route_id', (req, res) => {
  // res.status(200).json(db.route());
  Routes.find({ route_id: req.params.route_id })
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

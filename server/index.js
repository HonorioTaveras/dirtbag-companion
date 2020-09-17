const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Routes = require('../database/models/routes.js');

const PORT = process.env.PORT || 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/routes/', (req, res) => {
  Routes.find({})
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

app.get('/routes/:route_id', (req, res) => {
  Routes.find({ route_id: req.params.route_id })
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

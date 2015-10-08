import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import MockedCreactives from './helpers/mocked-creatives';

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/', (req, res) => {
  res.json(MockedCreactives);
});

export default app;
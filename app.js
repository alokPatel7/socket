const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: ['https://work-point.vercel.app', 'http://localhost:4200'],
    credentials: true,
  })
);

module.exports = app;
